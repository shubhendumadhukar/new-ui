<script lang="ts">
  import * as Resizable from "$lib/components/ui/resizable";
</script>

<Resizable.Pane minSize={20} maxSize={30}>Feedslist</Resizable.Pane>
<Resizable.Handle class="hidden lg:flex" withHandle />
<Resizable.Pane class="hidden lg:block">FeedDisplay</Resizable.Pane>
