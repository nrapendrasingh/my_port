import { motion } from "framer-motion";

import { ACHIEVEMENTS } from "../constants";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";

type AchievementCardProps = (typeof ACHIEVEMENTS)[number] & {
  index: number;
};

const AchievementCard = ({ title, description, icon, index }: AchievementCardProps) => {
  const IconComponent = () => {
    if (icon === "code") {
      return (
        <svg className="w-8 h-8 text-[#915EFF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      );
    }
    // Star icon
    return (
      <svg className="w-8 h-8 text-[#915EFF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
      </svg>
    );
  };

  return (
    <motion.div
      variants={fadeIn("up", "spring", index * 0.5, 0.75)}
      className="bg-[#110e21] p-8 rounded-2xl flex md:flex-row flex-col gap-6 w-full lg:w-[calc(50%-14px)]"
      style={{
        boxShadow: "0 0 0 1px rgba(255,255,255,0.05)",
      }}
    >
      <div className="bg-[#1d1836] w-16 h-16 rounded-2xl flex items-center justify-center shrink-0">
        <IconComponent />
      </div>
      <div className="flex-1">
        <h3 className="text-white font-bold text-[20px] mb-3">{title}</h3>
        <p className="text-secondary text-[15px] leading-[26px]">{description}</p>
      </div>
    </motion.div>
  );
};

export const Achievements = () => {
  return (
    <SectionWrapper idName="achievements">
      <motion.div variants={textVariant()} className="text-center w-full flex flex-col items-center">
        <p className={`${styles.sectionSubText} !text-[#a78bfa] tracking-[4px]`}>
          RECOGNITION
        </p>
        <h2 className={`${styles.sectionHeadText} mt-2`}>
          Achievements
        </h2>
        <div className="w-16 h-1.5 bg-gradient-to-r from-[#915eff] to-[#783cf5] rounded-full mt-4" />
      </motion.div>

      <div className="mt-16 flex flex-wrap gap-7 items-stretch">
        {ACHIEVEMENTS.map((achievement, i) => (
          <AchievementCard key={`achievement-${i}`} index={i} {...achievement} />
        ))}
      </div>
    </SectionWrapper>
  );
};
