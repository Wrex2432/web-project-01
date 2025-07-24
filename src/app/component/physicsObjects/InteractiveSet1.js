"use client"
import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";

export function InteractiveSet1() {
    return (
        <div className=' inset-0 z-10 flex items-center justify-center border'>
        <Canvas className='h-full w-full'
            camera={{
                position: [1.5, 1, 1.4],
                fov: 55
            }}
        >
                <Suspense>
                    <Scene/>
                </Suspense>
            </Canvas>
        </div>
    )
}

function Scene() {
    return(
        <group>
            <OrbitControls/>
            <pointLight 
                position={[1,1,1]}
                intensity={5}
            />
            <mesh>
                <meshStandardMaterial/>
                <boxGeometry/>
            </mesh>
        </group>
    )
}