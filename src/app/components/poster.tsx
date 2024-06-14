
"use client";

import { useEffect, useRef, useState } from "react";
import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { DoubleSide, Mesh, TextureLoader } from "three";
import { useTexture } from "@react-three/drei"


function Poster1(props: any) {
    const fileUrl = "/speaker.glb";
    const mesh = useRef<Mesh>(null!);
    const gltf = useLoader(GLTFLoader, fileUrl);
    
    
    // const colorTexture = useTexture(image)



  
    return (

    <mesh position={[0, 0, 0]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 1]}>

    <planeGeometry />

    <meshBasicMaterial side={DoubleSide}  />
  </mesh>
    );
  }

  // map={colorMap[0]

  function Poster2(props: any) {
    const fileUrl = "/speaker2.glb";
    const mesh = useRef<Mesh>(null!);
    const gltf = useLoader(GLTFLoader, fileUrl);

    return (
      <mesh ref={mesh} rotation={[0, -Math.PI, 0]} {...props} >
        <primitive object={gltf.scene} />
      </mesh>
    );
  }

  export function Posters(props: any) {
    return (
        <>
          <Poster1 scale={[4,5,5]} position={[-1.5, -.5, .5]} map={props}/>
        </>
    );
  }