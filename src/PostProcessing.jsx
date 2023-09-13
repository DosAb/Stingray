import { useControls } from 'leva'
import * as THREE from 'three'
import { SSR, DepthOfField, Bloom, Noise, Glitch, Vignette, EffectComposer } from "@react-three/postprocessing"
import { GlitchMode, BlendFunction } from 'postprocessing'

export default function PostProcessing()
{
    return <>
        <EffectComposer >
            <Noise 
                premultiply
                blendFunction={BlendFunction.SOFT_LIGHT}
            />
            {/* <Bloom mipmapBlur intensity={1} luminanceThreshold={0.5} radius={0.8} /> */}
            {/* <DepthOfField
                focusDistance={0.025}
                focalLength={0.025}
                bokehScale={6}
            /> */}
            {/* <SSR {...ssrProps} /> */}
        </EffectComposer>
    </>
}