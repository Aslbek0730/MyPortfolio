import { motion } from 'framer-motion'

const ProfileImage = () => {
  // Using a placeholder image from Pexels
  const profileImageUrl = "./assets/aslbek.jpg"
  
  return (
    <div className="relative">
      <div className="w-40 h-40 md:w-48 md:h-48 lg:w-56 lg:h-56 rounded-full overflow-hidden border-4 border-white dark:border-dark-800 shadow-xl relative z-10">
        <img 
          src={profileImageUrl} 
          alt="Aslbek Axmedov" 
          className="w-full h-full object-cover"
        />
      </div>
      <motion.div 
        className="absolute inset-0 rounded-full bg-gradient-to-r from-primary-500 to-accent-500 opacity-70 z-0"
        animate={{ 
          boxShadow: ['0 0 15px 5px rgba(9, 229, 127, 0.3)', '0 0 25px 10px rgba(9, 229, 127, 0.3)', '0 0 15px 5px rgba(9, 229, 127, 0.3)'],
        }}
        transition={{ 
          duration: 3,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />
    </div>
  )
}

export default ProfileImage