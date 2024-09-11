<script>
  export let pathFolder = 0; // Int
  export let pathName = "Path to Img";
  export let pathDescription = "Img Description";
</script>

<div class="flex flex-col shadow-lg h-[30rem] bg-slate-100 drop-shadow-lg w-96">
  <div class="flex flex-col overflow-hidden h-80 bg-black/20">
    <!-- Main Image -->
    <img
      class="flex object-contain object-center w-full m-auto"
      src={"imgs/" + pathFolder + "/" + pathName}
      alt={pathName}
    />
  </div>

  <!-- Description -->
  <div
    class="w-full h-40 p-4 overflow-y-scroll text-xl font-semibold text-justify text-gunmetal/80"
  >
    {pathDescription}
  </div>
</div>
