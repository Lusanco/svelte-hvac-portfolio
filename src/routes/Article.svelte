<script>
  import { link } from "svelte-routing";

  export let blogTitle = "Article Title";
  export let authorName = "Author Name";
  export let authorTitle = "Author Title";
  export let blogDate = "Blog Date";
  export let blogContent = ["Blog Content"];
  export let blogSource = "Blog Source";
  export let blogSourceName = "Blog Source Name";
</script>

<section
  class="flex flex-col w-full gap-4 p-4 py-16 mx-auto text-xl font-semibold text-center bg-white shadow-lg md:text-left h-fit drop-shadow-lg text-gunmetal/60"
>
  <div class="flex flex-col w-full max-w-4xl gap-4 pb-2 mx-auto">
    <div>
      <h1 class="text-2xl font-bold text-celestialBlue">{blogTitle}</h1>
      <h3 class="md:-mt-2 text-gunmetal/50">
        {authorName}, {authorTitle}
      </h3>
      <p class="md:-mt-2 text-celestialBlue/50">Published: {blogDate}</p>
      <p class="md:-mt-2">
        Source: <a class="font-extrabold underline" use:link href={blogSource}
          >{blogSourceName}</a
        >
      </p>
    </div>

    {#each blogContent as paragraph}
      <p
        class="py-2 text-justify transition-all duration-300 rounded-md md:px-4 text-gunmetal/50 hover:text-gunmetal/70 hover:bg-slate-100 md:hover:scale-105"
      >
        {paragraph}
      </p>
    {/each}
    <div class="flex flex-col items-center justify-center w-full md:block">
      <a
        use:link
        href="/education"
        class="flex md:float-right text-celestialBlue">Back to Education</a
      >
    </div>
  </div>
</section>
