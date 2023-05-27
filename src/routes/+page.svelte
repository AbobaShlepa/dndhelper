<script>
  import Logo from "../components/shared/logo.svelte";
</script>

<header class="site-header sticky-top py-1">
  <nav class="container d-flex flex-column flex-md-row justify-content-between">
    <a class="py-2" href="#" aria-label="Product"><Logo /></a>
    <a class="py-2 d-none d-md-inline-block" href="#">Tour</a>
    <a class="py-2 d-none d-md-inline-block" href="#">Product</a>
    <a class="py-2 d-none d-md-inline-block" href="#">Features</a>
    <a class="py-2 d-none d-md-inline-block" href="#">Enterprise</a>
    <a class="py-2 d-none d-md-inline-block" href="#">Support</a>
    <a class="py-2 d-none d-md-inline-block" href="#">Pricing</a>
    <a class="py-2 d-none d-md-inline-block" href="#">Cart</a>
  </nav>
</header>

<main>
  <div
    class="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center bg-light"
  >
    <div class="col-md-5 p-lg-5 mx-auto my-5">
      <h1 class="display-4 fw-normal">Приветствую, путник</h1>
      <p class="lead fw-normal">
        Здесь я буду выкладывать свои проекты для DnD и не только
      </p>
      <a class="btn btn-outline-secondary" href="#"
        >Эта кнопка ничего не делает</a
      >
    </div>
    <div class="product-device product-device-2 shadow-sm d-none d-md-block" />
  </div>

  <div class="d-md-flex flex-md-equal w-100 my-md-3 ps-md-3">
    <div
      class="bg-dark me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center text-white overflow-hidden"
    >
      <div class="my-3 py-3">
        <h2 class="display-5">Психея</h2>
        <p class="lead">Алхимия</p>
      </div>
      <a href="./alchemy">
        <img
          class="bg-light shadow-sm mx-auto"
          src="./alchemy.jpg"
          alt="Конвертер валют"
          style="height: 300px; border-radius: 21px 21px 0 0;"
        />
      </a>
    </div>
    <div
      class="bg-light me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden"
    >
      <div class="my-3 p-3">
        <h2 class="display-5">Психея</h2>
        <p class="lead">Конвертер валют.</p>
      </div>
      <a href="./converter">
        <img
          class="bg-dark shadow-sm mx-auto"
          src="./converter.jpg"
          alt="Алхимия"
          style="height: 300px; border-radius: 21px 21px 0 0;"
        />
      </a>
    </div>
  </div>
</main>

<footer class="container py-5">
  <div class="row">
    <div class="col-12 col-md">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill="none"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        class="d-block mb-2"
        role="img"
        viewBox="0 0 24 24"
        ><title>Product</title><circle cx="12" cy="12" r="10" /><path
          d="M14.31 8l5.74 9.94M9.69 8h11.48M7.38 12l5.74-9.94M9.69 16L3.95 6.06M14.31 16H2.83m13.79-4l-5.74 9.94"
        /></svg
      >
      <small class="d-block mb-3 text-muted">&copy; 2017–2021</small>
    </div>
    <div class="col-6 col-md">
      <h5>Технологии</h5>
      <ul class="list-unstyled text-small">
        <li><a class="link-secondary" href="#">Svelte</a></li>
        <li><a class="link-secondary" href="#">Github Pages</a></li>
        <li><a class="link-secondary" href="#">Typescipt</a></li>
        <li><a class="link-secondary" href="#">Bootstrap</a></li>
        <li><a class="link-secondary" href="#">Another one</a></li>
        <li><a class="link-secondary" href="#">Last time</a></li>
      </ul>
    </div>
    <div class="col-6 col-md">
      <h5>Resources</h5>
      <ul class="list-unstyled text-small">
        <li><a class="link-secondary" href="#">Resource name</a></li>
        <li><a class="link-secondary" href="#">Resource</a></li>
        <li><a class="link-secondary" href="#">Another resource</a></li>
        <li><a class="link-secondary" href="#">Final resource</a></li>
      </ul>
    </div>
    <div class="col-6 col-md">
      <h5>Resources</h5>
      <ul class="list-unstyled text-small">
        <li><a class="link-secondary" href="#">Business</a></li>
        <li><a class="link-secondary" href="#">Education</a></li>
        <li><a class="link-secondary" href="#">Government</a></li>
        <li><a class="link-secondary" href="#">Gaming</a></li>
      </ul>
    </div>
    <div class="col-6 col-md">
      <h5>About</h5>
      <ul class="list-unstyled text-small">
        <li><a class="link-secondary" href="#">Team</a></li>
        <li><a class="link-secondary" href="#">Locations</a></li>
        <li><a class="link-secondary" href="#">Privacy</a></li>
        <li><a class="link-secondary" href="#">Terms</a></li>
      </ul>
    </div>
  </div>
</footer>
