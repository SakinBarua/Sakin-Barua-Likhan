import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Progress } from "@/components/ui/progress";

interface Skill {
  name: string;
  level: number;
  color?: string;
}

export function AboutSection() {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const skills: Skill[] = [
   
    { name: "JavaScript", level: 85, color: "bg-yellow-500" },
    { name: "PHP", level: 80, color: "bg-purple-500" },
    { name: "HTML & CSS", level: 95, color: "bg-orange-500" },
    { name: "UI/UX Design", level: 75, color: "bg-green-500" },
   
  ];

  return (
    <section 
      id="about" 
      ref={ref} 
      className="py-20 md:py-28"
    >
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center text-center space-y-4 mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold">About Me</h2>
          <div className="w-20 h-1.5 bg-primary rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10 lg:gap-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold mb-4">Who I Am</h3>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Hi there! I'm Sakin Barua Likhan, a passionate and detail-oriented 
                web developer with over 5 years of experience creating beautiful 
                and functional digital experiences.
              </p>
              <p>
                With a strong foundation in both front-end and back-end technologies,
                I specialize in building responsive websites and web applications
                that not only look great but also perform excellently.
              </p>
              <p>
                My approach combines technical expertise with creative problem-solving,
                allowing me to deliver solutions that exceed client expectations.
                I'm constantly learning and adapting to new technologies to stay
                at the forefront of web development.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold mb-4">My Skills</h3>
            
            <div className="space-y-4">
              {skills.map((skill, index) => (
                <motion.div 
                  key={skill.name}
                  initial={{ opacity: 0, width: 0 }}
                  animate={inView ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ delay: 0.6 + index * 0.1, duration: 0.5 }}
                  className="space-y-2"
                >
                  <div className="flex justify-between">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-muted-foreground">{skill.level}%</span>
                  </div>
                  <Progress 
                    value={skill.level} 
                    className="h-2 bg-secondary"
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}