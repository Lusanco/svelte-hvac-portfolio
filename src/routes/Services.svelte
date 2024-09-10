<script>
  import ServicesSolutions from "../components/ServicesSolutions.svelte";
  import ServicesContactUs from "../components/ServicesContactUs.svelte";
  import { urlLocation } from "../scripts/stores";

  $urlLocation = window.location.pathname;
</script>

<ServicesSolutions />
<ServicesContactUs />
