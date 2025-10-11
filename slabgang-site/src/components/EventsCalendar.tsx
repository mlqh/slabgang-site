'use client';

import { useState } from 'react';

interface Event {
  id: string;
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
  type: 'tournament' | 'workshop' | 'trade' | 'special';
  color: string;
}

export default function EventsCalendar() {
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);

  const events: Event[] = [
    {
      id: '1',
      title: 'Pokemon Card Tournament',
      date: 'March 15, 2024',
      time: '2:00 PM - 6:00 PM',
      location: 'SlabGang HQ',
      description: 'Join our monthly tournament with prizes for top players! Entry fee includes refreshments and prizes for top 3 players.',
      type: 'tournament',
      color: 'blue'
    },
    {
      id: '2',
      title: 'Card Grading Workshop',
      date: 'March 22, 2024',
      time: '10:00 AM - 12:00 PM',
      location: 'Community Center',
      description: 'Learn professional card grading techniques from certified experts. Bring your cards for hands-on practice!',
      type: 'workshop',
      color: 'red'
    },
    {
      id: '3',
      title: 'Trade Meetup',
      date: 'March 29, 2024',
      time: '1:00 PM - 4:00 PM',
      location: 'Local Park Pavilion',
      description: 'Bring your cards and trade with fellow collectors! Free event with refreshments provided.',
      type: 'trade',
      color: 'green'
    },
    {
      id: '4',
      title: 'Special Release Event',
      date: 'April 5, 2024',
      time: '9:00 AM - 5:00 PM',
      location: 'SlabGang HQ',
      description: 'Exclusive access to new card releases and special edition items. Early bird discounts available!',
      type: 'special',
      color: 'purple'
    }
  ];

  const getEventIcon = (type: string) => {
    switch (type) {
      case 'tournament': return '🏆';
      case 'workshop': return '📚';
      case 'trade': return '🤝';
      case 'special': return '✨';
      default: return '📅';
    }
  };

  const getEventColorClasses = (color: string) => {
    switch (color) {
      case 'blue': return 'bg-blue-50 border-blue-200 text-blue-600';
      case 'red': return 'bg-red-50 border-red-200 text-red-600';
      case 'green': return 'bg-green-50 border-green-200 text-green-600';
      case 'purple': return 'bg-purple-50 border-purple-200 text-purple-600';
      default: return 'bg-gray-50 border-gray-200 text-gray-600';
    }
  };

  return (
    <div className="space-y-6">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {events.map((event) => (
          <div
            key={event.id}
            className={`border rounded-lg p-6 cursor-pointer hover:shadow-lg transition-all duration-300 ${getEventColorClasses(event.color)}`}
            onClick={() => setSelectedEvent(event)}
          >
            <div className="flex items-center mb-4">
              <div className={`w-12 h-12 rounded-lg flex items-center justify-center text-white font-bold mr-4 ${event.color === 'blue' ? 'bg-blue-600' :
                event.color === 'red' ? 'bg-red-600' :
                  event.color === 'green' ? 'bg-green-600' :
                    event.color === 'purple' ? 'bg-purple-600' : 'bg-gray-600'
                }`}>
                {new Date(event.date).getDate()}
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">{event.title}</h3>
                <p className="text-sm text-gray-600">{event.date}</p>
              </div>
            </div>
            <div className="flex items-center mb-2">
              <span className="text-lg mr-2">{getEventIcon(event.type)}</span>
              <span className="text-sm font-medium">{event.time}</span>
            </div>
            <p className="text-sm text-gray-600 mb-2">📍 {event.location}</p>
            <p className="text-gray-700 text-sm line-clamp-2">{event.description}</p>
            <button className="mt-4 text-sm font-semibold hover:underline">
              Learn More →
            </button>
          </div>
        ))}
      </div>

      {/* Event Details Modal */}
      {selectedEvent && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <h2 className="text-2xl font-bold text-gray-900">{selectedEvent.title}</h2>
                <button
                  onClick={() => setSelectedEvent(null)}
                  className="text-gray-400 hover:text-gray-600 text-2xl"
                >
                  ×
                </button>
              </div>

              <div className="space-y-4">
                <div className="flex items-center">
                  <span className="text-lg mr-3">{getEventIcon(selectedEvent.type)}</span>
                  <div>
                    <p className="font-semibold">{selectedEvent.date}</p>
                    <p className="text-gray-600">{selectedEvent.time}</p>
                  </div>
                </div>

                <div className="flex items-center">
                  <span className="text-lg mr-3">📍</span>
                  <p className="text-gray-600">{selectedEvent.location}</p>
                </div>

                <div>
                  <h3 className="font-semibold mb-2">Event Details</h3>
                  <p className="text-gray-700">{selectedEvent.description}</p>
                </div>

                <div className="flex gap-3 pt-4">
                  <button className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                    Register Now
                  </button>
                  <button
                    onClick={() => setSelectedEvent(null)}
                    className="flex-1 border border-gray-300 text-gray-700 py-2 px-4 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
