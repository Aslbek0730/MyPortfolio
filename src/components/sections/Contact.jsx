import { useState } from 'react'
import { motion } from 'framer-motion'
import { FiMail, FiPhone, FiMapPin, FiGithub, FiLinkedin } from 'react-icons/fi'
import SectionTitle from '../ui/SectionTitle'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  
  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)
  
  const contactInfo = [
    { icon: <FiMail />, label: "Email", value: "aslbekakhmedov1@gmail.com" },
    { icon: <FiPhone />, label: "Phone", value: "+998915565620" },
    { icon: <FiMapPin />, label: "Location", value: "Tashkent, Uzbekistan" }
  ]
  
  const socialLinks = [
    { icon: <FiGithub />, label: "GitHub", url: "https://github.com/Aslbek0730" },
    { icon: <FiLinkedin />, label: "LinkedIn", url: "#" }
  ]
  
  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value
    })
    
    // Clear error when user types
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: ''
      })
    }
  }
  
  const validateForm = () => {
    const newErrors = {}
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required'
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Email is invalid'
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required'
    }
    
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }
  
  const handleSubmit = (e) => {
    e.preventDefault()
    
    if (validateForm()) {
      setIsSubmitting(true)
      
      // Simulate form submission
      setTimeout(() => {
        console.log('Form submitted:', formData)
        setIsSubmitting(false)
        setSubmitSuccess(true)
        
        // Reset form
        setFormData({
          name: '',
          email: '',
          message: ''
        })
        
        // Reset success message after 5 seconds
        setTimeout(() => {
          setSubmitSuccess(false)
        }, 5000)
      }, 1000)
    }
  }
  
  return (
    <section id="contact" className="section-padding bg-gradient-to-b from-white to-dark-50 dark:from-dark-950 dark:to-dark-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle title="Get In Touch" subtitle="Contact me" />
        
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-dark-800 rounded-lg shadow-md p-6 md:p-8"
          >
            <h3 className="text-2xl font-bold mb-6 text-dark-900 dark:text-white">
              Contact Information
            </h3>
            
            <div className="space-y-5 mb-8">
              {contactInfo.map((item) => (
                <div 
                  key={item.label}
                  className="flex items-start gap-4"
                >
                  <div className="w-10 h-10 flex items-center justify-center rounded-full bg-primary-100 dark:bg-primary-900/20 text-primary-500 shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="font-medium text-dark-900 dark:text-white">
                      {item.label}
                    </h4>
                    <p className="text-dark-600 dark:text-dark-300">
                      {item.value}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            
            <h4 className="font-semibold text-dark-900 dark:text-white mb-4">
              Find me on
            </h4>
            
            <div className="flex gap-4">
              {socialLinks.map((link) => (
                <a 
                  key={link.label}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-dark-800 dark:bg-dark-700 text-white hover:bg-primary-500 dark:hover:bg-primary-600 transition-colors"
                  aria-label={link.label}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-dark-800 rounded-lg shadow-md p-6 md:p-8"
          >
            <h3 className="text-2xl font-bold mb-6 text-dark-900 dark:text-white">
              Send a Message
            </h3>
            
            {submitSuccess ? (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-4 bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-200 rounded-md mb-6"
              >
                Thank you for your message! I'll get back to you soon.
              </motion.div>
            ) : null}
            
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label 
                  htmlFor="name" 
                  className="block mb-2 font-medium text-dark-700 dark:text-dark-300"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full px-4 py-2 bg-dark-50 dark:bg-dark-700 border ${
                    errors.name ? 'border-red-500' : 'border-dark-200 dark:border-dark-600'
                  } rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-400 text-dark-900 dark:text-white`}
                />
                {errors.name && (
                  <p className="mt-1 text-sm text-red-500">{errors.name}</p>
                )}
              </div>
              
              <div>
                <label 
                  htmlFor="email" 
                  className="block mb-2 font-medium text-dark-700 dark:text-dark-300"
                >
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full px-4 py-2 bg-dark-50 dark:bg-dark-700 border ${
                    errors.email ? 'border-red-500' : 'border-dark-200 dark:border-dark-600'
                  } rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-400 text-dark-900 dark:text-white`}
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-500">{errors.email}</p>
                )}
              </div>
              
              <div>
                <label 
                  htmlFor="message" 
                  className="block mb-2 font-medium text-dark-700 dark:text-dark-300"
                >
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  className={`w-full px-4 py-2 bg-dark-50 dark:bg-dark-700 border ${
                    errors.message ? 'border-red-500' : 'border-dark-200 dark:border-dark-600'
                  } rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-400 text-dark-900 dark:text-white resize-none`}
                />
                {errors.message && (
                  <p className="mt-1 text-sm text-red-500">{errors.message}</p>
                )}
              </div>
              
              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.98 }}
                className={`px-6 py-3 bg-primary-500 hover:bg-primary-600 text-white font-medium rounded-md transition-colors w-full flex items-center justify-center ${
                  isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
                }`}
              >
                {isSubmitting ? (
                  <span className="flex items-center gap-2">
                    <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </span>
                ) : (
                  "Let's Connect"
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact