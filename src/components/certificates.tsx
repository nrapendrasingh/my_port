import { motion } from "framer-motion";

import { CERTIFICATES } from "../constants";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";

type CertificateCardProps = (typeof CERTIFICATES)[number] & {
  index: number;
};

const CertificateCard = ({ name, issuer, date, link, index }: CertificateCardProps) => {
  return (
    <motion.div
      variants={fadeIn("up", "spring", index * 0.5, 0.75)}
      className="bg-[#1d1836] p-6 rounded-2xl sm:w-[360px] w-full flex flex-col justify-between hover:shadow-[0_0_22px_3px_rgba(145,94,255,0.45)] transition-shadow duration-500 cursor-pointer"
      style={{
        boxShadow: "0 0 0 1px rgba(145,94,255,0.15)",
      }}
    >
      <div>
        <div className="flex justify-between items-start gap-4">
          <h3 className="text-white font-bold text-[20px] leading-tight flex-1">
            {name}
          </h3>
          <div className="bg-[#151030] px-3 py-1 rounded-full text-secondary text-[12px] whitespace-nowrap">
            {date}
          </div>
        </div>
        <p className="mt-3 text-secondary text-[14px]">
          Issued by <span className="text-[#a78bfa]">{issuer}</span>
        </p>
      </div>

      <div className="mt-8">
        <button
          onClick={() => window.open(link, "_blank", "noreferrer")}
          className="w-full bg-gradient-to-r from-[#8145fa] to-[#612cc4] hover:from-[#915eff] hover:to-[#783cf5] shadow-md transition-all duration-300 py-3 rounded-xl flex items-center justify-center gap-2 text-white font-semibold text-[14px]"
        >
          Verify Certificate
          <svg className="w-5 h-5 text-white ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        </button>
      </div>
    </motion.div>
  );
};

export const Certificates = () => {
  return (
    <SectionWrapper idName="certificates">
      <motion.div variants={textVariant()} className="text-center md:text-left flex flex-col items-center md:items-start w-full">
        <h2 className={`${styles.sectionHeadText} flex items-center gap-3 justify-center md:justify-start`}>
          🎓 Certificates
        </h2>
        <p className={`${styles.sectionSubText} mt-3 text-center md:text-left text-secondary text-[17px] max-w-3xl leading-[30px] !normal-case`}>
          Verified certifications showcasing my learning in cloud, security, and competitive coding.
        </p>
      </motion.div>

      <div className="mt-14 flex flex-wrap justify-center md:justify-start gap-7">
        {CERTIFICATES.map((cert, i) => (
          <CertificateCard key={`certificate-${i}`} index={i} {...cert} />
        ))}
      </div>
    </SectionWrapper>
  );
};
