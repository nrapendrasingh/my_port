import { motion } from "framer-motion";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { styles } from "../styles";

// ── Local icon imports ────────────────────────────────────────────────────────
import javascript from "../assets/tech/javascript.png";
import docker from "../assets/tech/docker.png";
import mongodb from "../assets/tech/mongodb.png";
import git from "../assets/tech/git.png";
import burpsuite from "../assets/tech/burpsuite.svg";
import wireshark from "../assets/tech/wireshark.png";
import nmap from "../assets/tech/nmap.png";

// ── CDN logos (devicon / simpleicons) ─────────────────────────────────────────
const CDN = {
  python:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  cpp: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg",
  java: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
  mysql:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
  postgresql:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
  aws: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg",
  linux:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg",
  postman:
    "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg",
  metasploit:
    "https://www.kali.org/tools/metasploit-framework/images/metasploit-framework-logo.svg",
};

// ── Types ─────────────────────────────────────────────────────────────────────
type Skill = {
  name: string;
  icon?: string;
  abbr?: string;
  color?: string;
};

type Category = {
  emoji: string;
  title: string;
  accent: string; // glow / border colour
  skills: Skill[];
};

// ── Data ──────────────────────────────────────────────────────────────────────
const CATEGORIES: Category[] = [
  {
    emoji: "💻",
    title: "Languages",
    accent: "#6366f1",
    skills: [
      { name: "Python",     icon: CDN.python },
      { name: "C++",        icon: CDN.cpp    },
      { name: "Java",       icon: CDN.java   },
      { name: "JavaScript", icon: javascript },
    ],
  },
  {
    emoji: "🛡️",
    title: "Cyber Security",
    accent: "#a855f7",
    skills: [
      { name: "Network Security",     abbr: "NSec",  color: "#7c3aed" },
      { name: "Web Security (OWASP)", abbr: "OWASP", color: "#dc2626" },
      { name: "Vuln. Assessment",     abbr: "VA",    color: "#6d28d9" },
      { name: "Threat Analysis",      abbr: "TA",    color: "#7c3aed" },
      { name: "Pen Testing",          abbr: "PenT",  color: "#b91c1c" },
      { name: "Cryptography",         abbr: "CRY",   color: "#4f46e5" },
      { name: "Secure Coding",        abbr: "SC",    color: "#5b21b6" },
    ],
  },
  {
    emoji: "🔧",
    title: "Security Tools",
    accent: "#06b6d4",
    skills: [
      { name: "Wireshark",  icon: wireshark       },
      { name: "Nmap",       icon: nmap            },
      { name: "Burp Suite", icon: burpsuite       },
      { name: "Metasploit", abbr: "MSF", color: "#1e3a5f" },
      { name: "Postman",    icon: CDN.postman     },
      { name: "Git",        icon: git             },
      { name: "Docker",     icon: docker          },
    ],
  },
  {
    emoji: "🧠",
    title: "Systems & Concepts",
    accent: "#10b981",
    skills: [
      { name: "Linux",      icon: CDN.linux                  },
      { name: "TCP/IP, DNS",abbr: "Net",  color: "#065f46"  },
      { name: "API Security",abbr: "API", color: "#1e40af"  },
      { name: "JWT / Auth", abbr: "Auth", color: "#1d4ed8"  },
      { name: "DSA",        abbr: "DSA",  color: "#374151"  },
    ],
  },
  {
    emoji: "🗄️",
    title: "Databases & Cloud",
    accent: "#f59e0b",
    skills: [
      { name: "MongoDB",    icon: mongodb          },
      { name: "MySQL",      icon: CDN.mysql        },
      { name: "PostgreSQL", icon: CDN.postgresql   },
      { name: "AWS",        icon: CDN.aws          },
    ],
  },
];

