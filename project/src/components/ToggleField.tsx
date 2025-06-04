import React from 'react';

interface ToggleFieldProps {
  label: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
  className?: string;
}

export const ToggleField: React.FC<ToggleFieldProps> = ({ 
  label, 
  checked, 
  onChange,
  className = '' 
}) => {
  return (
    <div className={`flex items-center ${className}`}>
      <label className="inline-flex items-center cursor-pointer">
        <span className="text-sm font-medium mr-3 text-indigo-200">{label}</span>
        <div className="relative">
          <input
            type="checkbox"
            className="sr-only"
            checked={checked}
            onChange={(e) => onChange(e.target.checked)}
          />
          <div className={`w-10 h-5 bg-white/10 rounded-full transition-colors duration-200 ease-in-out ${
            checked ? 'bg-blue-500' : 'bg-gray-600'
          }`}></div>
          <div className={`absolute top-0.5 left-0.5 w-4 h-4 bg-white rounded-full transition-transform duration-200 ease-in-out ${
            checked ? 'transform translate-x-5' : ''
          }`}></div>
        </div>
      </label>
    </div>
  );
};