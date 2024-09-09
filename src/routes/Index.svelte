<script>
  import AboutSection from "../components/AboutSection.svelte";
  import IndexHero from "../components/IndexHero.svelte";
  import ProjectsSection from "../components/ProjectsSection.svelte";
  import ServicesSection from "../components/ServicesSection.svelte";
  import { urlLocation } from "../scripts/stores";

  $urlLocation = window.location.pathname;
</script>

<!-- Index Start -->
<IndexHero />
<AboutSection />
<ServicesSection />
<ProjectsSection />
<!-- Index End -->
