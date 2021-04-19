import React, {Suspense} from 'react';
import logo from './logo.svg';
import './App.css';

import {Canvas} from "@react-three/fiber";
import {useLoader} from "@react-three/fiber";
import {Environment, OrbitControls} from "@react-three/drei";
import {FBXLoader} from "three/examples/jsm/loaders/FBXLoader";


const Scene = () => {
    const fbx = useLoader(FBXLoader, "Poimandres.fbx");

    return <primitive object={fbx} scale={0.05}/>;
};

export default function App() {
    return (
        <div className="App">
            <Canvas>
                <Suspense fallback={null}>
                    <Scene/>
                    <OrbitControls/>
                    <Environment preset="sunset" background/>
                </Suspense>
            </Canvas>
        </div>
    );
}
