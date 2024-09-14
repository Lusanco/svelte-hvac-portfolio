<script>
  import EducationArticles from "../components/EducationArticles.svelte";
  import { urlLocation } from "../scripts/stores";

  $urlLocation = window.location.pathname;
</script>

<head>
  <title>828 LLC - Education</title>
</head>

<EducationArticles />
