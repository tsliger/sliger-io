import { useRef } from 'react'
import { fragmentShader, vertexShader } from "../misc/shaders";
import { EffectComposer, Glitch, Pixelation, Vignette, Bloom } from "@react-three/postprocessing";
import { Canvas, useFrame } from "@react-three/fiber";

export function Box() {
  const myMesh = useRef(null);

  useFrame(({ clock }) => {
    const mesh: any = myMesh.current;

    mesh.rotation.y = Math.sin(clock.getElapsedTime() / 4);
  });

  return (
    <mesh ref={myMesh} rotation={[Math.PI / 6, 0, 0]} position={[0, 0.3, 2]}>
      <boxGeometry />
      <meshStandardMaterial color="royalblue" />
      <shaderMaterial
        fragmentShader={fragmentShader}
        vertexShader={vertexShader}
      />
    </mesh>
  );
}

export default function BackgroundCanvas() {
  return (
    <Canvas>
      <pointLight position={[0, 3, 10]} />
      <Box />
      <EffectComposer>
        <Bloom mipmapBlur luminanceSmoothing={0.025} intensity={0.2} luminanceThreshold={0.5} />
        <Vignette eskil={false} offset={0.1} darkness={1.6} />
        <Glitch />
        <Pixelation granularity={10} />
      </EffectComposer>
    </Canvas>
  )
}
