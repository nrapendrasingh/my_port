import { motion } from "framer-motion";

import { ComputersCanvas } from "./canvas";
import { styles } from "../styles";
import { cn } from "../utils/lib";

// Hero
export const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div
        className={cn(
          styles.paddingX,
          "absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5",
        )}
      >
        {/* Title */}
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915eff]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        {/* About Me */}
        {/* About Me */}
        <div className="z-10">
          <h1 className={cn(styles.heroHeadText, "text-white")}>
            Hi, I'm <span className="text-[#915eff]">Nrapendra</span>
          </h1>
          <p className={cn(styles.heroSubText, "mt-2 text-white-100")}>
            I analyze cyber threats, <br className="sm:block hidden" />
            implement security measures, and safeguard systems
          </p>

          {/* Social Links & Resume */}
          <div className="mt-8 flex flex-wrap gap-4 items-center">
            {/* Resume Button */}
            <a href="/cv.pdf" target="_blank" rel="noreferrer" className="flex items-center gap-2 bg-white text-black px-6 py-2.5 rounded-full font-bold hover:scale-105 transition-transform duration-300 shadow-lg text-[16px]">
              <svg className="w-5 h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8l-6-6zm-1 1.5L18.5 9H13V3.5zM8 11h8v2H8v-2zm0 4h8v2H8v-2z" />
              </svg>
              Resume
            </a>

            {/* GitHub */}
            <a href="https://github.com/nrapendrasingh" target="_blank" rel="noreferrer" className="flex justify-center items-center w-[48px] h-[48px] bg-[#1a1a1a] rounded-[14px] border border-white/10 hover:scale-110 transition-transform duration-300 shadow-lg">
              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.604-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.161 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
              </svg>
            </a>

            {/* LinkedIn */}
            <a href="https://www.linkedin.com/in/nrapendrachauhan/" target="_blank" rel="noreferrer" className="flex justify-center items-center w-[48px] h-[48px] bg-[#0A66C2] rounded-[14px] hover:scale-110 transition-transform duration-300 shadow-lg">
              <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </a>

            {/* Email */}
            <a href="mailto:nrapendra535@gmail.com" className="flex justify-center items-center w-[48px] h-[48px] bg-gradient-to-tr from-[#ea580c] to-[#eab308] rounded-[14px] hover:scale-110 transition-transform duration-300 shadow-lg">
              <span className="text-white text-[28px] font-medium leading-none -mt-1">@</span>
            </a>
          </div>
        </div>
      </div>

      {/* Computer Model */}
      <ComputersCanvas />

      {/* Scroll to about section */}
      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};
