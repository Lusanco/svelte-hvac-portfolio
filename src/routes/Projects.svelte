<script>
  import ProjectsGallery from "../components/ProjectsGallery.svelte";
  import { urlLocation } from "../scripts/stores";

  $urlLocation = window.location.pathname;
</script>

<ProjectsGallery />
