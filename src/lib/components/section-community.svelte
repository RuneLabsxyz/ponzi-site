<script lang="ts">
  import { gsap } from "gsap";

  import { tokens } from "$lib/utils";
  import { ScrollTrigger } from "gsap/ScrollTrigger";
  import { onMount } from "svelte";
  import LandDisplay from "./land/land-display.svelte";
  import RandomLand from "./land/randomLand.svelte";

  gsap.registerPlugin(ScrollTrigger);

  onMount(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#communityImage",
        start: "-50% center",
        end: "150% center",
        scrub: 1,
      },
    });

    tl.to("#communityImage", {
      scale: 1,
      duration: 5,
    });
  });
</script>

<section class="z-20 relative min-h-screen min-w-screen">
  <div
    class="m-auto flex flex-col items-center justify-center gap-6 md:flex-row lg:max-w-4xl xl:max-w-6xl p-4"
  >
    <!-- <div id="communityImage" class="w-full md:p-24" style="transform: scale(0.9)">
    <img
      src="/images/fullart-nuke-incoming.png"
      alt="Nuke Incoming !?!"
      class="h-full w-full object-contain object-center"
    />
  </div> -->
    <div
      class="flex flex-wrap justify-between w-full"
      id="communityImage"
      style="transform: scale(0.9)"
    >
      {#each Array(15) as _}
        <RandomLand />
      {/each}
    </div>
    <div class="flex w-full flex-col gap-2 md:gap-4">
      <h2 class="font-display text-stroke text-4xl">TOGETHER STRONG !</h2>
      <p class="text-body tracking-wide">
        In Ponzi Land, we support a vibrant array of tokens and thriving
        multicommunities. Each token is a piece of beautiful art, representing
        the diverse and dynamic ecosystem we've built together. We even have
        custom houses, but you're always welcome to bring your own token! From
        $PAPER to $LORDS, every token tells a story and brings us closer. So,
        let's stand united, and watch our communities flourish!
      </p>
    </div>
  </div>
</section>
