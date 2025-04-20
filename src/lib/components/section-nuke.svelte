<script lang="ts">
  import { gsap } from "gsap";
  import { ScrollTrigger } from "gsap/ScrollTrigger";
  import { onMount } from "svelte";
  import { getAsset } from "$lib/loaders/index.svelte";

  gsap.registerPlugin(ScrollTrigger);

  onMount(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#nukeFullArt",
        start: "-50% center",
        end: "150% center",
        scrub: 1,
      },
    });

    tl.to("#nukeFullArt", {
      scale: 1,
      duration: 5,
    });

    // Initialize with preloaded video if available
    const preloadedVideo = getAsset("nukeAnimation");
    if (preloadedVideo && videoElement) {
      // Clone the preloaded video to use its buffer
      videoElement.src = preloadedVideo.src;
    }
  });

  let paused = $state(true);
  let videoElement: HTMLVideoElement | undefined = undefined;

  function handleMouseOver() {
    paused = false;
    if (videoElement) {
      videoElement.play();
    }
  }

  function handleMouseOut() {
    paused = true;
    if (videoElement) {
      videoElement.pause();
    }
  }
</script>

<section class="z-20 relative min-h-screen min-w-screen">
  <div
    class="m-auto flex flex-col items-center justify-center gap-6 md:flex-row lg:max-w-4xl xl:max-w-6xl p-4"
  >
    <div
      id="nukeFullArt"
      class="relative w-full transform scale-90"
      onmouseover={handleMouseOver}
      onmouseout={handleMouseOut}
      onfocus={handleMouseOver}
      onblur={handleMouseOut}
      role="img"
      aria-label="Nuke Incoming with video overlay on hover"
    >
      <img
        src="/images/fullart-nuke-incoming.png"
        alt="Nuke Incoming !!!"
        loading="lazy"
        decoding="async"
      />
      <video
        muted
        loop
        class="absolute top-0 left-0 h-full w-full object-contain transition-opacity duration-300 {paused
          ? 'opacity-0'
          : 'opacity-100'}"
        bind:this={videoElement}
        bind:paused
      >
      </video>
    </div>
    <div class="flex w-full flex-col gap-2 md:gap-4">
      <h2 class="font-display text-stroke text-4xl">NUKE 'EM !</h2>
      <p class="text-body tracking-wide">
        What happens if they don't pay, you ask? In PonziLand, if your neighbors
        don't pay up, it's time to hit the big red button and watch the sparks
        fly! It's a high-stakes game where every move counts, and sometimes, a
        little chaos is just what you need to shake things up. So, are you ready
        to nuke 'em and take control? The power is in your hands! 💥🚀
      </p>
    </div>
  </div>
</section>
