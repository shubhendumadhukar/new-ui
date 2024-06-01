<script lang="ts">
  // @ts-nocheck
  import * as Dialog from "$lib/components/ui/dialog";
  import { Badge } from "$lib/components/ui/badge";
  import { mailStore } from "@/stores/mailStore";
  import ChatDisplay from "./ChatDisplay.svelte";
  import { DateTime } from "luxon";
  export let mails;
</script>

<Dialog.Root>
  {#each mails as mail}
    <Dialog.Trigger class="flex flex-col items-start gap-2 rounded-lg border p-3 text-left text-sm transition-all hover:bg-accent {$mailStore.selected === mail.id ? 'bg-muted' : ''}" on:click={() => mailStore.setMail(mail.id)}>
      <div class="flex w-full flex-col gap-1">
        <div class="flex items-center">
          <div class="flex items-center gap-2">
            <div class="font-semibold">{mail.name}</div>
            {#if !mail.read}
              <span class="flex h-2 w-2 rounded-full bg-blue-600" />
            {/if}
          </div>
          <div class="ml-auto text-xs {$mailStore.selected === mail.id ? 'text-foreground' : 'text-muted-foreground'}">
            {DateTime.fromJSDate(new Date(mail.date)).toRelative()}
          </div>
        </div>
        <div class="text-xs font-medium">{mail.subject}</div>
      </div>
      <div class="line-clamp-2 text-xs text-muted-foreground">
        {mail.text.substring(0, 300)}
      </div>
      {#if mail.labels.length}
        <div class="flex items-center gap-2">
          {#each mail.labels as label}
            <Badge variant="secondary">
              {label}
            </Badge>
          {/each}
        </div>
      {/if}
    </Dialog.Trigger>
  {/each}
  <Dialog.Content>
    <Dialog.Header>
      <ChatDisplay mail={mails.find((item) => item.id === $mailStore.selected) || null} />
    </Dialog.Header>
  </Dialog.Content>
</Dialog.Root>
