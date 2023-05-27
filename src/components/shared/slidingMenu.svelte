<script lang='ts'>
  import type { SvelteComponentTyped } from 'svelte/internal';
  import { fade } from 'svelte/transition';

  type ComponentType = $$Generic<typeof SvelteComponentTyped<any, any, any>>;

  export let component: ComponentType;
  export let text: string = '';

  let toggled = false;
</script>

<div>
  <button class="slider-button btn btn-dark" on:click={() => (toggled = !toggled)}>
    {text ? text : toggled ? "<" : ">"}
  </button>

  {#if toggled}
    <div class="panel-wrap" transition:fade style="transform: {toggled ? '100%' : '0%'}">
      <div class="panel">
        <svelte:component this={component} />
      </div>
    </div>
  {/if}
</div>

<style>
  .slider-button {
    text-orientation: mixed;
    writing-mode: vertical-rl;
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
    overflow: auto;
  }
</style>
