<script lang="ts">
  import { Separator } from "$lib/components/ui/separator";
  import * as Tabs from "$lib/components/ui/tabs";
  import MessageList from "./MessageList.svelte";
  export let mail: any;
</script>

{#if mail}
  <Tabs.Root value="chat" class="flex h-[100dvh] flex-col">
    <div class="flex items-center px-4 py-2">
      <Tabs.List>
        <Tabs.Trigger value="chat" class="text-zinc-600 dark:text-zinc-200">Chat</Tabs.Trigger>
        <Tabs.Trigger value="lessons" class="text-zinc-600 dark:text-zinc-200">Lessons</Tabs.Trigger>
        <Tabs.Trigger value="files" class="text-zinc-600 dark:text-zinc-200">Files</Tabs.Trigger>
        <Tabs.Trigger value="reviews" class="text-zinc-600 dark:text-zinc-200">Reviews</Tabs.Trigger>
      </Tabs.List>
    </div>
    <Separator />
    <Tabs.Content value="chat" class="m-0 h-full overflow-auto">
      <MessageList bind:mail />
    </Tabs.Content>
    <Tabs.Content value="lessons" class="m-0">Lessons</Tabs.Content>
    <Tabs.Content value="files" class="m-0">Files</Tabs.Content>
    <Tabs.Content value="reviews" class="m-0">Reviews</Tabs.Content>
  </Tabs.Root>
{:else}
  <div class="h-full grid place-items-center text-muted-foreground">No message selected</div>
{/if}
