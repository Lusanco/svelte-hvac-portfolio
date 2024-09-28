<script>
  import EducationArticleCard from "./EducationArticleCard.svelte";
  import { EN, ES } from "../scripts/localizationContent";
  import { language } from "../scripts/stores";
</script>

<section
  class="flex flex-col justify-center w-full gap-8 px-4 py-16 m-auto bg-slate-200"
>
  <h1 class="text-4xl font-bold text-center text-gunmetal/80">
    {$language ? EN.educationArticles.h1 : ES.educationArticles.h1}
  </h1>
  <div class="flex flex-wrap justify-center w-full gap-4 m-auto">
    <EducationArticleCard />
  </div>
</section>
