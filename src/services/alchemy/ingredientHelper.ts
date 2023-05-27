import type { Ingredient } from "../../types/alchemy/ingredient";
import type { AlchemicState } from "../../types/elements/alchemicState";
import type { Element } from "../../types/elements/element"
import { ingredientStore } from "../../stores/ingredientStore";
import { groupBy } from "../utils/groupBy";

const ingredients: Ingredient[] = ingredientStore.list();

export const getSuggestions = (elements: Element[]): SuggestionResult => {
  const result: SuggestionResult = {};
  const groupedByState = groupBy(ingredients, x => x.state);

  for (const state in groupedByState) {
    result[state] = getByState(elements, state as AlchemicState);
  }

  return result;
}

const getByState = (elements: Element[], state: AlchemicState): Suggestion[] => {
  const suggestions = [];

  for (const element of elements) {
    const suitableIngredients = ingredients.filter(x => x.state === state && x.element.name === element.name);
    const suggestion = { element: element, items: suitableIngredients };

    suggestions.push(suggestion);
  }

  return suggestions;
}

export interface Suggestion {
  element: Element;
  items: Ingredient[];
}

export interface SuggestionResult {
  [key: string]: Suggestion[];
}