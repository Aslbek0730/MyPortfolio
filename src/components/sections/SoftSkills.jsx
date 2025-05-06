import { motion } from 'framer-motion'
import { 
  FaPuzzlePiece, FaUsers, FaClock, FaLanguage,
  FaRocket, FaLightbulb, FaComments 
} from 'react-icons/fa'
import SectionTitle from '../ui/SectionTitle'

const SoftSkills = () => {
  const softSkills = [
    { name: "Problem-solving", icon: <FaPuzzlePiece /> },
    { name: "Teamwork", icon: <FaUsers /> },
    { name: "Time management", icon: <FaClock /> },
    { name: "Adaptability", icon: <FaRocket /> },
    { name: "Critical thinking", icon: <FaLightbulb /> },
    { name: "Communication", icon: <FaComments /> }
  ]
  
  const languages = [
    { name: "English", level: "Intermediate" },
    { name: "Russian", level: "Intermediate" },
  ]

  return (
    <section id="soft-skills" className="section-padding bg-dark-50 dark:bg-dark-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle title="Soft Skills & Languages" subtitle="Beyond coding" />
        
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-6 text-dark-900 dark:text-white">
              Soft Skills
            </h3>
            
            <div className="grid grid-cols-2 gap-4">
              {softSkills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-3 p-4 bg-white dark:bg-dark-800 rounded-lg shadow-sm"
                >
                  <div className="w-10 h-10 flex items-center justify-center rounded-full bg-primary-100 dark:bg-primary-900/20 text-primary-500">
                    {skill.icon}
                  </div>
                  <span className="font-medium text-dark-800 dark:text-dark-200">
                    {skill.name}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-6 text-dark-900 dark:text-white">
              Languages
            </h3>
            
            <div className="space-y-6">
              {languages.map((language, index) => (
                <div key={language.name}>
                  <div className="flex justify-between items-center mb-2">
                    <div className="flex items-center gap-2">
                      <FaLanguage className="text-primary-500" />
                      <span className="font-medium text-dark-800 dark:text-dark-200">
                        {language.name}
                      </span>
                    </div>
                    <span className="text-sm text-dark-500 dark:text-dark-400">
                      {language.level}
                    </span>
                  </div>
                  
                  <div className="h-2 bg-dark-100 dark:bg-dark-700 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: language.level === "Intermediate" ? "60%" : "90%" }}
                      transition={{ duration: 1, delay: index * 0.2 }}
                      viewport={{ once: true }}
                      className="h-full bg-primary-500 rounded-full"
                    />
                  </div>
                </div>
              ))}
              
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
                className="mt-8 p-4 bg-white dark:bg-dark-800 rounded-lg shadow-sm"
              >
                <p className="text-dark-700 dark:text-dark-300">
                  <span className="font-semibold">Language Learning Goal:</span> Continuously improving English fluency to collaborate effectively in international tech environments.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default SoftSkills