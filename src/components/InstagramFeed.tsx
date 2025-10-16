'use client';

import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import Image from 'next/image';
import { instagramPosts } from '@/data/instagram';
import { useTheme } from '@/contexts/ThemeContext';

export default function InstagramFeed() {
  const { theme } = useTheme();
  const [selectedPost, setSelectedPost] = useState<string | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    // Load Instagram's embed script
    const script = document.createElement('script');
    script.src = '//www.instagram.com/embed.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Cleanup script on unmount
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  useEffect(() => {
    // Process embeds when a post is selected
    if (selectedPost && typeof window !== 'undefined' && window.instgrm && window.instgrm.Embeds && typeof window.instgrm.Embeds.process === 'function') {
      setTimeout(() => {
        window.instgrm!.Embeds.process();
      }, 100);
    }
  }, [selectedPost]);

  const openModal = (url: string) => {
    setSelectedPost(url);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedPost(null);
    document.body.style.overflow = 'unset';
  };

  if (instagramPosts.length === 0) {
    return (
      <div className="text-center py-8">
        <p className="text-gray-400">No Instagram posts to display yet!</p>
      </div>
    );
  }

  // Extract post ID from URL to construct thumbnail URL
  const getPostId = (url: string) => {
    const match = url.match(/\/p\/([^\/]+)/);
    return match ? match[1] : '';
  };

  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
        {instagramPosts.map((post) => {
          const postId = getPostId(post.url);
          // Instagram's CDN provides thumbnails at this URL pattern
          const thumbnailUrl = `https://www.instagram.com/p/${postId}/media/?size=l`;

          return (
            <button
              key={post.id}
              onClick={() => openModal(post.url)}
              className="aspect-square rounded-xl overflow-hidden border border-purple-500/30 hover:border-purple-400/50 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/20 group relative bg-gray-800"
            >
              {/* Thumbnail image */}
              <Image
                src={thumbnailUrl}
                alt="Instagram post"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
              />

              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center">
                  <svg
                    className="w-12 h-12 mx-auto mb-2 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                  <p className="text-white text-sm font-medium">
                    View Post
                  </p>
                </div>
              </div>
            </button>
          );
        })}
      </div>

      {/* Modal */}
      {selectedPost && mounted && createPortal(
        <div
          className={`fixed inset-0 backdrop-blur-md z-[100] flex items-center justify-center p-4 animate-fade-in transition-colors duration-300 ${theme === 'light'
            ? 'bg-white/60'
            : 'bg-gray/60'
            }`}
          onClick={closeModal}
          style={{ margin: 0 }}
        >
          <div className={`relative max-w-[30vw] w-full max-h-[90vh] rounded-2xl p-10 transition-colors duration-300 ${theme === 'light'
            ? 'bg-white/90 border border-gray-200/50'
            : 'bg-gray-900/60 border border-gray-700/50'
            }`}>
            {/* Close button */}
            <button
              onClick={closeModal}
              className={`absolute top-2 right-2 z-10 rounded-full p-1.5 transition-colors duration-200 shadow-lg ${theme === 'light'
                ? 'bg-gray-200/90 hover:bg-gray-300 text-gray-800'
                : 'bg-gray-800/90 hover:bg-gray-700 text-white'
                }`}
              aria-label="Close modal"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>
            <div
              className="relative w-full max-h-[85vh] overflow-y-auto custom-scrollbar"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Instagram embed */}
              <div className="flex items-center justify-center min-h-[400px]">
                <blockquote
                  className="instagram-media"
                  data-instgrm-captioned
                  data-instgrm-permalink={`${selectedPost}?utm_source=ig_embed&utm_campaign=loading`}
                  data-instgrm-version="14"
                  style={{
                    background: '#000000',
                    border: '0',
                    borderRadius: '12px',
                    boxShadow: '0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15)',
                    margin: '0 auto',
                    maxWidth: '540px',
                    minWidth: '280px',
                    padding: '0',
                    width: '100%',
                  }}
                />
              </div>
            </div>
          </div>
        </div>,
        document.body
      )}
    </>
  );
}

// Extend Window interface for TypeScript
declare global {
  interface Window {
    instgrm?: {
      Embeds: {
        process: () => void;
      };
    };
  }
}
