import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { RotateCcw, Maximize2, Sparkles, Flame, Info, Check, Eye, X } from 'lucide-react';

export default function Food3DViewer({
  dishType = 'handi_chicken', // 'handi_chicken', 'pepper_chicken', 'biryani', 'mutton_fry', 'paneer_tikka', 'roti'
  model3dUrl = null,
  imageUrl = null,
  hotspots = [],
  autoRotate = false,
  enableControls = true,
  height = 'h-80 sm:h-96',
  onOpenFullscreen = null,
  showControlsBar = true,
  className = ''
}) {
  const mountRef = useRef(null);
  const controlsRef = useRef(null);
  const cameraRef = useRef(null);
  const sceneRef = useRef(null);
  const rendererRef = useRef(null);
  const foodGroupRef = useRef(null);

  const [loading, setLoading] = useState(true);
  const [activeHotspot, setActiveHotspot] = useState(null);
  const [hotspotPositions, setHotspotPositions] = useState([]);
  const [isRotating, setIsRotating] = useState(autoRotate);

  // Default hotspots based on dish type if not provided
  const dishHotspots = hotspots.length > 0 ? hotspots : getDishHotspots(dishType);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    // 1. Scene Setup
    const scene = new THREE.Scene();
    sceneRef.current = scene;

    // 2. Camera Setup (Food Photography 45-degree angle)
    const camera = new THREE.PerspectiveCamera(
      42,
      container.clientWidth / container.clientHeight,
      0.1,
      100
    );
    camera.position.set(0, 3.2, 5.5);
    cameraRef.current = camera;

    // 3. Renderer Setup
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true, powerPreference: 'high-performance' });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.1;
    container.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    // 4. OrbitControls Setup
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.maxPolarAngle = Math.PI / 2 - 0.05; // Don't flip under ground
    controls.minDistance = 2.5;
    controls.maxDistance = 9;
    controls.autoRotate = autoRotate;
    controls.autoRotateSpeed = 1.5;
    controls.enableZoom = enableControls;
    controls.enableRotate = enableControls;
    controlsRef.current = controls;

    // 5. Professional Food Studio Lighting Setup
    const ambientLight = new THREE.AmbientLight(0xfff5e6, 1.2);
    scene.add(ambientLight);

    // Warm Key Directional Light (Sun / Main Softbox)
    const keyLight = new THREE.DirectionalLight(0xffecd1, 2.2);
    keyLight.position.set(4, 6, 4);
    keyLight.castShadow = true;
    keyLight.shadow.mapSize.width = 1024;
    keyLight.shadow.mapSize.height = 1024;
    keyLight.shadow.bias = -0.0005;
    scene.add(keyLight);

    // Cool Rim Light for Dish Edge Separation
    const rimLight = new THREE.DirectionalLight(0xff9900, 1.8);
    rimLight.position.set(-4, 3, -4);
    scene.add(rimLight);

    // Warm Soft Bottom Fill Light
    const fillLight = new THREE.PointLight(0xd84315, 1.5, 12);
    fillLight.position.set(0, 1.5, 3);
    scene.add(fillLight);

    // 6. Restaurant Dining Table / Serving Platter Ground Plane
    const tableGeo = new THREE.CylinderGeometry(2.8, 2.8, 0.15, 64);
    const tableMat = new THREE.MeshStandardMaterial({
      color: 0x1f1813,
      roughness: 0.6,
      metalness: 0.2
    });
    const tablePlane = new THREE.Mesh(tableGeo, tableMat);
    tablePlane.position.y = -0.08;
    tablePlane.receiveShadow = true;
    scene.add(tablePlane);

    // Brass Platter Trim Ring
    const trimGeo = new THREE.TorusGeometry(2.82, 0.04, 16, 64);
    const trimMat = new THREE.MeshStandardMaterial({
      color: 0xffb300,
      roughness: 0.3,
      metalness: 0.8
    });
    const trimRing = new THREE.Mesh(trimGeo, trimMat);
    trimRing.rotation.x = Math.PI / 2;
    trimRing.position.y = -0.01;
    scene.add(trimRing);

    // 7. Food Group Container
    const foodGroup = new THREE.Group();
    scene.add(foodGroup);
    foodGroupRef.current = foodGroup;

    // Load 3D Model: GLTF/GLB or High Quality Procedural PBR Model
    if (model3dUrl) {
      const loader = new GLTFLoader();
      loader.load(
        model3dUrl,
        (gltf) => {
          const model = gltf.scene;
          model.traverse((child) => {
            if (child.isMesh) {
              child.castShadow = true;
              child.receiveShadow = true;
            }
          });
          foodGroup.add(model);
          setLoading(false);
        },
        undefined,
        (err) => {
          console.warn('Failed loading GLTF, creating procedural food model:', err);
          createProceduralDish(dishType, foodGroup);
          setLoading(false);
        }
      );
    } else {
      createProceduralDish(dishType, foodGroup);
      setLoading(false);
    }

    // Entrance Animation Sequence (90% -> 100% scale)
    foodGroup.scale.set(0.9, 0.9, 0.9);
    let scaleStep = 0.9;
    const animateEntrance = () => {
      if (scaleStep < 1.0) {
        scaleStep += 0.008;
        foodGroup.scale.set(scaleStep, scaleStep, scaleStep);
        requestAnimationFrame(animateEntrance);
      }
    };
    animateEntrance();

    // 8. Animation & Render Loop
    let animationFrameId;
    const clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      controls.update();

      // Update projected screen coordinates for 3D Hotspots
      if (dishHotspots.length > 0 && cameraRef.current && mountRef.current) {
        const coords = dishHotspots.map((hs) => {
          const wp = new THREE.Vector3(...hs.position);
          wp.project(cameraRef.current);
          const x = (wp.x * 0.5 + 0.5) * container.clientWidth;
          const y = (-(wp.y * 0.5) + 0.5) * container.clientHeight;
          const visible = wp.z < 1; // In front of camera
          return { id: hs.id, x, y, visible };
        });
        setHotspotPositions(coords);
      }

      renderer.render(scene, camera);
    };

    animate();

    // Handle Window Resize
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
  }, [dishType, model3dUrl]);

  // Reset Camera View
  const handleResetCamera = () => {
    if (controlsRef.current && cameraRef.current) {
      cameraRef.current.position.set(0, 3.2, 5.5);
      controlsRef.current.target.set(0, 0, 0);
      controlsRef.current.update();
    }
  };

  // Toggle Auto Rotation
  const handleToggleRotate = () => {
    if (controlsRef.current) {
      controlsRef.current.autoRotate = !isRotating;
      setIsRotating(!isRotating);
    }
  };

  return (
    <div className={`relative w-full ${height} bg-[#140F0C] rounded-2xl overflow-hidden border border-[#D84315]/30 shadow-2xl group ${className}`}>
      
      {/* Three.js Canvas Container */}
      <div 
        ref={mountRef} 
        className="w-full h-full cursor-grab active:cursor-grabbing" 
      />

      {/* Loading Spinner */}
      {loading && (
        <div className="absolute inset-0 bg-[#0C0908]/90 flex flex-col items-center justify-center gap-3 z-30">
          <Flame className="w-8 h-8 text-[#FF5722] animate-bounce" />
          <span className="text-xs font-extrabold text-[#FFB300] tracking-wider uppercase">
            Loading 3D Food Model...
          </span>
        </div>
      )}

      {/* Hotspots Overlay */}
      {hotspotPositions.map((hp) => {
        const hsInfo = dishHotspots.find((h) => h.id === hp.id);
        if (!hp.visible || !hsInfo) return null;
        const isActive = activeHotspot === hp.id;

        return (
          <div
            key={hp.id}
            className="absolute z-20 transform -translate-x-1/2 -translate-y-1/2"
            style={{ left: `${hp.x}px`, top: `${hp.y}px` }}
          >
            <button
              onClick={() => setActiveHotspot(isActive ? null : hp.id)}
              className={`w-6 h-6 rounded-full flex items-center justify-center shadow-2xl transition-all duration-300 ${
                isActive 
                  ? 'bg-[#FF5722] text-white scale-125 border-2 border-[#FFB300]' 
                  : 'bg-[#FFB300] text-black hover:scale-110 border border-white/50'
              }`}
              title={hsInfo.label}
            >
              <Sparkles className="w-3 h-3 animate-pulse" />
            </button>

            {/* Hotspot Info Popup Card */}
            {isActive && (
              <div className="absolute bottom-8 left-1/2 -translate-x-1/2 w-48 bg-[#0C0908]/95 backdrop-blur-md border border-[#FFB300]/50 rounded-xl p-3 shadow-2xl z-40 text-left animate-in fade-in zoom-in-95 duration-200">
                <div className="flex items-center justify-between border-b border-white/10 pb-1.5 mb-1.5">
                  <span className="text-xs font-black text-[#FFB300] uppercase tracking-wider">{hsInfo.label}</span>
                  <button onClick={() => setActiveHotspot(null)} className="text-gray-400 hover:text-white p-0.5 rounded hover:bg-white/10"><X className="w-3 h-3" /></button>
                </div>
                <p className="text-[11px] text-[#A89B8C] leading-tight font-medium">{hsInfo.detail}</p>
              </div>
            )}
          </div>
        );
      })}

      {/* Viewport Floating Controls Bar */}
      {showControlsBar && (
        <div className="absolute bottom-3 inset-x-3 flex items-center justify-between z-20 pointer-events-none">
          <div className="flex items-center gap-2 pointer-events-auto">
            <button
              onClick={handleResetCamera}
              className="bg-[#0C0908]/80 backdrop-blur-md hover:bg-[#E65100] text-gray-200 hover:text-white p-2 rounded-xl border border-white/10 text-xs font-bold transition-all shadow-xl flex items-center gap-1.5"
              title="Reset View (Double Click)"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Reset View</span>
            </button>

            <button
              onClick={handleToggleRotate}
              className={`p-2 rounded-xl border text-xs font-bold transition-all shadow-xl flex items-center gap-1.5 ${
                isRotating 
                  ? 'bg-[#E65100] text-white border-[#FFB300]' 
                  : 'bg-[#0C0908]/80 text-gray-200 border-white/10 hover:bg-white/10'
              }`}
              title="Toggle Auto Rotation"
            >
              <Eye className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">{isRotating ? 'Pause Orbit' : 'Auto Orbit'}</span>
            </button>
          </div>

          <div className="flex items-center gap-2 pointer-events-auto">
            {onOpenFullscreen && (
              <button
                onClick={onOpenFullscreen}
                className="btn-dhaba-gold py-2 px-3.5 text-xs font-extrabold flex items-center gap-1.5 shadow-xl"
              >
                <Maximize2 className="w-3.5 h-3.5" />
                <span>Fullscreen 3D</span>
              </button>
            )}
          </div>
        </div>
      )}

    </div>
  );
}

