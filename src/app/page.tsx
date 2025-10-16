'use client';

import InstagramFeed from "@/components/InstagramFeed";
import EventsCalendar from "@/components/EventsCalendar";
import { useTheme } from "@/contexts/ThemeContext";

import { BsInstagram } from "react-icons/bs";
import { FaYoutube } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { FaTiktok } from "react-icons/fa";
import { MdLightMode, MdDarkMode } from "react-icons/md";

import Image from "next/image";

export default function Home() {
  const { theme, toggleTheme } = useTheme();
  return (
    <div
      className={`min-h-screen relative transition-colors duration-200 ${theme === 'light'
        ? 'bg-[rgb(97,91,139)]'
        : 'bg-[rgb(46,43,67)]'
        }`}
      style={{
        backgroundImage: theme === 'light'
          ? 'url(/assets/Black__No_BG.png)'
          : 'url(/assets/Black__No_BG.png)',
        backgroundSize: "contain",
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
      }}
    >
      {/* Background overlay for better readability */}
      <div className={`absolute inset-0 pointer-events-none transition-colors duration-200 ${theme === 'light'
        ? 'bg-gradient-to-br from-blue-50/80 to-purple-50/80'
        : 'bg-[rgb(46,43,67)]/90'
        }`}></div>

      {/* Navigation */}
      <nav className={`backdrop-blur-md sticky top-0 z-50 transition-colors duration-300 ${theme === 'light'
        ? 'bg-white/80 border-b border-gray-200/50'
        : 'bg-gray-900/50 border-b border-gray-700/50'
        }`}>
        <div className='max-w-9xl mx-auto px-4 sm:px-4 lg:px-10'>
          <div className='flex justify-between items-center h-20'>
            <div className='flex flex-row items-center pl-4'>
              <Image
                src={theme === 'light' ? "/assets/Black__No_BG.png" : "/assets/White__No_BG.png"}
                alt="SlabGang"
                width={55}
                height={55}
                className="mr-3 w-15 h-15"
              />
              <h1 className={`text-3xl mt-1 font-bold transition-colors duration-300 ${theme === 'light'
                ? 'text-[rgb(99,95,149)]'
                : 'text-[rgb(179,176,218)]'
                }`}>SlabGang</h1>
            </div>
            <div className='hidden md:block'>
              <div className='ml-10 flex space-x-4 items-center'>
                <div>
                  <a
                    href='#about'
                    className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${theme === 'light'
                      ? 'text-gray-700 hover:text-blue-600'
                      : 'text-gray-200 hover:text-blue-400'
                      }`}
                  >
                    About
                  </a>
                  <a
                    href='#events'
                    className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${theme === 'light'
                      ? 'text-gray-700 hover:text-blue-600'
                      : 'text-gray-200 hover:text-blue-400'
                      }`}
                  >
                    Events
                  </a>
                  <a
                    href='#instagram'
                    className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${theme === 'light'
                      ? 'text-gray-700 hover:text-blue-600'
                      : 'text-gray-200 hover:text-blue-400'
                      }`}
                  >
                    Gallery
                  </a>
                  <a
                    href='#contact'
                    className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${theme === 'light'
                      ? 'text-gray-700 hover:text-blue-600'
                      : 'text-gray-200 hover:text-blue-400'
                      }`}
                  >
                    Contact
                  </a>
                </div>
                {/* <button
                  onClick={toggleTheme}
                  className={`px-2 rounded-md text-sm font-medium transition-colors duration-200 ${theme === 'light'
                    ? 'text-gray-700 hover:text-blue-600'
                    : 'text-gray-200 hover:text-blue-400'
                    }`}
                  aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
                >
                  {theme === 'light' ? <MdDarkMode size={20} /> : <MdLightMode size={20} />}
                </button> */}
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id='about' className='relative pt-12 px-4 sm:px-6 lg:px-8 animate-fade-in-up'>
        <div className='max-w-6xl mx-auto'>
          <div className='text-center'>
            <h1 className={`text-4xl md:text-6xl font-bold mb-6 transition-colors duration-300 ${theme === 'light'
              ? 'text-gray-800'
              : 'text-white'
              }`}>
              Welcome to <span className={`transition-colors duration-300 ${theme === 'light'
                ? 'text-[rgb(99,95,149)]'
                : 'text-[rgb(179,176,218)]'
                }`}>SlabGang</span>
            </h1>
            <p className={`text-xl md:text-2xl max-w-4xl mx-auto mb-3 transition-colors duration-300 ${theme === 'light'
              ? 'text-gray-700'
              : 'text-gray-100'
              }`}>
              Your premier destination for Pokemon TCG slabs, singles, and sealed product!
            </p>
            <p className={`text-xl max-w-xl mx-auto transition-colors duration-300 ${theme === 'light'
              ? 'text-gray-600'
              : 'text-gray-100'
              }`}>
              We&apos;re a group of three guys from the GTA who have loved Pokemon all our lives and have directed that passion into building a community of collectors who share our enthusiasm!
            </p>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className='flex justify-center py-12'>
        <div className='bg-white/10 backdrop-blur-sm h-1 w-50 rounded-full'></div>
      </div>

      {/* Events Calendar Section */}
      <section id='events' className='animate-fade-in-up' style={{ animationDelay: '0.2s' }}>
        <div className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center mb-8'>
            <h2 className={`text-3xl md:text-4xl font-bold mb-4 transition-colors duration-300 ${theme === 'light'
              ? 'text-gray-800'
              : 'text-white'
              }`}>Upcoming Shows</h2>
            <p className={`text-xl transition-colors duration-300 ${theme === 'light'
              ? 'text-gray-600'
              : 'text-gray-300'
              }`}>Come find us at these events!</p>
          </div>
          <div className='bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 p-6'>
            <EventsCalendar />
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className='flex justify-center py-12'>
        <div className={`backdrop-blur-sm h-1 w-50 rounded-full transition-colors duration-300 ${theme === 'light'
          ? 'bg-gray-300/50'
          : 'bg-white/10'
          }`}></div>
      </div>

      {/* Instagram Section */}
      <section id='instagram' className='animate-fade-in-up' style={{ animationDelay: '0.4s' }}>
        <div className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center mb-8'>
            <h2 className={`text-3xl md:text-4xl font-bold mb-4 transition-colors duration-300 ${theme === 'light'
              ? 'text-gray-800'
              : 'text-white'
              }`}>Follow Our Journey</h2>
            <p className={`text-xl transition-colors duration-300 ${theme === 'light'
              ? 'text-gray-600'
              : 'text-gray-300'
              }`}>Check out our latest cards and community highlights on Instagram</p>
          </div>
          <div className='bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 p-6 hover:shadow-lg hover:scale-105 transition-all duration-300 block'>
            <InstagramFeed />
            <div className='text-center mt-6'>
              <a
                href='https://www.instagram.com/slabgang_tcg'
                target='_blank'
                rel='noopener noreferrer'
                className='inline-flex items-center gap-2 bg-gradient-to-r from-purple-500/80 to-pink-500/80 backdrop-blur-sm text-white px-6 py-2.5 rounded-full font-semibold hover:from-purple-600/80 hover:to-pink-600/80 transition-all hover:scale-105 border border-white/20'
              >
                <span>Follow @slabgang</span>
                <span>→</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className='flex justify-center py-12'>
        <div className={`backdrop-blur-sm h-1 w-50 rounded-full transition-colors duration-300 ${theme === 'light'
          ? 'bg-gray-300/50'
          : 'bg-white/10'
          }`}></div>
      </div>

      {/* Contact Section */}
      <section id='contact' className={`mb-8 animate-fade-in-up transition-colors duration-300 ${theme === 'light'
        ? 'text-gray-800'
        : 'text-white'
        }`} style={{ animationDelay: '0.6s' }}>
        <div className='flex flex-col max-w-xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className={`backdrop-blur-md rounded-2xl p-6 hover:shadow-lg hover:scale-105 transition-all duration-300 block ${theme === 'light'
            ? 'bg-white/80 border border-gray-200/50'
            : 'bg-white/5 border border-white/10'
            }`}>
            <h3 className={`text-2xl font-semibold mb-4 text-center transition-colors duration-300 ${theme === 'light'
              ? 'text-gray-800'
              : 'text-white'
              }`}>Connect with us!</h3>
            <div className='flex flex-col gap-4 items-center'>
              <div className='flex items-center'>
                <a href='mailto:slabgangtcg@gmail.com' className={`flex items-center gap-2 text-2xl hover:scale-105 transition-colors ${theme === 'light'
                  ? 'hover:text-blue-600'
                  : 'hover:text-blue-400'
                  }`}>
                  <MdOutlineEmail />
                  <span className={`text-sm transition-colors duration-300 ${theme === 'light'
                    ? 'text-gray-700'
                    : 'text-gray-300'
                    }`}>slabgangtcg@gmail.com</span>
                </a>
              </div>
              <a href='https://www.youtube.com/@SlabGangTCG' target="_blank" rel="noopener noreferrer" className={`flex items-center gap-2 text-2xl hover:scale-105 transition-colors ${theme === 'light'
                ? 'hover:text-red-600'
                : 'hover:text-red-500'
                }`}>
                <FaYoutube />
                <span className={`text-sm transition-colors duration-300 ${theme === 'light'
                  ? 'text-gray-700'
                  : 'text-gray-300'
                  }`}>youtube.com/@SlabGangTCG</span>
              </a>
              <a href='https://www.instagram.com/slabgang_tcg/' target="_blank" rel="noopener noreferrer" className={`flex items-center gap-2 text-2xl hover:scale-105 transition-colors ${theme === 'light'
                ? 'hover:text-pink-600'
                : 'hover:text-pink-500'
                }`}>
                <BsInstagram />
                <span className={`text-sm transition-colors duration-300 ${theme === 'light'
                  ? 'text-gray-700'
                  : 'text-gray-300'
                  }`}>instagram.com/slabgang_tcg</span>
              </a>
              <a href='https://www.tiktok.com/@slabgangtcg' target="_blank" rel="noopener noreferrer" className={`flex items-center gap-2 text-2xl hover:scale-105 transition-colors ${theme === 'light'
                ? 'hover:text-red-600'
                : 'hover:text-red-500'
                }`}>
                <FaTiktok />
                <span className={`text-sm transition-colors duration-300 ${theme === 'light'
                  ? 'text-gray-700'
                  : 'text-gray-300'
                  }`}>tiktok.com/@slabgangtcg</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={`py-8 transition-colors duration-300 ${theme === 'light'
        ? 'bg-white/80'
        : 'bg-gray-900/50'
        }`}>
        <div className='max-h-1/2 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
          <p className={`${theme === 'light'
            ? 'text-gray-900'
            : 'text-gray-300'
            }`}>&copy; 2025 SlabGang. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
