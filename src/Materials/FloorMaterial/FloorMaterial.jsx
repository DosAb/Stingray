import { shaderMaterial } from '@react-three/drei'
import { extend } from '@react-three/fiber'
import vertexShader from './vertex.glsl'
import fragmentShader from './fragment.glsl'
import * as THREE from 'three'

const FloorMaterial = shaderMaterial(
    {
        colorTexture: null,
        uTime: 0,
        uColor1: new THREE.Color('#070052'),
        uColor2: new THREE.Color('#0E79B2'),
    },
    vertexShader,
    fragmentShader
)

extend({ FloorMaterial })