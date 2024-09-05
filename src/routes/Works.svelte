<script>
  import { onMount } from "svelte";
  import { urlLocation } from "../scripts/stores";

  onMount(() => {
    $urlLocation = window.location.pathname;
  });
</script>
