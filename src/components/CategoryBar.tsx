import React from 'react';
import { Palette, Image as ImageIcon, Box, Type, Video, Music } from 'lucide-react';

export function CategoryBar() {
  const categories = [
    { icon: <Palette size={20} />, name: 'Digital Art' },
    { icon: <ImageIcon size={20} />, name: 'Illustrations' },
    { icon: <Box size={20} />, name: '3D Models' },
    { icon: <Type size={20} />, name: 'Typography' },
    { icon: <Video size={20} />, name: 'Animations' },
    { icon: <Music size={20} />, name: 'AI Music' },
  ];

  return (
    <div className="bg-white border-b border-primary-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 overflow-x-auto">
          {categories.map((category, index) => (
            <button
              key={index}
              className="flex items-center gap-2 px-4 py-2 text-primary-600 hover:text-primary-800 transition-colors whitespace-nowrap"
            >
              {category.icon}
              <span>{category.name}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}