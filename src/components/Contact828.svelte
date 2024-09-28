<script>
  import { EN, ES } from "../scripts/localizationContent";
  import { language } from "../scripts/stores";
</script>

<section
  class="flex flex-col items-center justify-center gap-12 py-12 m-auto font-bold text-gunmetal bg-slate-200"
>
  <h1 class="text-4xl text-bold text-gunmetal/80">
    {$language ? EN.contact828.h1 : ES.contact828.h1}
  </h1>
  <div
    class="flex flex-col items-center justify-center w-full gap-4 px-4 m-auto mx-auto text-center md:flex-wrap md:text-left md:flex-row"
  >
    <a
      href="tel:+1-939-336-9191"
      class="flex w-full max-w-3xl gap-4 p-4 font-bold transition-all duration-300 shadow-md min-h-24 max-h-24 md:w-96 hover:scale-105 bg-gunmetal drop-shadow-md text-slate-100"
    >
      <div class="flex flex-col w-2/12 m-auto text-center">
        <i class="text-2xl fa-solid fa-phone"></i>
      </div>
      <div class="flex flex-col w-full m-auto">
        <h2>{$language ? EN.contact828.h2a : ES.contact828.h2a}</h2>
        <p class="text-sm text-slate-100/60">
          {$language ? EN.contact828.p1 : ES.contact828.p1}
        </p>
      </div>
    </a>

    <a
      href="mailto:geraldo.pena@828-llc.com"
      class="flex w-full max-w-3xl gap-4 p-4 font-bold transition-all duration-300 shadow-md min-h-24 max-h-24 md:w-96 hover:scale-105 bg-gunmetal drop-shadow-md text-slate-100"
    >
      <div class="flex flex-col w-2/12 m-auto text-center">
        <i class="text-2xl fa-solid fa-envelope"></i>
      </div>
      <div class="flex flex-col w-full m-auto">
        <h2>{$language ? EN.contact828.h2b : ES.contact828.h2b}</h2>
        <p class="text-sm text-slate-100/60">
          {$language ? EN.contact828.p2 : ES.contact828.p2}
        </p>
      </div>
    </a>
    <a
      href="https://www.instagram.com/828llc.pr/"
      class="flex w-full max-w-3xl gap-4 p-4 font-bold transition-all duration-300 shadow-md min-h-24 max-h-24 md:w-96 hover:scale-105 bg-gunmetal drop-shadow-md text-slate-100"
    >
      <div class="flex flex-col w-2/12 m-auto text-center">
        <i class="text-2xl fa-brands fa-square-instagram"></i>
      </div>
      <div class="flex flex-col w-full m-auto">
        <h2>{$language ? EN.contact828.h2c : ES.contact828.h2c}</h2>
        <p class="text-sm text-slate-100/60">
          {$language ? EN.contact828.p3 : ES.contact828.p3}
        </p>
      </div>
    </a>
  </div>
</section>
