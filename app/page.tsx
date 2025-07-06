"use client"

import { Suspense } from "react"
import { Canvas } from "@react-three/fiber"
import { OrbitControls, Environment } from "@react-three/drei"
import { motion } from "framer-motion"
import { Github, Linkedin, Mail, ExternalLink, Code, Palette, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import FloatingShapes from "@/components/floating-shapes"
import ParticleField from "@/components/particle-field"
import InteractiveModel from "@/components/interactive-model"

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
              Alex Chen
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-300">Creative Software Engineer & 3D Developer</p>
            <div className="flex gap-4 justify-center">
              <Button variant="outline" size="lg" className="bg-white/10 border-white/20 text-white hover:bg-white/20">
                <Github className="mr-2 h-4 w-4" />
                GitHub
              </Button>
              <Button variant="outline" size="lg" className="bg-white/10 border-white/20 text-white hover:bg-white/20">
                <Linkedin className="mr-2 h-4 w-4" />
                LinkedIn
              </Button>
              <Button variant="outline" size="lg" className="bg-white/10 border-white/20 text-white hover:bg-white/20">
                <Mail className="mr-2 h-4 w-4" />
                Contact
              </Button>
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
              I'm a passionate software engineer who loves creating immersive digital experiences. With expertise in
              modern web technologies and 3D graphics, I bring ideas to life through code.
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
                    <h3 className="text-xl font-semibold text-white">Full-Stack Development</h3>
                    <p className="text-gray-400">React, Next.js, Node.js, TypeScript</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <Palette className="h-8 w-8 text-purple-400" />
                  <div>
                    <h3 className="text-xl font-semibold text-white">3D Graphics & Animation</h3>
                    <p className="text-gray-400">Three.js, WebGL, Blender, React Three Fiber</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <Zap className="h-8 w-8 text-pink-400" />
                  <div>
                    <h3 className="text-xl font-semibold text-white">Performance Optimization</h3>
                    <p className="text-gray-400">WebAssembly, GPU Computing, Real-time Rendering</p>
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
                  <InteractiveModel />
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
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 group">
                  <CardHeader>
                    <div className="h-48 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-lg mb-4 relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-400/10 to-purple-400/10 group-hover:from-blue-400/20 group-hover:to-purple-400/20 transition-all duration-300" />
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
                      <Button
                        size="sm"
                        variant="outline"
                        className="bg-white/10 border-white/20 text-white hover:bg-white/20"
                      >
                        <Github className="mr-2 h-4 w-4" />
                        Code
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        className="bg-white/10 border-white/20 text-white hover:bg-white/20"
                      >
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Live Demo
                      </Button>
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
              >
                <Card className="bg-white/5 border-white/10 backdrop-blur-sm h-full">
                  <CardHeader>
                    <CardTitle className="text-white flex items-center gap-2">
                      <category.icon className="h-6 w-6" />
                      {category.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
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

      {/* Contact Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Let's Work Together</h2>
            <p className="text-xl text-gray-300 mb-8">
              Ready to bring your ideas to life? Let's create something amazing together.
            </p>
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600"
            >
              <Mail className="mr-2 h-4 w-4" />
              Get In Touch
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

const projects = [
  {
    id: 1,
    title: "3D Portfolio Website",
    description: "Interactive portfolio with Three.js animations and WebGL shaders",
    technologies: ["React", "Three.js", "WebGL", "TypeScript"],
  },
  {
    id: 2,
    title: "Real-time Collaboration Tool",
    description: "Multi-user collaborative platform with live updates and 3D visualization",
    technologies: ["Next.js", "WebSocket", "React Three Fiber", "Node.js"],
  },
  {
    id: 3,
    title: "AI-Powered Design Tool",
    description: "Machine learning application for automated 3D model generation",
    technologies: ["Python", "TensorFlow", "WebAssembly", "React"],
  },
  {
    id: 4,
    title: "VR Experience Platform",
    description: "Virtual reality web application using WebXR and immersive technologies",
    technologies: ["WebXR", "A-Frame", "Three.js", "JavaScript"],
  },
  {
    id: 5,
    title: "Data Visualization Dashboard",
    description: "Interactive 3D data visualization with real-time analytics",
    technologies: ["D3.js", "Three.js", "React", "WebGL"],
  },
  {
    id: 6,
    title: "Game Engine Framework",
    description: "Lightweight 3D game engine built for web browsers",
    technologies: ["WebGL", "TypeScript", "Web Workers", "Canvas API"],
  },
]

const skillCategories = [
  {
    title: "Frontend Development",
    icon: Code,
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Vue.js", "Angular"],
  },
  {
    title: "3D Graphics & Animation",
    icon: Palette,
    skills: ["Three.js", "WebGL", "React Three Fiber", "Blender", "GLSL", "WebXR"],
  },
  {
    title: "Backend & Tools",
    icon: Zap,
    skills: ["Node.js", "Python", "PostgreSQL", "Docker", "AWS", "GraphQL"],
  },
]
