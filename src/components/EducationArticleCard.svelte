<script>
  import { link } from "svelte-routing";
  import articles from "../scripts/articlesContent";
</script>

{#each articles as article}
  <div
    class="flex flex-col w-full gap-4 p-4 mx-auto text-xl font-semibold text-center shadow-lg sm:p-8 md:text-left h-fit drop-shadow-lg bg-slate-100 text-gunmetal/60"
  >
    <div>
      <h1 class="text-2xl font-bold text-celestialBlue">{article.blogTitle}</h1>
      <h3 class="md:-mt-2 text-gunmetal/50">
        {article.authorName}, {article.authorTitle}
      </h3>
    </div>
    <p class="text-justify">{article.blogDescription}</p>

    <div class="flex flex-wrap justify-between">
      <p class="text-gunmetal/50">{article.blogDate}</p>
      <a
        use:link
        href={article.blogArticle}
        class="transition-all duration-300 md:hover:scale-125 text-celestialBlue"
        >Read Here</a
      >
    </div>
  </div>
{/each}
