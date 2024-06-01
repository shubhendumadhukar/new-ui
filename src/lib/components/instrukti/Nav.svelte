<script lang="ts">
  import { page } from "$app/stores";
  import { Button } from "$lib/components/ui/button";
  import { Separator } from "$lib/components/ui/separator";
  import * as Tooltip from "$lib/components/ui/tooltip";
  import { isDesktop } from "@/stores/isDesktop";
  import { navCollapsed } from "@/stores/navCollapsed";
  import { logout } from "@/utils/pocketbase_utils";
  import { BookUser, Briefcase, CalendarRange, HeartHandshake, Inbox, LogOut, NotebookPen, Rss, UserRound } from "lucide-svelte";
  let isCollapsed = false;
  $: isCollapsed = $isDesktop ? $navCollapsed : false;
  const routes = [
    {
      title: "Chats",
      label: 121,
      path: "/",
      icon: Inbox,
    },
    // {
    //   title: "Jobs",
    //   label: null,
    //   path: "/jobs",
    //   icon: Briefcase,
    // },
    // {
    //   title: "Feed",
    //   label: null,
    //   path: "/feed",
    //   icon: Rss,
    // },
    // {
    //   title: "Todo",
    //   label: 6,
    //   path: "/todos",
    //   icon: NotebookPen,
    // },
    // {
    //   title: "Contacts",
    //   label: 20,
    //   path: "/contacts",
    //   icon: BookUser,
    // },
    // {
    //   title: "Calendar",
    //   label: 3,
    //   path: "/calendar",
    //   icon: CalendarRange,
    // },
  ];
</script>

<div class="m-2 flex flex-col {isCollapsed ? 'items-center' : ''}">
  {#if isCollapsed}
    {#each routes as route}
      <Tooltip.Root openDelay={0}>
        <Tooltip.Trigger asChild let:builder>
          <Button href={route.path} builders={[builder]} variant={$page.url.pathname == route.path ? "default" : "ghost"} size="icon" class="size-9 {$page.url.pathname == route.path ? 'dark:bg-muted dark:text-muted-foreground dark:hover:bg-muted dark:hover:text-white' : ''}">
            <svelte:component this={route.icon} class="size-4" aria-hidden="true" />
            <span class="sr-only">{route.title}</span>
          </Button>
        </Tooltip.Trigger>
        <Tooltip.Content side="right" class="flex items-center gap-4">{route.title}</Tooltip.Content>
      </Tooltip.Root>
    {/each}
  {:else}
    {#each routes as route}
      <Button href={route.path} variant={$page.url.pathname == route.path ? "default" : "ghost"} size="sm" class="justify-start {$page.url.pathname == route.path ? 'dark:bg-muted dark:text-white dark:hover:bg-muted dark:hover:text-white' : ''}">
        <svelte:component this={route.icon} class="mr-2 size-4" aria-hidden="true" />
        {route.title}
        {#if route.label}
          <span class="ml-auto {$page.url.pathname == route.path ? 'text-background dark:text-white' : ''}">{route.label}</span>
        {/if}
      </Button>
    {/each}
  {/if}
  <Separator class="mb-2" />
  {#if isCollapsed}
    <Tooltip.Root openDelay={0}>
      <Tooltip.Trigger asChild let:builder>
        <Button href="https://tawk.to/instruktisupport" target="_blank" builders={[builder]} variant="default" size="icon" class="!bg-rose-200 size-9">
          <svelte:component this={HeartHandshake} class="size-4 text-black" aria-hidden="true" />
          <span class="sr-only">Customer Support</span>
        </Button>
      </Tooltip.Trigger>
      <Tooltip.Content side="right" class="flex items-center gap-4">Customer Support</Tooltip.Content>
    </Tooltip.Root>
    <Tooltip.Root openDelay={0}>
      <Tooltip.Trigger asChild let:builder>
        <Button href="/profile" builders={[builder]} variant={$page.url.pathname == "/profile" ? "default" : "ghost"} size="icon" class="size-9 {$page.url.pathname == '/profile' ? 'dark:bg-muted dark:text-muted-foreground dark:hover:bg-muted dark:hover:text-white' : ''}">
          <svelte:component this={UserRound} class="size-4" aria-hidden="true" />
          <span class="sr-only">Profile</span>
        </Button>
      </Tooltip.Trigger>
      <Tooltip.Content side="right" class="flex items-center gap-4">Profile</Tooltip.Content>
    </Tooltip.Root>
    <Tooltip.Root openDelay={0}>
      <Tooltip.Trigger asChild let:builder>
        <Button
          href="#"
          builders={[builder]}
          variant="ghost"
          size="icon"
          class="size-9"
          on:click={(e) => {
            e.preventDefault();
            logout();
          }}
        >
          <svelte:component this={LogOut} class="size-4" aria-hidden="true" />
          <span class="sr-only">Logout</span>
        </Button>
      </Tooltip.Trigger>
      <Tooltip.Content side="right" class="flex items-center gap-4">Logout</Tooltip.Content>
    </Tooltip.Root>
  {:else}
    <Button href="https://tawk.to/instruktisupport" target="_blank" variant="default" size="sm" class="!bg-rose-200 text-black justify-start">
      <svelte:component this={HeartHandshake} class="mr-2 size-4" aria-hidden="true" />
      Customer Support
    </Button>
    <Button href="/profile" variant={$page.url.pathname == "/profile" ? "default" : "ghost"} size="sm" class="justify-start {$page.url.pathname == '/profile' ? 'dark:bg-muted dark:text-white dark:hover:bg-muted dark:hover:text-white' : ''}">
      <svelte:component this={UserRound} class="mr-2 size-4" aria-hidden="true" />
      Profile
    </Button>
    <Button
      href="#"
      variant="ghost"
      size="sm"
      class="justify-start"
      on:click={(e) => {
        e.preventDefault();
        logout();
      }}
    >
      <svelte:component this={LogOut} class="mr-2 size-4" aria-hidden="true" />
      Logout
    </Button>
  {/if}
</div>
