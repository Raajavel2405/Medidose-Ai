import React from 'react';
import { Link } from 'react-router-dom';
import { Pill, Shield, Brain, Database, Activity } from 'lucide-react';
import Spline from '@splinetool/react-spline';

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen relative">
      {/* Spline Background */}
      <div className="absolute inset-0 w-full h-full overflow-hidden z-0">
        <Spline scene="https://prod.spline.design/iTicWFMlGdZsIQ6Y/scene.splinecode" />
      </div>
      
      {/* Content with higher z-index to appear above the Spline background */}
      <div className="relative z-10 flex flex-col min-h-screen">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-indigo-700 to-purple-700 bg-opacity-80 backdrop-filter backdrop-blur-sm text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl md:text-5xl font-bold mb-6">
                  Personalized Drug Dosage Recommendations
                </h1>
                <p className="text-xl mb-8">
                  Leveraging AI and blockchain technology to provide precise, 
                  personalized medication dosages for improved patient outcomes.
                </p>
                <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                  <Link 
                    to="/predict" 
                    className="bg-white text-indigo-700 px-6 py-3 rounded-md font-medium text-center hover:bg-gray-100 transition"
                  >
                    Get Started
                  </Link>
                  <Link 
                    to="/about" 
                    className="border border-white text-white px-6 py-3 rounded-md font-medium text-center hover:bg-white hover:bg-opacity-20 transition"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
              <div className="hidden md:block">
                <img 
                  src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                  alt="Medical Technology" 
                  className="rounded-lg shadow-xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 bg-white bg-opacity-95">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">How It Works</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our platform combines machine learning with blockchain technology to deliver 
                accurate, transparent, and secure drug dosage recommendations.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-gray-50 bg-opacity-90 p-6 rounded-lg shadow-md backdrop-filter backdrop-blur-sm">
                <div className="bg-indigo-100 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <Database className="h-6 w-6 text-indigo-700" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Data Collection</h3>
                <p className="text-gray-600">
                  Securely input patient data including age, weight, genetic markers, and medical history.
                </p>
              </div>

              <div className="bg-gray-50 bg-opacity-90 p-6 rounded-lg shadow-md backdrop-filter backdrop-blur-sm">
                <div className="bg-indigo-100 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <Brain className="h-6 w-6 text-indigo-700" />
                </div>
                <h3 className="text-xl font-semibold mb-2">AI Analysis</h3>
                <p className="text-gray-600">
                  Our machine learning models analyze the data to determine optimal drug dosages.
                </p>
              </div>

              <div className="bg-gray-50 bg-opacity-90 p-6 rounded-lg shadow-md backdrop-filter backdrop-blur-sm">
                <div className="bg-indigo-100 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <Shield className="h-6 w-6 text-indigo-700" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Blockchain Verification</h3>
                <p className="text-gray-600">
                  Recommendations are securely recorded on the blockchain for transparency and auditability.
                </p>
              </div>

              <div className="bg-gray-50 bg-opacity-90 p-6 rounded-lg shadow-md backdrop-filter backdrop-blur-sm">
                <div className="bg-indigo-100 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <Activity className="h-6 w-6 text-indigo-700" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Personalized Results</h3>
                <p className="text-gray-600">
                  Receive accurate dosage recommendations tailored to individual patient characteristics.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="bg-indigo-100 bg-opacity-90 backdrop-filter backdrop-blur-sm py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-indigo-800 mb-4">Ready to Get Started?</h2>
            <p className="text-xl text-indigo-600 mb-8 max-w-3xl mx-auto">
              Experience the future of personalized medicine with our AI-powered dosage recommendation platform.
            </p>
            <Link 
              to="/predict" 
              className="bg-indigo-700 text-white px-8 py-4 rounded-md font-medium text-lg hover:bg-indigo-800 transition"
            >
              Make Your First Prediction
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;