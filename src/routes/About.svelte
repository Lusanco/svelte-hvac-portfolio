<script>
  import AboutPresident from "../components/AboutPresident.svelte";
  import { urlLocation } from "../scripts/stores";
  import AboutValues from "../components/AboutValues.svelte";
  import About828 from "../components/About828.svelte";
  import AboutMissionVision from "../components/AboutMissionVision.svelte";

  $urlLocation = window.location.pathname;
</script>

<head>
  <title>828 LLC - About Us</title>
</head>

<About828 />
<AboutMissionVision />
<AboutValues />
<AboutPresident />
