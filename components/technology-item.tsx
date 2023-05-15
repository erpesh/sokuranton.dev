"use client"; // This is a client component 👈🏽

import { FaReact, FaVuejs, FaPhp } from 'react-icons/fa';
import { SiDjango, SiTypescript, SiNextdotjs, SiNodedotjs } from 'react-icons/si';
import {IconType} from "react-icons";
import {useTheme} from "next-themes";
import {NoSSR} from "next/dist/shared/lib/lazy-dynamic/dynamic-no-ssr";

interface Technology {
  icon: IconType
  lightColor: string
  darkColor: string
  size?: number
}

const technologies = {
  "React" : {
    icon: FaReact,
    lightColor: "#90cdf4",
    darkColor: "#2563EB",
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
    size: 24,
  },
  "Node.js": {
    icon: SiNodedotjs,
    lightColor: "#8CC84B",
    darkColor: "#314D35",
  },
};


interface Props {
  tech: string
}

const TechnologyItem = ({tech} : Props) => {

  const technology = technologies[tech] as Technology;
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