// ── Skill Badge ───────────────────────────────────────────────────────────────
const Badge = ({ skill }: { skill: Skill }) => (
  <div className="flex flex-col items-center gap-2 group cursor-default">
    <div
      className="w-16 h-16 rounded-2xl flex items-center justify-center p-2 shadow-lg
                 group-hover:scale-110 group-hover:shadow-xl transition-all duration-300"
      style={{
        background: skill.icon
          ? "rgba(255,255,255,0.05)"
          : skill.color ?? "#6d28d9",
        border: "1px solid rgba(255,255,255,0.08)",
      }}
    >
      {skill.icon ? (
        <img
          src={skill.icon}
          alt={skill.name}
          className="w-full h-full object-contain"
          loading="lazy"
        />
      ) : (
        <span className="text-white font-extrabold text-[13px] tracking-tight text-center leading-tight">
          {skill.abbr}
        </span>
      )}
    </div>
    <span
      className="text-[12px] text-gray-400 text-center leading-tight max-w-[72px]
                 group-hover:text-white transition-colors duration-200"
    >
      {skill.name}
    </span>
  </div>
);

// ── Category Card (vertical rectangle) ───────────────────────────────────────
const CategoryCard = ({
  cat,
  index,
}: {
  cat: Category;
  index: number;
}) => (
  <motion.div
    variants={fadeIn("up", "spring", index * 0.12, 0.65)}
    className="relative flex flex-col gap-6 rounded-3xl p-6 overflow-hidden"
    style={{
      background:
        "linear-gradient(160deg, rgba(17,24,39,0.95) 0%, rgba(10,10,20,0.98) 100%)",
      border: `1px solid ${cat.accent}33`,
      boxShadow: `0 0 40px ${cat.accent}18, 0 8px 32px rgba(0,0,0,0.5)`,
      minHeight: 360,
    }}
    whileHover={{
      borderColor: `${cat.accent}88`,
      boxShadow: `0 0 60px ${cat.accent}30, 0 12px 40px rgba(0,0,0,0.6)`,
      transition: { duration: 0.3 },
    }}
  >
    {/* Subtle glow blob */}
    <div
      className="absolute -top-10 -right-10 w-40 h-40 rounded-full opacity-20 blur-3xl pointer-events-none"
      style={{ background: cat.accent }}
    />

    {/* Header */}
    <div className="flex items-center gap-3 z-10">
      <div
        className="w-10 h-10 rounded-xl flex items-center justify-center text-xl shadow-lg"
        style={{ background: `${cat.accent}22`, border: `1px solid ${cat.accent}44` }}
      >
        {cat.emoji}
      </div>
      <h3
        className="font-bold text-[17px] text-white tracking-wide"
        style={{ textShadow: `0 0 20px ${cat.accent}66` }}
      >
        {cat.title}
      </h3>
    </div>

    {/* Divider */}
    <div
      className="h-px w-full opacity-30 rounded-full"
      style={{ background: `linear-gradient(to right, ${cat.accent}, transparent)` }}
    />

    {/* Skills grid */}
    <div className="flex flex-wrap gap-5 z-10">
      {cat.skills.map((s) => (
        <Badge key={s.name} skill={s} />
      ))}
    </div>
  </motion.div>
);

// ── Main Component ────────────────────────────────────────────────────────────
export const Skills = () => (
  <SectionWrapper idName="skills">
    <>
      {/* Heading */}
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>What I know</p>
        <h2 className={styles.sectionHeadText}>Technical Skills.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn(undefined, undefined, 0.1, 1)}
        className="mt-3 text-secondary text-[18px] max-w-2xl leading-[30px]"
      >
        The tools, technologies, and concepts I use to build and secure digital systems.
      </motion.p>

      {/* Vertical card grid — each column stays narrow and tall */}
      <div
        className="mt-12 grid gap-6"
        style={{
          gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))",
        }}
      >
        {CATEGORIES.map((cat, i) => (
          <CategoryCard key={cat.title} cat={cat} index={i} />
        ))}
      </div>
    </>
  </SectionWrapper>
);
