<!-- Hero Section Start -->
<script>
  import { link } from "svelte-routing";
  import Logo from "./Logo.svelte";
</script>

<section class="flex flex-col shadow-2xl md:flex-row overflow-clip">
  <!--vv Left/Top Side vv-->
  <div
    class="bg-[url('/imgs/repairmen-taking-apart-hvac-system.jpg')] text-slate-100 bg-no-repeat bg-cover bg-center md:w-2/3"
  >
    <div
      class="flex flex-col px-2 py-12 font-semibold text-center md:text-left bg-black/70 md:p-12"
    >
      <h1 class="text-4xl">Beyond HVAC</h1>
      <h3 class="text-2xl">Comprehensive Building Solutions</h3>
      <br />
      <p class="text-lg text-justify">
        From HVAC to energy optimization, we’ve got you covered. Our team of
        experienced professionals offers comprehensive solutions tailored to
        your building’s specific needs. We specialize in HVAC systems, energy
        audits, and building automation, ensuring optimal efficiency and
        comfort. With a focus on quality, reliability, and customer
        satisfaction, we’re committed to delivering exceptional results for your
        building.
      </p>
      <br />
      <a
        use:link
        href="/contact-us"
        class="p-4 font-semibold text-center rounded-md hover:bg-celestialBlue/90 bg-celestialBlue text-slate-100"
      >
        Contact Us
      </a>
    </div>
  </div>
  <!--^^ Left/Top Side ^^-->

  <!--vv Right/Bottom Side vv-->
  <div
    class="flex flex-col items-center justify-center p-4 md:w-1/3 min-h-40 bg-slate-100"
  >
    <Logo classNames="object-contain w-32 h-32 md:w-48 md:h-48" />
    <h1 class="text-lg font-bold text-center text-celestialBlue">
      Innovative HVAC Solutions & More!
    </h1>
  </div>
  <!--^^ Right/Bottom Side ^^-->
</section>
<!-- Hero Section End -->
