
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Code, Brain, Zap, Sparkles } from 'lucide-react';

const Home = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-gray-950 relative overflow-hidden">
      {/* Enhanced Grid Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(147,51,234,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(147,51,234,0.1)_1px,transparent_1px)] bg-[size:60px_60px]" />
      
      {/* Enhanced Gradient Orbs */}
      <div className="absolute top-10 left-10 w-[500px] h-[500px] bg-purple-600/30 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-blue-600/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-pink-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
      
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Hero Section */}
        <div className="min-h-screen flex items-center">
          <div className={`max-w-4xl transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="mb-6">
              <div className={`inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-600/30 to-pink-600/30 border border-purple-500/50 rounded-full text-purple-300 text-sm mb-8 backdrop-blur-sm transition-all duration-700 hover:from-purple-600/40 hover:to-pink-600/40 hover:border-purple-400/70 hover:shadow-lg hover:shadow-purple-500/25 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`} style={{ transitionDelay: '0.2s' }}>
                <Brain className="w-5 h-5 mr-3" />
                <Sparkles className="w-4 h-4 mr-2 animate-pulse" />
                AI Software Developer
              </div>
            </div>
            
            <h1 className={`text-6xl md:text-8xl font-bold leading-tight mb-8 transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`} style={{ transitionDelay: '0.4s' }}>
              <span className="text-white">Zorto</span>
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 animate-pulse">
                Richard
              </span>
            </h1>
            
            <p className={`text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl leading-relaxed transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`} style={{ transitionDelay: '0.6s' }}>
              Building intelligent, full-stack systems that solve real-world problems. 
              Specializing in AI integration, automation, and developer-focused solutions.
            </p>
            
            <div className={`flex flex-col sm:flex-row gap-6 transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`} style={{ transitionDelay: '0.8s' }}>
              <Link
                to="/work"
                className="group relative inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 text-white rounded-xl font-semibold text-lg transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/50 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-purple-700 via-pink-700 to-blue-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.1)_50%,transparent_75%)] group-hover:animate-pulse" />
                <Sparkles className="mr-3 w-5 h-5 relative z-10" />
                <span className="relative z-10">Explore My Work</span>
                <ArrowRight className="ml-3 w-5 h-5 transition-transform group-hover:translate-x-2 relative z-10" />
              </Link>
              
              <Link
                to="/about"
                className="group relative inline-flex items-center px-8 py-4 bg-gradient-to-r from-gray-800 to-gray-900 border-2 border-purple-500/50 text-white rounded-xl font-semibold text-lg transition-all duration-500 hover:scale-105 hover:border-purple-400 hover:shadow-2xl hover:shadow-purple-500/30 overflow-hidden backdrop-blur-sm"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.05)_50%,transparent_75%)] group-hover:animate-pulse" />
                <span className="relative z-10">Learn About Me</span>
                <ArrowRight className="ml-3 w-5 h-5 transition-transform group-hover:translate-x-2 relative z-10" />
              </Link>
            </div>
          </div>
        </div>

        {/* Enhanced Features Section */}
        <div className="py-20 border-t border-purple-500/20">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Code,
                title: "Full-Stack Development",
                description: "Building scalable applications with modern frameworks and clean, maintainable code.",
                delay: "0s"
              },
              {
                icon: Brain,
                title: "AI Integration",
                description: "Seamlessly integrating AI capabilities to enhance user experiences and automate complex tasks.",
                delay: "0.2s"
              },
              {
                icon: Zap,
                title: "Real-Time Solutions",
                description: "Creating responsive, real-time applications for health, education, and productivity sectors.",
                delay: "0.4s"
              }
            ].map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div
                  key={index}
                  className={`group p-8 bg-gradient-to-br from-gray-900/50 to-gray-800/50 border border-purple-500/20 rounded-xl hover:border-purple-400/50 transition-all duration-500 hover:bg-gradient-to-br hover:from-purple-900/20 hover:to-pink-900/20 hover:scale-105 hover:shadow-xl hover:shadow-purple-500/20 backdrop-blur-sm ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
                  style={{ transitionDelay: `calc(1s + ${feature.delay})` }}
                >
                  <div className="relative">
                    <IconComponent className="w-12 h-12 text-purple-400 mb-6 group-hover:text-purple-300 transition-colors duration-300" />
                    <div className="absolute -top-2 -left-2 w-16 h-16 bg-purple-500/10 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-white group-hover:text-purple-300 transition-colors duration-300">{feature.title}</h3>
                  <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
