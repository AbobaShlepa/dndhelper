<script lang="ts">
  import {
    getSuggestions,
    type Suggestion,
  } from "../../services/alchemy/ingredientHelper";
  import { elementStore } from "../../stores/elementStore";
  import Table from "../table.svelte";

  function mapData(items: Suggestion[]): object[] {
    const result = [];
    const allItems = items.map((x) => x.items);
    const lengths = allItems.map((x) => x.length);
    const maxLength = Math.max(...lengths);

    for (let i = 0; i < maxLength; i++) {
      const values = allItems.map((x) => x[i]?.name ?? "");
      const object = values.reduce(
        (obj, key, index) => ({ ...obj, [index]: key }),
        {}
      );

      result.push(object);
    }

    return result;
  }

  $: suggestionResult = getSuggestions($elementStore.elements);
</script>

{#if $elementStore.elements.length > 1}
  {#each Object.keys(suggestionResult) as key}
    <div style="max-width: 80%;">
      <Table
        header={suggestionResult[key].map((x) => x.element.name)}
        data={mapData(suggestionResult[key])}
        caption={key}
        small={true}
      />
    </div>
  {/each}
{/if}
