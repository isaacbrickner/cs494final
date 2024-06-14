"use client";

import { useRef } from "react";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { Mesh } from "three";

function MeshComponent() {
    const fileUrl = "/Piano.glb";
    const mesh = useRef<Mesh>(null!);
    const gltf = useLoader(GLTFLoader, fileUrl);

    // useFrame(() => {
    //     mesh.current.rotation.y += 0.01;
    //  });
  
    return (
      <mesh ref={mesh} scale={[.2,.2,.2]} position={[-3.5,-.5,-2]} rotation={[0, Math.PI / 6, 0]}>
        <primitive object={gltf.scene} />
      </mesh>
    );
  }

  export function Piano() {
    return (
        
          <MeshComponent />
       
    );
  }