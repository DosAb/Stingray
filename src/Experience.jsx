import { Canvas } from '@react-three/fiber'
import { useControls } from 'leva'
import * as THREE from 'three'
import { OrbitControls, ScrollControls } from '@react-three/drei'
import Floor from './Floor'
import PostProcessing from './PostProcessing'
import Background from './Background'


export default function Experience()
{
    // const { exposure } = useControls('exposure', {
    //     exposure:{
    //         value: 0.8,
    //         min: 0,
    //         max: 5,
    //         step: 0.01,
    //     }
    // })

    // const options = useControls('general', {
    //     background: { value: '#1f2347' }
    // })

    return <>
    <Canvas
        dpr={[1, 1]} //pixelRation
        gl={{ 
            antialias: false,
            toneMapping: THREE.ACESFilmicToneMapping,
            toneMappingExposure: 0.8
        }} // renderer
        camera={ {
            fov: 35,
            position: [ 0, 0, 6 ]
        } }
    >
        <color args={ [ '#1f2347' ] } attach="background" />
        {/* <OrbitControls
            target={ [ 0, 0, 0 ] }
            enablePan={ false }
            minDistance={ 3 }
            maxDistance={ 20 }
            
        /> */}
        <PostProcessing />
        <Background />
        <Floor />
    </Canvas>
    </>
}
