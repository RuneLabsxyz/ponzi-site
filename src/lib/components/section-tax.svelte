<script lang="ts">
  import { gsap } from 'gsap';

  import { ScrollTrigger } from 'gsap/ScrollTrigger';
  import { onMount } from 'svelte';

  gsap.registerPlugin(ScrollTrigger);

  onMount(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '#claimImage',
        start: '-50% center',
        end: '150% center',
        scrub: 1
      }
    });

    tl.to('#claimImage', {
      scale: 1,
      duration: 5
    });
  });

  onMount(() => {});
</script>

<section
  class="relative m-auto flex h-screen w-screen max-w-md flex-col items-center justify-center gap-6 md:flex-row lg:max-w-5xl xl:max-w-6xl"
>
  <div id="claimImage" class="w-full md:p-24" style="transform: scale(0.9)">
    <video
      autoplay
      loop
      muted
      playsinline
      class="h-full w-full object-contain object-center"
      src="/videos/claim.mov"
    ></video>
  </div>
  <div class="flex w-full flex-col md:items-end md:text-right">
    <h2 class="font-display text-stroke text-3xl">RENT IS DUE !</h2>
    <p class="text-body tracking-wide">
      But wait, there's a twist! In PonziLand, you can tax your neighbors, and they can tax you
      right back! It's a strategic dance where you choose your tokens and shorts wisely to maximize
      your gains. This dynamic system keeps everyone on their toes, creating a balanced and
      competitive ecosystem where everyone has a shot at coming out on top.
    </p>
  </div>
</section>
