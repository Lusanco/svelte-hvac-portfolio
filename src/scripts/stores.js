import { readable, writable } from "svelte/store";

export const urlLocation = writable(window.location.pathname);