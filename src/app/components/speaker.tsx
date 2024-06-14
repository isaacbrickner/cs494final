"use client";

import { useRef } from "react";
import { Canvas, useFrame, useLoader, Vector3 } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { Mesh } from "three";

function Speaker1(props: any) {
    const fileUrl = "/speaker.glb";
    const mesh = useRef<Mesh>(null!);
    const gltf = useLoader(GLTFLoader, fileUrl);

    // useFrame(() => {
    //     mesh.current.rotation.y += 0.01;
    //  });
  
    return (
      <mesh ref={mesh} rotation={[0, -Math.PI, 0]} {...props} >
        <primitive object={gltf.scene} />
      </mesh>
    );
  }

  function Speaker2(props: any) {
    const fileUrl = "/speaker2.glb";
    const mesh = useRef<Mesh>(null!);
    const gltf = useLoader(GLTFLoader, fileUrl);

    // useFrame(() => {
    //     mesh.current.rotation.y += 0.01;
    //  });
  
    return (
      <mesh ref={mesh} rotation={[0, -Math.PI, 0]} {...props} >
        <primitive object={gltf.scene} />
      </mesh>
    );
  }

  export function Speaker() {
    return (
        <>
          <Speaker1 scale={[4,5,5]} position={[-1.5, -.5, .5]}/>
          <Speaker2 scale={[4,5,5]} position={[1.5, -.5, .5]}/>
        </>
    );
  }