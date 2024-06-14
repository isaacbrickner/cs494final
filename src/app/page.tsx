'use client'

import { Canvas } from "@react-three/fiber";

import { Desk } from "./components/desk"; 
import { CameraControls, Sky, Stage, Text3D } from "@react-three/drei";
import { RecordPlayer } from "./components/recordplayer";
import { Suspense, useEffect, useRef, useState } from "react";
import { Speaker } from "./components/speaker";
import Box from "@mui/material/Box"
import 'bootstrap/dist/css/bootstrap.min.css';
import Link from "next/link";
import { Sofa } from "./components/couch";
import { Stool } from "./components/stool";
import { Rug } from "./components/rug";
import { Room } from "./components/room";
import { Group } from "three/examples/jsm/libs/tween.module.js";
import { Sidetable } from "./components/sideTable";
import { Piano } from "./components/Piano";
import { Posters } from "./components/poster";



export default function Home() {
	const cameraControlRef = useRef<CameraControls | null>(null);
  const [image, setImage] = useState<string>("")


  useEffect(() => {
    fetch('/pages/api/photos')
      .then((res) => 
        res.json())
      .then((data) => {
        console.log(data)
        console.log(data[0]["urls"].raw)
        const art = data[0]["urls"].raw
        const url = String(art)
        console.log(typeof url)
        setImage(url)
      })
  }, [])

  return (
    <>
    <Link href="/pages/page">
    <div id="scroll-container">
    <div id="scroll-text" className="titleDiv">
    <span className="red-text">CS</span> 

    <span className="yellow-text"> 494</span> 
            <span className="blue-text"> Final click me to</span>
            <span className="red-text">  go to a new page</span>
            <span className="yellow-text"> instead of </span>
            <span className="blue-text"> three.js </span>
      </div>
      </div>
      </Link>
  
    
  <Box component="section" sx={{my:'auto', mx: 'auto', width: 1280, height: 720, }}>
   <Box component="section" sx={{position: "fixed", my: '10%', mx: 'auto', width: 1280, height: 720, }}>
      <Canvas camera= {{fov: 90, near: 0.1, far: 1000, position: [0, 0, -5]}}>
      <ambientLight intensity={0.03} />
      {/* <fog attach="fog" args={['#ff5020', 5, 1800]} /> */}
      <spotLight angle={0.14} color="#ffd0d0" penumbra={1} position={[25, 50, -20]} shadow-mapSize={[2048, 2048]} shadow-bias={-0.0001} castShadow />
      <Sky sunPosition={[0, 0.4, 10]} />
      <Suspense fallback={null}>
      
      <CameraControls ref={cameraControlRef} />

    {/* <ambientLight intensity={1.5} /> */}
    {/* <Sky distance={4500000} sunPosition={[0, 1, 0]} inclination={0} azimuth={180} rayleigh={0} /> */}
    <Stage adjustCamera={false} preset={"rembrandt"} environment={"apartment"}>
    <Desk />
    <RecordPlayer />
    <Speaker/>
    <Sofa/>
    <Stool/>
    <Rug/>
    <Room/>
    <Sidetable/>
    <Piano/>

    {/* <Posters/> */}
    
    </Stage>
  
    </Suspense>
    </Canvas>
     </Box>
    </Box>
      </>
  );
}


