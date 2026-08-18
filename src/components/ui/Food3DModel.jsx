import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function Food3DModel() {
  const mountRef = useRef(null);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, container.clientWidth / container.clientHeight, 0.1, 100);
    camera.position.set(0, 3, 6);

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // Group for 3D Handi Earthenware Vessel
    const handiGroup = new THREE.Group();

    // Earthen Handi Base (Cylinder / Sphere combination)
    const potGeo = new THREE.SphereGeometry(1.4, 32, 24);
    const potMat = new THREE.MeshStandardMaterial({
      color: 0x5C2C16,
      roughness: 0.7,
      metalness: 0.1
    });
    const pot = new THREE.Mesh(potGeo, potMat);
    pot.scale.set(1.1, 0.9, 1.1);
    handiGroup.add(pot);

    // Gold Trim Ring
    const ringGeo = new THREE.TorusGeometry(1.3, 0.08, 16, 50);
    const ringMat = new THREE.MeshStandardMaterial({
      color: 0xD4AF37,
      metalness: 0.9,
      roughness: 0.2
    });
    const ring = new THREE.Mesh(ringGeo, ringMat);
    ring.rotation.x = Math.PI / 2;
    ring.position.y = 0.6;
    handiGroup.add(ring);

    // Orbiting 3D Golden Spice Orbs
    const spiceGroup = new THREE.Group();
    const orbGeo = new THREE.DodecahedronGeometry(0.18, 0);
    const orbMat = new THREE.MeshStandardMaterial({
      color: 0xD4AF37,
      metalness: 0.9,
      roughness: 0.1
    });

    for (let i = 0; i < 8; i++) {
      const orb = new THREE.Mesh(orbGeo, orbMat);
      const angle = (i / 8) * Math.PI * 2;
      const radius = 2.2;
      orb.position.set(Math.cos(angle) * radius, (Math.random() - 0.5) * 0.8, Math.sin(angle) * radius);
      spiceGroup.add(orb);
    }
    handiGroup.add(spiceGroup);

    scene.add(handiGroup);

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
    scene.add(ambientLight);

    const dirLight = new THREE.DirectionalLight(0xD4AF37, 2);
    dirLight.position.set(5, 8, 5);
    scene.add(dirLight);

    const pointLight = new THREE.PointLight(0xC25928, 2, 10);
    pointLight.position.set(-4, -2, 4);
    scene.add(pointLight);

    camera.lookAt(0, 0, 0);

    // Animation Loop
    let animationFrameId;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      handiGroup.rotation.y = elapsedTime * 0.4;
      handiGroup.rotation.x = Math.sin(elapsedTime * 0.8) * 0.1;
      spiceGroup.rotation.y = -elapsedTime * 0.8;

      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      if (!container) return;
      camera.aspect = container.clientWidth / container.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(container.clientWidth, container.clientHeight);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  return <div ref={mountRef} className="w-full h-64 sm:h-72 pointer-events-none" />;
}
