import { motion } from 'framer-motion'
import { 
  FaHtml5, FaCss3Alt, FaBootstrap, FaReact, FaVuejs, 
  FaPython, FaDatabase, FaGitAlt, FaGithub 
} from 'react-icons/fa'
import { 
  SiJavascript, SiTypescript, SiDjango, SiPostgresql 
} from 'react-icons/si'
import SectionTitle from '../ui/SectionTitle'

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        { name: "HTML5", icon: <FaHtml5 />, color: "#E34F26", level: 85 },
        { name: "CSS", icon: <FaCss3Alt />, color: "#1572B6", level: 80 },
        { name: "Bootstrap", icon: <FaBootstrap />, color: "#7952B3", level: 75 },
        { name: "JavaScript", icon: <SiJavascript />, color: "#F7DF1E", level: 80 },
        { name: "React", icon: <FaReact />, color: "#61DAFB", level: 75 },
        { name: "Vue", icon: <FaVuejs />, color: "#4FC08D", level: 70 },
        { name: "TypeScript", icon: <SiTypescript />, color: "#3178C6", level: 65 }
      ]
    },
    {
      title: "Backend",
      skills: [
        { name: "Python", icon: <FaPython />, color: "#3776AB", level: 80 },
        { name: "Django", icon: <SiDjango />, color: "#092E20", level: 75 },
        { name: "DRF", icon: <SiDjango />, color: "#092E20", level: 70 }
      ]
    },
    {
      title: "Database & Tools",
      skills: [
        { name: "PostgreSQL", icon: <SiPostgresql />, color: "#336791", level: 70 },
        { name: "Git", icon: <FaGitAlt />, color: "#F05032", level: 75 },
        { name: "GitHub", icon: <FaGithub />, color: "#181717", level: 80 }
      ]
    }
  ]

  return (
    <section id="skills" className="section-padding">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle title="My Skills" subtitle="What I can do" />
        
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-dark-900 rounded-lg shadow-md p-6"
            >
              <h3 className="text-xl font-bold mb-6 text-dark-900 dark:text-white text-center">
                {category.title}
              </h3>
              
              <div className="space-y-5">
                {category.skills.map((skill, skillIndex) => (
                  <SkillBar
                    key={skill.name}
                    skill={skill}
                    delay={categoryIndex * 0.1 + skillIndex * 0.05}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

const SkillBar = ({ skill, delay }) => {
  return (
    <div>
      <div className="flex justify-between items-center mb-2">
        <div className="flex items-center gap-2">
          <span 
            className="text-xl" 
            style={{ color: skill.color }}
          >
            {skill.icon}
          </span>
          <span className="font-medium text-dark-800 dark:text-dark-200">
            {skill.name}
          </span>
        </div>
        <span className="text-sm text-dark-500 dark:text-dark-400">
          {skill.level}%
        </span>
      </div>
      
      <div className="h-2 bg-dark-100 dark:bg-dark-700 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.level}%` }}
          transition={{ duration: 1, delay }}
          viewport={{ once: true }}
          className="h-full rounded-full"
          style={{ backgroundColor: skill.color }}
        />
      </div>
    </div>
  )
}

export default Skills