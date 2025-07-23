<script lang="ts">
  let { children } = $props();
  import "../app.css";
  import LoadingScreen from "$lib/components/loading-screen.svelte";
  import { allAssetsLoaded } from "$lib/loaders/index.svelte";
  import { page } from '$app/stores';
  import { cn } from '$lib/utils';
</script>

<LoadingScreen />

<nav class="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-sm border-b-2 border-green-500">
  <div class="container mx-auto px-4">
    <div class="flex items-center justify-between h-16">
      <div class="flex items-center gap-8">
        <a 
          href="/" 
          class={cn(
            "font-arcade text-sm hover:text-yellow-300 transition-colors",
            $page.url.pathname === '/' ? 'text-yellow-300' : 'text-green-400'
          )}
        >
          HOME
        </a>
        <a 
          href="/rules" 
          class={cn(
            "font-arcade text-sm hover:text-yellow-300 transition-colors",
            $page.url.pathname === '/rules' ? 'text-yellow-300' : 'text-green-400'
          )}
        >
          RULES
        </a>
        <a 
          href="https://play.ponzi.land" 
          class="font-arcade text-sm bg-blue-500 px-4 py-2 text-black hover:bg-blue-400 transition-colors"
          target="_blank"
          rel="noopener noreferrer"
        >
          PLAY GAME
        </a>
      </div>
    </div>
  </div>
</nav>

{@render children()}
