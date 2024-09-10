<script>
  import { link } from "svelte-routing";
</script>

<section
  class="flex flex-col items-center justify-between w-full gap-4 p-8 m-auto font-semibold text-center md:flex-row bg-celestialBlue text-slate-100"
>
  <h1 class="text-xl">Interested in one of our services?</h1>

  <a
    use:link
    href="/contact-us"
    class="p-4 transition-all duration-300 rounded-md shadow-md bg-slate-100 text-celestialBlue drop-shadow-md hover:bg-white"
    >Contact Us</a
  >
</section>
