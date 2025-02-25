<script lang="ts">

import { onMount } from 'svelte';
import { gsap } from 'gsap';

onMount(() => {
  gsap.to("#downarrows", {
    opacity: 0,
    scrollTrigger: {
      trigger: "#downarrows",
      start: "top center",
      end: "bottom center",
      scrub: 1
    }
  });
});

</script>

<section class="relative flex h-screen w-full items-center justify-center">
  <img src="/images/logo-text.png" alt="ponziland logo text" />
</section>

<div class="fixed bottom-20 left-1/2 -translate-x-1/2 flex flex-col items-center z-10">
  <div class="relative opacity-50" id="downarrows">
    <svg
      class="h-6 w-6 text-yellow-500"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"
      ></path>
    </svg>
    <svg
      class="h-6 w-6 text-yellow-500 absolute top-2"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"
      ></path>
    </svg>
  </div>
</div>
