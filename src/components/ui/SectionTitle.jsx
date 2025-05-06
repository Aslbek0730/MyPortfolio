import { motion } from 'framer-motion'

const SectionTitle = ({ title, subtitle }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: -20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="text-center mb-12"
    >
      {subtitle && (
        <p className="text-primary-500 dark:text-primary-400 font-medium mb-2">
          {subtitle}
        </p>
      )}
      <h2 className="text-3xl md:text-4xl font-bold text-dark-900 dark:text-white relative inline-block">
        {title}
        <span className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-12 h-1 bg-primary-500" />
      </h2>
    </motion.div>
  )
}

export default SectionTitle