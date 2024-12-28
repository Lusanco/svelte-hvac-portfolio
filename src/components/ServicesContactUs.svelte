<script>
  import { link } from "svelte-routing";
  import { EN, ES } from "../scripts/localizationContent";
  import { language } from "../scripts/stores";
  import { ghPath } from "../scripts/ghPages";
</script>

<section
  class="flex flex-col items-center justify-between w-full gap-4 p-8 m-auto font-semibold text-center md:flex-row bg-celestialBlue text-slate-100"
>
  <h2 class="text-xl">
    {$language ? EN.servicesContactUs.h2 : ES.servicesContactUs.h2}
  </h2>

  <a
    use:link
    href={`${ghPath}/contact-us`}
    class="p-4 transition-all duration-300 rounded-md shadow-md bg-slate-100 text-celestialBlue drop-shadow-md hover:bg-white"
    >{$language ? EN.servicesContactUs.a : ES.servicesContactUs.a}</a
  >
</section>
