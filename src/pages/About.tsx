
import React, { useState } from 'react';
import { Code, Database, Brain, Zap, User, MapPin } from 'lucide-react';

const About = () => {
  const [activeTab, setActiveTab] = useState('what-i-do');

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
    <div className="min-h-screen bg-black relative">
      {/* Grid Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Column - Profile */}
          <div>
            <div className="mb-8">
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-purple-400">
                  About Me
                </span>
              </h1>
              
              <div className="inline-flex items-center px-4 py-2 bg-green-500/20 border border-green-500/30 rounded-full text-green-300 text-sm mb-8">
                <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse" />
                Available for Work
              </div>
            </div>

            {/* Profile Image */}
            <div className="relative mb-8">
              <div className="w-64 h-64 rounded-2xl border border-white/10 overflow-hidden mx-auto lg:mx-0">
                <img 
                  src="/lovable-uploads/29af58c9-a9ce-4589-9e3a-bcb265ee97e3.png" 
                  alt="Zorto Richard Profile" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-purple-500/20 rounded-full blur-xl" />
            </div>

            {/* Location */}
            <div className="flex items-center text-white/70 mb-8">
              <MapPin className="w-5 h-5 mr-2" />
              Lagos, Nigeria
            </div>

            {/* Bio */}
            <div className="prose prose-invert max-w-none">
              <p className="text-lg text-white/80 leading-relaxed mb-6">
                I'm <span className="text-purple-400 font-semibold">Zorto Richard</span>, an AI Software Developer with 4 years of experience in building full-stack systems enhanced with artificial intelligence.
              </p>
              <p className="text-lg text-white/80 leading-relaxed mb-6">
                I specialize in creating real-time tools across health, education, and productivity sectors, focusing on seamless AI integration that enhances user experiences and solves complex problems.
              </p>
              <p className="text-lg text-white/80 leading-relaxed">
                My approach combines technical excellence with user-centered design, ensuring that every solution is not just functional, but intuitive and impactful.
              </p>
            </div>
          </div>

          {/* Right Column - Skills */}
          <div>
            <h2 className="text-3xl font-bold mb-8 text-white">Skills & Expertise</h2>
            
            {/* Tab Navigation */}
            <div className="flex flex-wrap gap-2 mb-8">
              {tabs.map((tab) => {
                const IconComponent = tab.icon;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`inline-flex items-center px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                      activeTab === tab.id
                        ? 'bg-purple-600 text-white'
                        : 'bg-white/10 text-white/70 hover:bg-white/20'
                    }`}
                  >
                    <IconComponent className="w-4 h-4 mr-2" />
                    {tab.label}
                  </button>
                );
              })}
            </div>

            {/* Skills Grid */}
            <div className="grid grid-cols-2 gap-4">
              {skills[activeTab as keyof typeof skills].map((skill, index) => (
                <div
                  key={skill}
                  className="p-4 bg-white/5 border border-white/10 rounded-lg hover:border-purple-500/50 transition-all duration-300 group"
                  style={{
                    animationDelay: `${index * 100}ms`
                  }}
                >
                  <div className="flex items-center">
                    <Zap className="w-4 h-4 text-purple-400 mr-3 opacity-60 group-hover:opacity-100 transition-opacity" />
                    <span className="text-white/90 font-medium">{skill}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Contact CTA */}
            <div className="mt-12 p-6 bg-gradient-to-r from-purple-500/20 to-blue-500/20 border border-purple-500/30 rounded-xl">
              <h3 className="text-xl font-semibold mb-2">Let's Work Together</h3>
              <p className="text-white/70 mb-4">
                Interested in collaborating or have a project in mind? I'm always open to discussing new opportunities.
              </p>
              <a
                href="/contact"
                className="inline-flex items-center px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-lg font-medium transition-colors"
              >
                Get In Touch
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
