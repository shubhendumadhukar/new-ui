<script lang="ts">
  import Check from "svelte-radix/Check.svelte";
  import CaretSort from "svelte-radix/CaretSort.svelte";
  import { tick } from "svelte";
  import * as Command from "$lib/components/ui/command/index.js";
  import * as Popover from "$lib/components/ui/popover/index.js";
  import { Button } from "$lib/components/ui/button/index.js";
  import { Presentation, UsersRound } from "lucide-svelte";
  export let isCollapsed: boolean;
  const accounts = [
    {
      value: "teacher",
      label: "Teacher",
      icon: Presentation,
    },
    {
      value: "student",
      label: "Student",
      icon: UsersRound,
    },
  ];

  let open = false;
  let value = "teacher";

  $: selectedValue = accounts.find((f) => f.value === value)?.label ?? "Teacher";
  $: selectedIcon = accounts.find((f) => f.value === value)?.icon ?? Presentation;

  function closeAndFocusTrigger(triggerId: string) {
    open = false;
    tick().then(() => {
      document.getElementById(triggerId)?.focus();
    });
  }
</script>

<Popover.Root bind:open let:ids>
  <Popover.Trigger asChild let:builder>
    <Button size={isCollapsed ? "icon" : "default"} builders={[builder]} variant={isCollapsed ? "ghost" : "outline"} role="combobox" aria-expanded={open} class="w-full m-2 {isCollapsed ? '!flex justify-center' : 'justify-between'}">
      {#if isCollapsed}
        <svelte:component this={selectedIcon} class="size-6" />
      {:else}
        <div class="flex items-center gap-4">
          <svelte:component this={selectedIcon} class="size-4" />
          {selectedValue}
        </div>
        <CaretSort class="ml-2 h-4 w-4 shrink-0 opacity-50" />
      {/if}
    </Button>
  </Popover.Trigger>
  <Popover.Content class="w-[250px] p-0">
    <Command.Root>
      <Command.Group>
        {#each accounts as account}
          <Command.Item
            class="justify-between"
            value={account.value}
            onSelect={(currentValue) => {
              value = currentValue;
              closeAndFocusTrigger(ids.trigger);
            }}
          >
            <div class="flex items-center">
              <Check class="mr-2 h-4 w-4 {value !== account.value ? 'text-transparent' : ''}" />
              {account.label}
            </div>
            <svelte:component this={account.icon} class="h-4 w-4" />
          </Command.Item>
        {/each}
      </Command.Group>
    </Command.Root>
  </Popover.Content>
</Popover.Root>
