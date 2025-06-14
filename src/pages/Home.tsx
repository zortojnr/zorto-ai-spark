
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Code, Brain, Zap } from 'lucide-react';

const Home = () => {
  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      {/* Grid Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:50px_50px]" />
      
      {/* Gradient Orbs */}
      <div className="absolute top-20 left-20 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Hero Section */}
        <div className="min-h-screen flex items-center">
          <div className="max-w-4xl">
            <div className="mb-6">
              <div className="inline-flex items-center px-4 py-2 bg-purple-500/20 border border-purple-500/30 rounded-full text-purple-300 text-sm mb-8">
                <Brain className="w-4 h-4 mr-2" />
                AI Software Developer
              </div>
            </div>
            
            <h1 className="text-6xl md:text-8xl font-bold leading-tight mb-8">
              <span className="text-white">Zorto</span>
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                Richard
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-white/70 mb-12 max-w-3xl leading-relaxed">
              Building intelligent, full-stack systems that solve real-world problems. 
              Specializing in AI integration, automation, and developer-focused solutions.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6">
              <Link
                to="/work"
                className="group inline-flex items-center px-8 py-4 bg-purple-600 hover:bg-purple-700 text-white rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105"
              >
                Explore My Work
                <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Link>
              
              <Link
                to="/about"
                className="group inline-flex items-center px-8 py-4 border border-white/20 hover:border-purple-400 text-white hover:text-purple-400 rounded-lg font-semibold text-lg transition-all duration-300"
              >
                Learn About Me
                <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="py-20 border-t border-white/10">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="group p-8 border border-white/10 rounded-xl hover:border-purple-500/50 transition-all duration-300 hover:bg-white/5">
              <Code className="w-12 h-12 text-purple-400 mb-6" />
              <h3 className="text-xl font-semibold mb-4">Full-Stack Development</h3>
              <p className="text-white/70">Building scalable applications with modern frameworks and clean, maintainable code.</p>
            </div>
            
            <div className="group p-8 border border-white/10 rounded-xl hover:border-purple-500/50 transition-all duration-300 hover:bg-white/5">
              <Brain className="w-12 h-12 text-purple-400 mb-6" />
              <h3 className="text-xl font-semibold mb-4">AI Integration</h3>
              <p className="text-white/70">Seamlessly integrating AI capabilities to enhance user experiences and automate complex tasks.</p>
            </div>
            
            <div className="group p-8 border border-white/10 rounded-xl hover:border-purple-500/50 transition-all duration-300 hover:bg-white/5">
              <Zap className="w-12 h-12 text-purple-400 mb-6" />
              <h3 className="text-xl font-semibold mb-4">Real-Time Solutions</h3>
              <p className="text-white/70">Creating responsive, real-time applications for health, education, and productivity sectors.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
