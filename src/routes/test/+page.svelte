<script>
  import { fade } from 'svelte/transition';
  import Legend from "../../components/legend.svelte";

  let toggled = true;
</script>

<div>
  <button class="slider-button btn btn-dark" on:click={() => (toggled = !toggled)}>
    {toggled ? "<" : ">"}
  </button>

  {#if toggled}
    <div class="panel-wrap" transition:fade style="transform: {toggled ? '100%' : '0%'}">
      <div class="panel">
        <Legend />
      </div>
    </div>
  {/if}
</div>

<style>
  .slider-button {
    border-radius: 50%;
  }

  .panel-wrap {
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    width: 30em;
    transition: 0.3s ease-out;
  }
  .panel {
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    color: #eee;
    overflow: auto;
  }
</style>
