<script>
  import EducationArticles from "../components/EducationArticles.svelte";
  import { urlLocation } from "../scripts/stores";

  $urlLocation = window.location.pathname;
</script>

<EducationArticles />
