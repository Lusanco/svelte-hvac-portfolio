<script>
  import { EN, ES } from "../scripts/localizationContent";
  import { language } from "../scripts/stores";
</script>

<section class="py-6 font-semibold text-gray-100 bg-gunmetal">
  <div class="container p-4 mx-auto space-y-16 sm:p-10">
    <div class="flex flex-wrap space-y-4">
      <h2 class="text-3xl font-bold leading-none">
        {$language ? EN.aboutPresident.h2 : ES.aboutPresident.h2}
      </h2>
      <blockquote class="flex flex-col gap-4 m-auto text-justify text-gray-400">
        <p class="indent-8">
          {$language ? EN.aboutPresident.p1 : ES.aboutPresident.p1}
        </p>
        <p class="italic text-right">
          {$language ? EN.aboutPresident.p2 : ES.aboutPresident.p2}
        </p>
      </blockquote>
    </div>
  </div>
</section>
