<script lang="ts">
  import * as Sheet from "$lib/components/ui/sheet";
  import { Menu } from "lucide-svelte";
  import Nav from "./Nav.svelte";
  import ModeToggle from "./ModeToggle.svelte";
</script>

<Sheet.Root>
  <div class="block lg:hidden">
    <Sheet.Trigger>
      <Menu class="size-8" />
    </Sheet.Trigger>
  </div>

  <Sheet.Content class="px-0 overflow-auto" side="left">
    <div class="mt-2">
      <ModeToggle />
      <Nav />
    </div>
  </Sheet.Content>
</Sheet.Root>
