<script lang="ts">
  import * as Resizable from "$lib/components/ui/resizable";
  import { Separator } from "$lib/components/ui/separator";
  import Nav from "@/components/instrukti/Nav.svelte";
  import ModeToggle from "@/components/instrukti/ModeToggle.svelte";
  import { navCollapsed } from "@/stores/navCollapsed";
  import { pb } from "@/utils/pocketbase_utils";
  import { onMount } from "svelte";
  onMount(() => {
    if (!pb.authStore.isValid) window.location.href = "/login";
  });
</script>

<div class="block h-[100dvh]">
  <Resizable.PaneGroup class="h-full items-stretch" direction="horizontal">
    <Resizable.Pane class="no-scrollbar hidden lg:flex flex-col !overflow-auto" onCollapse={() => ($navCollapsed = true)} onExpand={() => ($navCollapsed = false)} collapsible minSize={15} maxSize={20} collapsedSize={4}>
      <div class="p-2">
        <ModeToggle />
      </div>
      <Separator />
      <Nav />
    </Resizable.Pane>
    <Resizable.Handle class="hidden lg:flex" withHandle />
    <slot />
  </Resizable.PaneGroup>
</div>
