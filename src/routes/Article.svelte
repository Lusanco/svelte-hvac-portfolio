<script>
  import { link } from "svelte-routing";
  import { language } from "../scripts/stores";
  import { ghPath } from "../scripts/ghPages";

  export let blogTitle = "Article Title";
  export let authorName = "Author Name";
  export let authorTitle = "Author Title";
  export let authorImg = "Author Image";
  export let blogDate = "Blog Date";
  export let blogContent = ["Blog Content"];
  export let blogSource = "Blog Source";
  export let blogSourceName = "Blog Source Name";
</script>

<head>
  <title>828 LLC - {blogTitle}</title>
</head>

<section
  class="flex flex-col w-full gap-4 p-4 py-16 mx-auto text-xl font-semibold text-center bg-white shadow-lg md:text-left h-fit drop-shadow-lg text-gunmetal/60"
>
  <div class="flex flex-col w-full max-w-4xl gap-4 pb-2 mx-auto">
    <div
      class="flex flex-col-reverse w-full mx-auto md:flex-row md:justify-between"
    >
      <div>
        <h1 class="text-2xl font-bold text-celestialBlue">{blogTitle}</h1>
        <h3 class="md:-mt-2 text-gunmetal/50">
          {authorName}, {authorTitle}
        </h3>
        <p class="md:-mt-2 text-celestialBlue/50">
          {$language ? "Published:" : "Publicado:"}
          {blogDate}
        </p>
        <p class="md:-mt-2">
          {$language ? "Source:" : "Fuente:"}
          <a class="font-extrabold underline" use:link href={blogSource}
            >{blogSourceName}</a
          >
        </p>
      </div>
      <div class="p-4 m-auto md:p-0 md:m-0 min-w-24 min-h-24">
        <img
          class="w-24 h-24 rounded-full"
          src={`${ghPath}${authorImg}`}
          alt="author"
        />
      </div>
    </div>

    <p class="pt-4 text-sm font-bold text-celestialBlue/70">
      {$language
        ? "The original articles were written in spanish. The ones at this section are being translated by the writer but might not capture all the original semantics."
        : ""}
    </p>

    {#each blogContent as paragraph}
      <p
        class="py-2 text-justify transition-all duration-300 rounded-md md:px-4 text-gunmetal/50 hover:text-gunmetal/70 hover:bg-slate-100 md:hover:scale-105"
      >
        {@html paragraph}
      </p>
    {/each}
    <div class="flex flex-col items-center justify-center w-full md:block">
      <a
        use:link
        href={`${ghPath}/education`}
        class="flex md:float-right text-celestialBlue"
        >{$language ? "Back" : "Regresar"}</a
      >
    </div>
  </div>
</section>
