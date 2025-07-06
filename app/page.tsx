"use client"

import { Suspense } from "react"
import { Canvas } from "@react-three/fiber"
import { OrbitControls, Environment } from "@react-three/drei"
import { motion } from "framer-motion"
import { Github, Linkedin, Mail, ExternalLink, Code, Palette, Zap, Server, Brain, FileUser } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import FloatingShapes from "@/components/floating-shapes"
import ParticleField from "@/components/particle-field"
import SkillModel from "@/components/skill-model"
import Link from "next/link"
import { siteConfig } from "@/lib/config"
import Image, { StaticImageData } from "next/image"
import { DefaultButton } from "@/components/default-button"

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
            <Suspense fallback={null}>
              <Environment preset="night" />
              <FloatingShapes />
              <ParticleField />
              <OrbitControls enableZoom={false} enablePan={false} />
            </Suspense>
          </Canvas>
        </div>

        <div className="relative z-10 text-center text-white px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <h1 className="text-6xl md:text-8xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              {siteConfig.fullName}
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-300">Software Engineer</p>
            <div className="flex md:flex-row flex-col gap-4 md:gap-2 justify-center items-center">
              <DefaultButton
                icon={<Github className="h-4 w-4" />}
                text={"GitHub"}
                href={siteConfig.links.github}
              />
              <DefaultButton
                icon={<Linkedin className="h-4 w-4" />}
                text="LinkedIn"
                href={siteConfig.links.linkedin}
              />
              <DefaultButton
                icon={<FileUser className="h-4 w-4" />}
                text="Resume"
                href={siteConfig.links.cv}
              />
              <DefaultButton
                icon={<Mail className="h-4 w-4" />}
                text="Contact"
                href={`mailto:${siteConfig.links.email}`}
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4 relative">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">About Me</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              I'm a software engineer passionate about web development and machine learning. I create interactive apps with modern frameworks and enjoy blending frontend, backend, and AI.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <Code className="h-8 w-8 text-blue-400" />
                  <div>
                    <h3 className="text-xl font-semibold text-white">Front-End Development</h3>
                    <p className="text-gray-400">React, Next.js, TypeScript, TailwindCSS</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <Server className="h-8 w-8 text-purple-400" />
                  <div>
                    <h3 className="text-xl font-semibold text-white">Back-End Development</h3>
                    <p className="text-gray-400">Symfony, FastAPI, Node.js, SQL, Docker</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <Brain className="h-8 w-8 text-pink-400" />
                  <div>
                    <h3 className="text-xl font-semibold text-white">Machine Learning & AI</h3>
                    <p className="text-gray-400">Python, TensorFlow, Scikit-learn</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="h-96"
            >
              <Canvas>
                <Suspense fallback={null}>
                  <Environment preset="studio" />
                  <SkillModel />
                  <OrbitControls enableZoom={false} />
                </Suspense>
              </Canvas>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Featured Projects</h2>
            <p className="text-xl text-gray-300">A showcase of my latest work in web development and 3D graphics</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 group">
                  <CardHeader>
                    <div className="h-48 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-lg mb-4 relative overflow-hidden">
                      <Image
                        src={project.image}
                        alt={project.title}
                        className="object-cover w-full h-full"
                        width={500}
                        height={300}  
                        />
                    </div>
                    <CardTitle className="text-white">{project.title}</CardTitle>
                    <CardDescription className="text-gray-400">{project.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech) => (
                        <Badge key={tech} variant="secondary" className="bg-white/10 text-white">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex gap-2">
                      {project.githubLink && <DefaultButton
                        icon={<Github className="h-4 w-4" />}
                        size='sm'
                        text="Code"
                        href={project.githubLink}
                      />}
                      {project.link && <DefaultButton
                        icon={<ExternalLink className="h-4 w-4" />}
                        size='sm'
                        text="Demo"
                        href={project.link}
                      />}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Skills & Technologies</h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="flex"
              >
                <Card className="bg-white/5 border-white/10 backdrop-blur-sm flex flex-col flex-1 h-full">
                  <CardHeader>
                    <CardTitle className="text-white flex items-center gap-2">
                      <category.icon className="h-6 w-6" />
                      {category.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="flex-1 flex items-end">
                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill) => (
                        <Badge key={skill} variant="outline" className="border-white/20 text-gray-300">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export interface Project {
  image: string
  title: string
  githubLink: string
  link?: string
  technologies: string[]
  description: string
  inProgress?: boolean
}

const projects: Project[] = [
  {
    image: "/images/forex.webp",
    title: "Forex Predictions Platform",
    githubLink: "https://github.com/erpesh/forex-predictions",
    technologies: ["Next.js", "FastAPI", "Python", "TensorFlow", "Scikit-learn", "NumPy", "Pandas"],
    description: "Developed as my final year university project, this full-stack platform predicts forex currency pairs using LSTM-based machine learning models. The project features a modern Next.js web client for interactive charting and analytics, a FastAPI backend for serving predictions, and a Python pipeline for model training. I implemented the entire stack, including integration with Alpha Vantage for real-time data, sentiment analysis, and database-backed statistics."
  },
  {
    image: "/images/3squared.webp",
    title: "3Squared Train Map",
    githubLink: "https://github.com/erpesh/3squared-train-map",
    technologies: ["React"],
    description: "As part of a university module with 3Squared, I worked in a team to develop a National Rail Network Map providing real-time freight train data across the UK. I contributed by integrating live train data, mapping locations, and implementing schedule comparison features."
  },
  {
    image: "/images/mfg.webp",
    title: "Modern Fit Gym",
    githubLink: "https://github.com/FarshadJahanfard/ModernFit-Gym-",
    technologies: ["PHP", "Laravel"],
    description: "Modern Fit changes how we stay fit with personalized workout plans, nutritional advice, and simple membership management. Trainers create custom plans, and members easily join classes, get nutritional details, and manage memberships without any hassle. The admin panel makes things run smoothly for efficient management."
  },
  {
    image: "/images/quizlet-clone.webp",
    title: "Quizlet Clone",
    githubLink: "https://github.com/erpesh/quizlet-clone",
    link: "https://erpesh.github.io/quizlet-clone",
    technologies: ["React", "Typescript", "Firebase"],
    description: "QuizletClone is my pet project, inspired by Quizlet. It's a user-friendly platform designed for learning and studying with digital flashcards. Dive into a vast collection of educational content, create your own interactive flashcards, and test your knowledge with fun quizzes."
  },
  {
    image: "/images/react-chess.webp",
    title: "React Chess",
    githubLink: "https://github.com/erpesh/react-chess",
    technologies: ["React", "Typescript", "Node.js"],
    description: "React Chess is an online multiplayer chess platform. Play against opponents worldwide, challenge friends, and enhance your skills through interactive gameplay."
  },
]

const skillCategories = [
  {
    title: "Front-End Development",
    icon: Code,
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    title: "Back-End Development",
    icon: Server,
    skills: ["Symfony", "FastAPI", "Node.js", "SQL", "Docker", "AWS"],
  },
  {
    title: "Machine Learning & AI",
    icon: Brain,
    skills: ["Python", "TensorFlow", "Scikit-learn", "Pandas", "NumPy"],
  },
]
