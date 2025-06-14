
import React, { useEffect, useState } from 'react';
import { ExternalLink, Github, Clock, Sparkles } from 'lucide-react';

const Work = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const projects = [
    {
      id: 1,
      title: "ColAI – Collaborative AI",
      description: "Next-generation collaborative AI platform for team productivity and intelligent workflow automation.",
      image: "/lovable-uploads/f03cdc4c-8b23-4bb4-927d-a624f93ccc2c.png",
      tech: ["Python", "OpenAI API", "React", "FastAPI", "PostgreSQL"],
      status: "coming-soon",
      github: null,
      live: null
    },
    {
      id: 2,
      title: "Calorie Tracker AI",
      description: "Image recognition-based nutrition system with fitness API integration for personalized health tracking.",
      image: "/lovable-uploads/804925b6-2a61-4779-84a5-6e239cbfe4c8.png",
      tech: ["TensorFlow", "Computer Vision", "Node.js", "MongoDB", "React Native"],
      status: "completed",
      github: "#",
      live: "#"
    },
    {
      id: 3,
      title: "EduPrompt",
      description: "AI tutor using user behavior analytics to personalize learning content and optimize educational outcomes.",
      image: "/lovable-uploads/bf649ee6-ce19-4986-b881-e37e67a762bd.png",
      tech: ["LangChain", "Pinecone", "Next.js", "Supabase", "Tailwind CSS"],
      status: "completed",
      github: "#",
      live: "#"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-950 relative">
      {/* Enhanced Grid Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(147,51,234,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(147,51,234,0.08)_1px,transparent_1px)] bg-[size:60px_60px]" />
      
      {/* Enhanced Gradient Orbs */}
      <div className="absolute top-20 left-20 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-600/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
        {/* Header */}
        <div className={`mb-16 transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-purple-400 to-pink-400">
              Selected Work
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl">
            A collection of projects showcasing AI integration, full-stack development, and innovative solutions across various domains.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="space-y-12">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`group relative border border-purple-500/20 rounded-2xl overflow-hidden hover:border-purple-400/50 transition-all duration-700 hover:bg-gradient-to-br hover:from-purple-900/10 hover:to-pink-900/10 backdrop-blur-sm hover:scale-[1.02] hover:shadow-2xl hover:shadow-purple-500/20 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
              style={{ transitionDelay: `${index * 0.2}s` }}
            >
              <div className="grid lg:grid-cols-2 gap-0">
                {/* Image */}
                <div className="relative overflow-hidden aspect-video lg:aspect-auto bg-gradient-to-br from-gray-900/50 to-gray-800/50 flex items-center justify-center">
                  <img
                    src={project.image}
                    alt={project.title}
                    className={`${
                      project.id === 1 
                        ? "w-48 h-48 object-contain" 
                        : project.id === 3 
                        ? "w-32 h-32 object-contain filter brightness-0 invert group-hover:brightness-75" 
                        : "w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    }`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-gray-900/60 via-transparent to-transparent" />
                  
                  {project.status === 'coming-soon' && (
                    <div className="absolute top-6 left-6 inline-flex items-center px-4 py-2 bg-gradient-to-r from-purple-600/30 to-pink-600/30 border border-purple-400/50 rounded-full text-purple-300 text-sm backdrop-blur-sm">
                      <Clock className="w-4 h-4 mr-2" />
                      <Sparkles className="w-3 h-3 mr-1 animate-pulse" />
                      Coming Soon
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-8 lg:p-12 flex flex-col justify-center bg-gradient-to-br from-gray-900/30 to-gray-800/30">
                  <h3 className="text-3xl font-bold mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 transition-all duration-500">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 text-lg mb-6 leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                    {project.description}
                  </p>
                  
                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-gradient-to-r from-purple-600/20 to-pink-600/20 border border-purple-500/30 rounded-full text-sm text-gray-300 hover:border-purple-400/50 hover:text-white transition-all duration-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  {project.status === 'completed' && (
                    <div className="flex gap-4">
                      <a
                        href={project.github}
                        className="group/btn relative inline-flex items-center px-6 py-3 bg-gradient-to-r from-gray-800 to-gray-900 border-2 border-purple-500/50 text-white rounded-lg font-medium transition-all duration-500 hover:scale-105 hover:border-purple-400 hover:shadow-lg hover:shadow-purple-500/25 overflow-hidden"
                      >
                        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300" />
                        <Github className="w-4 h-4 mr-2 relative z-10" />
                        <span className="relative z-10">Code</span>
                      </a>
                      <a
                        href={project.live}
                        className="group/btn relative inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 text-white rounded-lg font-medium transition-all duration-500 hover:scale-105 hover:shadow-xl hover:shadow-purple-500/40 overflow-hidden"
                      >
                        <div className="absolute inset-0 bg-gradient-to-r from-purple-700 via-pink-700 to-blue-700 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300" />
                        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.1)_50%,transparent_75%)] group-hover/btn:animate-pulse" />
                        <ExternalLink className="w-4 h-4 mr-2 relative z-10" />
                        <span className="relative z-10">Live Demo</span>
                        <Sparkles className="w-3 h-3 ml-2 relative z-10 animate-pulse" />
                      </a>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
