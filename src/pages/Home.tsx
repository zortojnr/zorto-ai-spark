
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Code, Brain, Zap, Sparkles, MapPin, Calendar, Users, Award } from 'lucide-react';

const Home = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [counters, setCounters] = useState({ projects: 0, clients: 0, experience: 0 });

  useEffect(() => {
    setIsVisible(true);
    
    // Animate counters
    const animateCounters = () => {
      const targets = { projects: 15, clients: 8, experience: 3 };
      const duration = 2000;
      const steps = 60;
      const stepTime = duration / steps;
      
      let currentStep = 0;
      const timer = setInterval(() => {
        currentStep++;
        const progress = currentStep / steps;
        
        setCounters({
          projects: Math.floor(targets.projects * progress),
          clients: Math.floor(targets.clients * progress),
          experience: Math.floor(targets.experience * progress)
        });
        
        if (currentStep >= steps) clearInterval(timer);
      }, stepTime);
    };
    
    const timer = setTimeout(animateCounters, 1000);
    return () => clearTimeout(timer);
  }, []);

  const skills = [
    'React', 'TypeScript', 'Python', 'AI/ML', 'Node.js', 
    'PostgreSQL', 'FastAPI', 'TensorFlow', 'Docker', 'AWS'
  ];

  return (
    <div className="min-h-screen bg-gray-950 relative overflow-hidden">
      {/* Enhanced Grid Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(30,58,138,0.15)_1px,transparent_1px),linear-gradient(90deg,rgba(30,58,138,0.15)_1px,transparent_1px)] bg-[size:40px_40px] animate-pulse" />
      
      {/* Floating Particles */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-2 h-2 bg-blue-400/40 rounded-full animate-bounce" style={{ animationDelay: '0s' }} />
        <div className="absolute top-40 right-20 w-1 h-1 bg-slate-400/30 rounded-full animate-bounce" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-40 left-1/4 w-1.5 h-1.5 bg-blue-300/20 rounded-full animate-bounce" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-slate-300/25 rounded-full animate-bounce" style={{ animationDelay: '1.5s' }} />
      </div>
      
      {/* Enhanced Gradient Orbs */}
      <div className="absolute top-10 left-10 w-[600px] h-[600px] bg-blue-900/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-slate-800/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-blue-700/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '3s' }} />
      
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Hero Section */}
        <div className="min-h-screen flex items-center">
          <div className="grid lg:grid-cols-2 gap-12 items-center w-full">
            {/* Left Content */}
            <div className={`max-w-4xl transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              {/* Location Badge */}
              <div className={`inline-flex items-center px-4 py-2 bg-gradient-to-r from-slate-900/40 to-gray-800/40 border border-slate-600/30 rounded-full text-slate-300 text-sm mb-4 backdrop-blur-sm transition-all duration-700 hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-900/20 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`} style={{ transitionDelay: '0.1s' }}>
                <MapPin className="w-4 h-4 mr-2" />
                Yola, Nigeria
              </div>

              <div className="mb-6">
                <div className={`inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-900/30 to-slate-800/30 border border-blue-700/50 rounded-full text-blue-300 text-sm mb-8 backdrop-blur-sm transition-all duration-700 hover:from-blue-800/40 hover:to-slate-700/40 hover:border-blue-600/70 hover:shadow-xl hover:shadow-blue-900/30 hover:scale-105 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`} style={{ transitionDelay: '0.2s' }}>
                  <Brain className="w-5 h-5 mr-3 animate-pulse" />
                  <Sparkles className="w-4 h-4 mr-2 animate-pulse" />
                  AI Software Developer
                  <div className="ml-3 w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                </div>
              </div>
              
              <h1 className={`text-6xl md:text-8xl font-bold leading-tight mb-8 transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`} style={{ transitionDelay: '0.4s' }}>
                <span className="text-white">Zorto</span>
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-slate-300 to-blue-500 animate-pulse">
                  Richard
                </span>
              </h1>
              
              <p className={`text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl leading-relaxed transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`} style={{ transitionDelay: '0.6s' }}>
                I build intelligent, full-stack systems that solve real-world problems. 
                Specializing in AI integration, automation, and developer-focused solutions.
              </p>

              {/* Stats Section */}
              <div className={`grid grid-cols-3 gap-8 mb-12 transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`} style={{ transitionDelay: '0.7s' }}>
                <div className="text-center group">
                  <div className="text-3xl font-bold text-blue-400 group-hover:text-blue-300 transition-colors duration-300">{counters.projects}+</div>
                  <div className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300">Projects</div>
                </div>
                <div className="text-center group">
                  <div className="text-3xl font-bold text-slate-400 group-hover:text-slate-300 transition-colors duration-300">{counters.clients}+</div>
                  <div className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300">Clients</div>
                </div>
                <div className="text-center group">
                  <div className="text-3xl font-bold text-blue-300 group-hover:text-blue-200 transition-colors duration-300">{counters.experience}+</div>
                  <div className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300">Years</div>
                </div>
              </div>

              {/* Skills Tags */}
              <div className={`flex flex-wrap gap-3 mb-12 transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`} style={{ transitionDelay: '0.75s' }}>
                {skills.map((skill, index) => (
                  <span
                    key={skill}
                    className="px-4 py-2 bg-gradient-to-r from-slate-800/50 to-gray-900/50 border border-slate-600/30 rounded-full text-sm text-slate-300 hover:border-blue-500/50 hover:text-blue-300 hover:scale-105 transition-all duration-300 cursor-default backdrop-blur-sm"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
              
              <div className={`flex flex-col sm:flex-row gap-6 transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`} style={{ transitionDelay: '0.8s' }}>
                <Link
                  to="/work"
                  className="group relative inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-800 via-blue-700 to-slate-700 text-white rounded-xl font-semibold text-lg transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-blue-900/50 overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-900 via-blue-800 to-slate-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.1)_50%,transparent_75%)] group-hover:animate-pulse" />
                  <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-slate-600 rounded-xl blur opacity-0 group-hover:opacity-70 transition-opacity duration-500 -z-10" />
                  <Sparkles className="mr-3 w-5 h-5 relative z-10 animate-pulse" />
                  <span className="relative z-10">Explore My Work</span>
                  <ArrowRight className="ml-3 w-5 h-5 transition-transform group-hover:translate-x-2 relative z-10" />
                </Link>
                
                <Link
                  to="/about"
                  className="group relative inline-flex items-center px-8 py-4 bg-gradient-to-r from-gray-800 to-gray-900 border-2 border-slate-600/50 text-white rounded-xl font-semibold text-lg transition-all duration-500 hover:scale-105 hover:border-blue-500/70 hover:shadow-2xl hover:shadow-blue-900/30 overflow-hidden backdrop-blur-sm"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 to-slate-800/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.05)_50%,transparent_75%)] group-hover:animate-pulse" />
                  <div className="absolute -inset-1 bg-gradient-to-r from-slate-600/50 to-blue-600/50 rounded-xl blur opacity-0 group-hover:opacity-50 transition-opacity duration-500 -z-10" />
                  <span className="relative z-10">Learn About Me</span>
                  <ArrowRight className="ml-3 w-5 h-5 transition-transform group-hover:translate-x-2 relative z-10" />
                </Link>
              </div>
            </div>

            {/* Right Image */}
            <div className={`flex justify-center lg:justify-end transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`} style={{ transitionDelay: '0.5s' }}>
              <div className="relative group">
                <div className="absolute -inset-4 bg-gradient-to-r from-blue-600/20 to-slate-600/20 rounded-3xl blur-2xl opacity-75 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative w-80 h-80 md:w-96 md:h-96 overflow-hidden rounded-2xl border border-blue-500/30 hover:border-blue-400/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-blue-900/50">
                  <img 
                    src="/lovable-uploads/e2454556-9d96-4abe-a096-26b53ab3af46.png" 
                    alt="AI Technology - Human and Robot Hand Connection"
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 via-transparent to-blue-800/10 opacity-50 group-hover:opacity-30 transition-opacity duration-500"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Features Section */}
        <div className="py-20 border-t border-slate-700/30">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Code,
                title: "Full-Stack Development",
                description: "Building scalable applications with modern frameworks and clean, maintainable code architecture.",
                delay: "0s",
                accent: "blue"
              },
              {
                icon: Brain,
                title: "AI Integration",
                description: "Seamlessly integrating AI capabilities to enhance user experiences and automate complex workflows.",
                delay: "0.2s",
                accent: "slate"
              },
              {
                icon: Zap,
                title: "Real-Time Solutions",
                description: "Creating responsive, real-time applications for health, education, and productivity sectors.",
                delay: "0.4s",
                accent: "blue"
              }
            ].map((feature, index) => {
              const IconComponent = feature.icon;
              const accentColor = feature.accent === 'blue' ? 'blue-500' : 'slate-500';
              return (
                <div
                  key={index}
                  className={`group p-8 bg-gradient-to-br from-gray-900/60 to-gray-800/60 border border-slate-700/30 rounded-xl hover:border-${accentColor}/50 transition-all duration-500 hover:bg-gradient-to-br hover:from-${feature.accent}-950/20 hover:to-slate-900/30 hover:scale-105 hover:shadow-xl hover:shadow-${accentColor}/20 backdrop-blur-sm ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
                  style={{ transitionDelay: `calc(1s + ${feature.delay})` }}
                >
                  <div className="relative mb-6">
                    <IconComponent className={`w-12 h-12 text-${accentColor} group-hover:text-${feature.accent}-400 transition-all duration-300 group-hover:scale-110`} />
                    <div className={`absolute -top-2 -left-2 w-16 h-16 bg-${accentColor}/10 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                    <div className="absolute top-0 left-0 w-3 h-3 bg-gradient-to-r from-blue-400 to-slate-400 rounded-full opacity-0 group-hover:opacity-100 animate-ping transition-opacity duration-300" />
                  </div>
                  <h3 className={`text-xl font-semibold mb-4 text-white group-hover:text-${feature.accent}-300 transition-colors duration-300`}>{feature.title}</h3>
                  <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300 leading-relaxed">{feature.description}</p>
                  
                  {/* Feature badge */}
                  <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className={`inline-flex items-center px-3 py-1 bg-${accentColor}/10 border border-${accentColor}/20 rounded-full text-xs text-${accentColor}`}>
                      <Award className="w-3 h-3 mr-1" />
                      Specialized
                    </div>
                  </div>
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
