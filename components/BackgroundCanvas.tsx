import { useRef, useState } from "react";
import {
  EffectComposer,
  Glitch,
  Pixelation,
  Vignette,
  DotScreen,
} from "@react-three/postprocessing";
import { Canvas, useFrame } from "@react-three/fiber";
import { BlendFunction } from "postprocessing";

export function Box() {
  const myMesh = useRef(null);
  const colors = ['green', 'red', 'blue', 'hotpink', 'yellow'];
  const [colorId, setColorId] = useState(0);

  useFrame(({ clock }) => {
    const mesh: any = myMesh.current;

    mesh.rotation.y = Math.sin(clock.getElapsedTime() / 4);
    mesh.rotation.z = Math.sin(clock.getElapsedTime() / 2);
  });

  return (
    <mesh
      ref={myMesh}
      rotation={[Math.PI / 6, 0, 0]}
      position={[0, 0, 2]}
      onClick={() => {
        if (colorId === 4) {
          setColorId(0);
        } else {
          setColorId(colorId + 1);
        }
      }}
      onPointerEnter={() => {
        document.body.style.cursor = "pointer";
      }}
      onPointerLeave={() => {
        document.body.style.cursor = "auto";
      }}
    >
      <boxGeometry />
      <meshStandardMaterial color={colors[colorId]} />
    </mesh>
  );
}

export default function BackgroundCanvas() {
  return (
    <Canvas flat performance={{ min: 0.1, max: 0.2 }}>
      <pointLight position={[0, 3, 10]} />
      <Box />
      <EffectComposer>
        <Vignette eskil={false} offset={0.1} darkness={1.6} />
        <Glitch ratio={0.85} active={false}/>
        <Pixelation granularity={10} />
        <DotScreen
          blendFunction={BlendFunction.NORMAL} // blend mode
          angle={Math.PI * 0.5} // angle of the dot pattern
          scale={0.75} // scale of the dot pattern
        />
      </EffectComposer>
    </Canvas>
  );
}
