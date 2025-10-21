"use client";

import { events } from "@/data/events";
import { useTheme } from "@/contexts/ThemeContext";

export default function EventsCalendar() {
  const { theme } = useTheme();

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
    const isLight = theme === 'light';
    switch (color) {
      case "blue":
        return isLight
          ? "bg-blue-50 backdrop-blur-sm border-blue-200 text-blue-800 hover:bg-blue-100 hover:border-blue-300"
          : "bg-blue-500/10 backdrop-blur-sm border-blue-400/20 text-blue-200 hover:bg-blue-500/15 hover:border-blue-400/30";
      case "red":
        return isLight
          ? "bg-red-50 backdrop-blur-sm border-red-200 text-red-800 hover:bg-red-100 hover:border-red-300"
          : "bg-red-500/20 backdrop-blur-sm border-red-400/20 text-red-200 hover:bg-red-500/15 hover:border-red-400/30";
      case "green":
        return isLight
          ? "bg-green-50 backdrop-blur-sm border-green-200 text-green-800 hover:bg-green-100 hover:border-green-300"
          : "bg-green-500/20 backdrop-blur-sm border-green-400/20 text-green-200 hover:bg-green-500/15 hover:border-green-400/30";
      case "purple":
        return isLight
          ? "bg-purple-50 backdrop-blur-sm border-purple-200 text-purple-800 hover:bg-purple-100 hover:border-purple-300"
          : "bg-purple-500/20 backdrop-blur-sm border-purple-400/20 text-purple-200 hover:bg-purple-500/15 hover:border-purple-400/30";
      default:
        return isLight
          ? "bg-gray-50 backdrop-blur-sm border-gray-200 text-gray-800 hover:bg-gray-100 hover:border-gray-300"
          : "bg-white/5 backdrop-blur-sm border-white/10 text-gray-200 hover:bg-white/10 hover:border-white/20";
    }
  };

  return (
    <div className='space-y-4 animate-fade-in'>
      <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-4'>
        {events.map((event, index) => (
          <a
            key={event.id}
            href={event.link}
            target="_blank"
            rel="noopener noreferrer"
            className={`border rounded-2xl p-4 cursor-pointer hover:shadow-lg hover:scale-105 transition-all duration-300 block animate-fade-in-up ${getEventColorClasses(
              event.color
            )}`}
            style={{ animationDelay: `${index * 0.1}s` }}
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
                <h3 className={`font-semibold transition-colors duration-300 ${theme === 'light' ? 'text-gray-800' : 'text-white'
                  }`}>{event.title}</h3>
                <p className={`text-sm transition-colors duration-300 ${theme === 'light' ? 'text-gray-600' : 'text-gray-300'
                  }`}>{event.date}</p>
              </div>
            </div>
            <div className='flex items-center mb-2'>
              <span className='text-lg mr-2'>{getEventIcon(event.type)}</span>
              <span className='text-sm font-medium'>{event.time}</span>
            </div>
            <div className='flex'>
              📍
              <p className={`text-sm mb-2 ml-2.5 transition-colors duration-300 ${theme === 'light' ? 'text-gray-600' : 'text-gray-200'
                }`}><span>{event.location}</span></p>
            </div>
            <p className={`text-sm line-clamp-2 transition-colors duration-300 ${theme === 'light' ? 'text-gray-500' : 'text-gray-300'
              }`}>{event.description}</p>
            <div className={`mt-3 text-sm font-semibold hover:translate-x-2 hover:scale-105 transition-all duration-200 ${theme === 'light'
              ? 'text-gray-700 hover:text-gray-900'
              : 'text-white/90 hover:text-white'
              }`}>Learn More →</div>
          </a>
        ))}
      </div>

    </div>
  );
}
