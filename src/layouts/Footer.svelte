<script>
  import Logo from "../components/Logo.svelte";
</script>

<footer class="text-gunmetal/80 bg-slate-100">
  <div
    class="container flex flex-col items-center px-5 py-8 mx-auto sm:flex-row"
  >
    <a
      href="/"
      class="flex items-center justify-center font-medium md:justify-start"
    >
      <Logo classNames="w-10 h-10 p-2 text-white bg-slate-100 rounded-full" />
      <span class="ml-3 text-xl">828 LLC</span>
    </a>
    <p
      class="mt-4 text-sm text-center md:text-left sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gunmetal/20 sm:py-2 sm:mt-0"
    >
      Copyright © 2024 828 LLC. All rights reserved.
    </p>
    <span
      class="inline-flex justify-center mt-4 sm:ml-auto sm:mt-0 sm:justify-start"
    >
      <a
        href="https://www.instagram.com/828llc.pr/"
        class="flex items-center justify-center gap-1 ml-3"
      >
        <svg
          fill="none"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          class="w-5 h-5"
          viewBox="0 0 24 24"
        >
          <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
          <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"
          ></path>
        </svg>
        <p>Instagram</p>
      </a>
    </span>
  </div>
</footer>
