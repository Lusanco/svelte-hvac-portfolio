<script>
  import { link } from "svelte-routing";
</script>

<section class="flex flex-col text-center shadow-2xl lg:text-left">
  <div class="bg-center bg-no-repeat bg-cover bg-gunmetal text-slate-100">
    <div class="flex flex-col p-8 px-2 py-4 font-semibold lg:relative md:p-12">
      <h1 class="text-4xl">Projects</h1>
      <br />
      <p class="text-xl">
        Explore our successful projects in various industries, including
        commercial, industrial, residential, and educational. See how we've
        delivered innovative solutions and exceeded our clients' expectations.
      </p>
      <br />
      <a
        use:link
        href="/projects"
        class="flex px-4 py-2 mx-auto text-lg font-semibold rounded-md lg:absolute bottom-8 right-12 hover:bg-slate-100/90 bg-slate-100 w-fit text-gunmetal"
        >Our Projects</a
      >
    </div>
  </div>
</section>
