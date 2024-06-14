"use client";

import { useRef } from "react";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { Mesh } from "three";

function MeshComponent() {
    const fileUrl = "/Rug.glb";
    const mesh = useRef<Mesh>(null!);
    const gltf = useLoader(GLTFLoader, fileUrl);

    // useFrame(() => {
    //     mesh.current.rotation.y += 0.01;
    //  });
  
    return (
      <mesh ref={mesh} scale={[50,70,70]} position={[-.2,-.6,-1.3]} rotation={[0, -Math.PI * 2 , 0]}>
        <primitive object={gltf.scene} />
      </mesh>
    );
  }

  export function Rug() {
    return (
        
          <MeshComponent />
       
    );
  }