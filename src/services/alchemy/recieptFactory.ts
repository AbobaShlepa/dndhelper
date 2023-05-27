import { ingredientStore } from "../../stores/ingredientStore";
import type { Ingredient } from "../../types/alchemy/ingredient";
import type { AlchemicState } from "../../types/elements/alchemicState";
import type { Element } from "../../types/elements/element";

const ingredients: Ingredient[] = ingredientStore.list();

export function* calculate(elements: Element[], state: AlchemicState | null): Generator<Ingredient[]> {
  const suitableIngredients = find(elements, state);
  const [, ...rest] = elements;

  for (const ingredient of suitableIngredients) {
    const recursiveSolution = [...calculate(rest, ingredient.state)];

    if (recursiveSolution.length === 0) {
      yield [ingredient];
    }
    else {
      for (const solution of recursiveSolution) { 
        solution.unshift(ingredient);

        yield solution
      }
    }
  }
}

const find = (elements: Element[], state: AlchemicState | null): Ingredient[] => {
  if (elements.length === 0) {
    return [];
  }

  const element = elements[0];
  let suitableIngredients = ingredients.filter(x => x.element.name === element.name);
  if (state) {
    suitableIngredients = suitableIngredients.filter(x => x.state === state);
  }

  return suitableIngredients;
}