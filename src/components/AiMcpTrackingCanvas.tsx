"use client";

import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import gsap from "gsap";

interface AiMcpTrackingCanvasProps {
  collaboratorName: string;
  instagramHandle: string;
}

export default function AiMcpTrackingCanvas({
  collaboratorName,
  instagramHandle,
}: AiMcpTrackingCanvasProps) {
  const mountRef = useRef<HTMLDivElement>(null);
  const [currentStep, setCurrentStep] = useState(0);
  const [simulationCount, setSimulationCount] = useState(0);
  const [simulatedProfit, setSimulatedProfit] = useState(0);

  // References for Three.js objects
  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const systemGroupRef = useRef<THREE.Group | null>(null);
  const pulseNodeRef = useRef<THREE.Mesh | null>(null);

  const steps = [
    {
      title: "1. Reel Comments Monitored",
      desc: `MCP agent streams all comments from ${instagramHandle} collaborative reels in real time.`,
      icon: "💬",
      tag: "MCP Stream",
    },
    {
      title: "2. AI Intent Extraction",
      desc: "Natural language intelligence detects buying inquiries, gift hamper interest, and DM intent.",
      icon: "🧠",
      tag: "AI NLP Engine",
    },
    {
      title: "3. Direct Order Attribution",
      desc: "Checkout seamlessly maps the customer to your personal collaborator ID.",
      icon: "📦",
      tag: "Smart Attribution",
    },
    {
      title: "4. 60% Net Profit to You",
      desc: `60% of all generated margin is credited directly to ${collaboratorName}.`,
      icon: "💎",
      tag: "60% Profit Share",
    },
  ];

  useEffect(() => {
    if (!mountRef.current) return;
    const container = mountRef.current;
    const width = container.clientWidth || 600;
    const initialHeight = width < 480 ? 280 : width < 768 ? 320 : 380;

    // 1. Scene Setup
    const scene = new THREE.Scene();
    sceneRef.current = scene;

    const camera = new THREE.PerspectiveCamera(50, width / initialHeight, 0.1, 1000);
    camera.position.set(0, 0, 14);
    cameraRef.current = camera;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, initialHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    // Ambient and Directional Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.9);
    scene.add(ambientLight);

    const pointLightGold = new THREE.PointLight(0xe5b869, 3.5, 60);
    pointLightGold.position.set(5, 5, 8);
    scene.add(pointLightGold);

    const pointLightBurgundy = new THREE.PointLight(0xa53860, 3.5, 60);
    pointLightBurgundy.position.set(-6, -4, 6);
    scene.add(pointLightBurgundy);

    // Group for entire pipeline system
    const systemGroup = new THREE.Group();
    scene.add(systemGroup);
    systemGroupRef.current = systemGroup;

    // 2. Central AI / MCP Core Node
    const coreGeometry = new THREE.IcosahedronGeometry(1.6, 2);
    const coreMaterial = new THREE.MeshStandardMaterial({
      color: 0x5c1f35,
      emissive: 0x3d1020,
      roughness: 0.25,
      metalness: 0.8,
      wireframe: true,
    });
    const coreMesh = new THREE.Mesh(coreGeometry, coreMaterial);
    systemGroup.add(coreMesh);

    // Inner glowing sphere
    const innerCoreGeo = new THREE.SphereGeometry(1.1, 24, 24);
    const innerCoreMat = new THREE.MeshStandardMaterial({
      color: 0xb8863c,
      emissive: 0x8a6226,
      roughness: 0.3,
      metalness: 0.7,
    });
    const innerCoreMesh = new THREE.Mesh(innerCoreGeo, innerCoreMat);
    coreMesh.add(innerCoreMesh);

    // 3. Peripheral Sub-Nodes
    // Node Left: Reel Comments (amethyst/burgundy)
    const leftNodeGeo = new THREE.DodecahedronGeometry(0.85);
    const leftNodeMat = new THREE.MeshStandardMaterial({
      color: 0x8a3250,
      emissive: 0x471223,
      roughness: 0.3,
      metalness: 0.7,
    });
    const leftNode = new THREE.Mesh(leftNodeGeo, leftNodeMat);
    leftNode.position.set(-5, 0.5, 0);
    systemGroup.add(leftNode);

    // Node Right: 60% Profit Vault (radiant gold)
    const rightNodeGeo = new THREE.TorusGeometry(1.0, 0.35, 16, 32);
    const rightNodeMat = new THREE.MeshStandardMaterial({
      color: 0xe5b869,
      emissive: 0x7a5b20,
      roughness: 0.1,
      metalness: 0.9,
    });
    const rightNode = new THREE.Mesh(rightNodeGeo, rightNodeMat);
    rightNode.position.set(5, -0.5, 0);
    systemGroup.add(rightNode);
    pulseNodeRef.current = rightNode;

    // Glowing coin in profit vault
    const coinGeo = new THREE.CylinderGeometry(0.5, 0.5, 0.12, 24);
    const coinMat = new THREE.MeshStandardMaterial({
      color: 0xf3c77d,
      emissive: 0x6e501b,
      metalness: 0.95,
      roughness: 0.1,
    });
    const coinMesh = new THREE.Mesh(coinGeo, coinMat);
    coinMesh.rotation.x = Math.PI / 2;
    rightNode.add(coinMesh);

    // 4. Connecting Pipelines (Curved Tubes)
    const createCurve = (start: THREE.Vector3, control: THREE.Vector3, end: THREE.Vector3) => {
      const curve = new THREE.QuadraticBezierCurve3(start, control, end);
      const tubeGeo = new THREE.TubeGeometry(curve, 32, 0.05, 8, false);
      const tubeMat = new THREE.MeshBasicMaterial({
        color: 0xb8863c,
        transparent: true,
        opacity: 0.35,
        wireframe: true,
      });
      return new THREE.Mesh(tubeGeo, tubeMat);
    };

    const pipeLeft = createCurve(
      new THREE.Vector3(-5, 0.5, 0),
      new THREE.Vector3(-2.5, 2.5, 1),
      new THREE.Vector3(0, 0, 0)
    );
    systemGroup.add(pipeLeft);

    const pipeRight = createCurve(
      new THREE.Vector3(0, 0, 0),
      new THREE.Vector3(2.5, -2.5, -1),
      new THREE.Vector3(5, -0.5, 0)
    );
    systemGroup.add(pipeRight);

    // 5. Flowing Data Particles
    const particleCount = 180;
    const particleGeo = new THREE.BufferGeometry();
    const particlePositions = new Float32Array(particleCount * 3);
    const particleColors = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount; i++) {
      const t = i / particleCount;
      const x = (t - 0.5) * 12 + (Math.random() - 0.5) * 1.2;
      const y = Math.sin(t * Math.PI * 2) * 1.8 + (Math.random() - 0.5) * 1.2;
      const z = Math.cos(t * Math.PI) * 1.5 + (Math.random() - 0.5) * 1.2;

      particlePositions[i * 3] = x;
      particlePositions[i * 3 + 1] = y;
      particlePositions[i * 3 + 2] = z;

      particleColors[i * 3] = 0.8 + Math.random() * 0.2;
      particleColors[i * 3 + 1] = 0.5 + Math.random() * 0.3;
      particleColors[i * 3 + 2] = 0.2;
    }

    particleGeo.setAttribute("position", new THREE.BufferAttribute(particlePositions, 3));
    particleGeo.setAttribute("color", new THREE.BufferAttribute(particleColors, 3));

    const particleMat = new THREE.PointsMaterial({
      size: 0.12,
      vertexColors: true,
      transparent: true,
      opacity: 0.85,
      blending: THREE.AdditiveBlending,
    });
    const particleSystem = new THREE.Points(particleGeo, particleMat);
    systemGroup.add(particleSystem);

    // 6. Responsive Update Function
    const updateResponsiveScene = () => {
      if (!mountRef.current || !rendererRef.current || !cameraRef.current || !systemGroupRef.current) return;
      const w = mountRef.current.clientWidth;
      const h = w < 480 ? 280 : w < 768 ? 320 : 380;

      cameraRef.current.aspect = w / h;
      cameraRef.current.updateProjectionMatrix();
      rendererRef.current.setSize(w, h);

      // Adaptive scaling so nodes never get cut off on mobile/small viewports
      if (w < 440) {
        systemGroupRef.current.scale.set(0.6, 0.6, 0.6);
        cameraRef.current.position.set(0, 0, 16.5);
      } else if (w < 640) {
        systemGroupRef.current.scale.set(0.75, 0.75, 0.75);
        cameraRef.current.position.set(0, 0, 15.5);
      } else if (w < 900) {
        systemGroupRef.current.scale.set(0.88, 0.88, 0.88);
        cameraRef.current.position.set(0, 0, 14.5);
      } else {
        systemGroupRef.current.scale.set(1.0, 1.0, 1.0);
        cameraRef.current.position.set(0, 0, 14);
      }
    };

    updateResponsiveScene();

    // 7. Animation Loop
    let animationFrameId: number;
    const clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // Rotate central AI core
      coreMesh.rotation.y = elapsedTime * 0.45;
      coreMesh.rotation.x = Math.sin(elapsedTime * 0.3) * 0.3;

      // Rotate sub-nodes
      leftNode.rotation.y = elapsedTime * 0.6;
      leftNode.rotation.z = Math.cos(elapsedTime * 0.4) * 0.4;

      rightNode.rotation.y = elapsedTime * 0.8;
      rightNode.rotation.x = Math.sin(elapsedTime * 0.5) * 0.4;

      // Particle wave flow
      const positions = particleGeo.attributes.position.array as Float32Array;
      for (let i = 0; i < particleCount; i++) {
        let x = positions[i * 3];
        x += 0.05;
        if (x > 6) {
          x = -6;
        }
        positions[i * 3] = x;
        const norm = (x + 6) / 12;
        positions[i * 3 + 1] = Math.sin(norm * Math.PI * 2 + elapsedTime * 1.5) * 1.5;
      }
      particleGeo.attributes.position.needsUpdate = true;

      // Gentle system tilt
      systemGroup.rotation.y = Math.sin(elapsedTime * 0.2) * 0.08;

      renderer.render(scene, camera);
    };

    animate();

    // 8. ResizeObserver for robust layout changes
    const resizeObserver = new ResizeObserver(() => {
      updateResponsiveScene();
    });
    resizeObserver.observe(container);

    // 9. Step loop
    const stepInterval = setInterval(() => {
      setCurrentStep((prev) => (prev + 1) % 4);
    }, 4000);

    return () => {
      cancelAnimationFrame(animationFrameId);
      clearInterval(stepInterval);
      resizeObserver.disconnect();
      renderer.dispose();
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, [collaboratorName, instagramHandle]);

  // Interactive Trigger: Simulate an Order & 60% Payout
  const triggerSimulation = () => {
    setSimulationCount((prev) => prev + 1);
    const addedProfit = 840; // 60% of an exemplary hamper margin
    setSimulatedProfit((prev) => prev + addedProfit);

    // GSAP Pulse animation on Three.js profit node
    if (pulseNodeRef.current) {
      gsap.to(pulseNodeRef.current.scale, {
        x: 1.4,
        y: 1.4,
        z: 1.4,
        duration: 0.25,
        yoyo: true,
        repeat: 1,
        ease: "power2.out",
      });
    }
  };

  return (
    <div className="relative overflow-hidden rounded-2xl border border-[#241C16]/15 bg-[#171318] p-4 sm:p-6 text-white shadow-xl">
      {/* Top Header Badge */}
      <div className="flex flex-col gap-3 border-b border-white/10 pb-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-3">
          <div className="flex h-3 w-3 items-center justify-center">
            <span className="relative flex h-3 w-3">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex h-3 w-3 rounded-full bg-emerald-500"></span>
            </span>
          </div>
          <div>
            <h3 className="font-display text-base font-semibold tracking-wide text-white sm:text-lg">
              AI + Model Context Protocol (MCP) Live Pipeline
            </h3>
            <p className="text-xs text-[#FAF6F0]/60">
              Tracking comments on {instagramHandle} reels &bull; Auto 60% profit credit
            </p>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          <span className="rounded-full border border-[#B8863C]/40 bg-[#B8863C]/10 px-3 py-1 text-xs font-semibold text-[#f5c77e]">
            60% Profit Allocation Active
          </span>
          <button
            onClick={triggerSimulation}
            type="button"
            className="rounded-full bg-[#5C1F35] px-4 py-1.5 text-xs font-medium text-white transition-all hover:bg-[#7a2846] hover:scale-105 active:scale-95"
          >
            ⚡ Test Simulation Order
          </button>
        </div>
      </div>

      {/* 3D Canvas Mounting Node */}
      <div
        className="relative mt-2 h-[280px] w-full sm:h-[320px] md:h-[380px]"
        ref={mountRef}
      >
        {/* Responsive Floating Status Bar over 3D space */}
        <div className="pointer-events-none absolute inset-x-2 top-2 z-10 flex flex-wrap items-center justify-between gap-1.5 px-1 sm:px-2">
          <div className="rounded-lg border border-white/10 bg-black/70 px-2 py-1 text-[10px] backdrop-blur-md sm:px-3 sm:py-1.5 sm:text-xs">
            <span className="font-bold uppercase tracking-wider text-[#e698b3]">
              1. Reel Comments
            </span>
            <span className="hidden md:inline text-white/60 ml-1">
              ({instagramHandle})
            </span>
          </div>

          <div className="rounded-lg border border-[#B8863C]/30 bg-black/70 px-2 py-1 text-center text-[10px] backdrop-blur-md sm:px-3 sm:py-1.5 sm:text-xs">
            <span className="font-bold uppercase tracking-wider text-[#e5b869]">
              2. AI & MCP Intent Engine
            </span>
          </div>

          <div className="rounded-lg border border-[#B8863C]/50 bg-black/70 px-2 py-1 text-right text-[10px] backdrop-blur-md sm:px-3 sm:py-1.5 sm:text-xs">
            <span className="font-bold uppercase tracking-wider text-[#fcd34d]">
              3. 60% Profit Vault
            </span>
            <span className="hidden md:inline text-emerald-400 font-semibold ml-1">
              ({collaboratorName})
            </span>
          </div>
        </div>
      </div>

      {/* Animated Step Timeline */}
      <div className="mt-4 grid grid-cols-1 gap-2.5 sm:grid-cols-2 lg:grid-cols-4">
        {steps.map((st, index) => {
          const isActive = index === currentStep;
          return (
            <div
              key={index}
              className={`rounded-xl border p-3 transition-all duration-300 ${
                isActive
                  ? "border-[#B8863C] bg-[#291e2b] shadow-lg shadow-[#5C1F35]/30 ring-1 ring-[#B8863C]"
                  : "border-white/5 bg-white/[0.03] opacity-70"
              }`}
            >
              <div className="flex items-center justify-between text-sm">
                <span className="text-base sm:text-lg">{st.icon}</span>
                <span
                  className={`rounded px-1.5 py-0.5 text-[9px] sm:text-[10px] font-semibold uppercase ${
                    isActive
                      ? "bg-[#5C1F35] text-white"
                      : "bg-white/10 text-white/50"
                  }`}
                >
                  {st.tag}
                </span>
              </div>
              <p
                className={`mt-2 text-xs font-bold ${
                  isActive ? "text-[#f5c77e]" : "text-white"
                }`}
              >
                {st.title}
              </p>
              <p className="mt-1 text-[11px] leading-relaxed text-white/70">
                {st.desc}
              </p>
            </div>
          );
        })}
      </div>

      {/* Interactive Simulation Results Bar */}
      {simulationCount > 0 && (
        <div className="mt-4 flex flex-col gap-2 rounded-xl border border-emerald-500/30 bg-emerald-950/40 p-3 text-xs sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-2">
            <span className="text-emerald-400">✓</span>
            <span className="text-emerald-200">
              Simulation Active: <strong>{simulationCount}</strong> follower order(s) attributed through MCP comment tracking.
            </span>
          </div>
          <div className="sm:text-right">
            <span className="text-white/70">Simulated 60% Payout: </span>
            <span className="font-display text-sm font-bold text-emerald-400">
              +₹{simulatedProfit.toLocaleString("en-IN")}
            </span>
          </div>
        </div>
      )}
    </div>
  );
}
