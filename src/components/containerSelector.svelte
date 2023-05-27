<script lang="ts">
    import { containerStore as store } from "../stores/containerStore";

    function handle(event: any) {
        const value = event?.target?.value;
        const index = value - 1;

        store.updateSelected(index);
    }
</script>

<h6>Выбери в чём варить зелье</h6>

<select on:change={handle}>
    {#each $store.list as { id, name } }
    <option value="{id}">{name}</option>
    {/each}
</select>