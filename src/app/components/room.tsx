"use client";

import { useRef } from "react";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { Mesh } from "three";

function MeshComponent() {
    const fileUrl = "/Apartment.glb";
    const mesh = useRef<Mesh>(null!);
    const gltf = useLoader(GLTFLoader, fileUrl);

    return (
      <mesh ref={mesh} scale={[1,1,1.5]} position={[-.2,0.05,-.8]} rotation={[0, Math.PI /2, 0]}>
        <primitive object={gltf.scene} />
      </mesh>
    );
  }

  export function Room() {
    return (
        
          <MeshComponent />
       
    );
  }