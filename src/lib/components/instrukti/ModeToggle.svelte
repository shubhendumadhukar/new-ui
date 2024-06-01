<script lang="ts">
  import { setMode, mode } from "mode-watcher";
  import { Button } from "$lib/components/ui/button/index.js";
  import * as DropdownMenu from "$lib/components/ui/dropdown-menu/index.js";
  import { navCollapsed } from "@/stores/navCollapsed";
  import { isDesktop } from "@/stores/isDesktop";
  import { Settings } from "lucide-svelte";
  import { CaretSort } from "svelte-radix";
  let labelText = "";
  $: labelText = $mode ? `${$mode.charAt(0).toUpperCase() + $mode.slice(1)} Theme` : "Select Theme";
  let isCollapsed = false;
  $: isCollapsed = $isDesktop ? $navCollapsed : false;
</script>

<DropdownMenu.Root>
  <DropdownMenu.Trigger asChild let:builder>
    <Button builders={[builder]} variant={$isDesktop ? "outline" : "ghost"} class="w-full" size={isCollapsed ? "icon" : "default"}>
      {#if isCollapsed}
        <Settings />
      {:else}
        <div class="flex justify-between w-full items-center">
          <span>{labelText}</span>
          <CaretSort />
        </div>
      {/if}
    </Button>
  </DropdownMenu.Trigger>
  <DropdownMenu.Content align="end">
    <DropdownMenu.Item on:click={() => setMode("light")}>Light Theme</DropdownMenu.Item>
    <DropdownMenu.Item on:click={() => setMode("dark")}>Dark Theme</DropdownMenu.Item>
  </DropdownMenu.Content>
</DropdownMenu.Root>
