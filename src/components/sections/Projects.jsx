import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'
import SectionTitle from '../ui/SectionTitle'

const Projects = () => {
  const [activeProject, setActiveProject] = useState(null)
  
  const projects = [
    {
      id: 1,
      title: "FastFood Order Site",
      description: "A comprehensive food ordering platform built with Django, featuring user authentication, menu management, and order processing.",
      image: "https://images.pexels.com/photos/1640774/pexels-photo-1640774.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      techStack: ["Django", "Python", "PostgreSQL", "HTML", "CSS", "Bootstrap"],
      githubUrl: "https://github.com/Aslbek0730/Fastfood.git",
      liveUrl: null,
    },
    {
      id: 2,
      title: "Education Platform",
      description: "An interactive educational platform combining React frontend and Django backend, allowing students to access courses and track progress.",
      image: "https://images.pexels.com/photos/5428003/pexels-photo-5428003.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      techStack: ["React", "Django", "DRF", "JavaScript", "Tailwind CSS", "PostgreSQL"],
      githubUrl: "https://github.com/Aslbek0730/fullstack10.git",
      liveUrl: null,
    }
  ]

  return (
    <section id="projects" className="section-padding bg-dark-50 dark:bg-dark-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle title="My Projects" subtitle="What I've built" />
        
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <ProjectCard 
              key={project.id}
              project={project}
              setActiveProject={setActiveProject}
              isActive={activeProject === project.id}
            />
          ))}
        </div>
      </div>
      
      <AnimatePresence>
        {activeProject && (
          <ProjectModal 
            project={projects.find(p => p.id === activeProject)} 
            onClose={() => setActiveProject(null)}
          />
        )}
      </AnimatePresence>
    </section>
  )
}

const ProjectCard = ({ project, setActiveProject, isActive }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
      className="bg-white dark:bg-dark-800 rounded-xl overflow-hidden shadow-lg"
    >
      <div className="h-48 overflow-hidden">
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover object-center transition-transform duration-500 hover:scale-110"
        />
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 text-dark-900 dark:text-white">
          {project.title}
        </h3>
        
        <p className="text-dark-600 dark:text-dark-300 mb-4 line-clamp-2">
          {project.description}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-5">
          {project.techStack.slice(0, 3).map((tech) => (
            <span 
              key={tech} 
              className="px-2 py-1 text-xs rounded-full bg-primary-100 dark:bg-primary-900/20 text-primary-700 dark:text-primary-400"
            >
              {tech}
            </span>
          ))}
          {project.techStack.length > 3 && (
            <span className="px-2 py-1 text-xs rounded-full bg-dark-100 dark:bg-dark-700 text-dark-600 dark:text-dark-300">
              +{project.techStack.length - 3} more
            </span>
          )}
        </div>
        
        <div className="flex justify-between">
          <button
            onClick={() => setActiveProject(project.id)}
            className="text-primary-500 hover:text-primary-600 dark:text-primary-400 dark:hover:text-primary-300 font-medium transition-colors"
          >
            View Details
          </button>
          
          <div className="flex items-center gap-3">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-dark-700 hover:text-dark-900 dark:text-dark-300 dark:hover:text-white transition-colors"
              aria-label={`GitHub repository for ${project.title}`}
            >
              <FaGithub className="text-xl" />
            </a>
            
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-dark-700 hover:text-dark-900 dark:text-dark-300 dark:hover:text-white transition-colors"
                aria-label={`Live demo for ${project.title}`}
              >
                <FaExternalLinkAlt />
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  )
}

const ProjectModal = ({ project, onClose }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        transition={{ type: 'spring', damping: 25 }}
        className="bg-white dark:bg-dark-800 rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="h-64 overflow-hidden">
          <img 
            src={project.image} 
            alt={project.title} 
            className="w-full h-full object-cover object-center"
          />
        </div>
        
        <div className="p-6">
          <h3 className="text-2xl font-bold mb-3 text-dark-900 dark:text-white">
            {project.title}
          </h3>
          
          <p className="text-dark-600 dark:text-dark-300 mb-6">
            {project.description}
          </p>
          
          <div className="mb-6">
            <h4 className="font-semibold mb-2 text-dark-800 dark:text-dark-100">
              Technologies Used:
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <span 
                  key={tech} 
                  className="px-3 py-1 text-sm rounded-full bg-primary-100 dark:bg-primary-900/20 text-primary-700 dark:text-primary-400"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
          
          <div className="flex gap-4">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-dark-900 dark:bg-dark-700 text-white rounded-lg hover:bg-dark-800 dark:hover:bg-dark-600 transition-colors"
            >
              <FaGithub />
              <span>View Code</span>
            </a>
            
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition-colors"
              >
                <FaExternalLinkAlt />
                <span>Live Demo</span>
              </a>
            )}
            
            <button
              onClick={onClose}
              className="ml-auto px-4 py-2 text-dark-500 dark:text-dark-400 hover:text-dark-700 dark:hover:text-dark-200 transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}

export default Projects