import { motion } from "framer-motion";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

import { EXPERIENCES } from "../constants";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { textVariant } from "../utils/motion";

import "react-vertical-timeline-component/style.min.css";

type ExperienceCardProps = {
  experience: (typeof EXPERIENCES)[number];
};

// Experience Card
const ExperienceCard = ({ experience }: ExperienceCardProps) => (
  <VerticalTimelineElement
    contentStyle={{ background: "#1d1836", color: "#fff" }}
    contentArrowStyle={{ borderRight: "7px solid #232631" }}
    date={experience.date}
    iconStyle={{ background: experience.iconBg }}
    icon={<div />}
  >
    <div className="group flex flex-col pt-1 pb-1">
      {/* Title */}
      <div>
        <h3 className="text-white text-[24px] font-bold">{experience.title}</h3>
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mt-1">
          <p
            className="text-secondary text-[16px] font-semibold"
            style={{ margin: 0 }}
          >
            {experience.company_name}
          </p>
          {experience.certificateLink && (
            <button
              onClick={() => window.open(experience.certificateLink, "_blank")}
              className="mt-1 sm:mt-0 text-[13px] bg-white/10 hover:bg-white/20 px-3 py-1.5 rounded-full text-white transition-colors flex items-center justify-center gap-1.5 w-fit shadow-sm"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
              Certificate
            </button>
          )}
        </div>
      </div>

      {/* Experience Points */}
      <ul className="mt-5 list-disc ml-5 space-y-2 mb-2">
        {experience.points.map((point, i) => (
          <li
            key={`experience-point-${i}`}
            className="text-white-100 text-[14px] pl-1 tracking-wider"
          >
            {point}
          </li>
        ))}
      </ul>

      {/* Hover Image */}
      {experience.hoverImage && (
        <div className="overflow-hidden max-h-0 opacity-0 group-hover:max-h-[500px] group-hover:opacity-100 group-hover:mt-4 transition-all duration-700 ease-in-out">
          <img 
            src={experience.hoverImage} 
            alt={experience.company_name} 
            className="w-full h-auto object-cover rounded-lg"
          />
        </div>
      )}
    </div>
  </VerticalTimelineElement>
);

export const Experience = () => {
  return (
    <SectionWrapper idName="experience">
      <>
        {/* Title */}
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>What I have done so far</p>
          <h2 className={styles.sectionHeadText}>Career & Training</h2>
        </motion.div>

        {/* Experience Card */}
        <div className="empty-20 flex flex-col">
          <VerticalTimeline>
            {EXPERIENCES.map((experience, i) => (
              <ExperienceCard key={i} experience={experience} />
            ))}
          </VerticalTimeline>
        </div>
      </>
    </SectionWrapper>
  );
};
