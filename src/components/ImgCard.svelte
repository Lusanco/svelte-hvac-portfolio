<script>
  export let pathFolder = 0; // Int
  export let pathName = "Path to Img";
  export let pathDescription = "Img Description";
</script>

<div
  class="relative flex flex-col items-center justify-center w-full max-w-4xl shadow-lg bg-slate-100 drop-shadow-lg"
>
  <!-- Blurred Background using ::before pseudo-element -->
  <div
    class="relative w-full h-full overflow-hidden bg-center bg-no-repeat bg-cover"
    style="background-image: url('imgs/{pathFolder}/{pathName}');"
  >
    <!-- Blurred Background -->
    <div
      class="absolute inset-0 w-full h-full bg-center bg-cover blur-md"
      style="background-image: url('imgs/{pathFolder}/{pathName}');"
    ></div>

    <!-- Main Image -->
    <img
      class="relative object-contain object-center w-full max-h-96"
      src={"imgs/" + pathFolder + "/" + pathName}
      alt={pathName}
    />
  </div>

  <!-- Description -->
  <div
    class="w-full p-4 text-xl font-semibold text-justify h-fit text-gunmetal/80"
  >
    {pathDescription}
  </div>
</div>
