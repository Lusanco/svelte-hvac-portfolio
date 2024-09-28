<script>
  import { EN, ES } from "../scripts/localizationContent";
  import { language } from "../scripts/stores";
</script>

<section
  style="background-image: url('imgs/6/RTU in progress.jpg');"
  class="bg-center bg-no-repeat bg-cover shadow-2xl"
>
  <div
    class="transition-all duration-300 min-h-96 bg-black/50 text-slate-100 hover:bg-black/60"
  >
    <div
      class="flex flex-col max-w-4xl gap-4 px-4 py-12 m-auto text-xl font-semibold text-center md:text-justify md:indent-8"
    >
      <h1 class="text-4xl text-center md:text-left">
        {$language ? EN.about828.h1 : ES.about828.h1}
      </h1>
      <p>
        {$language ? EN.about828.p1 : ES.about828.p1}
      </p>
      <p>
        {$language ? EN.about828.p2 : ES.about828.p2}
      </p>
      <p>{$language ? EN.about828.p3 : ES.about828.p3}</p>
    </div>
  </div>
</section>
