import React from 'react';
import { Heart, ShoppingCart } from 'lucide-react';

const featuredArt = [
  {
    id: 1,
    title: "Cosmic Dreams",
    artist: "AI Artist #1",
    price: 299,
    image: "https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?auto=format&fit=crop&q=80&w=800&h=600"
  },
  {
    id: 2,
    title: "Neural Abstractions",
    artist: "AI Artist #2",
    price: 399,
    image: "https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?auto=format&fit=crop&q=80&w=800&h=600"
  },
  {
    id: 3,
    title: "Digital Horizons",
    artist: "AI Artist #3",
    price: 499,
    image: "https://images.unsplash.com/photo-1614851099511-773084f6911d?auto=format&fit=crop&q=80&w=800&h=600"
  }
];

export function FeaturedArtwork() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {featuredArt.map((art) => (
        <div key={art.id} className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
          <div className="relative">
            <img src={art.image} alt={art.title} className="w-full h-64 object-cover" />
            <button className="absolute top-4 right-4 p-2 bg-white rounded-full shadow-md hover:bg-primary-300">
              <Heart size={20} className="text-primary-600" />
            </button>
          </div>
          <div className="p-6">
            <h3 className="text-xl font-bold text-primary-900 mb-2">{art.title}</h3>
            <p className="text-primary-600 mb-4">by {art.artist}</p>
            <div className="flex justify-between items-center">
              <span className="text-2xl font-bold text-primary-700">${art.price}</span>
              <button className="bg-primary-700 text-white px-4 py-2 rounded-full font-semibold hover:bg-primary-800 transition-colors flex items-center gap-2">
                <ShoppingCart size={20} />
                Buy Now
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}