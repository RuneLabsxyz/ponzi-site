<script lang="ts">
  import { gsap } from "gsap";

  import { ScrollTrigger } from "gsap/ScrollTrigger";
  import { onMount } from "svelte";

  gsap.registerPlugin(ScrollTrigger);

  onMount(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#claimImage",
        start: "-50% center",
        end: "150% center",
        scrub: 1,
      },
    });

    tl.to("#claimImage", {
      scale: 1,
      duration: 5,
    });
  });

  onMount(() => {});
</script>

<section class="z-20 relative min-h-screen min-w-screen">
  <div
    class="m-auto flex flex-col items-center justify-center gap-6 md:flex-row-reverse lg:max-w-4xl xl:max-w-6xl p-4"
  >
    <div
      id="claimImage"
      class="w-full "
      style="transform: scale(0.9)"
    >
      <video
        autoplay
        loop
        muted
        playsinline
        class="h-full w-full object-contain object-center"
        src="/videos/claim.mov"
      ></video>
    </div>
    <div class="flex w-full flex-col gap-2 md:gap-4 md:items-end md:text-right">
      <h2 class="font-display text-stroke text-3xl">RENT IS DUE !</h2>
      <p class="text-body tracking-wide">
        But wait, there's a twist! In PonziLand, you can tax your neighbors, and
        they can tax you right back! It's a strategic dance where you choose
        your tokens and shorts wisely to maximize your gains. This dynamic
        system keeps everyone on their toes, creating a balanced and competitive
        ecosystem where everyone has a shot at coming out on top.
      </p>
    </div>
  </div>
</section>
