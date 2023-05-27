<script lang="ts">
    import { containerStore as store } from "../stores/containerStore";
</script>

<div>
    <h6>{$store.selected.name}</h6>
    <h6>Максимальное количество компонентов: {$store.selected.maxCapacity}</h6>
</div>