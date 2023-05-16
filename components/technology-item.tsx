"use client"; // This is a client component 👈🏽

import { FaReact, FaVuejs, FaPhp } from 'react-icons/fa';
import {
  SiDjango,
  SiTypescript,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiFirebase,
  SiCsharp,
  SiSupabase, SiStripe
} from 'react-icons/si';
import {IconType} from "react-icons";
import {useTheme} from "next-themes";
import NoSSR from "../components/no-ssr";
import {Technology} from "../projects/data";

interface ITechnology {
  icon: IconType
  lightColor: string
  darkColor: string
  size?: number
}

const technologies: Record<Technology, ITechnology> = {
  "React" : {
    icon: FaReact,
    lightColor: "#90cdf4",
    darkColor: "#1d50b9",
  },
  "Django": {
    icon: SiDjango,
    lightColor: "#00bfff",
    darkColor: "#1F2937",
  },
  "Vue": {
    icon: FaVuejs,
    lightColor: "#68D391",
    darkColor: "#277956",
  },
  "Typescript": {
    icon: SiTypescript,
    lightColor: "#068ae3",
    darkColor: "#111827",
  },
  "Next.js": {
    icon: SiNextdotjs,
    lightColor: "#e2e8f0",
    darkColor: "#1F2937",
  },
  "PHP": {
    icon: FaPhp,
    lightColor: "#caa5f3",
    darkColor: "#4D588E",
    size: 21,
  },
  "Node.js": {
    icon: SiNodedotjs,
    lightColor: "#8CC84B",
    darkColor: "#314D35",
  },
  "PostgreSQL": {
    icon: SiPostgresql,
    lightColor: "#00bfff",
    darkColor: "#1F2937",
  },
  "Firebase": {
    icon: SiFirebase,
    lightColor: "#FFCB2B",
    darkColor: "#242424",
  },
  "C#": {
    icon: SiCsharp,
    lightColor: "#9B4F96",
    darkColor: "#171717",
  },
  "Supabase": {
    icon: SiSupabase,
    lightColor: "#44CF93",
    darkColor: "#333333",
  },
  "Stripe": {
    icon: SiStripe,
    lightColor: "#6772E5",
    darkColor: "#1F2937",
  },
};


interface Props {
  tech: string
}

const TechnologyItem = ({tech} : Props) => {

  const technology = technologies[tech];
  const TechnologyIcon = technology.icon;

  const {theme, setTheme} = useTheme();

  return (
    <NoSSR>
        <span className={"tech-item"} style={{
          backgroundColor: theme === "dark" ? technology.lightColor : technology.darkColor,
          color: theme === "dark" ? technology.darkColor : technology.lightColor
        }}>
          <TechnologyIcon size={technology.size ?? 16}/>
        <span>{tech}</span>
      </span>
    </NoSSR>
  );
};

export default TechnologyItem;