<script>
  import { fade, scale, fly } from "svelte/transition";
  export let animationType = "fade";

  // Map string animation names to Svelte transition functions
  const animations = {
    fade,
    scale,
    slide: (node) => fly(node, { x: 300 }), // Fly transition for slide-in-right effect
  };

  // Select the animation based on the prop
  const selectedAnimation = animations[animationType] || fade; // Default to fade
</script>

<div in:selectedAnimation>
  <slot />
</div>
