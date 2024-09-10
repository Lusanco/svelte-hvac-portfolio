<script>
  import ImgCard from "./ImgCard.svelte";
  import projects from "../scripts/projectsContent";
</script>

<section
  class="flex flex-col items-center justify-center gap-4 px-4 py-16 bg-slate-200 md:flex-wrap"
>
  {#each Object.entries(projects) as [pathName, pathDescription], index}
    {#if index + 1 <= Object.keys(projects).length}
      <ImgCard pathFolder={index + 1} {pathName} {pathDescription} />
    {/if}
  {/each}
</section>
