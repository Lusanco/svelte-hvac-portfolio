<script>
  import ServicesSolutions from "../components/ServicesSolutions.svelte";
  import ServicesContactUs from "../components/ServicesContactUs.svelte";
  import { urlLocation } from "../scripts/stores";

  $urlLocation = window.location.pathname;
</script>

<head>
  <title>828 LLC - Services</title>
</head>
<ServicesSolutions />
<ServicesContactUs />
