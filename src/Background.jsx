import { useFrame } from "@react-three/fiber"

import { useEffect, useRef } from "react";
import './Materials/FloorMaterial/FloorMaterial.jsx'

export default function Background()
{


    const materialRef = useRef()
    useFrame((state, delta)=>{
        materialRef.current.uTime += delta
    })    

    return <>
        <mesh >
            <planeGeometry args={[1, 1, 1, 1]} />
            <floorMaterial ref={materialRef} depthTest={false} />
        </mesh>
    </>
}