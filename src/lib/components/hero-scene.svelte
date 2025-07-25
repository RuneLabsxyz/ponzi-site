<script lang="ts">
  import { T } from "@threlte/core";
  import {
    interactivity,
  } from "@threlte/extras";
  import { Spring } from "svelte/motion";

  import {
    NearestFilter,
    RepeatWrapping,
    SRGBColorSpace,
    Texture,
    type Mesh,
    TextureLoader,
  } from "three";
  
  import { getAsset, allAssetsLoaded } from '$lib/loaders/index.svelte';

  type Props = {
    mesh: Mesh;
    scaleFactor: number;
    rotateFactor: number;
    translateFactor: number;
    rotateOffset: number;
    scaleOffset: number;
    translateOffset: number;
  };

  let {
    mesh,
    scaleFactor,
    rotateFactor,
    rotateOffset,
    translateFactor,
    translateOffset,
    scaleOffset,
  }: Props = $props();

  let y = $state(0);

  let rotation = $derived(
    (y / document.body.scrollHeight) * rotateFactor + rotateOffset
  );

  let scale = $derived.by(() => {
    const scale = (y / document.body.scrollHeight) * scaleFactor + scaleOffset;
    return scale;
  });

  let translate = $derived.by(() => {
    const translate =
      (y / document.body.scrollHeight) * translateFactor + translateOffset;
    return translate - 1;
  });

  interactivity();
  let logoScale = new Spring(1);
  let isHovering = $state(false);
</script>

<svelte:window bind:scrollY={y} />

<T.PerspectiveCamera
  makeDefault
  position={[14, 2, 0]}
  oncreate={(ref: any) => {
    ref.lookAt(0, 0, 0);
  }}
/>

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
    position.y={translate + 0.5}
    position.z={translate * 1.5}
    {scale}
  >
    <T
      is={getAsset('runelabsLogo')?.scene}
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
        window.open("https://www.runelabs.xyz", "_blank");
      }}
      castShadow
    ></T>
    <T is={mesh} castShadow>
      <T.ConeGeometry args={[2.5, 3, 4, 1]} />
      <T.MeshStandardMaterial color="#0B4F6C" />
    </T>

    <!-- <PonziboysAtlas /> -->
  </T.Group>
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
