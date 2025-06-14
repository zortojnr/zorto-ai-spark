
import React from 'react';
import { ExternalLink, Github, Clock } from 'lucide-react';

const Work = () => {
  const projects = [
    {
      id: 1,
      title: "ColAI – Collaborative AI",
      description: "Next-generation collaborative AI platform for team productivity and intelligent workflow automation.",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3440&q=80",
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
    <div className="min-h-screen bg-black relative">
      {/* Grid Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
        {/* Header */}
        <div className="mb-16">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-purple-400">
              Selected Work
            </span>
          </h1>
          <p className="text-xl text-white/70 max-w-2xl">
            A collection of projects showcasing AI integration, full-stack development, and innovative solutions across various domains.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="space-y-12">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group relative border border-white/10 rounded-2xl overflow-hidden hover:border-purple-500/50 transition-all duration-500 hover:bg-white/5"
            >
              <div className="grid lg:grid-cols-2 gap-0">
                {/* Image */}
                <div className="relative overflow-hidden aspect-video lg:aspect-auto bg-white/5 flex items-center justify-center">
                  <img
                    src={project.image}
                    alt={project.title}
                    className={`${
                      project.id === 3 
                        ? "w-32 h-32 object-contain filter brightness-0 invert" 
                        : "w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    }`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent" />
                  
                  {project.status === 'coming-soon' && (
                    <div className="absolute top-6 left-6 inline-flex items-center px-3 py-1 bg-purple-500/20 border border-purple-500/30 rounded-full text-purple-300 text-sm">
                      <Clock className="w-4 h-4 mr-2" />
                      Coming Soon
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <h3 className="text-3xl font-bold mb-4 group-hover:text-purple-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-white/70 text-lg mb-6 leading-relaxed">
                    {project.description}
                  </p>
                  
                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-white/10 border border-white/20 rounded-full text-sm text-white/80"
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
                        className="inline-flex items-center px-4 py-2 border border-white/20 hover:border-purple-400 text-white hover:text-purple-400 rounded-lg transition-all duration-300"
                      >
                        <Github className="w-4 h-4 mr-2" />
                        Code
                      </a>
                      <a
                        href={project.live}
                        className="inline-flex items-center px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition-all duration-300"
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Live Demo
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
