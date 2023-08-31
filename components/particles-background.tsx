"use client"; // This is a client component 👈🏽

import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import {Engine, ISourceOptions} from "tsparticles-engine";
import {useTheme} from "next-themes";
import { useWindowSize } from '@react-hookz/web';

const getOptions = (theme: string | undefined, fullScreen: boolean = false) : ISourceOptions => {

  let color = "#000000";
  if (theme === "dark") color = "#ffffff";
  // else if (theme === "green") color = "#D6ED17FF";
  // else if (theme === "yellow") color = "#FEE715FF";

  return {
    background: {
      color: {
        value: "transparent",
      },
    },
    fpsLimit: 120,
    interactivity: {
      events: {
        onHover: {
          enable: true,
          mode: "repulse",
        },
        resize: true,
      },
      modes: {
        push: {
          quantity: 4,
        },
        repulse: {
          distance: 200,
          duration: 0.4,
        },
      },
    },
    particles: {
      color: {
        value: color,
      },
      links: {
        color: color,
        distance: 150,
        enable: true,
        opacity: 0.5,
        width: 1,
      },
      collisions: {
        enable: true,
      },
      move: {
        enable: true,
        outModes: {
          default: "bounce", // "out"
        },
        random: false,
        speed: 3,
        straight: false,
      },
      number: {
        density: {
          enable: true,
          area: 800,
        },
        value: 60,
      },
      opacity: {
        value: 0.5,
      },
      shape: {
        type: "circle",
      },
      size: {
        value: {min: 1, max: 3},
      },
    },
    detectRetina: true,
    fullScreen: {
      enable: fullScreen
    }
  }
}

interface Props {
  fullScreen: boolean
}

const ParticlesBackground = ({fullScreen} : Props) => {

  const {width} = useWindowSize();
  const { resolvedTheme } = useTheme();

  const particlesInit = async (main: Engine) => {
    await loadFull(main);
  };

  if (!fullScreen && width <= 400) return null;

  return (
      <Particles
        init={particlesInit}
        options={getOptions(resolvedTheme, fullScreen)}
        className={fullScreen ? "" : "container-bg"}
        canvasClassName={fullScreen ? "tsparticles-full-screen" : ""}
      />
  );

};

export default ParticlesBackground;