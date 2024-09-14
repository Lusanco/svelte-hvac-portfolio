<script>
  import ProjectsGallery from "../components/ProjectsGallery.svelte";
  import { urlLocation } from "../scripts/stores";

  $urlLocation = window.location.pathname;
</script>

<head>
  <title>828 LLC - Projects</title>
</head>
<ProjectsGallery />
