import {
  Binary,
  Box,
  Cable,
  Code,
  Cog,
  Container,
  Cpu,
  Factory,
  ListOrdered,
  Network,
  Radar,
  Timer,
  Wrench,
  Zap,
  type LucideIcon,
} from "lucide-react";

const ICONS: Record<string, LucideIcon> = {
  Binary,
  Box,
  Cable,
  Code,
  Cog,
  Container,
  Cpu,
  Factory,
  ListOrdered,
  Network,
  Radar,
  Timer,
  Wrench,
  Zap,
};

export default function ModuleIcon({ name, className }: { name: string; className?: string }) {
  const Icon = ICONS[name] ?? Cpu;
  return <Icon className={className} />;
}
