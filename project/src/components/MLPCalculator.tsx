import React, { useState, useEffect } from 'react';
import { InputField } from './InputField';
import { ResultDisplay } from './ResultDisplay';
import { ToggleField } from './ToggleField';
import { Network, Calculator } from 'lucide-react';

export const MLPCalculator: React.FC = () => {
  const [inputNeurons, setInputNeurons] = useState<number>(784);
  const [outputNeurons, setOutputNeurons] = useState<number>(128);
  const [includeBias, setIncludeBias] = useState<boolean>(true);
  const [totalParams, setTotalParams] = useState<number>(0);
  const [weightParams, setWeightParams] = useState<number>(0);
  const [biasParams, setBiasParams] = useState<number>(0);

  useEffect(() => {
    // Calculate parameters
    const weights = inputNeurons * outputNeurons;
    const bias = includeBias ? outputNeurons : 0;
    
    setWeightParams(weights);
    setBiasParams(bias);
    setTotalParams(weights + bias);
  }, [inputNeurons, outputNeurons, includeBias]);

  return (
    <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 shadow-lg border border-white/20 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
      <div className="flex items-center mb-4">
        <Network className="h-6 w-6 mr-2 text-purple-300" />
        <h2 className="text-2xl font-semibold">MLP Parameters Calculator</h2>
      </div>
      
      <div className="grid grid-cols-2 gap-4 mb-6">
        <InputField 
          label="Input Neurons" 
          value={inputNeurons} 
          onChange={(value) => setInputNeurons(Number(value))}
        />
        <InputField 
          label="Output Neurons" 
          value={outputNeurons} 
          onChange={(value) => setOutputNeurons(Number(value))}
        />
        <ToggleField 
          label="Include Bias" 
          checked={includeBias} 
          onChange={setIncludeBias}
          className="col-span-2"
        />
      </div>
      
      <div className="mb-6">
        <h3 className="text-lg font-medium mb-2 text-purple-300">Formula</h3>
        <div className="bg-white/5 p-3 rounded-lg">
          <p className="font-mono text-sm">
            Parameters = (Input Neurons × Output Neurons) {includeBias ? '+ Output Neurons' : ''}
          </p>
          <p className="font-mono text-sm mt-1">
            Parameters = ({inputNeurons} × {outputNeurons}) {includeBias ? `+ ${outputNeurons}` : ''}
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