<script>
  import { EN, ES } from "../scripts/localizationContent";
  import { language } from "../scripts/stores";
</script>

<section class="flex flex-col shadow-2xl md:flex-row overflow-clip">
  <!--vv Left/Top Side vv-->

  <div
    class="flex flex-col px-2 py-4 font-semibold transition-all duration-300 md:text-left bg-gunmetal text-slate-100 md:p-12 md:w-1/2"
  >
    <h2 class="text-4xl text-center md:text-left">
      {$language ? EN.aboutMission.h2 : ES.aboutMission.h2}
    </h2>
    <br />
    <p class="text-xl text-center md:text-justify">
      {$language ? EN.aboutMission.p : ES.aboutMission.p}
    </p>
    <br />
  </div>

  <!--^^ Left/Top Side ^^-->

  <!--vv Right/Bottom Side vv-->

  <div
    class="flex flex-col px-2 py-4 font-semibold transition-all duration-300 md:text-right bg-celestialBlue md:p-12 text-slate-100 md:w-1/2"
  >
    <h2 class="text-4xl text-center md:text-right">
      {$language ? EN.aboutVision.h2 : ES.aboutVision.h2}
    </h2>
    <br />
    <p class="text-xl text-center md:text-justify">
      {$language ? EN.aboutVision.p : ES.aboutVision.p}
    </p>
    <br />
  </div>

  <!--^^ Right/Bottom Side ^^-->
</section>
