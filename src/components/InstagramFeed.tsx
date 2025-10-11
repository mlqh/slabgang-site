'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

interface InstagramPost {
  id: string;
  media_url: string;
  caption: string;
  permalink: string;
  timestamp: string;
  media_type?: 'IMAGE' | 'VIDEO' | 'CAROUSEL_ALBUM';
}

export default function InstagramFeed() {
  const [posts, setPosts] = useState<InstagramPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchInstagramPosts = async () => {
      try {
        const response = await fetch('/api/instagram');

        if (!response.ok) {
          throw new Error('Failed to fetch Instagram posts');
        }

        const data = await response.json();
        setPosts(data.posts || []);
      } catch (err) {
        console.error('Error fetching Instagram posts:', err);
        setError('Unable to load Instagram posts');

        // Fallback to mock data if API fails
        const mockPosts: InstagramPost[] = [
          {
            id: '1',
            media_url: '/api/placeholder/400/400',
            caption: 'Just got this amazing Charizard! 🔥 #PokemonCards #Charizard',
            permalink: 'https://instagram.com/p/example1',
            timestamp: '2024-01-15T10:00:00Z'
          },
          {
            id: '2',
            media_url: '/api/placeholder/400/400',
            caption: 'Tournament day! Who\'s ready to battle? ⚡ #PokemonTournament',
            permalink: 'https://instagram.com/p/example2',
            timestamp: '2024-01-14T15:30:00Z'
          },
          {
            id: '3',
            media_url: '/api/placeholder/400/400',
            caption: 'New arrivals this week! Check out these vintage cards 📦',
            permalink: 'https://instagram.com/p/example3',
            timestamp: '2024-01-13T09:15:00Z'
          },
          {
            id: '4',
            media_url: '/api/placeholder/400/400',
            caption: 'Grading session in progress! Quality is everything ⭐',
            permalink: 'https://instagram.com/p/example4',
            timestamp: '2024-01-12T14:20:00Z'
          },
          {
            id: '5',
            media_url: '/api/placeholder/400/400',
            caption: 'Community trade meetup was a huge success! 🎉',
            permalink: 'https://instagram.com/p/example5',
            timestamp: '2024-01-11T18:45:00Z'
          },
          {
            id: '6',
            media_url: '/api/placeholder/400/400',
            caption: 'Rare find of the day! This Pikachu is incredible ⚡',
            permalink: 'https://instagram.com/p/example6',
            timestamp: '2024-01-10T12:30:00Z'
          },
          {
            id: '7',
            media_url: '/api/placeholder/400/400',
            caption: 'Behind the scenes: How we authenticate cards 🔍',
            permalink: 'https://instagram.com/p/example7',
            timestamp: '2024-01-09T16:00:00Z'
          },
          {
            id: '8',
            media_url: '/api/placeholder/400/400',
            caption: 'New member of the SlabGang family! Welcome! 👋',
            permalink: 'https://instagram.com/p/example8',
            timestamp: '2024-01-08T11:15:00Z'
          }
        ];
        setPosts(mockPosts);
      } finally {
        setLoading(false);
      }
    };

    fetchInstagramPosts();
  }, []);

  if (loading) {
    return (
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
          <div key={item} className="aspect-square bg-gray-200 rounded-lg animate-pulse">
            <div className="w-full h-full flex items-center justify-center">
              <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
            </div>
          </div>
        ))}
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-8">
        <p className="text-gray-500">Unable to load Instagram posts. Please try again later.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {posts.map((post) => (
        <a
          key={post.id}
          href={post.permalink}
          target="_blank"
          rel="noopener noreferrer"
          className="aspect-square rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300 group relative"
        >
          <div className="w-full h-full relative">
            {post.media_url && !post.media_url.includes('/api/placeholder/') ? (
              // Real Instagram image
              <Image
                src={post.media_url}
                alt={post.caption || 'Instagram post'}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 50vw, 25vw"
              />
            ) : (
              // Fallback for mock data or missing images
              <div className="w-full h-full bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center">
                <div className="text-center p-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-2 group-hover:scale-110 transition-transform">
                    <span className="text-white text-2xl">
                      {post.media_type === 'VIDEO' ? '🎥' : '📷'}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 line-clamp-2">{post.caption}</p>
                </div>
              </div>
            )}

            {/* Overlay with caption on hover */}
            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-60 transition-all duration-300 flex items-end">
              <div className="p-3 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <p className="text-sm line-clamp-2">{post.caption}</p>
                <div className="flex items-center mt-2 text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="mr-2">
                    {post.media_type === 'VIDEO' ? '🎥' : '📷'}
                  </span>
                  <span>View on Instagram →</span>
                </div>
              </div>
            </div>
          </div>
        </a>
      ))}
    </div>
  );
}
