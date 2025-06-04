import React from 'react';
import { BookOpen, HelpCircle, Network, LayoutGrid } from 'lucide-react';

export const EducationalSection: React.FC = () => {
  return (
    <section className="mt-16 bg-white/5 backdrop-blur-md rounded-xl p-8 border border-white/10">
      <div className="flex items-center mb-6">
        <BookOpen className="h-6 w-6 mr-2 text-yellow-300" />
        <h2 className="text-2xl font-semibold">Understanding Neural Network Parameters</h2>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-medium mb-3 flex items-center">
              <LayoutGrid className="h-5 w-5 mr-2 text-blue-300" />
              Convolutional Neural Networks (CNNs)
            </h3>
            <p className="text-indigo-200 mb-3">
              CNNs use a technique called parameter sharing which significantly reduces the number of parameters
              compared to fully connected networks.
            </p>
            <div className="bg-white/5 p-4 rounded-lg">
              <h4 className="text-lg font-medium mb-2 text-blue-300">Parameter Formula</h4>
              <p className="font-mono text-sm mb-2">
                Parameters = (Kernel × Kernel × Input Channels × Filters) + Bias
              </p>
              <p className="text-sm text-indigo-200">
                For a 3×3 kernel with 3 input channels and 32 filters: (3 × 3 × 3 × 32) + 32 = 896 parameters
              </p>
            </div>
          </div>
          
          <div className="bg-white/5 p-4 rounded-lg">
            <h4 className="text-lg font-medium mb-2 text-yellow-300">Parameter Sharing in CNNs</h4>
            <p className="text-sm text-indigo-200 mb-2">
              In CNNs, the same filter weights are applied across the entire image, 
              regardless of image size. This is why the image dimensions (width, height) 
              don't affect the parameter count.
            </p>
            <p className="text-sm text-indigo-200">
              This concept, known as parameter sharing, allows CNNs to be much more 
              efficient for image processing tasks.
            </p>
          </div>
        </div>
        
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-medium mb-3 flex items-center">
              <Network className="h-5 w-5 mr-2 text-purple-300" />
              Multilayer Perceptrons (MLPs)
            </h3>
            <p className="text-indigo-200 mb-3">
              MLPs, also known as Dense or Fully Connected layers, connect every input neuron
              to every output neuron, resulting in many more parameters.
            </p>
            <div className="bg-white/5 p-4 rounded-lg">
              <h4 className="text-lg font-medium mb-2 text-purple-300">Parameter Formula</h4>
              <p className="font-mono text-sm mb-2">
                Parameters = (Input Neurons × Output Neurons) + Bias
              </p>
              <p className="text-sm text-indigo-200">
                For 784 input neurons (28×28 image) and 128 output neurons: (784 × 128) + 128 = 100,480 parameters
              </p>
            </div>
          </div>
          
          <div className="bg-white/5 p-4 rounded-lg">
            <h4 className="text-lg font-medium mb-2 text-yellow-300">Why MLPs Have More Parameters</h4>
            <p className="text-sm text-indigo-200 mb-2">
              MLPs require a separate weight for each connection between every input and output neuron.
              This creates a fully connected structure that scales poorly with input size.
            </p>
            <p className="text-sm text-indigo-200">
              For example, a single 28×28 image (784 pixels) connected to just 128 neurons already 
              has over 100,000 parameters, while a similar CNN might have under 1,000.
            </p>
          </div>
        </div>
      </div>
      
      <div className="mt-8 bg-gradient-to-r from-blue-500/20 to-purple-500/20 p-4 rounded-lg">
        <div className="flex items-start">
          <HelpCircle className="h-5 w-5 mr-2 text-yellow-300 flex-shrink-0 mt-1" />
          <div>
            <h4 className="text-lg font-medium mb-2">Why This Matters</h4>
            <p className="text-indigo-200 mb-2">
              Understanding parameter counts helps you:
            </p>
            <ul className="list-disc pl-5 text-indigo-200 space-y-1">
              <li>Estimate memory requirements for your models</li>
              <li>Choose appropriate architectures for your computational budget</li>
              <li>Avoid overfitting by controlling model capacity</li>
              <li>Optimize inference speed for deployment</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};