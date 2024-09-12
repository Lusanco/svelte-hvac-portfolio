<script>
  import { link } from "svelte-routing";
</script>

<section class="flex flex-col text-center shadow-2xl lg:text-left">
  <div class=" bg-slate-200 text-gunmetal">
    <div class="flex flex-col gap-8 p-8 px-2 py-8 font-semibold md:p-12">
      <h1 class="text-4xl">Projects</h1>

      <p class="px-1 text-xl text-justify md:text-center lg:text-left">
        Explore our successful projects in various industries, including
        commercial, industrial, residential, and educational. See how we've
        delivered innovative solutions and exceeded our clients' expectations.
      </p>

      <div class="w-full">
        <a
          use:link
          href="/projects"
          class="flex px-4 py-2 mx-auto text-lg font-semibold transition-all duration-300 rounded-md shadow-md lg:float-right drop-shadow-md hover:bg-white bg-slate-100 w-fit text-gunmetal"
          >Our Projects</a
        >
      </div>
    </div>
  </div>
</section>
