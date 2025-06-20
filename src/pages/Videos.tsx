
import React from 'react';
import Navbar from '@/components/Navbar';
import { Video } from "lucide-react";

const sampleVideos = [
  {
    id: 1,
    title: "Best Goals of the Week",
    thumbnail: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=400&q=80",
    url: "#",
  },
  {
    id: 2,
    title: "Top 5 Saves",
    thumbnail: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&w=400&q=80",
    url: "#",
  },
  {
    id: 3,
    title: "Premier League Highlights",
    thumbnail: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=400&q=80",
    url: "#",
  },
];

const Videos = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
      <Navbar />
      <div className="container mx-auto py-12 px-4 max-w-5xl">
        <h1 className="text-4xl font-bold mb-8">Football Videos</h1>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          {sampleVideos.map(video => (
            <a
              key={video.id}
              href={video.url}
              className="block bg-[#22223b] hover:bg-[#2e2e38] rounded-lg overflow-hidden shadow group transition"
            >
              <div className="relative">
                <img src={video.thumbnail} alt={video.title} className="w-full h-48 object-cover" />
                <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition">
                  <Video className="text-white w-12 h-12" />
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold">{video.title}</h3>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Videos;

