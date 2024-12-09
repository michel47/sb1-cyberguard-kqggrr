import React from 'react';
import { Heart, ShoppingCart } from 'lucide-react';

const artworks = [
  {
    id: 1,
    title: "Digital Dreamscape",
    artist: "AI Creator #1",
    price: 199,
    image: "https://images.unsplash.com/photo-1633177317976-3f9bc45e1d1d?auto=format&fit=crop&q=80&w=800&h=600"
  },
  {
    id: 2,
    title: "Neural Network Art",
    artist: "AI Creator #2",
    price: 299,
    image: "https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?auto=format&fit=crop&q=80&w=800&h=600"
  },
  {
    id: 3,
    title: "Quantum Visions",
    artist: "AI Creator #3",
    price: 399,
    image: "https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?auto=format&fit=crop&q=80&w=800&h=600"
  }
];

export function ArtworkGrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {artworks.map((art) => (
        <div key={art.id} className="bg-white rounded-xl overflow-hidden shadow hover:shadow-lg transition-shadow">
          <div className="relative">
            <img src={art.image} alt={art.title} className="w-full h-48 object-cover" />
            <button className="absolute top-4 right-4 p-2 bg-white rounded-full shadow-md hover:bg-primary-300">
              <Heart size={20} className="text-primary-600" />
            </button>
          </div>
          <div className="p-4">
            <h3 className="text-lg font-bold text-primary-900 mb-1">{art.title}</h3>
            <p className="text-sm text-primary-600 mb-3">by {art.artist}</p>
            <div className="flex justify-between items-center">
              <span className="text-xl font-bold text-primary-700">${art.price}</span>
              <button className="bg-primary-700 text-white px-3 py-1.5 rounded-full text-sm font-semibold hover:bg-primary-800 transition-colors flex items-center gap-1">
                <ShoppingCart size={16} />
                Buy Now
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}