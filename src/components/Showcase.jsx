import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, TorusKnot, Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';

const FloatingParticles = () => {
  const ref = useRef();
  const count = 5000;

  const [positions] = useMemo(() => {
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count * 3; i++) {
      positions[i] = (Math.random() - 0.5) * 10;
    }
    return [positions];
  }, [count]);

  useFrame((state, delta) => {
    ref.current.rotation.x += delta / 10;
    ref.current.rotation.y += delta / 15;
  });

  return (
    <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#8A2BE2"
        size={0.015}
        sizeAttenuation={true}
        depthWrite={false}
      />
    </Points>
  );
};

const Showcase = () => {
  return (
    <div className="w-full h-screen">
      <Canvas camera={{ position: [0, 0, 5] }}>
        <OrbitControls enableZoom={false} autoRotate />
        <ambientLight intensity={0.5} />
        <directionalLight position={[2, 5, 2]} intensity={1} />
        <TorusKnot args={[1, 0.4, 256, 32]}>
          <meshStandardMaterial color="#9932CC" roughness={0.1} metalness={0.9} />
        </TorusKnot>
        <FloatingParticles />
      </Canvas>
    </div>
  );
};

export default Showcase;