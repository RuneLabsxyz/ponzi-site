<script lang="ts">
  import { gsap } from 'gsap';

  import { ScrollTrigger } from 'gsap/ScrollTrigger';
  import { onMount } from 'svelte';

  gsap.registerPlugin(ScrollTrigger);

  onMount(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '#nukeFullArt',
        start: '-50% center',
        end: '150% center',
        scrub: 1
      }
    });

    tl.to('#nukeFullArt', {
      scale: 1,
      duration: 5
    });
  });
</script>

<section
  class="relative m-auto flex h-screen w-screen max-w-md flex-col items-center justify-center gap-6 md:flex-row lg:max-w-5xl xl:max-w-6xl"
>
  <div id="nukeFullArt" class="w-full md:p-24" style="transform: scale(0.9)">
    <img
      src="/images/fullart-nuke-incoming.png"
      alt="Nuke Incoming !?!"
      class="h-full w-full object-contain object-center"
    />
  </div>
  <div class="flex w-full flex-col ">
    <h2 class="font-display text-stroke text-4xl">NUKE 'EM !</h2>
    <p class="text-body tracking-wide">
      What happens if they don't pay, you ask? In Ponzi's world, if your neighbors don't pay up,
      it's time to hit the big red button and watch the sparks fly! It's a high-stakes game where
      every move counts, and sometimes, a little chaos is just what you need to shake things up. So,
      are you ready to nuke 'em and take control? The power is in your hands! 💥🚀
    </p>
  </div>
</section>
