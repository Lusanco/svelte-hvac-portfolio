<script>
  import projects from "../scripts/projectsContent";
</script>

{#each projects as project}
  <div
    class="flex flex-col shadow-lg h-[30rem] bg-slate-100 drop-shadow-lg w-96"
  >
    <div class="flex flex-col overflow-hidden h-80 bg-black/20">
      {#each project.images as image}
        <!-- Main Image -->
        <img
          class="flex object-contain object-center w-full m-auto"
          src={image}
          alt=""
        />
      {/each}
    </div>

    <!-- Description -->
    <div
      class="w-full h-40 p-4 overflow-y-scroll text-xl font-semibold text-justify text-gunmetal/80"
    >
      {project.description}
    </div>
  </div>
{/each}
