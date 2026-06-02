import { useFrame } from '@react-three/fiber';
import { useNarrativeStore } from '../../store/useNarrativeStore';
import * as THREE from 'three';
import { useRef } from 'react';

export default function SceneDirector() {
  const groupRef = useRef<THREE.Group>(null);
  // We don't subscribe to the store reactively to avoid re-renders.
  // Instead we read from the store state inside useFrame.

  useFrame(() => {
    // Read the current scroll progress directly from the store (0 to 1)
    const progress = useNarrativeStore.getState().progress;
    
    if (groupRef.current) {
      // Example interpolation based on progress
      groupRef.current.rotation.y = THREE.MathUtils.lerp(groupRef.current.rotation.y, progress * Math.PI * 2, 0.1);
    }
  });

  return (
    <group ref={groupRef}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 10]} intensity={1} />
      <mesh>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color="#4f46e5" wireframe />
      </mesh>
    </group>
  );
}
