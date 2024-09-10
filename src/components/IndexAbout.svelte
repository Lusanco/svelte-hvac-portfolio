<script>
  import { link } from "svelte-routing";
</script>

<section
  class="flex flex-col p-8 font-semibold text-center shadow-2xl bg-gunmetal text-slate-100"
>
  <h1 class="text-4xl">About Us</h1>
  <br />
  <p class="max-w-2xl mx-auto text-xl">
    Discover how 828 LLC provides innovative HVAC and mechanical solutions
    tailored to your needs. Learn about our commitment to quality, reliability,
    and customer satisfaction.
  </p>
  <br />
  <a
    use:link
    href="/about-us"
    class="px-4 py-2 mx-auto text-lg font-semibold rounded-md hover:bg-slate-100/90 bg-slate-100 w-fit text-gunmetal"
    >Learn More</a
  >
</section>
