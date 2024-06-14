"use client";

import { useRef } from "react";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { Mesh } from "three";

function MeshComponent() {
    const fileUrl = "/desk.glb";
    const mesh = useRef<Mesh>(null!);
    const gltf = useLoader(GLTFLoader, fileUrl);

    // useFrame(() => {
    //     mesh.current.rotation.y += 0.01;
    //  });
  
    return (
      <mesh ref={mesh} position={[0, -0.1 , 0]} rotation={[0, -Math.PI, 0]}>
        <primitive object={gltf.scene} />
      </mesh>
    );
  }

  export function Desk() {
    return (
        
          <MeshComponent />
       
    );
  }