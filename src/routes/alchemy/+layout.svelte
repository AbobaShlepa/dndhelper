<script>
  import Legend from "../../components/legend.svelte";
  import Logo from "../../components/shared/logo.svelte";
  let menuOpen = false;
</script>

<header class="site-header sticky-top py-1">
  <nav class="container d-flex flex-column flex-md-row justify-content-between">
    <a class="py-2" href="/" aria-label="Product"><Logo /></a>
    <a class="py-2 d-none d-md-inline-block" href="/alchemy">Главная</a>
    <a class="py-2 d-none d-md-inline-block" href="/alchemy/ingredients">Ингредиенты</a>
    <a class="py-2 d-none d-md-inline-block dropdown-toggle" href="/alchemy" on:click={() => { menuOpen = !menuOpen}} >Элементы</a>
    <Legend {menuOpen}/>
  </nav>
</header>

<main>
  <div class="overflow-hidden p-3 p-md-5 m-md-3 bg-light">
    <slot />
  </div>
</main>
