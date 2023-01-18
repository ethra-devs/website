import { Canvas, useFrame, extend } from "@react-three/fiber";
import {
  OrbitControls,
  Loader,
  Effects,
  Environment,
  MeshReflectorMaterial,
  Float,
} from "@react-three/drei";
import { Suspense, useState, useRef, useEffect } from "react";
import { Model } from "./cybereyeDraco";
import * as THREE from "three";
import { Spinner, Center, Box, Button } from "@chakra-ui/react";
import { EffectComposer, Bloom } from "@react-three/postprocessing";

function Rig() {
  return useFrame((state) => {
    state.camera.position.x = THREE.MathUtils.lerp(
      state.camera.position.x,
      1.5 + state.mouse.x / 8,
      0.075
    );
    state.camera.position.y = THREE.MathUtils.lerp(
      state.camera.position.y,
      1.5 + state.mouse.y / 8,
      0.075
    );

    state.mouse;
  });
}

export const Scene = () => {
  const [reset, setReset] = useState(false);
  const [active, setActive] = useState(false);

  const container = useRef();
  //   const ref = useRef(null);

  //   useEffect(() => {
  //     console.log(ref.current.position);
  //   }, []);

  return (
    <Box
      style={{
        position: "absolute",
        height: "100vh",
        width: "100vw",
        display: "block",
        top: 0,
        right: 0,
        zIndex: 1,
      }}
      ref={container}
      onMouseLeave={() => setActive(true)}
      onMouseEnter={() => setActive(false)}>
      <Canvas
        className="Canvas"
        style={{ pointerEvents: "none" }}
        eventSource={container}
        camera={{ position: [3.5, -0.9, 0.5], fov: 50, near: 1 }}
        gl={{ antialias: true }}
        onCreated={(state) => state.gl.setClearColor(0xffffff, 0)}>
        <Suspense fallback={null}>
          <Environment preset={"studio"} blur={0.99} />
          <ambientLight intensity={0.1} />
          <directionalLight position={[-2, 5, 2]} intensity={0.1} />
          <Float
            speed={1} // Animation speed, defaults to 1
            rotationIntensity={1} // XYZ rotation intensity, defaults to 1
            floatIntensity={0.2} // Up/down float intensity, works like a multiplier with floatingRange,defaults to 1
            floatingRange={[-0.5, 0.5]} // Range of y-axis values the object will float within, defaults to [-0.1,0.1]
          >
            <Model
              reset={reset}
              scale={0.004}
              position={[-5, 3, -2]}
              rotation={[-2.5, -0.8, 1]}
              active={active}
            />
          </Float>
        </Suspense>
        <EffectComposer>
          <Bloom
            luminanceThreshold={0.1}
            intensity={0.03}
            levels={5}
            mipmapBlur
          />
        </EffectComposer>
        <Rig />
      </Canvas>
      <Loader />
    </Box>
  );
};
