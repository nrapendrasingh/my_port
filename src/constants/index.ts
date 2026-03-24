// Contains constant data for using in website
// ! Don't remove anything from here if not sure

import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  threejs,
  project1,
  project2,
  project3,
  project4,
  project5,
  project6,
  user1,
  user2,
  user3,
  youtube,
  linkedin,
  twitter,
  github,
  burpsuite,
  wireshark,
  nmap,
  maltego,
  tor,
  forcepoint,
  splunk,
  kali,
  lpu,
  stpauls,
} from "../assets";

export const NAV_LINKS = [
  {
    id: "about",
    title: "About",
    link: null,
  },
  {
    id: "skills",
    title: "Skills",
    link: null,
  },
  {
    id: "projects",
    title: "Projects",
    link: null,
  },
  {
    id: "certificates",
    title: "Certificates",
    link: null,
  },
  {
    id: "achievements",
    title: "Achievements",
    link: null,
  },
  {
    id: "experience",
    title: "Experience",
    link: null,
  },
  {
    id: "contact",
    title: "Contact",
    link: null,
  },
] as const;

// Services
export const SERVICES = [
  {
    title: "Cyber Security Analyst",
    icon: web,
  },
  {
    title: "Software Developer (Backend / Full Stack)",
    icon: backend,
  },
  {
    title: "Software Engineer (SDE-1)",
    icon: creator,
  },
] as const;

// Technologies
export const TECHNOLOGIES = [
  {
    name: "Burp Suite",
    icon: burpsuite,
  },
  {
    name: "Wireshark",
    icon: wireshark,
  },
  {
    name: "Nmap",
    icon: nmap,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "Python",
    icon: maltego,
  },
  {
    name: "Git",
    icon: git,
  },
  {
    name: "GitHub",
    icon: github,
  },
  {
    name: "Docker",
    icon: docker,
  },
  {
    name: "Kali Linux",
    icon: kali,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Tor",
    icon: tor,
  },
  {
    name: "Forcepoint",
    icon: forcepoint,
  },
  {
    name: "Splunk",
    icon: splunk,
  },
] as const;

// Experiences
export const EXPERIENCES = [
  {
    title: "DSA using Java",
    company_name: "Cipher Schools (Edtech Company)",
    icon: starbucks,
    iconBg: "#383E56",
    date: "Jun 2025 - Jul 2025",
    hoverImage: "/s1.png",
    certificateLink: "https://drive.google.com/file/d/1hWXvgeHuJlP8USQ71SH7px7InwdpEfsk/view",
    points: [
      "Implemented core Data Structures such as Arrays, Linked Lists, Stacks, Queues, Trees, Graphs, and HashMaps using Java.",
      "Enhanced problem-solving and logical thinking ability by building efficient and optimized solutions using Java.",
      "Optimized multiple Java solutions by applying better algorithmic approaches, reducing execution time by up to 40%.",
      "Applied advanced problem-solving strategies including recursion, sorting, searching, and greedy techniques to develop scalable and time-efficient solutions.",
    ],
  },
  {
    title: "B.Tech in Computer Science & Engineering",
    company_name: "Lovely Professional University",
    icon: lpu,
    iconBg: "#E6DEDD",
    date: "2023 – Present",
    hoverImage: "/lpu.png",
    certificateLink: "",
    points: [
      "Currently pursuing B.Tech in Computer Science & Engineering",
      "Current CGPA: 7.2",
    ],
  },
  {
    title: "Intermediate (PCM)",
    company_name: "St. Paul’s Inter College",
    icon: stpauls,
    iconBg: "#383E56",
    date: "2022 – 2023",
    hoverImage: "/st.png",
    certificateLink: "",
    points: [
      "Completed Intermediate (12th grade) with Physics, Chemistry, and Mathematics.",
      "Percentage achieved: 80%",
    ],
  },
  {
    title: "Matriculation",
    company_name: "St. Paul’s Inter College",
    icon: stpauls,
    iconBg: "#E6DEDD",
    date: "2020 – 2021",
    hoverImage: "/st.png",
    certificateLink: "",
    points: [
      "Completed Matriculation (10th grade).",
      "Percentage achieved: 88.2%",
    ],
  },
] as const;

// Testimonials
export const TESTIMONIALS = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: user1,
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: user2,
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: user3,
  },
] as const;

// Projects
export const PROJECTS = [
  {
    name: "Mental Health Simulation Bot",
    description:
      "Designed and implemented a rule-based conversational bot using core Data Structures to simulate mental-health guidance responses with 92% consistency. Utilized DSA techniques to optimize text-matching and response-generation algorithms.",
    tags: [
      {
        name: "java",
        color: "blue-text-gradient",
      },
      {
        name: "dsa",
        color: "green-text-gradient",
      },
      {
        name: "nlp",
        color: "pink-text-gradient",
      },
    ],
    image: project1,
    source_code_link: "https://github.com/nrapendrasingh/MHSB",
    live_site_link: "https://github.com/nrapendrasingh/MHSB",
  },
  {
    name: "Passive Income Chat Bot",
    description:
      "Converted the Mental Health Simulation Bot into a monetizable REST API, enabling third-party apps to integrate rule-based guidance with 92% response consistency. Engineered scalable backend architecture with API-key authentication.",
    tags: [
      {
        name: "java",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "backend",
        color: "pink-text-gradient",
      },
    ],
    image: project2,
    source_code_link: "https://github.com/nrapendrasingh/Passive-income",
    live_site_link: "https://github.com/nrapendrasingh/Passive-income",
  },
] as const;

export const SOCIALS = [
  {
    name: "YouTube",
    icon: youtube,
    link: "https://www.youtube.com",
  },
  {
    name: "Linkedin",
    icon: linkedin,
    link: "http://www.linkedin.com/in/nrapendrachauhan",
  },
  {
    name: "Twitter",
    icon: twitter,
    link: "https://x.com/_sanidhyy",
  },
  {
    name: "GitHub",
    icon: github,
    link: "https://github.com/nrapendrasingh",
  },
] as const;

// Certificates
export const CERTIFICATES = [
  {
    name: "Introduction to Hardware and Operating Systems",
    issuer: "Coursera",
    date: "Sep' 24",
    link: "https://drive.google.com/file/d/1rs6oo5UmdhpfvObRCZixDd8LWVwEDcRw/view?pli=1",
  },
  {
    name: "Build Generative AI Apps and Solutions with No-Code Tools",
    issuer: "InfosysSpringboard",
    date: "Dec' 25",
    link: "https://drive.google.com/file/d/1UqD4JymXKyZLFCitCh5KP2pItBlP97Ew/view",
  },
  {
    name: "Computational Theory: Language Theory & Finite Automata Theory",
    issuer: "InfosysSpringboard",
    date: "Dec' 25",
    link: "https://drive.google.com/file/d/1gbQM7xAJUycTKZ3JurbNfXbBAbyBr3fn/view",
  },
  {
    name: "The Bits and Bytes of Computer Networking",
    issuer: "Coursera",
    date: "Oct' 24",
    link: "https://drive.google.com/file/d/1HrZMft41n1SPKwxxAgA4vDlcp-l9-JPv/view",
  },
] as const;

// Achievements
export const ACHIEVEMENTS = [
  {
    title: "150+ DSA Problems Solved",
    description: "Solved 150+ DSA problems focusing on Time & Space Complexity optimization, improving problem-solving efficiency by 30%.",
    icon: "code",
  },
  {
    title: "5-Star in C++ and 3-Star in C",
    description: "Obtained 5-Star in C++ and 3-Star in C on HackerRank.",
    icon: "star",
  },
] as const;

