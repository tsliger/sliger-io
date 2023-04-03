import { useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";

export function Box() {
  const myMesh = useRef(null);
  const colors = ["yellow", "red", "blue", "hotpink", "green"];
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
