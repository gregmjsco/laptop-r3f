import {
  PresentationControls,
  Float,
  Environment,
  useGLTF,
  ContactShadows,
  Html,
  Text,
} from "@react-three/drei";
import Portfolio from "./Portfolio";
import { RectAreaLight } from "three";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

export default function Experience() {
  const computer = useGLTF(
    "https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/macbook/model.gltf"
  );
  console.log(computer);

  const cup = useGLTF(
    "https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/cup-tea/model.gltf"
  );

  const cupRef = useRef();

  useFrame(({ clock }) => {
    cupRef.current.rotation.y = Math.sin(clock.getElapsedTime() / 3) / 2;
  });

  return (
    <>
      <Environment preset="city" />
      <color args={["#060324"]} attach="background" />

      {/* Controls that move the modals instead of the camera */}
      <PresentationControls
        global
        rotation={[0.13, 0.1, 0]}
        polar={[-0.4, 0.2]}
        azimuth={[-1, 0.75]}
        config={{ mass: 2, tension: 400 }}
        snap={{ mass: 4, tension: 400 }}
      >
        <Float rotationIntensity={0.4}>
          {/* Laptop Screen Light */}
          <rectAreaLight
            width={2.5}
            height={1.65}
            intensity={65}
            color="#8a30ff"
            rotation={[0.1, Math.PI, 0]}
            position={[0, 0.55, -1.15]}
          />

          <primitive
            ref={cupRef}
            object={cup.scene}
            position-x={-2.5}
            position-y={-0.5}
            position-z={-1}
            scale={2}
          />

          {/* Laptop with a Html inside to show portfolio site component */}
          <primitive object={computer.scene} position-y={-1.2}>
            <Html
              className="content-embed"
              transform
              wrapperClass="htmlScreen"
              distanceFactor={1.17}
              position={[0, 1.56, -1.4]}
              rotation-x={-0.256}
            >
              <Portfolio />
            </Html>
          </primitive>

          {/* Name Text */}
          <Text
            font="./bebas-neue-v14-latin-regular.woff"
            fontSize={1}
            position={[2, 0.75, 0.75]}
            rotation-y={-1.25}
            maxWidth={2}
            textAlign="center"
          >
            GREG JOHNSTON
          </Text>
        </Float>
      </PresentationControls>

      {/* Shadows on the floor */}
      <ContactShadows position-y={-1.4} opacity={0.4} scale={5} blur={2.5} />
    </>
  );
}
