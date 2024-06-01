<script lang="ts">
  import * as Resizable from "$lib/components/ui/resizable";
  import { Separator } from "$lib/components/ui/separator";
  import AccountPicker from "@/components/instrukti/AccountPicker.svelte";
  import ChatDisplay from "@/components/instrukti/ChatDisplay.svelte";
  import ChatList from "@/components/instrukti/ChatList.svelte";
  import Nav from "@/components/instrukti/Nav.svelte";
  import { mailStore, mails } from "@/stores/mailStore";
  let isCollapsed = false;
</script>

<div class="block h-[100dvh]">
  <Resizable.PaneGroup class="h-full items-stretch" direction="horizontal">
    <Resizable.Pane class="hidden lg:block" onCollapse={() => (isCollapsed = true)} onExpand={() => (isCollapsed = false)} collapsible minSize={15} maxSize={20} collapsedSize={4} defaultSize={265}>
      <div class="flex items-center justify-center {isCollapsed ? 'h-[52px]' : 'px-2'}">
        <AccountPicker bind:isCollapsed />
      </div>
      <Separator />
      <Nav bind:isCollapsed />
    </Resizable.Pane>
    <Resizable.Handle class="hidden lg:flex" withHandle />
    <Resizable.Pane minSize={20} maxSize={30} defaultSize={440}>
      <ChatList />
    </Resizable.Pane>
    <Resizable.Handle class="hidden lg:flex" withHandle />
    <Resizable.Pane class="hidden lg:block" defaultSize={655}>
      <ChatDisplay mail={mails.find((item) => item.id === $mailStore.selected) || null} />
    </Resizable.Pane>
  </Resizable.PaneGroup>
</div>
