import { OrthographicCamera } from "@react-three/drei";

export function Game() {
  return (
    <>
      <color attach="background" args={["#000000"]} />
      <ambientLight color="ececec" intensity={0.66} />
      <OrthographicCamera
        makeDefault
        position={[3, 3, 3]}
        near={-100}
        far={100}
        zoom={42}
      />
    </>
  );
}
