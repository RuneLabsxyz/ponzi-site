import { preloadImages } from "./imageLoader.svelte";
import { preloadModels } from "./modelLoader.svelte";
import { preloadVideos } from "./videoLoader.svelte";

export async function loadAllAssets() {
  // Start all preloads in parallel
  await Promise.all([preloadImages(), preloadModels(), preloadVideos()]);

  return true;
}
