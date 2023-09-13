uniform float uTime;
uniform vec3 uColor1;
uniform vec3 uColor2;
varying vec2 vUv;

void main()
{
    vec3 depth = 0.5 + 0.2 * cos(uTime + (vUv.xyx) * 5.0 + vec3 (0.0, 2.0, 4.0));
    vec3 col = vec3 (depth.r, depth.r, depth.r) * vec3 (depth.g, depth.g, depth.g) + vec3 (depth.b, depth.b, depth.b);
    vec3 finalColor = mix(uColor2, uColor1, col);
    gl_FragColor = vec4(finalColor, 1.0);
}