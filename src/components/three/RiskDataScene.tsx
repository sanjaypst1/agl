"use client";

import { Html, OrbitControls } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { useMemo, useRef, useState } from "react";
import type { Group, Mesh } from "three";
import * as THREE from "three";

export type NetworkNode = {
  id: string;
  label: string;
  role: string;
  position: [number, number, number];
};

export const networkNodes: NetworkNode[] = [
  { id: "source", label: "Source systems", role: "Authoritative inputs and transaction feeds", position: [-3.2, 0.4, 0] },
  { id: "ingest", label: "Ingestion", role: "Interfaces, cut-offs and completeness checks", position: [-2.0, 1.1, 0.4] },
  { id: "transform", label: "Transformation", role: "Mappings, joins and controlled calculations", position: [-0.7, 0.2, 0] },
  { id: "control", label: "Control checks", role: "DQ rules, reconciliations and thresholds", position: [0.4, 1.2, -0.3] },
  { id: "analytics", label: "Risk analytics", role: "Specialist measures and analytical outputs", position: [1.5, 0.1, 0.5] },
  { id: "reporting", label: "Reporting", role: "Decision-ready dashboards and packs", position: [2.6, 1.0, 0] },
  { id: "decision", label: "Decision forums", role: "Escalation, acceptance and prioritisation", position: [3.4, -0.2, -0.4] },
  { id: "action", label: "Corrective actions", role: "Owned remediations and monitoring", position: [2.2, -1.1, 0.2] },
  { id: "support", label: "Operational support", role: "BAU ownership and sustainment", position: [0.8, -1.2, -0.5] },
];

const normalLinks: [string, string][] = [
  ["source", "ingest"],
  ["ingest", "transform"],
  ["transform", "control"],
  ["control", "analytics"],
  ["analytics", "reporting"],
  ["reporting", "decision"],
  ["decision", "action"],
  ["action", "support"],
];

const exceptionLinks: [string, string][] = [
  ["source", "ingest"],
  ["ingest", "control"],
  ["control", "reporting"],
  ["reporting", "decision"],
  ["decision", "action"],
  ["transform", "control"],
];

function NodeMesh({
  node,
  selected,
  onSelect,
  exceptionMode,
}: {
  node: NetworkNode;
  selected: boolean;
  onSelect: (id: string) => void;
  exceptionMode: boolean;
}) {
  const ref = useRef<Mesh>(null);
  const [hovered, setHovered] = useState(false);

  useFrame((_, delta) => {
    if (!ref.current) return;
    ref.current.rotation.y += delta * 0.35;
  });

  const color = exceptionMode
    ? selected || hovered
      ? "#c45b4a"
      : "#c5872c"
    : selected || hovered
      ? "#2f6fed"
      : "#2f6f73";

  return (
    <group position={node.position}>
      <mesh
        ref={ref}
        onClick={(e) => {
          e.stopPropagation();
          onSelect(node.id);
        }}
        onPointerOver={(e) => {
          e.stopPropagation();
          setHovered(true);
          document.body.style.cursor = "pointer";
        }}
        onPointerOut={() => {
          setHovered(false);
          document.body.style.cursor = "auto";
        }}
      >
        <icosahedronGeometry args={[0.28, 0]} />
        <meshStandardMaterial color={color} roughness={0.35} metalness={0.15} />
      </mesh>
      {(hovered || selected) && (
        <Html distanceFactor={8} position={[0, 0.55, 0]} center>
          <div className="rounded-lg border border-line bg-white px-2 py-1 text-[10px] font-semibold text-navy-900 shadow">
            {node.label}
          </div>
        </Html>
      )}
    </group>
  );
}

function Links({
  nodes,
  links,
  exceptionMode,
}: {
  nodes: NetworkNode[];
  links: [string, string][];
  exceptionMode: boolean;
}) {
  const lines = useMemo(() => {
    return links
      .map(([a, b]) => {
        const from = nodes.find((n) => n.id === a);
        const to = nodes.find((n) => n.id === b);
        if (!from || !to) return null;
        return new THREE.BufferGeometry().setFromPoints([
          new THREE.Vector3(...from.position),
          new THREE.Vector3(...to.position),
        ]);
      })
      .filter(Boolean) as THREE.BufferGeometry[];
  }, [nodes, links]);

  return (
    <>
      {lines.map((geo, i) => (
        <line key={i}>
          <primitive object={geo} attach="geometry" />
          <lineBasicMaterial
            color={exceptionMode ? "#c45b4a" : "#6fa8b4"}
            transparent
            opacity={0.85}
          />
        </line>
      ))}
    </>
  );
}

function SceneContent({
  exceptionMode,
  selectedId,
  onSelect,
  mobile,
}: {
  exceptionMode: boolean;
  selectedId: string;
  onSelect: (id: string) => void;
  mobile: boolean;
}) {
  const group = useRef<Group>(null);
  const nodes = mobile ? networkNodes.filter((_, i) => i % 2 === 0 || i === networkNodes.length - 1) : networkNodes;
  const links = exceptionMode ? exceptionLinks : normalLinks;

  useFrame((_, delta) => {
    if (group.current) group.current.rotation.y += delta * 0.08;
  });

  return (
    <group ref={group}>
      <ambientLight intensity={0.85} />
      <directionalLight position={[4, 6, 2]} intensity={1.1} />
      <Links nodes={networkNodes} links={links} exceptionMode={exceptionMode} />
      {nodes.map((node) => (
        <NodeMesh
          key={node.id}
          node={node}
          selected={selectedId === node.id}
          onSelect={onSelect}
          exceptionMode={exceptionMode}
        />
      ))}
      <OrbitControls enablePan={false} maxDistance={10} minDistance={4} />
    </group>
  );
}

export function RiskDataScene({
  exceptionMode,
  selectedId,
  onSelect,
  mobile = false,
}: {
  exceptionMode: boolean;
  selectedId: string;
  onSelect: (id: string) => void;
  mobile?: boolean;
}) {
  return (
    <Canvas
      dpr={[1, mobile ? 1.25 : 1.75]}
      camera={{ position: [0, 1.5, 8], fov: 42 }}
      gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
      style={{ width: "100%", height: "100%" }}
      aria-hidden
    >
      <SceneContent
        exceptionMode={exceptionMode}
        selectedId={selectedId}
        onSelect={onSelect}
        mobile={mobile}
      />
    </Canvas>
  );
}
