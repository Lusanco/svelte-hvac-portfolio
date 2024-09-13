<script>
  import projects from "../scripts/projectsContent";

  import { Splide, SplideSlide } from "@splidejs/svelte-splide";

  // Default theme
  import "@splidejs/svelte-splide/css";

  // or other themes
  import "@splidejs/svelte-splide/css/skyblue";
  import "@splidejs/svelte-splide/css/sea-green";

  // or only core styles
  import "@splidejs/svelte-splide/css/core";

  const options = {
    type: "loop",
    autoplay: true,
    interval: 3000,
    rewind: true,
    arrows: true,
    pagination: false,
    padding: "0%",
    gap: 0,
  };
</script>

{#each projects as project}
  <div
    class="flex flex-col items-center justify-center mx-auto shadow-lg w-96 h-fit bg-black/10 drop-shadow-lg"
  >
    <Splide {options}>
      {#each project.images as image}
        <SplideSlide>
          <!-- Main Image -->
          <img
            class="flex flex-col object-contain object-center mx-auto h-80"
            src={image}
            alt=""
          />
        </SplideSlide>
      {/each}
    </Splide>

    <!-- Description -->
    <div
      class="w-full h-40 p-4 overflow-y-auto text-xl font-semibold text-justify -z-10 text-gunmetal/60 bg-slate-100"
    >
      {project.description}
    </div>
  </div>
{/each}
