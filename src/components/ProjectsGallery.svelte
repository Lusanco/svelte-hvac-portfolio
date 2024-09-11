<script>
  import ImgCard from "./ImgCard.svelte";
  import projects from "../scripts/projectsContent";
</script>

<section
  class="flex flex-col justify-center w-full gap-8 px-4 py-16 m-auto bg-slate-200"
>
  <h1 class="text-4xl font-bold text-center text-gunmetal/80">Projects</h1>
  <div class="flex flex-wrap justify-center w-full gap-4 m-auto">
    {#each Object.entries(projects) as [pathName, pathDescription], index}
      {#if index + 1 <= Object.keys(projects).length}
        <ImgCard pathFolder={index + 1} {pathName} {pathDescription} />
      {/if}
    {/each}
  </div>
</section>
