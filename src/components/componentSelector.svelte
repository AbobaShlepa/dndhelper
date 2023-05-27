<script lang="ts">
    import type { Ingredient } from "../types/alchemy/ingredient";

    export let items : Ingredient[];
    export let selectedItem: number;
</script>

<select bind:value={selectedItem}>
{#each items as item}
    <option value={item.id}>{item.name}</option>
{/each}
</select>