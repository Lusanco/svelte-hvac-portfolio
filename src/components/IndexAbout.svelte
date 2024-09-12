<script>
  import { link } from "svelte-routing";
</script>

<section
  class="flex flex-col gap-8 py-8 font-semibold text-center shadow-2xl md:p-8 bg-gunmetal text-slate-100"
>
  <h1 class="text-4xl">About Us</h1>

  <p class="max-w-2xl px-1 mx-auto text-xl text-justify md:text-center">
    Discover how 828 LLC provides innovative HVAC and mechanical solutions
    tailored to your needs. Learn about our commitment to quality, reliability,
    and customer satisfaction.
  </p>

  <a
    use:link
    href="/about-us"
    class="px-4 py-2 mx-auto text-lg font-semibold transition-all duration-300 rounded-md shadow-md drop-shadow-md hover:bg-slate-100/90 bg-slate-100 w-fit text-gunmetal"
    >Learn More</a
  >
</section>
