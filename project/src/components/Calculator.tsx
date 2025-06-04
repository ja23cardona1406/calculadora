import React from 'react';
import { CNNCalculator } from './CNNCalculator';
import { MLPCalculator } from './MLPCalculator';

export const Calculator: React.FC = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      <CNNCalculator />
      <MLPCalculator />
    </div>
  );
};