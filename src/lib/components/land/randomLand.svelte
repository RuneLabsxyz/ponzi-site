<script lang="ts">
  import { onMount } from "svelte";
  import LandDisplay from "./land-display.svelte";
  import { tokens } from "$lib/utils.js";

  const levels: Array<1 | 2 | 3> = [1, 2, 3];

  // Initialize the selected token and level with random values
  let selectedToken = $state(selectRandomToken());
  let selectedLevel = $state(selectRandomLevel());

  // Function to randomly select a token and level
  function selectRandomToken() {
    return tokens[
      Object.keys(tokens)[
        Math.floor(Math.random() * Object.keys(tokens).length)
      ]
    ];
  }

  function selectRandomLevel() {
    return levels[Math.floor(Math.random() * levels.length)];
  }

  // Set up an interval to update the selection every 2 seconds
  onMount(() => {
    // Set random timeout before the first update
    const timeoutId = setTimeout(() => {
      selectedToken = selectRandomToken();
      selectedLevel = selectRandomLevel();

      // Start the interval after the initial timeout
      const intervalId = setInterval(() => {
        selectedToken = selectRandomToken();
        selectedLevel = selectRandomLevel();
      }, 4000);

      // Clean up the interval on component destroy
      return () => {
        clearTimeout(timeoutId);
        clearInterval(intervalId);
      };
    }, Math.random() * 10000);
  });
</script>

<LandDisplay
  class="h-28 w-28"
  token={selectedToken}
  biome={false}
  level={selectedLevel}
/>
