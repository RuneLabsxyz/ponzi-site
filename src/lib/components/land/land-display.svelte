<script lang="ts">
  import type { Token } from '$lib/interfaces';
  import { cn } from '$lib/utils';
  import 'seedrandom';
  import seedrandom from 'seedrandom';
  import SpriteSheet from '../sprite-sheet.svelte';

  let {
    class: className = '',
    token,
    biome = true,
    grass = false,
    basic = false,
    auction = false,
    road = false,
    seed = '',
    level = 1,
  }: {
    class?: string;
    token?: Token;
    biome?: boolean;
    grass?: boolean;
    basic?: boolean;
    auction?: boolean;
    road?: boolean;
    seed?: string;
    level?: 1 | 2 | 3;
  } = $props();

  let rng = seedrandom(seed);

  let grassNumber = Math.floor(rng() * 7);

  let grassX = grassNumber % 4;
  let grassY = Math.floor(grassNumber / 3);

  let width = $state();
  let height = $state();
</script>

<div
  class={cn('relative h-full w-full', className)}
  bind:clientHeight={height}
  bind:clientWidth={width}
>
  {#if road}
    <SpriteSheet
      src="/sheets/road.png"
      y={0}
      x={0}
      xSize={320}
      ySize={320}
      xMax={320}
      yMax={320}
      {width}
      {height}
      class="absolute top-0 right-0 bottom-0 left-0 h-full w-full"
    />
  {/if}
  {#if grass}
    <SpriteSheet
      src="/sheets/empty.png"
      y={grassY}
      x={grassX}
      xSize={256}
      xMax={1024}
      ySize={256}
      yMax={768}
      {width}
      {height}
      class="absolute top-0 right-0 bottom-0 left-0 h-full w-full"
    />
  {/if}
  {#if auction}
    <SpriteSheet
      src="/sheets/empty.png"
      x={3}
      y={2}
      xSize={256}
      xMax={1024}
      ySize={256}
      yMax={768}
      {width}
      {height}
      class="absolute top-0 right-0 bottom-0 left-0 h-full w-full"
    />
  {/if}
  {#if token}
    {#if biome}
      <SpriteSheet
        src="/sheets/biomes.png"
        x={token.images.biome.x}
        y={token.images.biome.y}
        xSize={256}
        xMax={2048}
        ySize={256}
        yMax={3072}
        {width}
        {height}
        class="absolute top-0 right-0 bottom-0 left-0 h-full w-full"
      />
    {/if}
    <SpriteSheet
      src="/sheets/buildings.png"
      x={token.images.building[level].x}
      y={token.images.building[level].y}
      xSize={256}
      xMax={1536}
      ySize={256}
      yMax={4608}
      {width}
      {height}
      class="absolute top-0 right-0 bottom-0 left-0 h-full w-full"
    />
  {:else if basic}
    <div
      style="background-image: url('/assets/tokens/basic/castles/basic.png'); background-size: contain; background-position: center;"
      class="absolute top-0 right-0 bottom-0 left-0 h-full w-full"
    ></div>
  {/if}
</div>
