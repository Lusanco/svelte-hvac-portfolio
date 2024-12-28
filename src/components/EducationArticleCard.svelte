<script>
  import { link } from "svelte-routing";
  import { language } from "../scripts/stores";
  import { articlesEN, articlesES } from "../scripts/articlesContent";
  import { ghPath } from "../scripts/ghPages";
</script>

{#if $language == true}
  {#each articlesEN as article}
    <div
      class="flex flex-col w-full gap-4 p-4 mx-auto text-xl font-semibold text-center shadow-lg sm:p-8 md:text-left h-fit drop-shadow-lg bg-slate-100 text-gunmetal/60"
    >
      <div>
        <h2 class="text-2xl font-bold text-celestialBlue">
          {article.blogTitle}
        </h2>
        <h3 class="text-gunmetal/50">
          {article.authorName}, {article.authorTitle}
        </h3>
      </div>
      <p class="text-justify">{article.blogDescription}</p>

      <div class="flex flex-wrap justify-between">
        <p class="text-gunmetal/50">{article.blogDate}</p>
        <a
          use:link
          href={`${ghPath}${article.blogArticle}`}
          class="transition-all duration-300 md:hover:scale-110 text-celestialBlue"
          >{article.readHere}</a
        >
      </div>
    </div>
  {/each}
{:else}
  {#each articlesES as article}
    <div
      class="flex flex-col w-full gap-4 p-4 mx-auto text-xl font-semibold text-center shadow-lg sm:p-8 md:text-left h-fit drop-shadow-lg bg-slate-100 text-gunmetal/60"
    >
      <div>
        <h2 class="text-2xl font-bold text-celestialBlue">
          {article.blogTitle}
        </h2>
        <h3 class="text-gunmetal/50">
          {article.authorName}, {article.authorTitle}
        </h3>
      </div>
      <p class="text-justify">{article.blogDescription}</p>

      <div class="flex flex-wrap justify-between">
        <p class="text-gunmetal/50">{article.blogDate}</p>
        <a
          use:link
          href={`${ghPath}${article.blogArticle}`}
          class="transition-all duration-300 md:hover:scale-110 text-celestialBlue"
          >{article.readHere}</a
        >
      </div>
    </div>
  {/each}
{/if}
