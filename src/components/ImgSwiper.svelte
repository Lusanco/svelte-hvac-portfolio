<script>
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
    arrows: false,
    pagination: false,
  };
</script>

<Splide {options} aria-label="">
  <SplideSlide>
    <!-- svelte-ignore a11y-img-redundant-alt -->
    <img
      src="/imgs/3/Chiller structural base and compressor zoomed view.jpg"
      alt="Image 1"
    />
  </SplideSlide>
  <SplideSlide>
    <!-- svelte-ignore a11y-img-redundant-alt -->
    <img
      src="/imgs/3/New replaced compressors and structural bases (1).jpg"
      alt="Image 2"
    />
  </SplideSlide>
</Splide>
