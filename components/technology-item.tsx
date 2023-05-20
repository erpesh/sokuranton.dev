"use client"; // This is a client component 👈🏽

import { FaReact, FaVuejs, FaPhp } from 'react-icons/fa';
import {
  SiPython,
  SiTypescript,
  SiNextdotjs,
  SiNodedotjs,
  SiFirebase,
  SiSupabase,
  SiStripe
} from 'react-icons/si';
import {IconType} from "react-icons";
import {useTheme} from "next-themes";
import RenderOnMount from "./render-on-mount";
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
  "Python": {
    icon: SiPython,
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
  "Firebase": {
    icon: SiFirebase,
    lightColor: "#FFCB2B",
    darkColor: "#242424",
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
    <RenderOnMount>
        <span className={"tech-item"} style={{
          backgroundColor: theme === "dark" ? technology.lightColor : technology.darkColor,
          color: theme === "dark" ? technology.darkColor : technology.lightColor
        }}>
          <TechnologyIcon size={technology.size ?? 16}/>
        <span>{tech}</span>
      </span>
    </RenderOnMount>
  );
};

export default TechnologyItem;