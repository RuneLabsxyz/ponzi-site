<script lang="ts">
  import { cn } from "$lib/utils";
  import { fade, slide } from "svelte/transition";

  interface RuleSection {
    id: string;
    title: string;
    summary: string;
    details: string;
    example?: string;
  }

  const rules: RuleSection[] = [
    {
      id: "buy-land",
      title: "1. Buy land and set a resale price",
      summary: "1. You buy land and set a resale price using any token.",
      details: `- Choose a plot on the Ponziland grid<br><br>- Select which token to price it in (STRK, PAPER, LORDS, etc.)<br><br>- Set your resale price - anyone can buy it at this price`,
      example: "Video tutorial coming soon...",
    },
    {
      id: "daily-tax",
      title: "2. Daily tax system",
      summary:
        "2. Each day, you pay a small tax (based on that price) to your eight neighbors.",
      details: `- Tax is calculated as a % of your land's price<br><br>- Tax is paid every 24 hours automatically<br><br>- The tax is split equally among your 8 neighbors`,
      example: "Video tutorial coming soon...",
    },
    {
      id: "token-pump",
      title: "3. Token performance arbitrage",
      summary:
        "3. If your neighbors' tokens pump more than yours, you earn — and vice versa.",
      details: `- You pay tax in YOUR token<br><br>- You receive tax in NEIGHBORS' tokens<br><br>- Profit if their tokens pump harder than yours`,
      example: "Video tutorial coming soon...",
    },
  ];

  let expandedSections = $state<Set<string>>(new Set());

  function toggleSection(id: string) {
    if (expandedSections.has(id)) {
      expandedSections.delete(id);
      expandedSections = new Set(expandedSections);
    } else {
      expandedSections.add(id);
      expandedSections = new Set(expandedSections);
    }
  }
</script>

<div class="min-h-screen bg-black text-white">
  <div class="container mx-auto px-4 py-16 max-w-4xl">
    <h1
      class="font-arcade text-5xl md:text-7xl text-center mb-4 text-yellow-300 tracking-wider"
    >
      GAME RULES
    </h1>

    <div class="text-center mb-12 space-y-2">
      <p class="text-xl md:text-2xl text-green-400 font-arcade">
        The basics are simple:
      </p>
      <p class="text-lg md:text-xl text-gray-300 italic">
        Click any rule for detailed explanation
      </p>
    </div>

    <div class="space-y-6">
      {#each rules as rule}
        <div
          class="border-2 border-green-500 bg-gray-900 overflow-hidden transition-all duration-300"
          class:border-yellow-400={expandedSections.has(rule.id)}
        >
          <button
            onclick={() => toggleSection(rule.id)}
            class="w-full text-left p-6 hover:bg-gray-800 transition-colors duration-200 group"
          >
            <div class="flex items-center justify-between">
              <h2
                class="text-xl md:text-2xl font-arcade text-green-400 group-hover:text-yellow-300 transition-colors"
              >
                {rule.summary}
              </h2>
              <span
                class={cn(
                  "text-3xl font-arcade transition-transform duration-300",
                  expandedSections.has(rule.id)
                    ? "rotate-180 text-yellow-400"
                    : "text-green-400",
                )}
              >
                ▼
              </span>
            </div>
          </button>

          {#if expandedSections.has(rule.id)}
            <div
              transition:slide={{ duration: 300 }}
              class="px-6 pb-6 space-y-4 border-t-2 border-green-500"
            >
              <p class="text-gray-300 leading-relaxed mt-4">
                {@html rule.details}
              </p>

              {#if rule.example}
                <div class="bg-black border border-yellow-400 p-4 mt-4">
                  <p class="text-yellow-400 font-arcade text-sm mb-2">
                    EXAMPLE:
                  </p>
                  <p class="text-gray-400 text-sm leading-relaxed">
                    {rule.example}
                  </p>
                </div>
              {/if}
            </div>
          {/if}
        </div>
      {/each}
    </div>

    <div class="mt-16 text-center space-y-4">
      <h2 class="text-3xl font-arcade text-yellow-300">READY TO PLAY?</h2>
      <p class="text-xl text-gray-300">
        Master the arbitrage. Dominate your neighbors.
      </p>
      <a
        href="https://play.ponzi.land"
        class="inline-block mt-6 px-8 py-4 bg-green-500 hover:bg-green-400 text-black font-arcade text-xl transition-all duration-200 transform hover:scale-105 border-4 border-green-700"
      >
        PLAY NOW →
      </a>
    </div>

    <div class="mt-12 text-center">
      <a
        href="/"
        class="text-gray-500 hover:text-gray-300 font-arcade transition-colors"
      >
        ← BACK TO HOME
      </a>
    </div>
  </div>
</div>

<style>
  :global(html) {
    background-color: black;
  }
</style>

