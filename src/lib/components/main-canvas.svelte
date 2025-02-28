<script lang="ts">
  import { Canvas } from "@threlte/core";
  import { Checkbox, Pane, Slider } from "svelte-tweakpane-ui";
  import { Mesh } from "three";
  import HeroScene from "./hero-scene.svelte";
  import PixelatedRender from "./pixelated-render.svelte";
  import { onMount } from "svelte";
  import { tweaks } from "$lib/tweak-store.svelte";

  const mesh = new Mesh();

  let dev = $state(false);

  onMount(() => {
    dev = window.location.hash == "#dev";
  });
</script>

{#if dev}
  <Pane position="draggable" title="outline effect">
    <Slider
      bind:value={tweaks.granularity}
      label="granularity"
      min={1}
      max={20}
      step={1}
    />
    <Slider
      bind:value={tweaks.rotateOffset}
      label="rotate offset"
      min={-Math.PI}
      max={Math.PI}
      step={0.01}
    />
    <Slider
      bind:value={tweaks.rotateFactor}
      label="rotate factor"
      min={0}
      max={10}
      step={0.05}
    />
    <Slider
      bind:value={tweaks.scaleOffset}
      label="scale offset"
      min={0}
      max={10}
      step={0.1}
    />
    <Slider
      bind:value={tweaks.scaleFactor}
      label="scale factor"
      min={0}
      max={10}
      step={0.1}
    />
    <Slider
      bind:value={tweaks.translateOffset}
      label="translate offset"
      min={-1}
      max={1}
      step={0.01}
    />
    <Slider
      bind:value={tweaks.translateFactor}
      label="translate factor"
      min={0}
      max={10}
      step={0.1}
    />
    <Checkbox bind:value={tweaks.orbitControls} label="orbit controls" />
  </Pane>
{/if}

<section class="Container fixed top-0 right-0 bottom-0 left-0">
  <Canvas>
    <HeroScene
      {mesh}
    />
    <PixelatedRender {mesh} granularity={tweaks.granularity} />
  </Canvas>
</section>

<style>
  .Container {
    background:
      radial-gradient(rgba(24, 18, 68, 0.5), rgba(14, 4, 21, 0.5)),
      url("/ui/texture.png");
  }
</style>
