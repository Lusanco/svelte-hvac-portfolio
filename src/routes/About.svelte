<script>
  import MissionVisionSection from "../components/MissionVisionSection.svelte";
  import Section828 from "../components/Section828.svelte";
  import AboutPresident from "../components/AboutPresident.svelte";
  import { urlLocation } from "../scripts/stores";
  import AboutValues from "../components/AboutValues.svelte";

  $urlLocation = window.location.pathname;
</script>

<Section828 />
<MissionVisionSection />
<AboutValues />
<AboutPresident />
