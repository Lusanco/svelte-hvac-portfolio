<script>
  import AboutSection from "../components/AboutSection.svelte";
  import HeroSection from "../components/HeroSection.svelte";
  import ProjectsSection from "../components/ProjectsSection.svelte";
  import ServicesSection from "../components/ServicesSection.svelte";
  import { urlLocation } from "../scripts/stores";

  $urlLocation = window.location.pathname;
</script>

<!-- Index Start -->
<HeroSection />
<AboutSection />
<ServicesSection />
<ProjectsSection />
<!-- Index End -->
