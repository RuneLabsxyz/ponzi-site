<script lang="ts">
  import { fly } from "svelte/transition";
</script>

<div
  class="min-h-screen flex justify-center items-center relative max-h-screen max-w-screen overflow-hidden"
  style="background-image: url('/images/bg.png'); background-size: cover; background-position: center;"
>
  <!-- Character images -->
  <div class="absolute w-screen h-screen left-0 top-0 hidden md:block">
      <img
          src="/images/ponziboys/image(2).png"
          alt="Character"
          class="absolute z-0 pointer-events-none w-[20%] aspect-square"
          style="left: 0; top: 0; transform: rotate(5deg);"
          in:fly={{ y: 100, x: 0, delay: 150, duration: 1000 }}
      />
      <img
          src="/images/ponziboys/image(3).png"
          alt="Character"
          class="absolute z-0 pointer-events-none w-[15%]"
          style="left: 0; bottom: 5%; transform: rotate(-5deg);"
          in:fly={{ y: 100, x: 0, delay: 300, duration: 1000 }}
      />
      <img
          src="/images/ponziboys/image(4).png"
          alt="Character"
          class="absolute z-0 pointer-events-none w-[18%]"
          style="left: 68%; top: -28%; transform: rotate(8deg);"
          in:fly={{ y: 100, x: 0, delay: 450, duration: 1000 }}
      />
      <img
          src="/images/ponziboys/image(5).png"
          alt="Character"
          class="absolute z-0 pointer-events-none w-[18%]"
          style="left: 8%; top: 38%; transform: rotate(-6deg);"
          in:fly={{ y: 100, x: 0, delay: 600, duration: 1000 }}
      />
      <img
          src="/images/ponziboys/image(6).png"
          alt="Character"
          class="absolute z-0 pointer-events-none w-[22%]"
          style="left: 55%; top: 48%; transform: rotate(4deg);"
          in:fly={{ y: 100, x: 0, delay: 750, duration: 1000 }}
      />
      <img
          src="/images/ponziboys/image(7).png"
          alt="Character"
          class="relative z-0 pointer-events-none w-[16%]"
          style="left: 72%; top: 35%; transform: rotate(-3deg);"
          in:fly={{ y: 100, x: 0, delay: 900, duration: 1000 }}
      />
  </div>
  <img
      src="/images/logo.png"
      alt="Ponziland Logo"
      class="absolute top-8 left-1/2 -translate-x-1/2 w-64 h-64 z-10"
  />
  <div
      class="border-2 border-t-gray-300 border-l-gray-300 border-b-gray-600 border-r-gray-600 bg-gray-200 fixed m-10"
  >
      <img
          src="/images/ponziboys/image(1).png"
          alt="Character"
          class="absolute z-20 pointer-events-none w-[25%]"
          style="left: -40px; bottom:-25px; transform: rotate(-8deg);"
          in:fly={{ y: 100, x: 0, delay: 0, duration: 1000 }}
      />
      <div class="bg-gray-800 p-2 flex items-center relative">
          <h1 class="text-white font-display text-xl ml-2">PONZILAND</h1>
          <div class="ml-auto flex space-x-1 mr-2">
              <div class="w-3 h-3 bg-green-400 border border-gray-100"></div>
              <div class="w-3 h-3 bg-yellow-400 border border-gray-100"></div>
              <div class="w-3 h-3 bg-red-500 border border-gray-100"></div>
          </div>
      </div>

      <div
          class="p-4 w-full max-w-[95vw] min-h-64 flex justify-center items-center gap-6 z-20 flex-wrap"
      >
          <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://x.com/ponzidotland"
              class="hover:scale-110 transition-transform"
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
              class="hover:scale-110 transition-transform"
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
                  ></polygon><rect
                      width="4"
                      height="5"
                      x="9"
                      y="14"
                      fill="#e6e5e5"
                  ></rect><rect
                      width="4"
                      height="5"
                      x="19"
                      y="14"
                      fill="#e6e5e5"
                  ></rect>
              </svg>
          </a>
          <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/RuneLabsxyz/PonziLand"
              class="hover:scale-110 transition-transform"
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
                  ></polygon><rect
                      width="2"
                      height="2"
                      x="8"
                      y="20"
                      fill="#e6e5e5"
                  ></rect>
              </svg>
          </a>
      </div>
  </div>
</div>
