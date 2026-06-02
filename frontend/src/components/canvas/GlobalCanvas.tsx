import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import SceneDirector from './SceneDirector';

export default function GlobalCanvas() {
  return (
    <div className="fixed inset-0 pointer-events-none z-[-1] bg-black">
      <Canvas
        camera={{ position: [0, 0, 10], fov: 45 }}
        gl={{ antialias: false, powerPreference: "high-performance" }}
        dpr={[1, 2]}
      >
        <Suspense fallback={null}>
          <SceneDirector />
        </Suspense>
      </Canvas>
    </div>
  );
}
