import { writable } from "svelte/store";

export const navCollapsed = writable<boolean>(false)
navCollapsed.subscribe((val) => {
    console.log(val)
})