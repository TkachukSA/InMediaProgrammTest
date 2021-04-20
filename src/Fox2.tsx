import React, {Suspense, useRef} from 'react'
import {Canvas, useFrame, useLoader} from '@react-three/fiber'
import {useGLTF, Html} from '@react-three/drei'
import {FBXLoader} from "three/examples/jsm/loaders/FBXLoader";

export default function Modela() {
    return (
        <Canvas dpr={[1, 2]} camera={{position: [-2, 2, 4], fov: 25}}>
            <directionalLight position={[10, 10, 0]} intensity={1.5}/>
            <directionalLight position={[-10, 10, 5]} intensity={1}/>
            <directionalLight position={[-10, 20, 0]} intensity={1.5}/>
            <directionalLight position={[0, -10, 0]} intensity={0.25}/>
            <Model position-y={-0.5}/>
        </Canvas>
    )
}

function Model(props: any) {
    const ref = useRef<any>(null)
    useFrame((state) => {
            if (ref && ref.current) {
                ref.current.rotation.y = state.clock.elapsedTime
            }
        }
    )
    return (
        <group ref={ref} {...props}>
            <Suspense fallback={<Html center>loading...</Html>}>
                <Suspense fallback={<Bust url="/Poimandres.fbx"/>}>
                    <Bust url="/Poimandres.fbx"/>
                </Suspense>
            </Suspense>
        </group>
    )
}

function Bust({url}: { url: string }) {
    //const { scene } = useGLTF(url)
    const fbx = useLoader(FBXLoader, url);
    return <primitive scale={[0.01, 0.01, 0.01]} object={fbx}/>
}