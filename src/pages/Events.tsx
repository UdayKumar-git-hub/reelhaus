import React, { useState, useEffect } from 'react';
import { Calendar, Users, MapPin, Clock, ArrowRight, Camera, Video, Trophy } from 'lucide-react';

const Events = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  const nextEventDate = new Date('2024-02-15T10:00:00');

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = nextEventDate.getTime() - now;

      if (distance > 0) {
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        setTimeLeft({ days, hours, minutes, seconds });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const upcomingEvents = [
    {
      id: 1,
      title: "Photography Workshop & Reel Making Competition",
      date: "February 15, 2024",
      time: "10:00 AM - 4:00 PM",
      location: "IARE Main Campus",
      participants: 150,
      type: "Workshop + Competition",
      description: "Learn advanced photography techniques and compete in our reel making contest with amazing prizes.",
      image: "https://images.pexels.com/photos/1264210/pexels-photo-1264210.jpeg?auto=compress&cs=tinysrgb&w=400",
      icon: <Camera className="w-6 h-6" />
    },
    {
      id: 2,
      title: "Social Media Marketing Masterclass",
      date: "March 2, 2024",
      time: "2:00 PM - 5:00 PM",
      location: "IARE Auditorium",
      participants: 200,
      type: "Masterclass",
      description: "Industry experts will share insights on building engaging social media strategies for brands.",
      image: "https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=400",
      icon: <Video className="w-6 h-6" />
    },
    {
      id: 3,
      title: "Content Creation Bootcamp",
      date: "March 20, 2024",
      time: "9:00 AM - 6:00 PM",
      location: "IARE Tech Hub",
      participants: 100,
      type: "Bootcamp",
      description: "Intensive hands-on training in content creation, editing, and digital storytelling.",
      image: "https://images.pexels.com/photos/1587927/pexels-photo-1587927.jpeg?auto=compress&cs=tinysrgb&w=400",
      icon: <Trophy className="w-6 h-6" />
    }
  ];

  const pastEvents = [
    {
      id: 1,
      title: "Club Launch Event",
      date: "January 10, 2024",
      participants: 300,
      highlights: ["Club introduction", "Team unveiling", "Future roadmap presentation"],
      image: "https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      id: 2,
      title: "First Photography Walk",
      date: "January 25, 2024",
      participants: 80,
      highlights: ["Campus photography", "Basic techniques", "Portfolio building"],
      image: "https://images.pexels.com/photos/1264210/pexels-photo-1264210.jpeg?auto=compress&cs=tinysrgb&w=400"
    }
  ];

  return (
    <div className="pt-16 min-h-screen bg-black">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-black via-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-500 mb-6">
              Events
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Join our workshops, competitions, and masterclasses to enhance your creative skills
            </p>
          </div>
        </div>
      </section>

      {/* Next Event Countdown */}
      <section className="py-20 bg-gradient-to-br from-yellow-400 to-yellow-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-8">
              Next Event
            </h2>
            <h3 className="text-2xl text-black/80 mb-8">Photography Workshop & Reel Making Competition</h3>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
              {[
                { label: 'Days', value: timeLeft.days },
                { label: 'Hours', value: timeLeft.hours },
                { label: 'Minutes', value: timeLeft.minutes },
                { label: 'Seconds', value: timeLeft.seconds }
              ].map((item) => (
                <div key={item.label} className="text-center">
                  <div className="bg-black text-yellow-400 rounded-2xl p-6 mb-2">
                    <div className="text-3xl md:text-4xl font-bold">{item.value}</div>
                  </div>
                  <div className="text-black font-semibold">{item.label}</div>
                </div>
              ))}
            </div>

            <div className="text-center">
              <button className="bg-black text-yellow-400 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-900 transition-colors transform hover:scale-105 inline-flex items-center space-x-2">
                <Calendar size={20} />
                <span>Register Now</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
              Upcoming <span className="text-yellow-400">Events</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {upcomingEvents.map((event) => (
              <div key={event.id} className="bg-black/50 backdrop-blur-sm border border-yellow-400/20 rounded-2xl overflow-hidden hover:border-yellow-400/50 transition-all duration-300 group">
                <div className="aspect-w-16 aspect-h-9">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center space-x-2 mb-4">
                    <div className="text-yellow-400">{event.icon}</div>
                    <span className="text-yellow-400 text-sm font-semibold">{event.type}</span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-4">{event.title}</h3>
                  <p className="text-gray-300 text-sm mb-4">{event.description}</p>
                  
                  <div className="space-y-2 mb-6">
                    <div className="flex items-center space-x-2 text-gray-400 text-sm">
                      <Calendar size={16} />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-gray-400 text-sm">
                      <Clock size={16} />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-gray-400 text-sm">
                      <MapPin size={16} />
                      <span>{event.location}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-gray-400 text-sm">
                      <Users size={16} />
                      <span>{event.participants} participants</span>
                    </div>
                  </div>
                  
                  <button className="w-full bg-gradient-to-r from-yellow-400 to-yellow-500 text-black py-3 rounded-full font-bold hover:from-yellow-500 hover:to-yellow-600 transition-all duration-300 flex items-center justify-center space-x-2">
                    <span>Register</span>
                    <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Past Events */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
              Past <span className="text-yellow-400">Events</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {pastEvents.map((event) => (
              <div key={event.id} className="bg-gray-900/50 backdrop-blur-sm border border-yellow-400/20 rounded-2xl overflow-hidden hover:border-yellow-400/50 transition-all duration-300 group">
                <div className="aspect-w-16 aspect-h-9">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2">{event.title}</h3>
                  <div className="flex items-center space-x-4 text-gray-400 text-sm mb-4">
                    <div className="flex items-center space-x-1">
                      <Calendar size={16} />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Users size={16} />
                      <span>{event.participants} participants</span>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <h4 className="text-yellow-400 font-semibold">Highlights:</h4>
                    <ul className="space-y-1">
                      {event.highlights.map((highlight, index) => (
                        <li key={index} className="text-gray-300 text-sm flex items-center space-x-2">
                          <div className="w-1 h-1 bg-yellow-400 rounded-full"></div>
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
            Don't Miss Out!
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Stay updated with our latest events and workshops. Follow us on social media for announcements.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-black px-8 py-4 rounded-full font-bold text-lg hover:from-yellow-500 hover:to-yellow-600 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-yellow-400/50 inline-flex items-center space-x-2">
              <Calendar size={20} />
              <span>View Calendar</span>
            </button>
            <a
              href="/contact"
              className="border-2 border-yellow-400 text-yellow-400 px-8 py-4 rounded-full font-bold text-lg hover:bg-yellow-400 hover:text-black transition-all duration-300 transform hover:scale-105 inline-flex items-center space-x-2"
            >
              <span>Contact Us</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Events;