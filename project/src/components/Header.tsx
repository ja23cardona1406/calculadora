import React from 'react';
import { Brain } from 'lucide-react';

export const Header: React.FC = () => {
  return (
    <header className="flex flex-col items-center justify-center py-8 text-center">
      <div className="flex items-center mb-2">
        <Brain className="h-12 w-12 mr-2" />
        <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-purple-300">
          Neural Network Parameter Calculator
        </h1>
      </div>
      <p className="max-w-2xl text-lg text-indigo-200">
        Understand and calculate the number of parameters in different neural network architectures
      </p>
    </header>
  );
};