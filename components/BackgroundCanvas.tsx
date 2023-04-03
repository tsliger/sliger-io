import { useState } from "react";
import {
  EffectComposer,
  Glitch,
  Pixelation,
  Vignette,
  DotScreen,
} from "@react-three/postprocessing";
import { Canvas } from "@react-three/fiber";
import * as THREE from 'three';
import { BlendFunction } from "postprocessing";
import {
  useScroll,
  useVelocity,
  useSpring,
  useTransform,
  useAnimationFrame,
} from "framer-motion";
import { Box } from "./Box";

export default function BackgroundCanvas() {
  const [glitchActive, setGlitch] = useState(false);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400,
  });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false,
  });

  useAnimationFrame((t, delta) => {
    const velocity = velocityFactor.get();
    if (Math.abs(velocity) > 0.5) {
      setGlitch(true);
    } else {
      setGlitch(false);
    }
  });

  const del = new THREE.Vector2( 0, 0.15 );

  return (
    <Canvas flat performance={{ min: 0.1, max: 0.2 }}>
      <pointLight position={[0, 3, 10]} />
      <Box />
      <EffectComposer>
        <Vignette eskil={false} offset={0.1} darkness={1.6} />
        <Glitch
          ratio={0.85}
          active={glitchActive}
          delay={del}
        />
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
