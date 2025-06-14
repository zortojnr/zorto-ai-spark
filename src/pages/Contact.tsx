
import React, { useState } from 'react';
import { Mail, Phone, Github, Linkedin, Twitter, Send, MapPin } from 'lucide-react';

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
    <div className="min-h-screen bg-black relative">
      {/* Grid Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />
      
      {/* Gradient Orbs */}
      <div className="absolute top-20 right-20 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Column - Contact Info */}
          <div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-purple-400">
                Let's Connect
              </span>
            </h1>
            
            <p className="text-xl text-white/70 mb-12 leading-relaxed">
              Ready to bring your next project to life? I'm always excited to discuss new opportunities and collaborate on innovative solutions.
            </p>

            {/* Contact Methods */}
            <div className="space-y-6 mb-12">
              <a
                href="mailto:zortorichard27@gmail.com"
                className="group flex items-center p-4 border border-white/10 rounded-xl hover:border-purple-500/50 transition-all duration-300 hover:bg-white/5"
              >
                <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center mr-4 group-hover:bg-purple-500/30 transition-colors">
                  <Mail className="w-6 h-6 text-purple-400" />
                </div>
                <div>
                  <div className="text-white font-medium">Email</div>
                  <div className="text-white/70">zortorichard27@gmail.com</div>
                </div>
              </a>

              <a
                href="tel:+2349066409957"
                className="group flex items-center p-4 border border-white/10 rounded-xl hover:border-purple-500/50 transition-all duration-300 hover:bg-white/5"
              >
                <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center mr-4 group-hover:bg-purple-500/30 transition-colors">
                  <Phone className="w-6 h-6 text-purple-400" />
                </div>
                <div>
                  <div className="text-white font-medium">Phone</div>
                  <div className="text-white/70">+234 906 640 9957</div>
                </div>
              </a>

              <div className="flex items-center p-4 border border-white/10 rounded-xl">
                <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center mr-4">
                  <MapPin className="w-6 h-6 text-purple-400" />
                </div>
                <div>
                  <div className="text-white font-medium">Location</div>
                  <div className="text-white/70">Lagos, Nigeria</div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Find me online</h3>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="w-12 h-12 bg-white/10 border border-white/20 rounded-lg flex items-center justify-center hover:bg-purple-500/20 hover:border-purple-500/50 transition-all duration-300"
                >
                  <Github className="w-5 h-5 text-white" />
                </a>
                <a
                  href="#"
                  className="w-12 h-12 bg-white/10 border border-white/20 rounded-lg flex items-center justify-center hover:bg-purple-500/20 hover:border-purple-500/50 transition-all duration-300"
                >
                  <Linkedin className="w-5 h-5 text-white" />
                </a>
                <a
                  href="#"
                  className="w-12 h-12 bg-white/10 border border-white/20 rounded-lg flex items-center justify-center hover:bg-purple-500/20 hover:border-purple-500/50 transition-all duration-300"
                >
                  <Twitter className="w-5 h-5 text-white" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div className="relative">
            <div className="p-8 border border-white/10 rounded-2xl bg-white/5 backdrop-blur-sm">
              <h2 className="text-2xl font-bold mb-6">Send me a message</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
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
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all duration-300"
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
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all duration-300"
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
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all duration-300 resize-none"
                    placeholder="Tell me about your project or just say hello..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting || isSubmitted}
                  className={`w-full py-4 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center ${
                    isSubmitted
                      ? 'bg-green-600 text-white'
                      : isSubmitting
                      ? 'bg-purple-600/50 text-white/70 cursor-not-allowed'
                      : 'bg-purple-600 hover:bg-purple-700 text-white hover:scale-105'
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
                      <Send className="w-5 h-5 ml-2" />
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
