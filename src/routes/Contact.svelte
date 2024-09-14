<script>
  import Contact828 from "../components/Contact828.svelte";
  import { urlLocation } from "../scripts/stores";

  $urlLocation = window.location.pathname;
</script>

<head>
  <title>828 LLC - Contact Us</title>
</head>
<Contact828 />
