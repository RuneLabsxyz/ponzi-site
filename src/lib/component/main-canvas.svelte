<script lang="ts">
  import { Canvas } from '@threlte/core';
  import { Pane, Slider } from 'svelte-tweakpane-ui';
  import { Mesh } from 'three';
  import HeroScene from './hero-scene.svelte';
  import PixelatedRender from './pixelated-render.svelte';

  const mesh = new Mesh();

  let granularity = $state(5);
  let scaleFactor = $state(5);
  let rotateFactor = $state(5);
  let translateFactor = $state(5);
  let rotateOffset = $state(0.21);
  let scaleOffset = $state(1);
  let translateOffset = $state(1);
</script>

<Pane position="draggable" title="outline effect">
  <Slider bind:value={granularity} label="granularity" min={1} max={20} step={1} />
  <Slider bind:value={rotateOffset} label="rotate offset" min={-Math.PI} max={Math.PI} step={0.01} />
  <Slider bind:value={rotateFactor} label="rotate factor" min={0} max={10} step={0.1} />
  <Slider bind:value={scaleOffset} label="scale offset" min={0} max={10} step={0.1} />
  <Slider bind:value={scaleFactor} label="scale factor" min={0} max={10} step={0.1} />
  <Slider bind:value={translateOffset} label="translate offset" min={-1} max={1} step={0.01} />
  <Slider bind:value={translateFactor} label="translate factor" min={0} max={10} step={0.1} />

</Pane>

<section class="Container fixed top-0 right-0 bottom-0 left-0">
  <Canvas>
    <HeroScene {mesh} {scaleFactor} {rotateFactor} {translateFactor} {rotateOffset} {scaleOffset} {translateOffset} />
    <PixelatedRender {mesh} {granularity} />
  </Canvas>
</section>

<style>
  .Container {
    background:
      radial-gradient(rgba(24, 18, 68, 0.5), rgba(14, 4, 21, 0.5)), url('/ui/texture.png');
  }
</style>
