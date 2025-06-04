import React from 'react';
import { Heart } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="py-6 text-center border-t border-white/10 mt-16">
      <p className="text-indigo-200 flex items-center justify-center">
        Created with 
        <Heart className="h-4 w-4 mx-1 text-pink-400 animate-pulse" />
        for neural network enthusiasts
      </p>
    </footer>
  );
};