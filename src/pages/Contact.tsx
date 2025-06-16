
import React, { useState } from 'react';
import { Mail, Phone, Github, Linkedin, Send, MapPin } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-gray-950 relative">
      {/* Grid Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(30,58,138,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(30,58,138,0.08)_1px,transparent_1px)] bg-[size:30px_30px] md:bg-[size:50px_50px]" />
      
      {/* Gradient Orbs */}
      <div className="absolute top-10 right-5 md:top-20 md:right-20 w-48 h-48 md:w-96 md:h-96 bg-blue-900/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-10 left-5 md:bottom-20 md:left-20 w-48 h-48 md:w-96 md:h-96 bg-slate-800/15 rounded-full blur-3xl animate-pulse" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6 py-10 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 items-start">
          {/* Left Column - Contact Info */}
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 text-center lg:text-left">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-400 to-slate-400">
                Let's Connect
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-white/70 mb-8 md:mb-12 leading-relaxed text-center lg:text-left">
              Ready to bring your next project to life? I'm always excited to discuss new opportunities and collaborate on innovative solutions.
            </p>

            {/* Contact Methods */}
            <div className="space-y-4 md:space-y-6 mb-8 md:mb-12">
              <a
                href="mailto:zortorichard27@gmail.com"
                className="group flex items-center p-3 md:p-4 border border-white/10 rounded-xl hover:border-blue-500/50 transition-all duration-300 hover:bg-white/5"
              >
                <div className="w-10 h-10 md:w-12 md:h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mr-3 md:mr-4 group-hover:bg-blue-500/30 transition-colors">
                  <Mail className="w-5 h-5 md:w-6 md:h-6 text-blue-400" />
                </div>
                <div>
                  <div className="text-white font-medium text-sm md:text-base">Email</div>
                  <div className="text-white/70 text-sm md:text-base">zortorichard27@gmail.com</div>
                </div>
              </a>

              <a
                href="tel:+2349066409957"
                className="group flex items-center p-3 md:p-4 border border-white/10 rounded-xl hover:border-blue-500/50 transition-all duration-300 hover:bg-white/5"
              >
                <div className="w-10 h-10 md:w-12 md:h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mr-3 md:mr-4 group-hover:bg-blue-500/30 transition-colors">
                  <Phone className="w-5 h-5 md:w-6 md:h-6 text-blue-400" />
                </div>
                <div>
                  <div className="text-white font-medium text-sm md:text-base">Phone</div>
                  <div className="text-white/70 text-sm md:text-base">+234 906 640 9957</div>
                </div>
              </a>

              <div className="flex items-center p-3 md:p-4 border border-white/10 rounded-xl">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mr-3 md:mr-4">
                  <MapPin className="w-5 h-5 md:w-6 md:h-6 text-blue-400" />
                </div>
                <div>
                  <div className="text-white font-medium text-sm md:text-base">Location</div>
                  <div className="text-white/70 text-sm md:text-base">Yola, Nigeria</div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h3 className="text-lg font-semibold mb-4 text-center lg:text-left">Find me online</h3>
              <div className="flex justify-center lg:justify-start space-x-4">
                <a
                  href="https://github.com/zortojnr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 md:w-12 md:h-12 bg-white/10 border border-white/20 rounded-lg flex items-center justify-center hover:bg-blue-500/20 hover:border-blue-500/50 transition-all duration-300"
                >
                  <Github className="w-5 h-5 text-white" />
                </a>
                <a
                  href="https://www.linkedin.com/in/zorto-richard-a3ab942b0"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 md:w-12 md:h-12 bg-white/10 border border-white/20 rounded-lg flex items-center justify-center hover:bg-blue-500/20 hover:border-blue-500/50 transition-all duration-300"
                >
                  <Linkedin className="w-5 h-5 text-white" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div className="relative">
            <div className="p-6 md:p-8 border border-white/10 rounded-2xl bg-white/5 backdrop-blur-sm">
              <h2 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 text-center lg:text-left">Send me a message</h2>
              
              <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-white/80 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all duration-300 text-sm md:text-base"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-white/80 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all duration-300 text-sm md:text-base"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-white/80 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all duration-300 resize-none text-sm md:text-base"
                    placeholder="Tell me about your project or just say hello..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting || isSubmitted}
                  className={`w-full py-3 md:py-4 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center text-sm md:text-base ${
                    isSubmitted
                      ? 'bg-green-600 text-white'
                      : isSubmitting
                      ? 'bg-blue-600/50 text-white/70 cursor-not-allowed'
                      : 'bg-gradient-to-r from-blue-600 to-slate-600 hover:from-blue-700 hover:to-slate-700 text-white hover:scale-105 hover:shadow-xl hover:shadow-blue-500/40'
                  }`}
                >
                  {isSubmitted ? (
                    'Message Sent!'
                  ) : isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2" />
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send className="w-4 h-4 md:w-5 md:h-5 ml-2" />
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
