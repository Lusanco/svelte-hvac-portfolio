<script>
  import { link } from "svelte-routing";
  import { EN, ES } from "../scripts/localizationContent";
  import { language } from "../scripts/stores";
  import { ghPath } from "../scripts/ghPages";
</script>

<main class="flex flex-col text-center shadow-2xl lg:text-left">
  <div
    class="text-slate-100 bg-no-repeat bg-cover bg-center bg-[url('/imgs/Chilis-Isla-Verde-OGR-closed-control-boxes.jpg')]"
  >
    <div
      class="flex flex-col gap-8 p-8 px-2 py-8 font-semibold bg-black/50 hover:bg-black/60 md:p-12"
    >
      <h2 class="text-4xl">
        {$language ? EN.indexServices.h2 : ES.indexServices.h2}
      </h2>

      <div class="flex">
        <div class="lg:basis-2/3">
          <p
            class="px-1 text-xl text-center lg:max-w-xl lg:text-left lg:float-left"
          >
            {$language ? EN.indexServices.p : ES.indexServices.p}
          </p>
        </div>
        <div class="lg:basis-1/3"></div>
      </div>

      <div class="w-full">
        <a
          use:link
          href={`${ghPath}/services`}
          class="flex px-4 py-2 mx-auto text-lg font-semibold transition-all duration-300 rounded-md shadow-md lg:float-right drop-shadow-md hover:bg-celestialBlue/90 bg-celestialBlue w-fit"
          >{$language ? EN.indexServices.a : ES.indexServices.a}</a
        >
      </div>
    </div>
  </div>
</main>
