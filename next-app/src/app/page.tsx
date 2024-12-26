"use client"
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  // Add state for each collapsible section
  const [isAboutVisible, setIsAboutVisible] = useState(true);
  const [isProjectsVisible, setIsProjectsVisible] = useState(true);
  const [isSkillsVisible, setIsSkillsVisible] = useState(true);
  const [isEmploymentVisible, setIsEmploymentVisible] = useState(true);
  const [isContactVisible, setIsContactVisible] = useState(true);

  // Enhanced SectionHeader component
  const SectionHeader = ({ title, isVisible, setIsVisible }) => (
    <div 
      className="flex items-center justify-between cursor-pointer group bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-all duration-300"
      onClick={() => setIsVisible(!isVisible)}
    >
      <h2 className="text-3xl font-bold text-gray-800 group-hover:text-blue-600 transition-colors duration-300">
        {title}
      </h2>
      <svg 
        className={`w-6 h-6 transform transition-transform duration-300 text-blue-600 ${isVisible ? 'rotate-180' : ''}`}
        fill="none" 
        stroke="currentColor" 
        viewBox="0 0 24 24"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
      </svg>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Enhanced Hero Section */}
      <header className="bg-gradient-to-r from-blue-700 via-blue-600 to-blue-700 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
        <div className="max-w-6xl mx-auto px-4 py-24 sm:px-6 lg:px-8 relative">
          <div className="text-center space-y-6">
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight animate-fade-in">
              Your Name
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 animate-fade-in-delay font-light">
              Full Stack Developer | Software Engineer
            </p>
            <div className="flex justify-center gap-4 pt-6 animate-fade-in-delay">
              <button className="px-6 py-3 bg-white text-blue-600 rounded-full font-semibold hover:bg-blue-50 transition-colors duration-300">
                View Projects
              </button>
              <button className="px-6 py-3 border-2 border-white text-white rounded-full font-semibold hover:bg-white/10 transition-colors duration-300">
                Contact Me
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* About Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader 
            title="About Me" 
            isVisible={isAboutVisible} 
            setIsVisible={setIsAboutVisible}
          />
          <div className={`transition-all duration-300 ease-in-out overflow-hidden mt-6 ${
            isAboutVisible ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <p className="text-lg text-gray-700 leading-relaxed">
                A passionate developer with expertise in building modern web applications.
                Experienced with React, Node.js, and cloud technologies.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader 
            title="Projects" 
            isVisible={isProjectsVisible} 
            setIsVisible={setIsProjectsVisible}
          />
          <div className={`transition-all duration-300 ease-in-out overflow-hidden mt-6 ${
            isProjectsVisible ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'
          }`}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Enhanced Project Card */}
              <div className="bg-white rounded-xl shadow-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-xl group">
                <div className="h-48 bg-gradient-to-r from-blue-500 to-blue-600 relative">
                  {/* Project Image Placeholder */}
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300"></div>
                </div>
                <div className="p-6">
                  <h3 className="font-semibold text-xl mb-2 text-gray-800">Project Name</h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    Brief description of the project and your role in it.
                  </p>
                  <div className="flex gap-2 flex-wrap">
                    <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                      React
                    </span>
                    <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">
                      Node.js
                    </span>
                  </div>
                </div>
              </div>
              {/* Repeat Project Cards */}
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader 
            title="Skills" 
            isVisible={isSkillsVisible} 
            setIsVisible={setIsSkillsVisible}
          />
          <div className={`transition-all duration-300 ease-in-out overflow-hidden mt-6 ${
            isSkillsVisible ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'
          }`}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center transform transition duration-300 hover:-translate-y-2">
                <div className="w-20 h-20 mx-auto mb-4 flex items-center justify-center bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-2xl shadow-lg transition-all duration-300 hover:shadow-xl hover:from-blue-600 hover:to-blue-700">
                  {/* Skill Icon */}
                </div>
                <h3 className="font-semibold text-gray-800">Frontend</h3>
                <p className="text-gray-600 text-sm">React, Next.js, TypeScript</p>
              </div>
              {/* Repeat for other skills */}
            </div>
          </div>
        </div>
      </section>

      {/* Employment History Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader 
            title="Professional Journey" 
            isVisible={isEmploymentVisible} 
            setIsVisible={setIsEmploymentVisible}
          />
          <div className={`transition-all duration-300 ease-in-out overflow-hidden mt-6 ${
            isEmploymentVisible ? 'max-h-[5000px] opacity-100' : 'max-h-0 opacity-0'
          }`}>
            {/* Enhanced Company Card */}
            <div className="bg-white p-8 rounded-xl shadow-lg mb-6 transform transition duration-300 hover:shadow-xl hover:scale-[1.02]">
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 rounded-lg bg-gray-100 p-2 flex-shrink-0">
                  <svg 
                    viewBox="0 0 240 234" 
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-full h-full"
                  >
                    <path 
                      d="M42.5 0h155C221 0 240 19 240 42.5v149c0 23.5-19 42.5-42.5 42.5h-155C19 234 0 215 0 191.5v-149C0 19 19 0 42.5 0z" 
                      fill="#FA0F00"
                    />
                    <path 
                      d="M156.4 100.1l-32.6 101.8c-.6 1.8-2.4 2.8-4.2 2.3-.5-.1-.9-.4-1.3-.7 0 0-35.9-67.8-36.6-69.2-.7 1.4-35.7 69.2-35.7 69.2-1.2 1.5-3.4 1.7-4.9.5-.5-.4-.8-.9-1-1.5L7.5 100.1c-.9-2.8.6-5.8 3.4-6.7 2.8-.9 5.8.6 6.7 3.4l24.7 77.1 32.1-62.3c1.2-1.5 3.4-1.7 4.9-.5.4.3.7.7.9 1.2l32.9 61.7 24.7-77.1c.9-2.8 3.9-4.3 6.7-3.4 2.9.9 4.4 3.9 3.5 6.7h-1.1zm-24.5-43.6l-19.4.1c-2.9 0-5.3-2.3-5.4-5.2v-1.8c.1-2.9 2.5-5.2 5.4-5.2h19.4c2.9 0 5.3 2.3 5.4 5.2v1.8c-.1 2.9-2.5 5.2-5.4 5.2v-.1z" 
                      fill="#fff"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800">Adobe</h3>
                  <p className="text-blue-600 font-medium">Technical Architect</p>
                  <p className="text-sm text-gray-500 mt-1">Feb 2023 - Present · 1 yr 11 mos</p>
                  <p className="text-sm text-gray-500">Bengaluru, Karnataka, India · Remote</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">Serverless Computing</span>
                    <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">Node.js</span>
                  </div>
                </div>
              </div>
            </div>
            {/* Repeat for other employment entries */}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader 
            title="Get In Touch" 
            isVisible={isContactVisible} 
            setIsVisible={setIsContactVisible}
          />
          <div className={`transition-all duration-300 ease-in-out overflow-hidden mt-6 ${
            isContactVisible ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}>
            <div className="flex justify-center space-x-8">
              <a href="https://github.com/yourusername" 
                 className="text-gray-600 hover:text-blue-600 transform transition duration-300 hover:scale-110">
                {/* GitHub Icon */}
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.295 2.747-1.026 2.747-1.026.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.137 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z" clipRule="evenodd" />
                </svg>
              </a>
              {/* Add other social icons similarly */}
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p className="text-gray-400">© {new Date().getFullYear()} Your Name. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
