<script>
  import { link } from "svelte-routing";
</script>

<main class="flex flex-col text-center shadow-2xl lg:text-right">
  <div
    class="text-slate-100 bg-no-repeat bg-cover bg-center bg-[url('/imgs/engineer-assembling-hvac-unit-manometers.jpg')]"
  >
    <div
      class="flex flex-col p-8 px-2 py-4 font-semibold lg:relative bg-black/70 md:p-12"
    >
      <h1 class="text-4xl">Services</h1>
      <br />
      <p class="text-xl">
        Discover our comprehensive range of HVAC and mechanical services,
        including installation, maintenance, energy efficiency, and custom
        solutions.
      </p>
      <br />
      <a
        use:link
        href="/services"
        class="flex px-4 py-2 mx-auto text-lg font-semibold rounded-md lg:absolute bottom-8 left-12 hover:bg-celestialBlue/90 bg-celestialBlue w-fit"
        >Our Services</a
      >
    </div>
  </div>
</main>