// Factual Dish Hotspots Supplier
function getDishHotspots(dishType) {
  switch (dishType) {
    case 'handi_chicken':
      return [
        { id: 1, position: [0, 0.6, 0.4], label: 'Clay Handi Pot', detail: 'Slow-simmered in traditional earthen clay pot over natural wood fire.' },
        { id: 2, position: [0.3, 0.7, -0.2], label: 'Natukodi Chicken', detail: 'Tender country chicken pieces infused with hand-ground spices.' },
        { id: 3, position: [-0.3, 0.8, 0.1], label: 'Desi Ghee Gravy', detail: 'Pure desi ghee gravy with curry leaves and black pepper aroma.' }
      ];
    case 'pepper_chicken':
      return [
        { id: 1, position: [0, 0.5, 0.3], label: 'Roast Pepper', detail: 'Freshly roasted Nellore black pepper and toasted curry leaves.' },
        { id: 2, position: [0.4, 0.6, -0.1], label: 'Crispy Tender Bites', detail: 'Deep-marinated bone-in tender chicken fried crisp to perfection.' }
      ];
    case 'biryani':
      return [
        { id: 1, position: [0, 0.6, 0], label: 'Aromatic Seeraga Samba', detail: 'Fluffy long-grain rice layered with saffron and fried onions.' },
        { id: 2, position: [-0.4, 0.5, 0.3], label: 'Spiced Meat Layer', detail: 'Juicy marinated meat cooked under dum pressure.' }
      ];
    default:
      return [
        { id: 1, position: [0, 0.6, 0.2], label: 'Authentic Spices', detail: 'Hand-ground masala roasted over wood flames.' }
      ];
  }
}

