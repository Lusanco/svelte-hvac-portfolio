<script>
  import MissionVisionSection from "../components/MissionVisionSection.svelte";
  import Section828 from "../components/Section828.svelte";
  import TeamSection from "../components/TeamSection.svelte";
  import ValuesSection from "../components/ValuesSection.svelte";
  import { urlLocation } from "../scripts/stores";

  $urlLocation = window.location.pathname;
</script>

<Section828 />
<MissionVisionSection />
<ValuesSection />
<TeamSection />
