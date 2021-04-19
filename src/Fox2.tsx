import React, {Suspense} from 'react';
import "./styles.css";
import {Canvas} from "@react-three/fiber";
import {useLoader} from "@react-three/fiber";
import {Environment, OrbitControls} from "@react-three/drei";
import {FBXLoader} from "three/examples/jsm/loaders/FBXLoader";


const Scene = () => {
    const fbx = useLoader(FBXLoader, "Poimandres.fbx");

    return <primitive object={fbx}   scale={0.008}/>;
};

export default function Fox() {
    return (
        <div className="App">
            <Canvas >
                <color attach="background" args={["red"]} />
                <Suspense fallback={null}>
                    <Scene/>
                    <meshStandardMaterial color="hotpink" />
                    <OrbitControls  onClick={(e) =>  alert('click')}/>
                </Suspense>
            </Canvas>
        </div>
    );
}
