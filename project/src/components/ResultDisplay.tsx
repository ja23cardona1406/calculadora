import React from 'react';

interface ResultDisplayProps {
  totalParams: number;
  weightParams: number;
  biasParams: number;
}

export const ResultDisplay: React.FC<ResultDisplayProps> = ({ 
  totalParams,
  weightParams,
  biasParams 
}) => {
  // Format number with thousand separators
  const formatNumber = (num: number): string => {
    return num.toLocaleString('en-US');
  };

  return (
    <div className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-lg p-4">
      <h3 className="text-lg font-medium mb-2">Results</h3>
      
      <div className="grid grid-cols-1 gap-2">
        <div className="flex justify-between items-center bg-white/5 rounded-md p-2">
          <span className="text-sm">Total Parameters:</span>
          <span className="text-2xl font-semibold">{formatNumber(totalParams)}</span>
        </div>
        
        <div className="flex justify-between items-center bg-white/5 rounded-md p-2">
          <span className="text-sm">Weight Parameters:</span>
          <span className="text-lg">{formatNumber(weightParams)}</span>
        </div>
        
        {biasParams > 0 && (
          <div className="flex justify-between items-center bg-white/5 rounded-md p-2">
            <span className="text-sm">Bias Parameters:</span>
            <span className="text-lg">{formatNumber(biasParams)}</span>
          </div>
        )}
      </div>
    </div>
  );
};