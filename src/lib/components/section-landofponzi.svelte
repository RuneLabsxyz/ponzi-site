<script lang="ts">
  import { gsap } from "gsap";

  import { ScrollTrigger } from "gsap/ScrollTrigger";
  import { onMount } from "svelte";

  gsap.registerPlugin(ScrollTrigger);

  onMount(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#welcomeFullArt",
        start: "-50% center",
        end: "150% center",
        scrub: 1,
      },
    });

    tl.to("#welcomeFullArt", {
      scale: 1,
      duration: 5,
    });
  });
</script>

<section
  class="z-20 relative min-h-screen min-w-screen"
>
  <div class="m-auto flex flex-col items-center justify-center gap-6 md:flex-row-reverse lg:max-w-4xl xl:max-w-6xl p-4">
    <div
      id="welcomeFullArt"
      class="w-full"
      style="transform: scale(0.9)"
    >
      <img
        src="/images/fullart-default.png"
        alt="megamap"
        class="h-full w-full object-contain object-center"
      />
    </div>
    <div class="flex w-full flex-col gap-2 md:gap-4 md:items-end md:text-right">
      <h2 class="font-display text-stroke text-3xl">
        DIVE IN A BRAND NEW WORLD !
      </h2>
      <p class="text-body tracking-wide">
        Welcome to the world of <b class="text-yellow-300">Ponzi</b> , where the
        crypto dreams are limitless, and the meme coins are abundant. Dive into
        the uncharted territories of
        <span
          class="bg-gradient-to-br from-orange-500 to-indigo-500 bg-clip-text font-bold text-transparent"
        >
          blockchain
        </span>
        , meet the enigmatic characters behind the schemes, and uncover the secrets
        of the next big
        <span class="font-bold text-red-500">rug pull</span> . Join us in this thrilling
        journey where fortunes are made and lost, and let your imagination run wild
        in the fair game of crypto adventures.
      </p>
    </div>
  </div>
</section>
