<script lang="ts">
  import * as Resizable from "$lib/components/ui/resizable";
  import ChatDisplay from "@/components/instrukti/chats/ChatDisplay.svelte";
  import ChatList from "@/components/instrukti/chats/ChatList.svelte";
  import { mailStore, mails } from "@/stores/mailStore";
</script>

<Resizable.Pane minSize={20} maxSize={30}>
  <ChatList />
</Resizable.Pane>
<Resizable.Handle class="hidden lg:flex" withHandle />
<Resizable.Pane class="hidden lg:block">
  <ChatDisplay mail={mails.find((item) => item.id === $mailStore.selected)} />
</Resizable.Pane>
