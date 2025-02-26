<script lang="ts">
  import { onMount } from "svelte";
  import { gsap } from "gsap";

  onMount(() => {
    gsap.to("#downarrows", {
      opacity: 0,
      display: "none",
      scrollTrigger: {
        trigger: "#downarrows",
        start: "top center",
        end: "bottom center",
        scrub: 1,
      },
    });
  });
</script>

<section class="relative flex h-screen w-full items-center justify-center">
  <img src="/images/logo-text.png" alt="ponziland logo text" />
</section>

<div
  id="downarrows"
  class="fixed bottom-20 left-1/2 -translate-x-1/2 flex flex-col items-center z-10 gap-2"
>
  <div
    class="w-full flex justify-center items-center gap-6 z-10 flex-wrap scale-50"
  >
    <a
      target="_blank"
      rel="noopener noreferrer"
      href="https://x.com/ponzidotland"
      class="hover:scale-110 opacity-50 hover:opacity-100 transition-all"
      aria-label="Twitter"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        width="100"
        height="100"
        viewBox="0 0 32 32"
      >
        <path
          fill="#1DA1F2"
          d="M 20 5 L 20 7 L 26 7 L 26 5 L 20 5 z M 26 7 L 26 9 L 30 9 L 30 7 L 26 7 z M 20 7 L 18 7 L 18 9 L 20 9 L 20 7 z M 18 9 L 16 9 L 16 11 L 18 11 L 18 9 z M 16 11 L 9 11 L 9 13 L 16 13 L 16 11 z M 0 10 L 0 14 L 2 14 L 2 18 L 5 18 L 5 22 L 10 22 L 10 20 L 7 20 L 7 18 L 9 18 L 9 16 L 4 16 L 4 14 L 6 14 L 6 12 L 2 12 L 2 10 L 0 10 z M 10 22 L 10 24 L 12 24 L 12 22 L 10 22 z M 10 24 L 5 24 L 5 26 L 10 26 L 10 24 z M 10 26 L 10 28 L 18 28 L 18 26 L 10 26 z M 18 26 L 22 26 L 22 24 L 18 24 L 18 26 z M 22 24 L 24 24 L 24 19 L 22 19 L 22 24 z M 24 19 L 26 19 L 26 15 L 24 15 L 24 19 z M 26 15 L 28 15 L 28 11 L 26 11 L 26 15 z"
        ></path>
      </svg>
    </a>
    <a
      target="_blank"
      rel="noopener noreferrer"
      href="https://discord.gg/ponziland"
      class="hover:scale-110 opacity-50 hover:opacity-100 transition-all"
      aria-label="Discord"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        width="100"
        height="100"
        viewBox="0 0 32 32"
      >
        <polygon
          fill="#085295"
          points="28,15 28,10 26,10 26,7 23,7 23,5 19,5 19,7 13,7 13,5 9,5 9,7 6,7 6,10 4,10 4,15 2,15 2,23 4,23 4,25 7,25 7,27 10,27 10,25 12,25 12,23 20,23 20,25 22,25 22,27 25,27 25,25 28,25 28,23 30,23 30,15"
        ></polygon><rect width="4" height="5" x="9" y="14" fill="#e6e5e5"
        ></rect><rect width="4" height="5" x="19" y="14" fill="#e6e5e5"></rect>
      </svg>
    </a>
    <a
      target="_blank"
      rel="noopener noreferrer"
      href="https://github.com/RuneLabsxyz/PonziLand"
      class="hover:scale-110 opacity-50 hover:opacity-100 transition-all"
      aria-label="GitHub"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        width="100"
        height="100"
        viewBox="0 0 32 32"
      >
        <polygon
          fill="#000000"
          points="4,22 4,10 6,10 6,8 8,8 8,6 10,6 10,4 22,4 22,6 24,6 24,8 26,8 26,10 28,10 28,22 26,22 26,24 24,24 24,26 22,26 22,28 10,28 10,26 8,26 8,24 6,24 6,22"
        ></polygon><polygon
          fill="#e6e5e5"
          points="23,12 21,12 21,8 19,8 19,10 13,10 13,8 11,8 11,12 9,12 9,18 11,18 11,20 13,20 13,22 10,22 10,24 13,24 13,28 19,28 19,20 21,20 21,18 23,18"
        ></polygon><rect width="2" height="2" x="8" y="20" fill="#e6e5e5"
        ></rect>
      </svg>
    </a>
  </div>
  <a
    class="px-4 py-2 font-bold bg-blue-500 opacity-50 hover:opacity-100 transition-all"
    href="https://play.ponzi.land">Play game</a
  >
  <div class="relative opacity-50">
    <svg
      class="h-6 w-6 text-yellow-500"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M19 9l-7 7-7-7"
      ></path>
    </svg>
    <svg
      class="h-6 w-6 text-yellow-500 absolute top-2"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M19 9l-7 7-7-7"
      ></path>
    </svg>
  </div>
</div>
