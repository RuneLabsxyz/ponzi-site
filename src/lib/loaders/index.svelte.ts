import { derived, writable } from 'svelte/store';

// Individual stores for each asset type
export const imagesLoaded = writable(false);
export const modelsLoaded = writable(false);
export const videosLoaded = writable(false);

// Progress trackers for each type
export const imageProgress = writable(0);
export const modelProgress = writable(0);
export const videoProgress = writable(0);

// Combined loaded state
export const allAssetsLoaded = derived(
  [imagesLoaded, modelsLoaded, videosLoaded],
  ([$imagesLoaded, $modelsLoaded, $videosLoaded]) => 
    $imagesLoaded && $modelsLoaded && $videosLoaded
);

// Combined progress (weighted)
export const totalProgress = derived(
  [imageProgress, modelProgress, videoProgress],
  ([$imageProgress, $modelProgress, $videoProgress]) => 
    ($imageProgress + $modelProgress + $videoProgress) / 3
);

// Store loaded assets for reuse
export const assetMap = writable<Record<string, any>>({});

// Function to get a loaded asset
export function getAsset(key: string) {
  let result: any;
  assetMap.subscribe(map => {
    result = map[key];
  })();
  return result;
}

// Helper to set an asset in the map
export function setAsset(key: string, value: any) {
  assetMap.update(map => {
    map[key] = value;
    return map;
  });
}