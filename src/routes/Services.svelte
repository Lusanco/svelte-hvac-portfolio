<script>
  import QuoteSection from "../components/QuoteSection.svelte";
  import SolutionsSection from "../components/SolutionsSection.svelte";
  import WhyUsSection from "../components/WhyUsSection.svelte";
  import { urlLocation } from "../scripts/stores";

  $urlLocation = window.location.pathname;
</script>

<SolutionsSection />
<WhyUsSection />
<QuoteSection />
