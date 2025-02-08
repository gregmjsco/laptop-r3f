import {
  PresentationControls,
  Float,
  Environment,
  useGLTF,
} from "@react-three/drei";

export default function Experience() {
  const computer = useGLTF(
    "https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/macbook/model.gltf"
  );
  console.log(computer);

  return (
    <>
      <Environment preset="city" />
      <color args={["#060324"]} attach="background" />

      <PresentationControls global>
        <Float rotationIntensity={0.4}>
          <primitive object={computer.scene} position-y={-1.2} />
        </Float>
      </PresentationControls>
    </>
  );
}
