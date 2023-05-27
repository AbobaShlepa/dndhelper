<script lang="ts">
  import { elementStore } from "../stores/elementStore";

  export let menuOpen = true;
</script>

<div class="dropdown">
  <div id="myDropdown" class:show={menuOpen} class="dropdown-content">
    {#each { length: $elementStore.list.length / 2 } as _, i}
      <div class="flex-container">
        <div class="flex-child">
          {$elementStore.list[i * 2]?.name} ({$elementStore.list[i * 2]
            ?.shortName})
        </div>
        <div class="flex-child">
          {$elementStore.list[i * 2 + 1]?.name} ({$elementStore.list[i * 2 + 1]
            ?.shortName})
        </div>
      </div>
    {/each}
  </div>
</div>

<style>
  .dropdown {
    position: absolute;
    display: inline-block;
    top: 50px;
    right: 100px;
  }

  .dropdown-content {
    display: none;
    z-index: 1;
    background-color: #e5e5e5;
    border-radius: 21px;
    width: fit-content;
  }

  /* Show the dropdown menu */
  .show {
    display: block;
  }

  div.flex-child:hover {
    background-color: #ddd;
  }

  div.flex-child {
    color: black;
    text-decoration: none;
    display: block;
  }

  .flex-container {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .flex-child {
    flex: 1;
    width: 100px;
    height: 25px;
    margin: 15px;
  }
</style>
