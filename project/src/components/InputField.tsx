import React from 'react';

interface InputFieldProps {
  label: string;
  value: number;
  onChange: (value: string) => void;
  className?: string;
}

export const InputField: React.FC<InputFieldProps> = ({ 
  label, 
  value, 
  onChange,
  className = '' 
}) => {
  return (
    <div className={`relative ${className}`}>
      <label className="block text-sm font-medium mb-1 text-indigo-200">
        {label}
      </label>
      <input
        type="number"
        min="1"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full bg-white/5 border border-indigo-300/30 rounded-md py-2 px-3 
                  text-white placeholder-indigo-300/50 focus:outline-none focus:ring-2 
                  focus:ring-blue-400 focus:border-transparent transition-all duration-200"
      />
    </div>
  );
};