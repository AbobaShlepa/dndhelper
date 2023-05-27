import { writable } from "svelte/store";
import type { Container } from "../types/container";

const createStore = () => {
    const containers : Container[] = [
        { id: 1, maxCapacity: 2, name: 'Котёл', canRemoveNegative: false },
        { id: 2, maxCapacity: 3, name: 'Тигель', canRemoveNegative: true },
        { id: 3, maxCapacity: 4, name: 'Перегонный куб', canRemoveNegative: true },
        { id: 4, maxCapacity: 6, name: 'Торообразный преобразователь эликсиров', canRemoveNegative: true },
    ];

    const { subscribe, set, update }= writable<ContainerStore>({
        list: containers,
        selected: containers[0],
    });

    const methods = {
        subscribeContainer(container: Container) {
            subscribe(x => { container = x.selected })
        },

        updateSelected(index: number) {
            update(state => ({...state, selected: state.list[index] } ));
        }
    }

    return {
        subscribe,
        set,
        update,
        ...methods
    }
}

export const containerStore = createStore();

export type ContainerStore = {
    list: Container[];
    selected: Container;
}