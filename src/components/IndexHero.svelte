<!-- Hero Section Start -->
<script>
  import { link } from "svelte-routing";
  import Logo from "./Logo.svelte";
  import { EN, ES } from "../scripts/localizationContent";
  import { language } from "../scripts/stores";
  import { ghPath } from "../scripts/ghPages";
</script>

<section class="flex flex-col shadow-2xl md:flex-row overflow-clip">
  <!--vv Left/Top Side vv-->
  <div
    class={`bg-[url('/imgs/IMG_3566.jpg')] text-slate-100 bg-no-repeat bg-cover bg-center md:w-2/3`}
  >
    <div
      class="flex flex-col px-2 py-12 font-semibold text-center md:text-left bg-black/50 hover:bg-black/60 md:p-12"
    >
      <h1 class="text-4xl">{$language ? EN.indexHero.h1 : ES.indexHero.h1}</h1>
      <h2 class="text-2xl">{$language ? EN.indexHero.h2 : ES.indexHero.h2}</h2>
      <br />
      <p class="text-lg text-center md:text-justify">
        {$language ? EN.indexHero.p1 : ES.indexHero.p1}
      </p>
      <br />
      <a
        use:link
        href={`${ghPath}/contact-us`}
        class="p-4 font-semibold text-center transition-all duration-300 rounded-md shadow-md drop-shadow-md hover:bg-celestialBlue/90 bg-celestialBlue text-slate-100"
      >
        {$language ? EN.indexHero.a : ES.indexHero.a}
      </a>
    </div>
  </div>
  <!--^^ Left/Top Side ^^-->

  <!--vv Right/Bottom Side vv-->
  <div
    class="flex flex-col items-center justify-center p-4 md:w-1/3 min-h-40 bg-slate-100"
  >
    <Logo classNames="object-contain w-32 h-32 md:w-48 md:h-48" />
  </div>
  <!--^^ Right/Bottom Side ^^-->
</section>
<!-- Hero Section End -->
