"use client";

import { Canvas } from "@react-three/fiber";
import { Html, Line, OrbitControls } from "@react-three/drei";
import { useMemo, useState } from "react";
import * as THREE from "three";

type ViewMode = "implementation" | "operational";
type FlowMode = "normal" | "exception";

const nodes = [
  { id: "source", label: "Source systems", responsibility: "Authoritative transactional and control inputs", position: [-3.2, 1.2, 0] as [number, number, number] },
  { id: "ingest", label: "Data ingestion", responsibility: "Feed completeness, timing and interface contracts", position: [-1.8, 1.8, 0.4] as [number, number, number] },
  { id: "transform", label: "Transformation", responsibility: "Controlled mappings and business rules", position: [-0.4, 1.1, 0] as [number, number, number] },
  { id: "control", label: "Control checks", responsibility: "Quality, reconciliation and threshold gates", position: [0.8, 1.9, -0.3] as [number, number, number] },
  { id: "analytics", label: "Risk analytics", responsibility: "Specialist analytics partnership inputs", position: [1.6, 0.6, 0.5] as [number, number, number] },
  { id: "reporting", label: "Reporting", responsibility: "Decision-ready metrics and dashboards", position: [2.8, 1.4, 0] as [number, number, number] },
  { id: "decision", label: "Decision forums", responsibility: "Governance choices based on trusted evidence", position: [3.6, 0.2, -0.2] as [number, number, number] },
  { id: "action", label: "Corrective actions", responsibility: "Owned remediation and follow-through", position: [2.2, -0.8, 0.2] as [number, number, number] },
  { id: "support", label: "Operational support", responsibility: "BAU ownership after hypercare", position: [0.4, -1.2, 0] as [number, number, number] },
];

const normalLinks: [string, string][] = [
  ["source", "ingest"],
  ["ingest", "transform"],
  ["transform", "control"],
  ["control", "analytics"],
  ["control", "reporting"],
  ["reporting", "decision"],
  ["decision", "action"],
  ["action", "support"],
];

const exceptionLinks: [string, string][] = [
  ["source", "ingest"],
  ["ingest", "control"],
  ["transform", "control"],
  ["control", "reporting"],
  ["reporting", "decision"],
  ["decision", "action"],
  ["action", "transform"],
  ["support", "control"],
];

function NetworkNode({
  node,
  selected,
  onSelect,
  dimmed,
}: {
  node: (typeof nodes)[number];
  selected: boolean;
  onSelect: () => void;
  dimmed: boolean;
}) {
  return (
    <group position={node.position}>
      <mesh
        onClick={(event) => {
          event.stopPropagation();
          onSelect();
        }}
        onPointerOver={() => {
          document.body.style.cursor = "pointer";
        }}
        onPointerOut={() => {
          document.body.style.cursor = "auto";
        }}
      >
        <sphereGeometry args={[selected ? 0.22 : 0.16, 24, 24]} />
        <meshStandardMaterial
          color={selected ? "#2f6fed" : dimmed ? "#6fa8b4" : "#2f6f73"}
          emissive={selected ? "#1c3452" : "#07111f"}
          emissiveIntensity={selected ? 0.35 : 0.08}
          transparent
          opacity={dimmed ? 0.55 : 1}
        />
      </mesh>
      <Html distanceFactor={10} position={[0, 0.35, 0]} center>
        <button
          type="button"
          className="rounded-full bg-white/95 px-2 py-1 text-[10px] font-semibold text-navy-900 shadow"
          onClick={onSelect}
        >
          {node.label}
        </button>
      </Html>
    </group>
  );
}

