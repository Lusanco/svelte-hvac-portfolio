<script>
  import { link } from "svelte-routing";
  import { urlLocation } from "../scripts/stores";
  import Logo from "../components/Logo.svelte";

  let urlStyles = " border-b-4 border-celestialBlue ";

  $: {
    console.log($urlLocation);
  }

  let menuOpen = false;

  function toggleMenu() {
    menuOpen = !menuOpen;

    if (menuOpen) {
      document.addEventListener("click", handleOutsideClick);
    } else {
      // Remove event listener when menu is closed
      document.removeEventListener("click", handleOutsideClick);
    }
  }

  function handleOutsideClick(event) {
    const menu = document.getElementById("menu-ul");
    const button = document.getElementById("menu-btn");
    if (!menu.contains(event.target) && !button.contains(event.target)) {
      menuOpen = false;
      menu.classList.remove("flex");
      menu.classList.add("hidden");
    }
  }

  function closeMenuOnClick(event) {
    // Close the menu after link navigation
    menuOpen = false;
  }
</script>

<header
  class="z-50 w-full h-20 font-semibold min-h-20 bg-slate-100 max-h-20 drop-shadow-2xl text-celestialBlue"
>
  <nav class="flex items-center justify-between h-20 px-4 z-[9999]">
    <a use:link use:link href="/">
      <Logo classNames="object-contain w-16 h-16 mix-blend-multiply" />
    </a>

    <button
      id="menu-btn"
      on:click={toggleMenu}
      class={`w-16 h-16 border-2 rounded-md flex justify-center items-center transition-all duration-300 border-celestialBlue sm:hidden ${menuOpen ? "-rotate-90  bg-celestialBlue hover:bg-celestialBlue/80 text-slate-100" : "rotate-0  bg-slate-100 hover:bg-slate-200"}`}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="size-6"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
        />
      </svg>
    </button>

    <!-- Mobile View -->
    <ul
      id="menu-ul"
      class={`absolute top-0 left-0 right-0 flex-col w-full mt-20 text-center flex drop-shadow-2xl sm:hidden bg-slate-100 transition-all duration-300 ease-in-out ${menuOpen ? "opacity-100 visible" : "invisible opacity-0"}`}
    >
      <a use:link href="/about-us" on:click={closeMenuOnClick}>
        <li
          class="w-full p-4 transition-all duration-300 border-b-2 hover:bg-celestialBlue hover:text-slate-100"
        >
          About Us
        </li>
      </a>
      <a use:link href="/services" on:click={closeMenuOnClick}>
        <li
          class="w-full p-4 transition-all duration-300 border-b-2 hover:bg-celestialBlue hover:text-slate-100"
        >
          Services
        </li>
      </a>
      <a use:link href="/projects" on:click={closeMenuOnClick}>
        <li
          class="w-full p-4 transition-all duration-300 border-b-2 hover:bg-celestialBlue hover:text-slate-100"
        >
          Projects
        </li>
      </a>
      <a use:link href="/education" on:click={closeMenuOnClick}>
        <li
          class="w-full p-4 transition-all duration-300 border-b-2 hover:bg-celestialBlue hover:text-slate-100"
        >
          Education
        </li>
      </a>
      <a use:link href="/contact-us" on:click={closeMenuOnClick}>
        <li
          class="w-full p-4 transition-all duration-300 border-b-2 hover:text-slate-100"
        >
          Contact Us
        </li>
      </a>
    </ul>

    <!-- Desktop View -->
    <ul class="hidden h-8 gap-4 sm:flex">
      <a
        use:link
        href="/about-us"
        class={`transition-all duration-150 hover:border-celestialBlue hover:border-b-4  ${$urlLocation === "/about-us" ? urlStyles : "border-transparent"}`}
      >
        <li>About Us</li>
      </a>
      <a
        use:link
        href="/services"
        class={`transition-all duration-150 hover:border-celestialBlue hover:border-b-4  ${$urlLocation === "/services" ? urlStyles : "border-transparent"}`}
      >
        <li>Services</li>
      </a>
      <a
        use:link
        href="/projects"
        class={`transition-all duration-150 hover:border-celestialBlue hover:border-b-4  ${$urlLocation === "/projects" ? urlStyles : "border-transparent"}`}
      >
        <li>Projects</li>
      </a>
      <a
        use:link
        href="/education"
        class={`transition-all duration-150 hover:border-celestialBlue hover:border-b-4  ${$urlLocation === "/education" ? urlStyles : "border-transparent"}`}
      >
        <li>Education</li>
      </a>
      <a
        use:link
        href="/contact-us"
        class={`transition-all duration-150 hover:border-celestialBlue hover:border-b-4  ${$urlLocation === "/contact-us" ? urlStyles : "border-transparent"}`}
      >
        <li>Contact Us</li>
      </a>
    </ul>
  </nav>
</header>