// High Quality Procedural PBR 3D Models Builder
function createProceduralDish(dishType, group) {
  if (dishType === 'handi_chicken') {
    // 1. Earthenware Clay Handi Vessel
    const handiGeo = new THREE.SphereGeometry(1.2, 32, 24);
    const handiMat = new THREE.MeshStandardMaterial({
      color: 0x6e3319,
      roughness: 0.75,
      metalness: 0.1
    });
    const handi = new THREE.Mesh(handiGeo, handiMat);
    handi.scale.set(1.1, 0.85, 1.1);
    handi.position.y = 0.5;
    handi.castShadow = true;
    handi.receiveShadow = true;
    group.add(handi);

    // Gold Brass Collar Trim
    const trimGeo = new THREE.TorusGeometry(1.08, 0.06, 16, 48);
    const trimMat = new THREE.MeshStandardMaterial({ color: 0xd4af37, metalness: 0.85, roughness: 0.25 });
    const trim = new THREE.Mesh(trimGeo, trimMat);
    trim.rotation.x = Math.PI / 2;
    trim.position.y = 0.95;
    group.add(trim);

    // Rich Gravy & Chicken Pieces Inside Handi
    const gravyGeo = new THREE.CylinderGeometry(1.02, 0.95, 0.2, 32);
    const gravyMat = new THREE.MeshStandardMaterial({
      color: 0x8b2500,
      roughness: 0.35,
      metalness: 0.1
    });
    const gravy = new THREE.Mesh(gravyGeo, gravyMat);
    gravy.position.y = 0.85;
    group.add(gravy);

    // Roasted Chicken Clusters
    const meatGeo = new THREE.DodecahedronGeometry(0.28, 1);
    const meatMat = new THREE.MeshStandardMaterial({ color: 0x5c1d06, roughness: 0.6 });
    for (let i = 0; i < 6; i++) {
      const meat = new THREE.Mesh(meatGeo, meatMat);
      const angle = (i / 6) * Math.PI * 2;
      meat.position.set(Math.cos(angle) * 0.45, 0.95 + Math.random() * 0.08, Math.sin(angle) * 0.45);
      meat.castShadow = true;
      group.add(meat);
    }
  } else if (dishType === 'pepper_chicken') {
    // Ceramic Serving Bowl
    const bowlGeo = new THREE.CylinderGeometry(1.3, 0.8, 0.6, 32);
    const bowlMat = new THREE.MeshStandardMaterial({ color: 0x1a1a1a, roughness: 0.4, metalness: 0.2 });
    const bowl = new THREE.Mesh(bowlGeo, bowlMat);
    bowl.position.y = 0.3;
    bowl.castShadow = true;
    group.add(bowl);

    // Roasted Pepper Chicken Pieces
    const pieceGeo = new THREE.IcosahedronGeometry(0.3, 1);
    const pieceMat = new THREE.MeshStandardMaterial({ color: 0x4a1806, roughness: 0.5, metalness: 0.1 });
    for (let i = 0; i < 9; i++) {
      const p = new THREE.Mesh(pieceGeo, pieceMat);
      p.position.set((Math.random() - 0.5) * 1.2, 0.55 + Math.random() * 0.15, (Math.random() - 0.5) * 1.2);
      p.castShadow = true;
      group.add(p);
    }
  } else {
    // Generic Brass Thali & Bowl Platter
    const bowlGeo = new THREE.CylinderGeometry(1.2, 0.9, 0.5, 32);
    const bowlMat = new THREE.MeshStandardMaterial({ color: 0xd4af37, metalness: 0.8, roughness: 0.3 });
    const bowl = new THREE.Mesh(bowlGeo, bowlMat);
    bowl.position.y = 0.25;
    bowl.castShadow = true;
    group.add(bowl);
  }
}