function NetworkGraph({
  flowMode,
  selectedId,
  onSelect,
}: {
  flowMode: FlowMode;
  selectedId: string;
  onSelect: (id: string) => void;
}) {
  const links = flowMode === "normal" ? normalLinks : exceptionLinks;
  const points = useMemo(() => {
    const map = Object.fromEntries(nodes.map((node) => [node.id, node.position]));
    return links.map(([from, to]) => [map[from], map[to]] as [[number, number, number], [number, number, number]]);
  }, [links]);

  return (
    <>
      <ambientLight intensity={0.85} />
      <directionalLight position={[4, 6, 2]} intensity={1.1} />
      {points.map((segment, index) => (
        <Line
          key={`${flowMode}-${index}`}
          points={segment}
          color={flowMode === "exception" ? "#c5872c" : "#2f6fed"}
          lineWidth={2}
          transparent
          opacity={0.85}
        />
      ))}
      {nodes.map((node) => (
        <NetworkNode
          key={node.id}
          node={node}
          selected={selectedId === node.id}
          dimmed={flowMode === "exception" && !["control", "reporting", "decision", "action"].includes(node.id)}
          onSelect={() => onSelect(node.id)}
        />
      ))}
      <OrbitControls enablePan={false} minDistance={5} maxDistance={12} />
    </>
  );
}

export function RiskNetworkScene({ compact = false }: { compact?: boolean }) {
  const [selectedId, setSelectedId] = useState(nodes[0].id);
  const [flowMode, setFlowMode] = useState<FlowMode>("normal");
  const [viewMode, setViewMode] = useState<ViewMode>("implementation");
  const selected = nodes.find((node) => node.id === selectedId) ?? nodes[0];

  return (
    <div className="surface overflow-hidden">
      <div className="flex flex-wrap gap-2 border-b border-line p-4">
        <button
          type="button"
          className={`rounded-full px-3 py-1.5 text-xs font-semibold ${flowMode === "normal" ? "bg-navy-900 text-white" : "bg-white"}`}
          onClick={() => setFlowMode("normal")}
        >
          Normal flow
        </button>
        <button
          type="button"
          className={`rounded-full px-3 py-1.5 text-xs font-semibold ${flowMode === "exception" ? "bg-amber text-white" : "bg-white"}`}
          onClick={() => setFlowMode("exception")}
        >
          Exception flow
        </button>
        <button
          type="button"
          className={`rounded-full px-3 py-1.5 text-xs font-semibold ${viewMode === "implementation" ? "bg-teal text-white" : "bg-white"}`}
          onClick={() => setViewMode("implementation")}
        >
          Implementation view
        </button>
        <button
          type="button"
          className={`rounded-full px-3 py-1.5 text-xs font-semibold ${viewMode === "operational" ? "bg-violet text-white" : "bg-white"}`}
          onClick={() => setViewMode("operational")}
        >
          Operational view
        </button>
      </div>
      <div className={`relative ${compact ? "h-[280px]" : "h-[420px]"} bg-gradient-to-b from-[#0c1b2e] to-[#13253d]`}>
        <Canvas
          dpr={[1, 1.5]}
          camera={{ position: [0, 0.4, 8.5], fov: 45 }}
          gl={{ antialias: true, powerPreference: "high-performance" }}
          onCreated={({ gl }) => {
            gl.setClearColor(new THREE.Color("#0c1b2e"));
          }}
        >
          <NetworkGraph
            flowMode={flowMode}
            selectedId={selectedId}
            onSelect={setSelectedId}
          />
        </Canvas>
      </div>
      <div className="grid gap-3 border-t border-line p-4 md:grid-cols-2">
        <div>
          <p className="text-xs uppercase tracking-[0.12em] text-teal">Selected node</p>
          <h3 className="mt-1 text-lg font-semibold text-navy-900">{selected.label}</h3>
          <p className="mt-2 text-sm text-muted">{selected.responsibility}</p>
        </div>
        <div>
          <p className="text-xs uppercase tracking-[0.12em] text-violet">Current lens</p>
          <p className="mt-2 text-sm text-muted">
            {viewMode === "implementation"
              ? "Implementation view emphasises lineage, dependencies and readiness before release."
              : "Operational view emphasises exception pathways, corrective action and BAU support ownership."}
          </p>
          <p className="mt-2 text-sm text-muted">
            {flowMode === "exception"
              ? "Exception flow highlights control, reporting, decision and remediation loops."
              : "Normal flow follows source-to-decision progression under controlled delivery."}
          </p>
        </div>
      </div>
    </div>
  );
}
