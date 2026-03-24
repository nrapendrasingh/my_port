
import { motion } from "framer-motion";

import { SERVICES } from "../constants";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";
import profilePhoto from "../assets/profile-photo.jpg";

type ServiceCardProps = {
  index: number;
  title: string;
  icon: string;
};

// Service Card
const ServiceCard = ({ index, title, icon }: ServiceCardProps) => {
  return (
    <div className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col">
          <img src={icon} alt={title} className="w-16 h-16 object-contain" />
          <h3 className="text-white text-[20px] font-bold text-center">
            {title}
          </h3>
        </div>
      </motion.div>
    </div>
  );
};

// About
export const About = () => {
  return (
    <SectionWrapper idName="about">
      <>
        {/* Title */}
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>Introduction</p>
          <h2 className={styles.sectionHeadText}>Overview.</h2>
        </motion.div>

        {/* Body: text + photo side by side */}
        <div className="flex flex-col lg:flex-row gap-10 mt-4 items-start">
          {/* Overview Text */}
          <motion.p
            variants={fadeIn(undefined, undefined, 0.1, 1)}
            className="text-secondary text-[20px] sm:text-[22px] max-w-2xl leading-[36px] flex-1"
          >
            Aspiring Cyber Security Analyst with a developer-first approach, skilled in Java, JavaScript, and backend systems. Experienced in building applications with authentication, rate limiting, and secure API design, reflecting a strong understanding of real-world security practices.
            <br />
            <br />
            I enjoy identifying vulnerabilities, strengthening system defenses, and applying security best practices to build safer digital solutions.
          </motion.p>

          {/* Profile Photo Card */}
          <motion.div
            variants={fadeIn("left", "spring", 0.3, 0.9)}
            className="flex-shrink-0 flex justify-center lg:justify-end w-full lg:w-auto"
          >
            <motion.div
              animate={{
                y: [0, -12, 0],
              }}
              transition={{
                duration: 3.5,
                repeat: Infinity,
                repeatType: "loop",
                ease: "easeInOut",
              }}
              className="green-pink-gradient p-[3px] rounded-[24px] shadow-card"
              style={{ width: 260 }}
            >
              <div className="bg-tertiary rounded-[22px] overflow-hidden">
                <img
                  src={profilePhoto}
                  alt="Profile Photo"
                  className="w-full object-cover"
                  style={{ height: 340, objectPosition: "top" }}
                />
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Service Card */}
        <div className="mt-20 flex flex-wrap gap-10">
          {SERVICES.map((service, i) => (
            <ServiceCard key={service.title} index={i} {...service} />
          ))}
        </div>
      </>
    </SectionWrapper>
  );
};
