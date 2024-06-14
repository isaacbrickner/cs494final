"use client";

import { useRef } from "react";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { Mesh } from "three";

function MeshComponent() {
    const fileUrl = "/Side Table.glb";
    const mesh = useRef<Mesh>(null!);
    const gltf = useLoader(GLTFLoader, fileUrl);

    // useFrame(() => {
    //     mesh.current.rotation.y += 0.01;
    //  });
  
    return (
      <mesh ref={mesh} scale={[1.5,1.5,2.3]} position={[-1.53,-.5,-2.]} rotation={[0, Math.PI /2, 0]}>
        <primitive object={gltf.scene} />
      </mesh>
    );
  }

  export function Sidetable() {
    return (
        
          <MeshComponent />
       
    );
  }