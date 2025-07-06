"use client"

import { useRef } from "react"
import { useFrame } from "@react-three/fiber"
// import { Float, Sphere, Box, Octahedron, Torus } from "@react-three/drei"
import type * as THREE from "three"
// import { useGLTF } from '@react-three/drei';

// const hollowKnightModel = "models/hollow-knight.glb"
// const cupheadModel = "models/cuphead.glb"
// const phoenixPlanetModel = "models/planet_of_phoenix.glb"
// const swFighterModel = "models/fighter.glb"

// useGLTF.preload(hollowKnightModel)

export default function FloatingShapes() {
  const groupRef = useRef<THREE.Group>(null)
  const scrollY = useRef(0)

  // const { scene: hollowKnightScene } = useGLTF(hollowKnightModel)
  // const { scene: cupheadScene } = useGLTF(cupheadModel)
  // const { scene: phoenixPlanetScene } = useGLTF(phoenixPlanetModel)
  // const { scene: swFighterScene } = useGLTF(swFighterModel)

  useFrame(() => {
    if (groupRef.current) {
      // Adjust the divisor for sensitivity
      groupRef.current.rotation.y = scrollY.current * 0.002
    }
  })

  return (
    <group ref={groupRef}>
      {/* <Float speed={1.5} rotationIntensity={1} floatIntensity={2}>
        <primitive object={hollowKnightScene} position={[2, 0, -3]} scale={0.5}/>
      </Float>
      <Float speed={2} rotationIntensity={1.5} floatIntensity={1.5}>
        <primitive object={cupheadScene} position={[3, 3, -1]}/>
      </Float>
      <Float speed={1.8} rotationIntensity={2} floatIntensity={1.8}>
        <primitive object={phoenixPlanetScene} position={[-2, -1, -4]} scale={0.6}/>
      </Float>
      <Float speed={1.7} rotationIntensity={1.2} floatIntensity={1.3}>
        <primitive object={swFighterScene} position={[-3, 0, -1]} scale={0.2}/>
      </Float> */}
    </group>
  )
}
