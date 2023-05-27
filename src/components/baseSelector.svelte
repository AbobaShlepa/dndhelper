<script lang="ts">
    import { BrewType } from "../types/brewType";
    import type { PotionBase } from "../types/potionBase";
    
    const bases : PotionBase[] = [
        { id: 1, name: 'Спирт', type: BrewType.Potion, maxSlotsCount: 3 },
        { id: 4, name: 'Растительный жир', type: BrewType.Salve, maxSlotsCount: 3 },
        { id: 7, name: 'Чёрный порох', type: BrewType.Bomb, maxSlotsCount: 3 },
    ]
    
    export let base: PotionBase = bases[0];

    function handle(event: any) {
        const value = event?.target?.value;
        base = bases[value - 1];
    }
</script>

<h6>Выбери основу зелья</h6>

<select on:change={handle}>
    {#each bases as base}
    <option value="{base.id}">{base.name} ({base.type.toString()}) [{base.maxSlotsCount} слота]</option>
    {/each}
</select>