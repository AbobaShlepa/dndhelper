import type { BrewType } from "./brewType";

export interface PotionBase {
    id: number;
    name: string;
    type: BrewType;
    maxSlotsCount: number;
}