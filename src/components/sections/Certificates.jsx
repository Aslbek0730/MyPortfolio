import { motion } from 'framer-motion'
import { FaCalendarAlt, FaAward } from 'react-icons/fa'
import SectionTitle from '../ui/SectionTitle'

const Certificates = () => {
  const certificates = [
    {
      id: 1,
      title: "Frontend Development",
      provider: "Coursera",
      date: "2022",
      duration: "6 months",
      url: "https://coursera.org/share/40a1281213e8dc567e613a0f7c73e444",
      image: "https://images.pexels.com/photos/1181673/pexels-photo-1181673.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      id: 2,
      title: "Backend Development",
      provider: "Coursera",
      date: "2023",
      duration: "6 months",
      url: "https://coursera.org/share/2fecd72315f92c4f51b93664add213f2",
      image: "https://images.pexels.com/photos/4164418/pexels-photo-4164418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    }
  ]

  return (
    <section id="certificates" className="section-padding">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle title="Certificates" subtitle="My accomplishments" />
        
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          {certificates.map((certificate, index) => (
            <CertificateCard 
              key={certificate.id}
              certificate={certificate}
              index={index}
            />
          ))}
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-12 p-6 bg-white dark:bg-dark-800 rounded-lg shadow-md text-center"
        >
          <h3 className="text-xl font-bold mb-3 text-dark-900 dark:text-white">
            Fullstack Development Program
          </h3>
          <p className="text-dark-600 dark:text-dark-300">
            Completed a comprehensive 1-year fullstack development course at IT Park, covering
            both frontend and backend technologies with practical projects.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

const CertificateCard = ({ certificate, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
      className="bg-white dark:bg-dark-800 rounded-lg shadow-md overflow-hidden flex flex-col sm:flex-row"
    >
      <div className="sm:w-2/5 h-48 sm:h-auto overflow-hidden">
        <img 
          src={certificate.image} 
          alt={certificate.title} 
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="p-6 flex-1 flex flex-col">
        <div className="mb-4 flex items-center justify-between">
          <span className="px-3 py-1 bg-primary-100 dark:bg-primary-900/20 text-primary-700 dark:text-primary-400 text-sm rounded-full">
            {certificate.provider}
          </span>
          <div className="flex items-center gap-1 text-dark-500 dark:text-dark-400 text-sm">
            <FaCalendarAlt className="text-xs" />
            <span>{certificate.date}</span>
          </div>
        </div>
        
        <h3 className="text-xl font-bold mb-2 text-dark-900 dark:text-white">
          {certificate.title}
        </h3>
        
        <div className="flex items-center gap-2 text-dark-600 dark:text-dark-300 text-sm mt-1 mb-4">
          <FaAward className="text-primary-500" />
          <span>Duration: {certificate.duration}</span>
        </div>
        
        <a
          href={certificate.url}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-auto inline-block px-4 py-2 border border-primary-500 text-primary-500 hover:bg-primary-500 hover:text-white dark:border-primary-400 dark:text-primary-400 dark:hover:bg-primary-400 dark:hover:text-dark-900 rounded-lg transition-colors text-center"
        >
          View Certificate
        </a>
      </div>
    </motion.div>
  )
}

export default Certificates