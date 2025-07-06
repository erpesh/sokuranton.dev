"use client"

import { Center, Float, useGLTF } from "@react-three/drei"
import { useFrame } from "@react-three/fiber"
import { useRef } from "react"
import * as THREE from "three"

const modelPath = "models/python.glb"
useGLTF.preload(modelPath)

export default function SkillModel() {
  const { scene } = useGLTF(modelPath)
  const ref = useRef<THREE.Object3D>(null)

  useFrame(() => {
    if (ref.current) {
      ref.current.rotation.y += 0.01
    }
  })

  return (
    <Center>
      <primitive ref={ref} object={scene.clone()} scale={1.5} />
    </Center>
  )
}