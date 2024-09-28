<script>
  import { link } from "svelte-routing";
  import { EN, ES } from "../scripts/localizationContent";
  import { language } from "../scripts/stores";
</script>

<section
  class="flex flex-col gap-8 py-8 font-semibold text-center shadow-2xl md:p-8 bg-gunmetal text-slate-100"
>
  <h2 class="text-4xl">{$language ? EN.indexAbout.h2 : ES.indexAbout.h2}</h2>
  <p class="max-w-2xl px-1 mx-auto text-xl text-center">
    {$language ? EN.indexAbout.p : ES.indexAbout.p}
  </p>
  <a
    use:link
    href="/about-us"
    class="px-4 py-2 mx-auto text-lg font-semibold transition-all duration-300 rounded-md shadow-md drop-shadow-md hover:bg-slate-100/90 bg-slate-100 w-fit text-gunmetal"
    >{$language ? EN.indexAbout.a : ES.indexAbout.a}</a
  >
</section>
