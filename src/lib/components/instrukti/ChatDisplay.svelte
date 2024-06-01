<script lang="ts">
  // @ts-nocheck
  import * as Avatar from "$lib/components/ui/avatar";
  import { Separator } from "$lib/components/ui/separator";
  import { Button } from "$lib/components/ui/button/index.js";
  import { Textarea } from "$lib/components/ui/textarea";
  import { DateTime } from "luxon";
  import { mediaQuery } from "svelte-legos";
  const isDesktop = mediaQuery("(min-width: 1024px)");
  export let mail;
</script>

<div class="flex h-[100dvh] flex-col">
  {#if mail}
    <div class="flex h-full flex-1 flex-col overflow-hidden">
      <div class="flex flex-col lg:flex-row items-start p-4">
        <div class="flex items-start gap-4 text-sm">
          <Avatar.Root>
            <Avatar.Image alt={mail.name} />
            <Avatar.Fallback>
              {mail.name
                .split(" ")
                .map((chunk) => chunk[0])
                .join("")}
            </Avatar.Fallback>
          </Avatar.Root>
          <div class="grid gap-1 text-left">
            <div class="font-semibold">{mail.name}</div>
            <div class="line-clamp-1 text-xs">{mail.subject}</div>
            <div class="line-clamp-1 text-xs">
              <span class="font-medium">Reply-To:</span>
              {mail.email}
            </div>
          </div>
        </div>
        {#if mail.date}
          <div class="{$isDesktop ? 'ml-auto' : 'text-left mt-2'} text-xs text-muted-foreground">
            {DateTime.fromJSDate(new Date(mail.date)).toLocaleString(DateTime.DATETIME_FULL)}
          </div>
        {/if}
      </div>
      <Separator />
      <div class="flex-1 overflow-y-auto whitespace-pre-wrap p-4 text-sm text-left">
        {mail.text}
      </div>
      <Separator class="mt-auto" />
      <div class="p-4">
        <form>
          <div class="grid gap-4">
            <Textarea class="p-4" placeholder={`Reply ${mail.name}...`} />
            <div class="flex items-center">
              <Button size="sm" class="ml-auto">Send</Button>
            </div>
          </div>
        </form>
      </div>
    </div>
  {:else}
    <div class="p-8 text-center text-muted-foreground">No message selected</div>
  {/if}
</div>
