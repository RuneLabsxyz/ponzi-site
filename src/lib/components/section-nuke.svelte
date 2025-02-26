<script lang="ts">
  import { gsap } from "gsap";

  import { ScrollTrigger } from "gsap/ScrollTrigger";
  import { onMount } from "svelte";

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
  });

  let paused = $state(true)
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

<section
  class="relative m-auto flex h-screen w-screen max-w-md flex-col items-center justify-center gap-6 md:flex-row lg:max-w-5xl xl:max-w-6xl"
>
  <div
    id="nukeFullArt"
    class="relative w-full md:p-24 transform scale-90"
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
      class="w-full h-full object-contain object-center"
    />
    <video
      muted
      loop
      class="absolute inset-0 w-full h-full object-cover transition-opacity duration-300 {paused ? 'opacity-0' : 'opacity-100'}"
      src="/videos/nuke-animation.mp4"
      bind:paused={paused}
    >
    </video>
  </div>
  <div class="flex w-full flex-col">
    <h2 class="font-display text-stroke text-4xl">NUKE 'EM !</h2>
    <p class="text-body tracking-wide">
      What happens if they don't pay, you ask? In PonziLand, if your neighbors
      don't pay up, it's time to hit the big red button and watch the sparks
      fly! It's a high-stakes game where every move counts, and sometimes, a
      little chaos is just what you need to shake things up. So, are you ready
      to nuke 'em and take control? The power is in your hands! 💥🚀
    </p>
  </div>
</section>
