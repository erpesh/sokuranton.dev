"use client"

import { useRef, useState } from "react"
import { useFrame } from "@react-three/fiber"
import { Float, Torus, Sphere, Box } from "@react-three/drei"
import type * as THREE from "three"

export default function InteractiveModel() {
  const groupRef = useRef<THREE.Group>(null)
  const [hovered, setHovered] = useState(false)

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.5
      groupRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.3) * 0.2
    }
  })

  return (
    <group
      ref={groupRef}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
      scale={hovered ? 1.1 : 1}
    >
      <Float speed={2} rotationIntensity={1} floatIntensity={0.5}>
        <Torus args={[1, 0.3, 16, 32]} position={[0, 0, 0]}>
          <meshStandardMaterial
            color={hovered ? "#ff6b6b" : "#4ecdc4"}
            metalness={0.8}
            roughness={0.2}
            transparent
            opacity={0.8}
          />
        </Torus>
      </Float>

      <Float speed={1.5} rotationIntensity={2} floatIntensity={0.8}>
        <Sphere args={[0.3]} position={[0, 0, 0]}>
          <meshStandardMaterial color={hovered ? "#45b7d1" : "#96ceb4"} metalness={0.9} roughness={0.1} />
        </Sphere>
      </Float>

      <Float speed={1.8} rotationIntensity={1.5} floatIntensity={0.6}>
        <Box args={[0.2, 0.2, 0.2]} position={[1.5, 0, 0]}>
          <meshStandardMaterial color={hovered ? "#feca57" : "#ff9ff3"} metalness={0.7} roughness={0.3} />
        </Box>
      </Float>

      <Float speed={1.3} rotationIntensity={1.8} floatIntensity={0.7}>
        <Box args={[0.2, 0.2, 0.2]} position={[-1.5, 0, 0]}>
          <meshStandardMaterial color={hovered ? "#ff6348" : "#54a0ff"} metalness={0.6} roughness={0.4} />
        </Box>
      </Float>
    </group>
  )
}
