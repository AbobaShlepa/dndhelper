import type { AlchemicState } from "../elements/alchemicState";
import type { Element } from "../elements/element";

export interface Ingredient {
    id: number;
    name: string;
    element: Element;
    state: AlchemicState;
}