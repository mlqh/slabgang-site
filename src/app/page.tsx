import InstagramFeed from "@/components/InstagramFeed";
import EventsCalendar from "@/components/EventsCalendar";

import { BsInstagram } from "react-icons/bs";
import { FaYoutube } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";

export default function Home() {
  return (
    <div className='min-h-screen bg-gray-900'>
      {/* Navigation */}
      <nav className='bg-gray-800/60 backdrop-blur-md border-b border-gray-700/50 sticky top-0 z-50'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='flex justify-between items-center h-16'>
            <div className='flex items-center'>
              <h1 className='text-2xl font-bold text-[rgb(179,176,218)]'>SlabGang</h1>
            </div>
            <div className='hidden md:block'>
              <div className='ml-10 flex items-baseline space-x-4'>
                <a
                  href='#about'
                  className='text-gray-300 hover:text-blue-400 px-3 py-2 rounded-md text-sm font-medium'
                >
                  About
                </a>
                <a
                  href='#events'
                  className='text-gray-300 hover:text-blue-400 px-3 py-2 rounded-md text-sm font-medium'
                >
                  Events
                </a>
                <a
                  href='#instagram'
                  className='text-gray-300 hover:text-blue-400 px-3 py-2 rounded-md text-sm font-medium'
                >
                  Gallery
                </a>
                <a
                  href='#contact'
                  className='text-gray-300 hover:text-blue-400 px-3 py-2 rounded-md text-sm font-medium'
                >
                  Contact
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className='relative pt-12 px-4 sm:px-6 lg:px-8'>
        <div className='max-w-6xl mx-auto'>
          <div className='text-center'>
            <h1 className='text-4xl md:text-6xl font-bold text-white mb-6'>
              Welcome to <span className='text-[rgb(179,176,218)]'>SlabGang</span>
            </h1>
            <p className='text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto'>
              Your premier destination for Pokemon TCG slabs, singles, and sealed product.
            </p>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className='flex justify-center py-12'>
        <div className='bg-white/10 backdrop-blur-sm h-1 w-50 rounded-full'></div>
      </div>

      {/* About Section */}
      <section id='about'>
        <div className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center'>
            <h2 className='text-3xl md:text-4xl font-bold text-white mb-4'>About SlabGang</h2>
            <p className='text-xl text-gray-300 max-w-3xl mx-auto'>
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
      <section id='events'>
        <div className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center mb-8'>
            <h2 className='text-3xl md:text-4xl font-bold text-white mb-4'>Upcoming Shows</h2>
            <p className='text-xl text-gray-300'>Come find us at these events!</p>
          </div>
          <div className='bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 p-6'>
            <EventsCalendar />
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className='flex justify-center py-12'>
        <div className='bg-white/10 backdrop-blur-sm h-1 w-50 rounded-full'></div>
      </div>

      {/* Instagram Section */}
      <section id='instagram'>
        <div className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center mb-8'>
            <h2 className='text-3xl md:text-4xl font-bold text-white mb-4'>Follow Our Journey</h2>
            <p className='text-xl text-gray-300'>Check out our latest cards and community highlights on Instagram</p>
          </div>
          <div className='bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 p-6'>
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
        <div className='bg-white/10 backdrop-blur-sm h-1 w-50 rounded-full'></div>
      </div>

      {/* Contact Section */}
      <section id='contact' className='mb-8 text-white'>
        <div className='flex flex-col max-w-xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 p-6'>
            <h3 className='text-2xl font-semibold mb-6 text-center'>Reach us at</h3>
            <div className='flex flex-col gap-4 items-center'>
              <div className='flex items-center'>
                <a href='mailto:slabgangtcg@gmail.com' className='flex items-center gap-2 text-2xl hover:text-blue-500 transition-colors'>
                  <MdOutlineEmail />
                  <span className='text-sm'>slabgangtcg@gmail.com</span>
                </a>
              </div>
              <a href='https://www.youtube.com/@SlabGangTCG' className='flex items-center gap-2 text-2xl hover:text-red-500 transition-colors'>
                <FaYoutube />
                <span className='text-sm'>youtube.com/@SlabGangTCG</span>
              </a>
              <a href='https://www.instagram.com/slabgang_tcg/' className='flex items-center gap-2 text-2xl hover:text-pink-500 transition-colors'>
                <BsInstagram />
                <span className='text-sm'>instagram.com/slabgang_tcg</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className='bg-gray-800 text-white py-8'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
          <p>&copy; 2025 SlabGang. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
