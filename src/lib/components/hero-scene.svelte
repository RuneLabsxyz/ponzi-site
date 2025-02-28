<script lang="ts">
  import { T } from "@threlte/core";
  import {
    HTML,
    ImageMaterial,
    interactivity,
    OrbitControls,
  } from "@threlte/extras";
  import { Spring } from "svelte/motion";

  import { DoubleSide, type Mesh } from "three";

  import { allAssetsLoaded, getAsset } from "$lib/loaders/index.svelte";
  import { scrollY } from "$lib/scroll-store.svelte";
  import Carousel from "./carousel.svelte";
  import { tweaks } from "$lib/tweak-store.svelte";

  type Props = {
    mesh: Mesh;
  };

  let { mesh }: Props = $props();

  interactivity();
  let logoScale = new Spring(1);
  let isHovering = $state(false);

  let rotation = $derived(
    (scrollY.value / document.body.scrollHeight) * tweaks.rotateFactor +
      tweaks.rotateOffset
  );

  let scale = $derived.by(() => {
    const scale =
      (scrollY.value / document.body.scrollHeight) * tweaks.scaleFactor +
      tweaks.scaleOffset;
    return scale;
  });

  let translate = $derived.by(() => {
    const translate =
      (scrollY.value / document.body.scrollHeight) * tweaks.translateFactor +
      tweaks.translateOffset;
    return translate - 1;
  });
</script>

<svelte:window
  onscroll={(event) => {
    scrollY.value = window.scrollY;
  }}
/>

<T.PerspectiveCamera
  makeDefault
  position={[14, 2, 0]}
  oncreate={(ref: any) => {
    ref.lookAt(0, -0.3, 0);
  }}
>
  {#if tweaks.orbitControls}
    <OrbitControls />
  {/if}
</T.PerspectiveCamera>

<T.DirectionalLight
  color={0xfffffff}
  intensity={1}
  position={[100, 100, 0]}
  castShadow
  shadow-mapSize={[2048, 2048]}
/>

<T.SpotLight
  color={0xffffff}
  intensity={20}
  distance={100}
  angle={Math.PI / 6}
  penumbra={0.02}
  decay={0.5}
  position={[4, 10, -20]}
  castShadow
  target-position={[0, 0, 0]}
/>

{#if $allAssetsLoaded}
  <T.Group
    rotation.y={-rotation}
    position.y={translate}
    position.z={translate * 1.5}
    {scale}
  >
    <T
      is={getAsset("runelabsLogo")?.scene}
      scale={logoScale.current}
      onpointerenter={() => {
        logoScale.target = 1.1;
        isHovering = true;
      }}
      onpointerleave={() => {
        logoScale.target = 1;
        isHovering = false;
      }}
      onclick={() => {
        window.open("https://runelabs.xyz", "_blank");
      }}
      castShadow
    ></T>
    <T is={mesh} castShadow>
      <T.ConeGeometry args={[2.5, 3, 4, 1]} />
      <T.MeshStandardMaterial color="#0B4F6C" />
    </T>
  </T.Group>

  <Carousel>
    {#snippet logo()}
      <!-- <T.Mesh>
        <T.PlaneGeometry args={[5, 5]} />
        <ImageMaterial
          transparent
          side={DoubleSide}
          url="/images/logo.png"
          radius={0.1}
          zoom={0.6}
        />
      </T.Mesh> -->
      <HTML transform>
        <img
          src="/images/logo.png"
          class="w-32 h-32"
          alt="ponzi Logo"
          style="image-rendering: pixelated;"
        />
      </HTML>
    {/snippet}
    {#snippet okdepart()}
      <T.Group>
        <T.Mesh>
          <T.PlaneGeometry args={[5, 5]} />
          <ImageMaterial
            side={DoubleSide}
            url="/images/fullart-default.png"
            radius={0.1}
          />
        </T.Mesh>
        <HTML position={[-2.5, 0, 1]} transform>
          <h2 class="font-display text-stroke">
            DIVE IN A BRAND <br /> NEW WORLD !
          </h2>
        </HTML>
      </T.Group>
    {/snippet}
  </Carousel>
{:else}
  <!-- Placeholder for when model is loading -->
  <T.Group>
    <T.Mesh>
      <T.BoxGeometry args={[1, 1, 1]} />
      <T.MeshStandardMaterial color="#0B4F6C" />
    </T.Mesh>
  </T.Group>
{/if}

{#if isHovering}
  <style>
    canvas {
      cursor: pointer !important;
    }
  </style>
{/if}
