import { writable } from "svelte/store";
import type Effect from "../types/effect";
import type { Element } from "../types/elements/element"
import { Parse } from "../services/factories/elementFactory";
import { Extract } from "../services/factories/effectExtractor";
import Rebis from "../types/elements/rebis";
import Hydragenum from "../types/elements/hydragenum";
import Vitriol from "../types/elements/vitriol";
import Caelum from "../types/elements/caelum";
import Quebrith from "../types/elements/quebrith";
import Vermilion from "../types/elements/vermilion";
import Aether from "../types/elements/aether";
import Solon from "../types/elements/solon";

const createStore = () => {
    const state: ElementStore = {
        list: getAllTypes(),
        elements: [],
        effects: [],
    }

    const { subscribe, update, set } = writable<ElementStore>(state);

    const methods = {
        updateElements(input: string) {
            const canonizedInput: string = input.toUpperCase();
            const elements = Parse(canonizedInput);
            const effects = Extract(elements);

            update(state => ({ ...state, elements: elements, effects: effects } ));
        }
    }

    return {
        subscribe,
        update,
        set,
        ...methods
    }
}

export type ElementStore = {
    list: Element[],
    elements: Element[];
    effects: Effect[];
}

const getAllTypes = (): Element[] => {
    return [
        new Rebis(),
        new Hydragenum(),
        new Vitriol(),
        new Caelum(),
        new Quebrith(),
        new Vermilion(),
        new Aether(),
        new Solon()
    ];
}

export const elementStore = createStore();