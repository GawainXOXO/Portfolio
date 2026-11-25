import type { IconType } from "react-icons";
import {
  SiPython, SiR, SiLooker, SiPostgresql, SiReact, SiNextdotjs, SiLaravel, SiPhp, SiJavascript, SiHtml5, SiCss,
  SiTailwindcss, SiBootstrap, SiC, SiJenkins, SiKubernetes, SiGit, SiJira, SiFigma,
} from "react-icons/si";
import {
  FaJava, FaFileExcel, FaChartBar, FaDatabase, FaSyncAlt, FaClipboardCheck, FaFilePowerpoint,
  FaChartPie, FaComments, FaBrain, FaUsers, FaClock, FaFlag,
} from "react-icons/fa";

// react-icons tidak punya logo Canva, jadi digambar manual: lingkaran gradasi teal-ungu dengan huruf "c" putih.
const CanvaIcon: IconType = ({ size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 32 32" aria-hidden="true">
    <defs>
      <linearGradient id="canva-g" x1="4" y1="28" x2="28" y2="4" gradientUnits="userSpaceOnUse">
        <stop offset="0" stopColor="#00C4CC" />
        <stop offset="0.55" stopColor="#4F6BED" />
        <stop offset="1" stopColor="#7D2AE8" />
      </linearGradient>
    </defs>
    <circle cx="16" cy="16" r="15" fill="url(#canva-g)" />
    <path
      d="M21.2 12.6c-1.1-1.5-2.8-2.4-4.7-2.4-3.4 0-6 2.7-6 5.9 0 3.3 2.6 5.8 5.7 5.8 2.3 0 4.2-1.3 5.2-3.3"
      fill="none" stroke="#fff" strokeWidth="2.6" strokeLinecap="round"
    />
  </svg>
);

// color: warna brand; "currentColor" untuk logo gelap agar tetap terbaca di mode malam.
const MAP: Record<string, [IconType, string]> = {
  Python: [SiPython, "#3776AB"],
  R: [SiR, "#276DC3"],
  Excel: [FaFileExcel, "#217346"],
  "Looker Studio": [SiLooker, "#4285F4"],
  Tableau: [FaChartBar, "#E97627"],
  "Power BI": [FaChartPie, "#F2C811"],
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
  Canva: [CanvaIcon, "#00C4CC"],
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
