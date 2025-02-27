<script lang="ts">
  import { onMount } from "svelte";
  import {
    allAssetsLoaded,
    totalProgress,
    imageProgress,
    modelProgress,
    videoProgress,
  } from "$lib/loaders/index.svelte";
  import { loadAllAssets } from "$lib/loaders/loadAssets.svelte";

  // Local variables to store store values
  let isLoaded = false;
  let isHidden = false;
  let total = 0;
  let imgProgress = 0;
  let mdlProgress = 0;
  let vidProgress = 0;

  // Subscribe to stores
  const unsubscribeLoaded = allAssetsLoaded.subscribe((value) => {
    isLoaded = value;
    if (value) {
      setTimeout(() => {
        isHidden = true;
      }, 1000);
    }
  });

  const unsubscribeTotal = totalProgress.subscribe((value) => {
    total = value;
  });

  const unsubscribeImg = imageProgress.subscribe((value) => {
    imgProgress = value;
  });

  const unsubscribeModel = modelProgress.subscribe((value) => {
    mdlProgress = value;
  });

  const unsubscribeVideo = videoProgress.subscribe((value) => {
    vidProgress = value;
  });

  onMount(() => {
    loadAllAssets();

    // Clean up subscriptions when component is unmounted
    return () => {
      unsubscribeLoaded();
      unsubscribeTotal();
      unsubscribeImg();
      unsubscribeModel();
      unsubscribeVideo();
    };
  });
</script>

<div
  class="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#0e0415] transition-opacity duration-1000"
  class:opacity-0={isLoaded}
  class:pointer-events-none={isLoaded}
  class:hidden={isHidden}
>
  <!-- Using enhanced img with loading=eager for the loading screen logo -->
  <img
    src="/images/logo.png"
    alt="Ponzi"
    class="animate-pulse"
    loading="eager"
    decoding="async"
  />

  <div class="h-0 flex flex-col items-center">
    <div class="w-64 mt-8 space-y-2">
      <!-- Overall progress -->
      <div class="w-full h-3 bg-gray-800 rounded-full overflow-hidden">
        <div
          class="h-full bg-[#ffcd4a] rounded-full transition-all"
          style="width: {total * 100}%"
        ></div>
      </div>

      <!-- Individual progress bars -->
      <div class="grid grid-cols-3 gap-2 text-xs text-white">
        <div>
          <p>Images</p>
          <div class="w-full h-1 bg-gray-800 rounded-full overflow-hidden">
            <div
              class="h-full bg-blue-500 rounded-full"
              style="width: {imgProgress * 100}%"
            ></div>
          </div>
        </div>

        <div>
          <p>3D Models</p>
          <div class="w-full h-1 bg-gray-800 rounded-full overflow-hidden">
            <div
              class="h-full bg-green-500 rounded-full"
              style="width: {mdlProgress * 100}%"
            ></div>
          </div>
        </div>

        <div>
          <p>Videos</p>
          <div class="w-full h-1 bg-gray-800 rounded-full overflow-hidden">
            <div
              class="h-full bg-red-500 rounded-full"
              style="width: {vidProgress * 100}%"
            ></div>
          </div>
        </div>
      </div>
    </div>

    <p class="mt-4 text-white">{Math.floor(total * 100)}%</p>
  </div>
</div>
