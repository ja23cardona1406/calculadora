import React from 'react';
import { Calculator } from './components/Calculator';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { EducationalSection } from './components/EducationalSection';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-800 to-indigo-700 text-white">
      <div className="container mx-auto px-4 py-8">
        <Header />
        <main className="my-8">
          <Calculator />
          <EducationalSection />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;