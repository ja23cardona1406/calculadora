import React, { useState, useEffect } from 'react';
import { InputField } from './InputField';
import { ResultDisplay } from './ResultDisplay';
import { ToggleField } from './ToggleField';
import { Calculator, LayoutGrid } from 'lucide-react';

export const CNNCalculator: React.FC = () => {
  const [width, setWidth] = useState<number>(148);
  const [height, setHeight] = useState<number>(148);
  const [inputChannels, setInputChannels] = useState<number>(3);
  const [filters, setFilters] = useState<number>(32);
  const [kernelSize, setKernelSize] = useState<number>(3);
  const [includeBias, setIncludeBias] = useState<boolean>(true);
  const [totalParams, setTotalParams] = useState<number>(0);
  const [weightParams, setWeightParams] = useState<number>(0);
  const [biasParams, setBiasParams] = useState<number>(0);

  useEffect(() => {
    // Calculate parameters
    const weights = kernelSize * kernelSize * inputChannels * filters;
    const bias = includeBias ? filters : 0;
    
    setWeightParams(weights);
    setBiasParams(bias);
    setTotalParams(weights + bias);
  }, [width, height, inputChannels, filters, kernelSize, includeBias]);

  return (
    <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 shadow-lg border border-white/20 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
      <div className="flex items-center mb-4">
        <LayoutGrid className="h-6 w-6 mr-2 text-blue-300" />
        <h2 className="text-2xl font-semibold">CNN Parameters Calculator</h2>
      </div>
      
      <div className="grid grid-cols-2 gap-4 mb-6">
        <InputField 
          label="Image Width" 
          value={width} 
          onChange={(value) => setWidth(Number(value))}
        />
        <InputField 
          label="Image Height" 
          value={height} 
          onChange={(value) => setHeight(Number(value))}
        />
        <InputField 
          label="Input padding" 
          value={inputChannels} 
          onChange={(value) => setInputChannels(Number(value))}
        />
        <InputField 
          label="Number of Filters" 
          value={filters} 
          onChange={(value) => setFilters(Number(value))}
        />
        <InputField 
          label="Kernel Size" 
          value={kernelSize} 
          onChange={(value) => setKernelSize(Number(value))}
        />
        <ToggleField 
          label="Include Bias" 
          checked={includeBias} 
          onChange={setIncludeBias}
        />
      </div>
      
      <div className="mb-6">
        <h3 className="text-lg font-medium mb-2 text-blue-300">Formula</h3>
        <div className="bg-white/5 p-3 rounded-lg">
          <p className="font-mono text-sm">
            Parameters = (Kernel × Kernel × Input padding × Filters) {includeBias ? '+ Filters' : ''}
          </p>
          <p className="font-mono text-sm mt-1">
            Parameters = ({kernelSize} × {kernelSize} × {inputChannels} × {filters}) {includeBias ? `+ ${filters}` : ''}
          </p>
        </div>
      </div>
      
      <ResultDisplay
        totalParams={totalParams}
        weightParams={weightParams}
        biasParams={biasParams}
      />
    </div>
  );
};