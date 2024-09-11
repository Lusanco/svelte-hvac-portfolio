<script>
  import ImgCard from "./ImgCard.svelte";
  import projects from "../scripts/projectsContent";
</script>

<section
  class="flex flex-wrap justify-center w-full gap-4 px-4 py-16 m-auto bg-slate-200"
>
  {#each Object.entries(projects) as [pathName, pathDescription], index}
    {#if index + 1 <= Object.keys(projects).length}
      <ImgCard pathFolder={index + 1} {pathName} {pathDescription} />
    {/if}
  {/each}
</section>
