
import React, { useState, useEffect } from 'react';
import { Code, Database, Brain, Zap, User, MapPin, Sparkles } from 'lucide-react';

const About = () => {
  const [activeTab, setActiveTab] = useState('what-i-do');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const skills = {
    'what-i-do': [
      'Full-stack Development',
      'AI Integration & Automation',
      'Real-time System Architecture',
      'API Design & Development',
      'Database Optimization',
      'Cloud Infrastructure'
    ],
    'what-i-build': [
      'Intelligent Web Applications',
      'AI-Powered Tools',
      'Real-time Collaboration Platforms',
      'Educational Technology Solutions',
      'Health & Fitness Applications',
      'Developer Productivity Tools'
    ],
    'languages': [
      'Python',
      'JavaScript',
      'TypeScript',
      'SQL',
      'HTML/CSS',
      'Bash/Shell'
    ],
    'ai-tools': [
      'OpenAI API',
      'LangChain',
      'TensorFlow',
      'Hugging Face',
      'Pinecone',
      'Computer Vision APIs'
    ]
  };

  const tabs = [
    { id: 'what-i-do', label: 'What I Do', icon: User },
    { id: 'what-i-build', label: 'What I Build', icon: Code },
    { id: 'languages', label: 'Languages', icon: Database },
    { id: 'ai-tools', label: 'AI Tools', icon: Brain }
  ];

  return (
    <div className="min-h-screen bg-gray-950 relative">
      {/* Enhanced Grid Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(30,58,138,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(30,58,138,0.08)_1px,transparent_1px)] bg-[size:30px_30px] md:bg-[size:60px_60px]" />
      
      {/* Enhanced Gradient Orbs */}
      <div className="absolute top-10 left-5 md:top-20 md:left-20 w-48 h-48 md:w-96 md:h-96 bg-blue-900/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-10 right-5 md:bottom-20 md:right-20 w-48 h-48 md:w-96 md:h-96 bg-slate-800/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6 py-10 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 items-start">
          {/* Left Column - Profile */}
          <div className={`transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="mb-6 md:mb-8">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-400 to-slate-400">
                  About Me
                </span>
              </h1>
              
              <div className="inline-flex items-center px-4 py-2 md:px-6 md:py-3 bg-gradient-to-r from-green-600/30 to-emerald-600/30 border border-green-500/50 rounded-full text-green-300 text-sm mb-6 md:mb-8 backdrop-blur-sm hover:from-green-600/40 hover:to-emerald-600/40 transition-all duration-300">
                <div className="w-2 h-2 bg-green-400 rounded-full mr-2 md:mr-3 animate-pulse" />
                <Sparkles className="w-4 h-4 mr-1 md:mr-2" />
                Available for Work
              </div>
            </div>

            {/* Profile Image */}
            <div className={`relative mb-6 md:mb-8 transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`} style={{ transitionDelay: '0.2s' }}>
              <div className="w-48 h-48 md:w-64 md:h-64 rounded-2xl border-2 border-blue-500/30 overflow-hidden mx-auto lg:mx-0 hover:border-blue-400/50 transition-all duration-500 hover:scale-105 hover:shadow-xl hover:shadow-blue-500/20">
                <img 
                  src="/lovable-uploads/29af58c9-a9ce-4589-9e3a-bcb265ee97e3.png" 
                  alt="Zorto Richard Profile" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-16 h-16 md:w-24 md:h-24 bg-gradient-to-r from-blue-500/30 to-slate-500/30 rounded-full blur-xl animate-pulse" />
              <div className="absolute -top-4 -left-4 w-12 h-12 md:w-16 md:h-16 bg-gradient-to-r from-blue-500/20 to-slate-500/20 rounded-full blur-xl animate-pulse" style={{ animationDelay: '1s' }} />
            </div>

            {/* Location */}
            <div className={`flex items-center justify-center lg:justify-start text-gray-300 mb-6 md:mb-8 transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`} style={{ transitionDelay: '0.4s' }}>
              <MapPin className="w-5 h-5 mr-2 text-blue-400" />
              Yola, Nigeria
            </div>

            {/* Bio */}
            <div className={`prose prose-invert max-w-none transition-all duration-1000 text-center lg:text-left ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`} style={{ transitionDelay: '0.6s' }}>
              <p className="text-base md:text-lg text-gray-300 leading-relaxed mb-4 md:mb-6">
                I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-slate-400 font-semibold">Zorto Richard</span>, an AI Software Developer with 4 years of experience in building full-stack systems enhanced with artificial intelligence.
              </p>
              <p className="text-base md:text-lg text-gray-300 leading-relaxed mb-4 md:mb-6">
                I specialize in creating real-time tools across health, education, and productivity sectors, focusing on seamless AI integration that enhances user experiences and solves complex problems.
              </p>
              <p className="text-base md:text-lg text-gray-300 leading-relaxed">
                My approach combines technical excellence with user-centered design, ensuring that every solution is not just functional, but intuitive and impactful.
              </p>
            </div>
          </div>

          {/* Right Column - Skills */}
          <div className={`transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`} style={{ transitionDelay: '0.8s' }}>
            <h2 className="text-2xl md:text-3xl font-bold mb-6 md:mb-8 text-white text-center lg:text-left">Skills & Expertise</h2>
            
            {/* Tab Navigation */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-2 mb-6 md:mb-8">
              {tabs.map((tab) => {
                const IconComponent = tab.icon;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`inline-flex items-center px-3 py-2 md:px-4 text-xs md:text-sm rounded-lg font-medium transition-all duration-300 ${
                      activeTab === tab.id
                        ? 'bg-gradient-to-r from-blue-600 to-slate-600 text-white shadow-lg shadow-blue-500/25'
                        : 'bg-gradient-to-r from-gray-800/50 to-gray-900/50 text-gray-300 hover:from-blue-600/20 hover:to-slate-600/20 hover:text-white border border-blue-500/20 hover:border-blue-400/50'
                    }`}
                  >
                    <IconComponent className="w-3 h-3 md:w-4 md:h-4 mr-1 md:mr-2" />
                    <span className="hidden sm:inline">{tab.label}</span>
                    <span className="sm:hidden">{tab.label.split(' ')[0]}</span>
                  </button>
                );
              })}
            </div>

            {/* Skills Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
              {skills[activeTab as keyof typeof skills].map((skill, index) => (
                <div
                  key={skill}
                  className={`p-3 md:p-4 bg-gradient-to-br from-gray-900/50 to-gray-800/50 border border-blue-500/20 rounded-lg hover:border-blue-400/50 transition-all duration-500 group hover:scale-105 hover:shadow-lg hover:shadow-blue-500/20 backdrop-blur-sm ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
                  style={{
                    transitionDelay: `calc(1s + ${index * 100}ms)`
                  }}
                >
                  <div className="flex items-center">
                    <Zap className="w-4 h-4 text-blue-400 mr-2 md:mr-3 opacity-60 group-hover:opacity-100 transition-all duration-300 group-hover:text-blue-300 flex-shrink-0" />
                    <span className="text-gray-200 font-medium group-hover:text-white transition-colors duration-300 text-sm md:text-base">{skill}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Contact CTA */}
            <div className={`mt-8 md:mt-12 p-4 md:p-6 bg-gradient-to-r from-blue-600/20 via-slate-600/20 to-blue-600/20 border-2 border-blue-500/50 rounded-xl backdrop-blur-sm hover:border-blue-400/70 hover:shadow-xl hover:shadow-blue-500/20 transition-all duration-500 hover:scale-105 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`} style={{ transitionDelay: '1.2s' }}>
              <h3 className="text-lg md:text-xl font-semibold mb-2 text-white">Let's Work Together</h3>
              <p className="text-gray-300 mb-4 text-sm md:text-base">
                Interested in collaborating or have a project in mind? I'm always open to discussing new opportunities.
              </p>
              <a
                href="/contact"
                className="group relative inline-flex items-center px-4 py-2 md:px-6 md:py-3 bg-gradient-to-r from-blue-600 via-slate-600 to-blue-600 text-white rounded-lg font-medium transition-all duration-500 hover:scale-105 hover:shadow-xl hover:shadow-blue-500/40 overflow-hidden text-sm md:text-base"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-700 via-slate-700 to-blue-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.1)_50%,transparent_75%)] group-hover:animate-pulse" />
                <span className="relative z-10">Get In Touch</span>
                <Sparkles className="w-4 h-4 ml-2 relative z-10 animate-pulse" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
