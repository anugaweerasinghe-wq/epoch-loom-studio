import type { ComponentType } from "react";
import { AbyssalTrench } from "./scenes/AbyssalTrench";
import { NeoCitadel } from "./scenes/NeoCitadel";
import { GoldenTemple } from "./scenes/GoldenTemple";
import { VoidBreach } from "./scenes/VoidBreach";
import { TheSingularity } from "./scenes/TheSingularity";

export const SCENE_MAP: Record<string, ComponentType> = {
  abyssal: AbyssalTrench,
  neocitadel: NeoCitadel,
  temple: GoldenTemple,
  voidbreach: VoidBreach,
  singularity: TheSingularity,
};
