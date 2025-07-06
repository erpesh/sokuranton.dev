"use client"

import { useRef } from "react"
import { useFrame } from "@react-three/fiber"
import { Float, Sphere, Box, Octahedron, Torus } from "@react-three/drei"
import type * as THREE from "three"

export default function FloatingShapes() {
  const groupRef = useRef<THREE.Group>(null)

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.1
    }
  })

  return (
    <group ref={groupRef}>
      <Float speed={1.5} rotationIntensity={1} floatIntensity={2}>
        <Sphere args={[0.5]} position={[-4, 2, -2]}>
          <meshStandardMaterial color="#3b82f6" metalness={0.8} roughness={0.2} />
        </Sphere>
      </Float>

      <Float speed={2} rotationIntensity={1.5} floatIntensity={1.5}>
        <Box args={[0.8, 0.8, 0.8]} position={[4, -1, -3]}>
          <meshStandardMaterial color="#8b5cf6" metalness={0.6} roughness={0.3} />
        </Box>
      </Float>

      <Float speed={1.8} rotationIntensity={2} floatIntensity={1.8}>
        <Octahedron args={[0.6]} position={[-2, -2, -4]}>
          <meshStandardMaterial color="#ec4899" metalness={0.7} roughness={0.1} />
        </Octahedron>
      </Float>

      <Float speed={1.2} rotationIntensity={0.8} floatIntensity={2.2}>
        <Torus args={[0.6, 0.2, 16, 32]} position={[3, 3, -1]}>
          <meshStandardMaterial color="#06b6d4" metalness={0.9} roughness={0.1} />
        </Torus>
      </Float>

      <Float speed={1.7} rotationIntensity={1.2} floatIntensity={1.3}>
        <Sphere args={[0.3]} position={[0, 3, -5]}>
          <meshStandardMaterial color="#f59e0b" metalness={0.5} roughness={0.4} />
        </Sphere>
      </Float>

      <Float speed={2.2} rotationIntensity={1.8} floatIntensity={1.7}>
        <Box args={[0.4, 1.2, 0.4]} position={[-3, 0, -1]}>
          <meshStandardMaterial color="#10b981" metalness={0.6} roughness={0.2} />
        </Box>
      </Float>
    </group>
  )
}
