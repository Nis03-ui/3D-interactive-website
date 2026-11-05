
"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import { Suspense,useMemo,useEffect } from "react";
import { Mesh } from "three";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { Group, Box3, Vector3,MeshStandardMaterial } from "three";

function Car() {
  const { scene } = useGLTF("/models/retro_car.glb");

  // Reference to the group responsible for car rotation
  const groupRef = useRef<Group>(null);

  // Collect all meshes once
  const meshes = useMemo(() => {
    const result: Mesh[] = [];

    scene.traverse((object) => {
      if (object instanceof Mesh) {
        result.push(object);
      }
    });

    return result;
  }, [scene]);

  // Calculate the model's bounding box and geometric centre
  const { size, center } = useMemo(() => {
    const box = new Box3().setFromObject(scene);

    const size = new Vector3();
    const center = new Vector3();

    box.getSize(size);
    box.getCenter(center);

    return { size, center };
  }, [scene]);

  // Inspect model information
  useEffect(() => {
    console.log("Total meshes:", meshes.length);
    console.log("Dimensions:", size);
    console.log("Center:", center);

    console.table(
      meshes.map((mesh) => {
        const materials = Array.isArray(mesh.material)
          ? mesh.material
          : [mesh.material];

        return {
          mesh: mesh.name,
          materials: materials.map((material) => material.name).join(", "),
          type: materials.map((material) => material.type).join(", "),
          color: materials
            .map((material) =>
              "color" in material ? material.color.getHexString() : "N/A"
            )
            .join(", "),
          metalness: materials
            .map((material) =>
              material instanceof MeshStandardMaterial
                ? material.metalness
                : "N/A"
            )
            .join(", "),
          roughness: materials
            .map((material) =>
              material instanceof MeshStandardMaterial
                ? material.roughness
                : "N/A"
            )
            .join(", "),
        };
      })
    );
  }, [meshes, size, center]);

  // Automatic rotation
  useFrame((_, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.15;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Offset the model so its geometric centre sits at the origin */}
      <group position={[-center.x, -center.y, -center.z]}>
        <primitive object={scene} />
      </group>
    </group>
  );
}


export default function Scene() {
    return (
        <div className="h-[420px] w-full sm:h-[500px] lg:h-[600px]">
            <Canvas camera={{ position: [5, 3, 6], fov: 45 }}>
                <color attach="background" args={["#202027"]} />

                <ambientLight intensity={1.5} />
                <directionalLight position={[5, 5, 5]} intensity={2} />

                <Suspense fallback={null}>
                    <Car />
                </Suspense>

                <OrbitControls
                    enableDamping
                    dampingFactor={0.05}
                    enableZoom
                    minDistance={6}
                    maxDistance={8}
                />
            </Canvas>
        </div>
    );
}
