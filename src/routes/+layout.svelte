<script>
  let { children } = $props();
  import "../app.css";
  import LoadingScreen from "$lib/components/loading-screen.svelte";
  import { allAssetsLoaded } from "$lib/loaders/index.svelte";
</script>

<LoadingScreen />

{@render children()}
