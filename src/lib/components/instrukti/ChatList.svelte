<script lang="ts">
  import { Separator } from "$lib/components/ui/separator";
  import { Search } from "lucide-svelte";
  import { Input } from "$lib/components/ui/input";
  import { ScrollArea } from "$lib/components/ui/scroll-area";
  import { Button } from "$lib/components/ui/button";
  import Drawer from "./Drawer.svelte";
  import ChatCard from "./ChatCard.svelte";
  import { mails } from "@/stores/mailStore";
  import { mediaQuery } from "svelte-legos";
  import ChatCardMobile from "./ChatCardMobile.svelte";
  const isDesktop = mediaQuery("(min-width: 1024px)");
</script>

<div class="flex flex-col h-[100dvh]">
  <div>
    <div class="flex items-center justify-between p-2">
      <Drawer />
      <h1 class="px-4 py-2 text-xl font-bold">Chats</h1>
      <Button size="sm" class="!text-xs">Create Class</Button>
    </div>
    <Separator />
    <div class="bg-background/95 p-4 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <form>
        <div class="relative">
          <Search class="absolute left-2 top-3 h-4 w-4 text-muted-foreground" />
          <Input placeholder="Search" class="pl-8" />
        </div>
      </form>
    </div>
  </div>
  <Separator />
  <div class="flex-grow overflow-auto">
    <ScrollArea>
      <div class="flex flex-col gap-2 p-2">
        {#if $isDesktop}
          {#each mails as mail}
            <ChatCard {mail} />
          {/each}
        {:else}
          <ChatCardMobile {mails} />
        {/if}
      </div>
    </ScrollArea>
  </div>
</div>
