"use client";

import { useState } from "react";

interface Event {
  id: string;
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
  type: "show";
  color: string;
  link: string;
}

export default function EventsCalendar() {
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);

  const events: Event[] = [
    {
      id: "1",
      title: "Mississauga Sports Card",
      date: "October 18, 2025",
      time: "11:00 AM - 5:00 PM",
      location: "1245 Eglinton Ave W, Mississauga",
      description: "",
      type: "show",
      color: "blue",
      link: "https://www.instagram.com/mississaugasportscard",
    },
    {
      id: "2",
      title: "Hobby Con",
      date: "December 13, 2025",
      time: "10:00 AM - 12:00 PM",
      location: "Community Center",
      description: "",
      type: "show",
      color: "red",
      link: "https://www.instagram.com/thehobbycon",
    },
    {
      id: "3",
      title: "Coming Soon...",
      date: "",
      time: "",
      location: "",
      description: "",
      type: "show",
      color: "purple",
      link: "",
    },
  ];

  const getEventIcon = (type: string) => {
    switch (type) {
      case "tournament":
        return "🏆";
      case "workshop":
        return "📚";
      case "trade":
        return "🤝";
      case "special":
        return "✨";
      default:
        return "📅";
    }
  };

  const getEventColorClasses = (color: string) => {
    switch (color) {
      case "blue":
        return "bg-blue-500/10 backdrop-blur-sm border-blue-400/20 text-blue-200 hover:bg-blue-500/15 hover:border-blue-400/30";
      case "red":
        return "bg-red-500/10 backdrop-blur-sm border-red-400/20 text-red-200 hover:bg-red-500/15 hover:border-red-400/30";
      case "green":
        return "bg-green-500/10 backdrop-blur-sm border-green-400/20 text-green-200 hover:bg-green-500/15 hover:border-green-400/30";
      case "purple":
        return "bg-purple-500/10 backdrop-blur-sm border-purple-400/20 text-purple-200 hover:bg-purple-500/15 hover:border-purple-400/30";
      default:
        return "bg-white/5 backdrop-blur-sm border-white/10 text-gray-200 hover:bg-white/10 hover:border-white/20";
    }
  };

  return (
    <div className='space-y-4'>
      <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-4'>
        {events.map((event) => (
          <div
            key={event.id}
            className={`border rounded-2xl p-4 cursor-pointer hover:shadow-lg hover:scale-105 transition-all duration-300 ${getEventColorClasses(
              event.color
            )}`}
            onClick={() => setSelectedEvent(event)}
          >
            <div className='flex items-center mb-3'>
              <div
                className={`w-10 h-10 rounded-lg flex items-center justify-center text-white font-bold mr-3 ${event.color === "blue"
                  ? "bg-blue-600"
                  : event.color === "red"
                    ? "bg-red-600"
                    : event.color === "green"
                      ? "bg-green-600"
                      : event.color === "purple"
                        ? "bg-purple-600"
                        : "bg-gray-600"
                  }`}
              >
                {event.date ? new Date(event.date).getDate() : "?"}
              </div>
              <div>
                <h3 className='font-semibold text-white'>{event.title}</h3>
                <p className='text-sm text-gray-300'>{event.date}</p>
              </div>
            </div>
            <div className='flex items-center mb-2'>
              <span className='text-lg mr-2'>{getEventIcon(event.type)}</span>
              <span className='text-sm font-medium'>{event.time}</span>
            </div>
            <p className='text-sm text-gray-300 mb-2'>📍 {event.location}</p>
            <p className='text-gray-300 text-sm line-clamp-2'>{event.description}</p>
            <button className='mt-4 text-sm font-semibold hover:underline text-blue-400'>Learn More →</button>
          </div>
        ))}
      </div>

      {/* Event Details Modal */}
      {selectedEvent && (
        <div className='fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center p-4 z-50'>
          <div className='bg-white/10 backdrop-blur-md rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-white/20'>
            <div className='p-6'>
              <div className='flex justify-between items-start mb-4'>
                <h2 className='text-2xl font-bold text-white'>{selectedEvent.title}</h2>
              </div>

              <div className='space-y-4'>
                <div className='flex items-center'>
                  <span className='text-lg mr-3'>{getEventIcon(selectedEvent.type)}</span>
                  <div>
                    <p className='font-semibold text-white'>{selectedEvent.date}</p>
                    <p className='text-gray-300'>{selectedEvent.time}</p>
                  </div>
                </div>

                <div className='flex items-center'>
                  <span className='text-lg mr-3'>📍</span>
                  <p className='text-gray-300'>{selectedEvent.location}</p>
                </div>

                <div>
                  <p className='text-gray-300'>{selectedEvent.description}</p>
                </div>

                <div className='flex gap-3 pt-4'>
                  <button
                    className='flex-1 bg-blue-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors'
                    onClick={() => window.open(selectedEvent.link, "_blank")}
                  >
                    More Info
                  </button>
                  <button
                    onClick={() => setSelectedEvent(null)}
                    className='flex-1 border border-gray-600 text-gray-300 py-2 px-4 rounded-lg font-semibold hover:bg-gray-700 transition-colors'
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
