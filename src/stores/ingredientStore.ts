import { readable, writable } from "svelte/store";
import type { Ingredient } from "../types/alchemy/ingredient";
import Vitriol from "../types/elements/vitriol";
import { AlchemicState } from "../types/elements/alchemicState";
import Rebis from "../types/elements/rebis";
import Quebrith from "../types/elements/quebrith";
import Vermilion from "../types/elements/vermilion";
import Hydragenum from "../types/elements/hydragenum";
import Solon from "../types/elements/solon";
import Aether from "../types/elements/aether";
import Caelum from "../types/elements/caelum";


const createStore = () => {
  const ingridients: Ingredient[] = [
    { id: 1, name: 'Цветы белого мирта', element: new Vitriol(), state: AlchemicState.Albedo },
    { id: 2, name: 'Ягоды берберы', element: new Quebrith(), state: AlchemicState.Rubedo },
    { id: 3, name: 'Листья златолистника', element: new Vermilion(), state: AlchemicState.Albedo },
    { id: 3, name: 'Листья златолистника', element: new Vermilion(), state: AlchemicState.Rubedo },
    { id: 4, name: 'Синяя водоросль', element: new Vitriol(), state: AlchemicState.Rubedo },
    { id: 5, name: 'Листья алоэ', element: new Hydragenum(), state: AlchemicState.Albedo },
    { id: 6, name: 'Ягоды волчьего лыка', element: new Vermilion(), state: AlchemicState.Nigredo },
    { id: 7, name: 'Корень мандарогоры', element: new Quebrith(), state: AlchemicState.Albedo },
    { id: 8, name: 'Чернильные орешки', element: new Vermilion(), state: AlchemicState.Nigredo }, // Солон + киноварь
    { id: 9, name: 'Шляпка мухомора', element: new Solon(), state: AlchemicState.Albedo },
    { id: 10, name: 'Корень зарника', element: new Aether(), state: AlchemicState.Nigredo },
    { id: 11, name: 'Цветы двустрела', element: new Hydragenum(), state: AlchemicState.Albedo },
    { id: 11, name: 'Цветы двустрела', element: new Hydragenum(), state: AlchemicState.Nigredo },
    { id: 12, name: 'Цветы переступня', element: new Caelum(), state: AlchemicState.Rubedo },
    { id: 13, name: 'Листья ласточкиного зелья', element: new Rebis(), state: AlchemicState.Albedo },
    { id: 13, name: 'Листья ласточкиного зелья', element: new Rebis(), state: AlchemicState.Nigredo },
    { id: 14, name: 'Семена спорыньи', element: new Vermilion(), state: AlchemicState.Rubedo },
    { id: 15, name: 'Плесень', element: new Rebis(), state: AlchemicState.Rubedo },
    { id: 16, name: 'Соцветия хмеля', element: new Vitriol(), state: AlchemicState.Nigredo },
    { id: 17, name: 'Ягоды омелы', element: new Hydragenum(), state: AlchemicState.Albedo },
    { id: 18, name: 'Пыльца туманника', element: new Caelum(), state: AlchemicState.Albedo },
    { id: 19, name: 'Корень дьявольника', element: new Quebrith(), state: AlchemicState.Albedo }, // Квебрит + купорос
    { id: 19, name: 'Корень дьявольника', element: new Quebrith(), state: AlchemicState.Rubedo }, // Квебрит + купорос
    { id: 20, name: 'Цветы горицвета', element: new Aether(), state: AlchemicState.Albedo }, // Эфир + ребис
    { id: 21, name: 'Нераскрывщийся бутон алоглазика', element: new Rebis(), state: AlchemicState.Albedo }, // Ребис + солон
    { id: 21, name: 'Нераскрывщийся бутон алоглазика', element: new Rebis(), state: AlchemicState.Nigredo }, // Ребис + солон
    { id: 22, name: 'Листья подорожника', element: new Rebis(), state: AlchemicState.Albedo }, // Ребис + ребис
    { id: 22, name: 'Листья подорожника', element: new Rebis(), state: AlchemicState.Rubedo }, // Ребис + ребис
    { id: 23, name: 'Живица живого дерева', element: new Rebis(), state: AlchemicState.Albedo }, // Ребис + эфир
    { id: 23, name: 'Живица живого дерева', element: new Rebis(), state: AlchemicState.Rubedo }, // Ребис + эфир
    { id: 24, name: 'Шишки ели сребряной', element: new Quebrith(), state: AlchemicState.Albedo },
    { id: 24, name: 'Шишки ели сребряной', element: new Quebrith(), state: AlchemicState.Rubedo },
    { id: 24, name: 'Шишки ели сребряной', element: new Quebrith(), state: AlchemicState.Nigredo },
    { id: 25, name: 'Багульник', element: new Rebis(), state: AlchemicState.Albedo },
    { id: 25, name: 'Багульник', element: new Rebis(), state: AlchemicState.Rubedo },
    { id: 27, name: 'Пыльца дивносонника', element: new Aether(), state: AlchemicState.Albedo }, // Эфир + аэр
    { id: 27, name: 'Пыльца дивносонника', element: new Aether(), state: AlchemicState.Rubedo }, // Эфир + аэр
    { id: 28, name: 'Корень мертвоцвета', element: new Vermilion(), state: AlchemicState.Albedo },
    { id: 28, name: 'Корень мертвоцвета', element: new Vermilion(), state: AlchemicState.Rubedo },
    { id: 29, name: 'Соцветие хана', element: new Caelum(), state: AlchemicState.Rubedo }, // Аэр + киноварь
    { id: 30, name: 'Бутон солнцецвета', element: new Rebis(), state: AlchemicState.Rubedo }, // Ребис + аэр
    { id: 31, name: 'Цветы чемерицы', element: new Hydragenum(), state: AlchemicState.Albedo },
    { id: 31, name: 'Цветы чемерицы', element: new Hydragenum(), state: AlchemicState.Rubedo },
    { id: 32, name: 'Шляпка волчьего зонтика', element: new Hydragenum(), state: AlchemicState.Rubedo }, // Гидроген + купорос
    { id: 34, name: 'Синий мох', element: new Vitriol(), state: AlchemicState.Albedo },
    { id: 34, name: 'Синий мох', element: new Vitriol(), state: AlchemicState.Rubedo },
    { id: 35, name: 'Трезубчатый хвощ', element: new Rebis(), state: AlchemicState.Rubedo }, // Ребис + гидроген
    { id: 36, name: 'Волчья ягода', element: new Vermilion(), state: AlchemicState.Rubedo },
    { id: 37, name: 'Чеснок', element: new Rebis(), state: AlchemicState.Rubedo }, // Ребис + эфир
    { id: 38, name: 'Цветы зверобоя', element: new Vermilion(), state: AlchemicState.Rubedo },
    { id: 39, name: 'Луковая шелуха', element: new Vitriol(), state: AlchemicState.Nigredo }, // Купорос + ребис
    { id: 40, name: 'Черника', element: new Quebrith(), state: AlchemicState.Rubedo },
    { id: 41, name: 'Соцветия одуванчика', element: new Caelum(), state: AlchemicState.Albedo }, // Аэр + аэр
    { id: 42, name: 'Остролист', element: new Quebrith(), state: AlchemicState.Albedo },// Квебрит + аэр
    { id: 42, name: 'Остролист', element: new Quebrith(), state: AlchemicState.Rubedo },// Квебрит + аэр
    { id: 43, name: 'Семена кувшинки', element: new Aether(), state: AlchemicState.Rubedo }, // Эфир + гидроген
    { id: 44, name: 'Гранат', element: new Rebis(), state: AlchemicState.Rubedo }, // Ребис + квебрит
  ]

  const { subscribe } = readable<IngredientStore>({
    list: ingridients
  });

  const methods = {
    list() {
      return ingridients
    }
  }

  return {
    subscribe,
    ...methods
  }
}

export type IngredientStore = {
  list: Ingredient[];
}

export const ingredientStore = createStore();