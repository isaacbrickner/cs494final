'use client'

import { Canvas } from "@react-three/fiber";

import { Desk } from "@/app/components/desk";
import { CameraControls, Sky, Stage, Text3D } from "@react-three/drei";
import { RecordPlayer } from "@/app/components/recordplayer";
import { Suspense, useRef } from "react";
import { Speaker } from "@/app/components/speaker";
import Box from "@mui/material/Box"

import 'bootstrap/dist/css/bootstrap.min.css';
import Link from "next/link";
import { Typography } from "@mui/material";



export default function Home() {
	const cameraControlRef = useRef<CameraControls | null>(null);
  return (
    <main>
      <Link href="/">
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
    
      
    <Box component="section" sx={{my:'auto', mx: 'auto', width: 800, height: 600, }}>
     <Typography variant="h1" component="h2"> I had some issues getting my API requests to work. The intention was to populate some 
      3d objects with external textures via the spotify API etc. Got stuck and ran outta time..
      </Typography>
        </Box>
    </main>
    );
}


