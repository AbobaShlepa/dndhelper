<script>
  import Logo from "../../components/shared/logo.svelte";
</script>

<header class="site-header sticky-top py-1">
  <nav class="container d-flex flex-column flex-md-row justify-content-between">
    <a class="py-2" href="/" aria-label="Product"><Logo /></a>
    <a class="py-2" href="/converter">Конвертер валют Психеи</a>
    <div></div>
</header>

<main>
  <div class="overflow-hidden p-3 p-md-5 m-md-3 bg-light">
    <slot />
  </div>
</main>
