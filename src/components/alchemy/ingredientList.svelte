<script lang="ts">
  import { ingredientStore } from "../../stores/ingredientStore";
</script>

<h6>Список ингредиентов:</h6>
{#each $ingredientStore.list as value}
  <div>{value.name}</div>
{/each}
