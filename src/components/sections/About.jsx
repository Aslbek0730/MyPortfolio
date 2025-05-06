import { motion } from 'framer-motion'
import { FiCalendar, FiMapPin, FiTarget, FiBook } from 'react-icons/fi'
import SectionTitle from '../ui/SectionTitle'

const About = () => {
  return (
    <section id="about" className="section-padding bg-dark-50 dark:bg-dark-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle title="About Me" subtitle="Get to know me better" />
        
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="col-span-1 md:col-span-2"
          >
            <h3 className="text-2xl font-bold mb-4 text-dark-900 dark:text-white">
              My Journey
            </h3>
            <p className="text-dark-700 dark:text-dark-200 mb-6 leading-relaxed">
              I'm a Web fullstack developer with a strong desire to create meaningful 
              and impactful digital experiences. My journey in tech started with curiosity 
              and has evolved into a dedicated pursuit of excellence in software development.
            </p>
            <p className="text-dark-700 dark:text-dark-200 mb-8 leading-relaxed">
              What drives me is the power of technology to solve real-world problems. I enjoy the
              challenge of learning new technologies and applying them to create elegant solutions.
              My goal is to continuously grow as a developer and eventually become a senior engineer 
              who can mentor others and contribute to significant projects.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <InfoItem 
                icon={<FiCalendar />}
                label="Born"
                value="25.25.2025, Tashkent, Uzbekistan"
              />
              <InfoItem 
                icon={<FiTarget />}
                label="Goal"
                value="Senior Fullstack Engineer"
              />
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="col-span-1"
          >
            <h3 className="text-2xl font-bold mb-4 text-dark-900 dark:text-white">
              Education
            </h3>
            
            <div className="relative border-l-2 border-primary-200 dark:border-primary-800 pl-5 pb-5">
              <div className="absolute w-4 h-4 rounded-full bg-primary-500 -left-[9px] top-0" />
              
              <div className="mb-6">
                <div className="flex items-center gap-2 text-sm text-primary-500 dark:text-primary-400 mb-1">
                  <FiBook />
                  <span>2021 Sept – 2025 May</span>
                </div>
                <h4 className="text-lg font-semibold text-dark-900 dark:text-white">
                  Programming Science
                </h4>
                <p className="text-dark-600 dark:text-dark-300">
                  TATU University
                </p>
                <p className="mt-2 text-dark-700 dark:text-dark-200 text-sm">
                  Focusing on software engineering fundamentals and modern web development technologies.
                </p>
              </div>
              
              <div>
                <div className="flex items-center gap-2 text-sm text-primary-500 dark:text-primary-400 mb-1">
                  <FiBook />
                  <span>2022 – 2023</span>
                </div>
                <h4 className="text-lg font-semibold text-dark-900 dark:text-white">
                  Fullstack Development
                </h4>
                <p className="text-dark-600 dark:text-dark-300">
                  IT Park, Tashkent
                </p>
                <p className="mt-2 text-dark-700 dark:text-dark-200 text-sm">
                  Intensive 1-year program covering both frontend and backend technologies.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

const InfoItem = ({ icon, label, value }) => {
  return (
    <div className="flex items-start gap-3 p-4 bg-white dark:bg-dark-800 rounded-lg shadow-sm">
      <div className="text-primary-500 mt-1">{icon}</div>
      <div>
        <p className="text-dark-500 dark:text-dark-400 text-sm">{label}</p>
        <p className="font-medium text-dark-900 dark:text-white">{value}</p>
      </div>
    </div>
  )
}

export default About