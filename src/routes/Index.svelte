<!-- Index Start -->
<script>
  import IndexHero from "../components/IndexHero.svelte";
  import IndexAbout from "../components/IndexAbout.svelte";
  import IndexServices from "../components/IndexServices.svelte";
  import IndexProjects from "../components/IndexProjects.svelte";
  import { urlLocation } from "../scripts/stores";

  $urlLocation = window.location.pathname;
</script>

<head>
  <title>828 LLC - Home</title>
</head>

<IndexHero />
<IndexAbout />
<IndexServices />
<IndexProjects />
<!-- Index End -->
