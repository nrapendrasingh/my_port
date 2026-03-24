import { motion } from "framer-motion";

import { github, preview } from "../assets";
import { PROJECTS } from "../constants";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { cn } from "../utils/lib";
import { fadeIn, textVariant } from "../utils/motion";

type ProjectCardProps = (typeof PROJECTS)[number] & {
  index: number;
};

// Project Card
const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
  live_site_link,
}: ProjectCardProps) => (
  <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
    <div
      className="group relative bg-gradient-to-br from-[#1d1836] to-[#151030] p-[1px] rounded-2xl sm:w-[360px] w-full"
      style={{
        background: "linear-gradient(135deg, #915EFF33, #1d183680, #915EFF22)",
        boxShadow: "0 0 0 1px rgba(145,94,255,0.15)",
      }}
    >
      {/* Glow border on hover */}
      <div
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          boxShadow: "0 0 22px 3px rgba(145,94,255,0.45), inset 0 0 20px rgba(145,94,255,0.08)",
        }}
      />

      <div className="relative bg-[#1d1836] p-5 rounded-2xl h-full">
        <div className="relative w-full h-[230px] overflow-hidden rounded-xl">
          {/* Work image */}
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover rounded-xl transition-transform duration-500 group-hover:scale-105"
          />

          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#1d1836cc] via-transparent to-transparent rounded-xl" />

          {/* Buttons */}
          <div className="absolute inset-0 flex justify-end items-start m-3 card-img_hover gap-2">
            <div
              onClick={() => window.open(live_site_link, "_blank", "noreferrer")}
              className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer hover:scale-110 transition-transform duration-200 shadow-lg"
              title="Live Site"
            >
              <img src={preview} alt="Live Site" className="w-2/3 h-2/3 object-contain" />
            </div>
            <div
              onClick={() => window.open(source_code_link, "_blank", "noreferrer")}
              className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer hover:scale-110 transition-transform duration-200 shadow-lg"
              title="GitHub"
            >
              <img src={github} alt="Github" className="w-1/2 h-1/2 object-contain" />
            </div>
          </div>
        </div>

        {/* Work Info */}
        <div className="mt-5">
          <h3 className="text-white font-bold text-[22px] leading-tight group-hover:text-[#a78bfa] transition-colors duration-300">
            {name}
          </h3>
          <p className="mt-2 text-secondary text-[13px] leading-[22px] line-clamp-4">{description}</p>
        </div>

        {/* Work Tags */}
        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag, tagIdx) => (
            <span
              key={`Tag-${tagIdx}`}
              className={cn(
                tag.color,
                "text-[12px] font-medium bg-white/5 px-2 py-0.5 rounded-full border border-white/10"
              )}
            >
              #{tag.name}
            </span>
          ))}
        </div>
      </div>
    </div>
  </motion.div>
);

// Works
export const Works = () => {
  return (
    <SectionWrapper idName="projects">
      <>
        {/* Title */}
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>My Work</p>
          <h2 className={styles.sectionHeadText}>Projects.</h2>
        </motion.div>

        {/* About */}
        <div className="w-full flex">
          <motion.p
            variants={fadeIn(undefined, undefined, 0.1, 1)}
            className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
          >
            Following projects showcases my skills and experience through
            real-world examples of my work. Each project is briefly described
            with links to code repositories and live demos in it. It reflects my
            ability to solve complex problems, work with different technologies,
            and manage projects effectively.
          </motion.p>
        </div>

        {/* Project Cards — shifted right with left padding */}
        <div className="mt-20 flex flex-wrap gap-7 pl-4 sm:pl-10 lg:pl-16">
          {PROJECTS.map((project, i) => (
            <ProjectCard key={`project-${i}`} index={i} {...project} />
          ))}
        </div>
      </>
    </SectionWrapper>
  );
};
