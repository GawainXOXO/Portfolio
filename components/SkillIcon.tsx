import type { IconType } from "react-icons";
import {
  SiPython, SiR, SiLooker, SiPostgresql, SiReact, SiNextdotjs, SiLaravel, SiPhp, SiJavascript, SiHtml5, SiCss,
  SiTailwindcss, SiBootstrap, SiC, SiJenkins, SiKubernetes, SiGit, SiJira, SiFigma,
} from "react-icons/si";
import {
  FaJava, FaFileExcel, FaChartBar, FaDatabase, FaSyncAlt, FaClipboardCheck, FaFilePowerpoint, FaPaintBrush,
  FaComments, FaBrain, FaUsers, FaClock, FaFlag,
} from "react-icons/fa";

// color: warna brand; "currentColor" untuk logo gelap agar tetap terbaca di mode malam.
const MAP: Record<string, [IconType, string]> = {
  Python: [SiPython, "#3776AB"],
  R: [SiR, "#276DC3"],
  Excel: [FaFileExcel, "#217346"],
  "Looker Studio": [SiLooker, "#4285F4"],
  Tableau: [FaChartBar, "#E97627"],
  SQL: [SiPostgresql, "#4169E1"],
  SSIS: [FaDatabase, "#CC2927"],
  React: [SiReact, "#149ECA"],
  "Next.js": [SiNextdotjs, "currentColor"],
  Laravel: [SiLaravel, "#FF2D20"],
  PHP: [SiPhp, "#777BB4"],
  JavaScript: [SiJavascript, "#F7DF1E"],
  HTML: [SiHtml5, "#E34F26"],
  CSS: [SiCss, "#1572B6"],
  "Tailwind CSS": [SiTailwindcss, "#06B6D4"],
  Bootstrap: [SiBootstrap, "#7952B3"],
  Java: [FaJava, "#E76F00"],
  C: [SiC, "#5C6BC0"],
  Jenkins: [SiJenkins, "#D24939"],
  Kubernetes: [SiKubernetes, "#326CE5"],
  Git: [SiGit, "#F05032"],
  "CI/CD": [FaSyncAlt, "#2088FF"],
  Jira: [SiJira, "#0052CC"],
  "UAT & QA Testing": [FaClipboardCheck, "#16A34A"],
  Figma: [SiFigma, "#F24E1E"],
  PowerPoint: [FaFilePowerpoint, "#D24726"],
  Canva: [FaPaintBrush, "#00C4CC"],
  Communication: [FaComments, "#0F766E"],
  "Problem Solving": [FaBrain, "#7C3AED"],
  Teamwork: [FaUsers, "#0369A1"],
  "Time Management": [FaClock, "#B45309"],
  Adaptability: [FaSyncAlt, "#0F766E"],
  Leadership: [FaFlag, "#BE123C"],
};

export function SkillIcon({ name, size = 32 }: { name: string; size?: number }) {
  const hit = MAP[name];
  if (!hit) return null;
  const [Icon, color] = hit;
  return <Icon size={size} color={color} aria-hidden />;
}
