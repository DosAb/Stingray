import { ContactShadows, useTexture, useGLTF, Environment, useAnimations, useScroll } from '@react-three/drei'
import { useThree, useFrame } from "@react-three/fiber"
import { useEffect, useRef } from "react";
import { useControls } from 'leva'
import * as THREE from 'three'

const textureLoader = new THREE.TextureLoader()

export default function Floor()
{
    let scrollY = window.scrollY
    const windwoHeight = window.innerHeight
    const group = useRef()
    const {gl} = useThree()
    console.log(1)
    window.addEventListener('scroll',(event)=>{
        scrollY = window.scrollY
    })
    

    useFrame((state, delta)=>{
        if(envMaterial.userData.shader)
        {
            // console.log(envMaterial.userData.shader)
            envMaterial.userData.shader.uniforms.uTime.value += delta
        }
        group.current.position.y = Math.cos(state.clock.elapsedTime) * 0.05 -0.6 
        group.current.rotation.y += (((scrollY / windwoHeight) * Math.PI / 8) - group.current.rotation.y) / 10
    })

    const envMaterial = new THREE.MeshStandardMaterial({
        metalness: 1,
        roughness: 0.1,
    })

    const pmremGenerator = new THREE.PMREMGenerator(gl)
    pmremGenerator.compileEquirectangularShader()

    const envMap = textureLoader.load('/environment-map3.jpg',(texture)=>{
        const pmpMap = pmremGenerator.fromEquirectangular(texture).texture
        envMaterial.envMap = pmpMap
    })

    // const {nodes, animations} = useGLTF('../public/models/stingrayAnimated.glb')
    const model = useGLTF('/models/stingrayAnimated.glb')
    
    const animation = useAnimations(model.animations, model.scene)

    useEffect(()=>{
        model.scene.children[0].children[0].material = envMaterial
        const action = animation.actions.swimAction
        action.reset().play()

        return ()=>{
            action.fadeOut(0.5)
        }
    },[])

    envMaterial.onBeforeCompile = (shader)=>{
        shader.uniforms.uTime = {value: 1}
        shader.fragmentShader = `
            uniform float uTime;

            mat4 rotation3d(vec3 axis, float angle) {
                axis = normalize(axis);
                float s = sin(angle);
                float c = cos(angle);
                float oc = 1.0 - c;
              
                return mat4(
                  oc * axis.x * axis.x + c,           oc * axis.x * axis.y - axis.z * s,  oc * axis.z * axis.x + axis.y * s,  0.0,
                  oc * axis.x * axis.y + axis.z * s,  oc * axis.y * axis.y + c,           oc * axis.y * axis.z - axis.x * s,  0.0,
                  oc * axis.z * axis.x - axis.y * s,  oc * axis.y * axis.z + axis.x * s,  oc * axis.z * axis.z + c,           0.0,
                  0.0,                                0.0,                                0.0,                                1.0
                );
              }

            vec3 rotate(vec3 v, vec3 axis, float angle)
            {
                mat4 m = rotation3d(axis, angle);
                return (m * vec4(v, 1.0)).xyz;
            }
        ` + shader.fragmentShader

        shader.fragmentShader = shader.fragmentShader.replace(
            `#include <envmap_physical_pars_fragment>`,
            `#ifdef USE_ENVMAP

            vec3 getIBLIrradiance( const in vec3 normal ) {
        
                #ifdef ENVMAP_TYPE_CUBE_UV
        
                    vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
        
                    vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
        
                    return PI * envMapColor.rgb * envMapIntensity;
        
                #else
        
                    return vec3( 0.0 );
        
                #endif
        
            }
        
            vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
        
                #ifdef ENVMAP_TYPE_CUBE_UV
        
                    vec3 reflectVec = reflect( - viewDir, normal );
        
                    // Mixing the reflection with the normal is more accurate and keeps rough objects from gathering light from behind their tangent plane.
                    reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
        
                    reflectVec = inverseTransformDirection( reflectVec, viewMatrix );

                    reflectVec = rotate(reflectVec, vec3(0.0, 1.0, 1.0), uTime * 0.1);
        
                    vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
        
                    return envMapColor.rgb * envMapIntensity;
        
                #else
        
                    return vec3( 0.0 );
        
                #endif
        
            }
        
           
        
        #endif`
        )

        envMaterial.userData.shader = shader
    }




    return <>
    {/* <Environment
        background={false}
        preset="sunset"
        resolution={32}
    >
    </Environment> */}
    <group position={[0, -0.6, 0]} scale={13} ref={group} >
        <primitive object={model.scene} />
        {/* <mesh position={[0, -0.6, 0]} scale={13} geometry={nodes.Plane001.geometry} material={envMaterial} ></mesh> */}
    </group>
    </>
}
