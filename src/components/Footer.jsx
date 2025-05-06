import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaArrowUp } from 'react-icons/fa'

const Footer = () => {
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <footer className="bg-dark-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-2xl md:text-3xl font-bold mb-6 gradient-text"
          >
            Aslbek Axmedov
          </motion.h2>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="flex gap-6 mb-8"
          >
            <a
              href="https://github.com/Aslbek0730"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-dark-700 hover:bg-primary-500 transition-colors"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-dark-700 hover:bg-primary-500 transition-colors"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-dark-400 text-sm text-center"
          >
            <p className="mb-4">Designed and developed with ❤️</p>
            <p>&copy; {new Date().getFullYear()} Aslbek Axmedov. All rights reserved.</p>
          </motion.div>
        </div>
      </div>
      
      <motion.button
        onClick={handleScrollToTop}
        whileHover={{ y: -2 }}
        className="fixed bottom-6 right-6 w-10 h-10 bg-primary-500 text-white rounded-full flex items-center justify-center shadow-lg hover:bg-primary-600 transition-colors"
        aria-label="Scroll to top"
      >
        <FaArrowUp />
      </motion.button>
    </footer>
  )
}

export default Footer