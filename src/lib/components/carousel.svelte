<script lang="ts">
  import { T } from "@threlte/core";
  import type { Snippet } from "svelte";
  import { scrollY } from "$lib/scroll-store.svelte";
  import { tweaks } from "$lib/tweak-store.svelte";

  type Props = {
    // restProps : anything of type Snippet
    [key: string]: Snippet;
  };

  let { children, ...restProps }: Props = $props();

  const childs = $derived(
    Object.values(restProps).filter((f) => typeof f === "function")
  );

  const angleDisplacement = (2 * Math.PI) / 3;
  const circleSize = 10;
  const heightDisplacement = 6;

  let imagesRotation = $derived(
    (scrollY.value / document.body.scrollHeight) *
      tweaks.rotateFactor *
      tweaks.rotateFactor
  );

  let imagesTranslate = $derived.by(() => {
  const rotation = (scrollY.value / document.body.scrollHeight) * tweaks.rotateFactor * tweaks.rotateFactor;
  const translate = (rotation / angleDisplacement) * heightDisplacement;
  return translate + 0.5;
});

  const getSingleRotation = (i: number) => {
    const a = 1 / 3000;
    const x = imagesTranslate - i * heightDisplacement;
    const h = 0.5;
    const k = 0;

    return -Math.abs(a * (x - h) ** 3 + k);
  };
  // const angleDisplacement = Math.PI / 2;
</script>

<!-- Main group that passes through all props -->
<T.Group
  rotation.y={-imagesRotation}
  position.y={imagesTranslate}
  position.x={-5}
>
  {#each childs as child, i}
    <T.Group
      rotation.y={angleDisplacement * i + Math.PI / 2}
      position={[
        Math.cos(angleDisplacement * -i) * circleSize,
        -i * heightDisplacement, // Adjust the y position to go down each time
        Math.sin(angleDisplacement * -i) * circleSize,
      ]}
      receiveShadow
    >
      <T.Group rotation.z={getSingleRotation(i)} receiveShadow>
        {@render child()}
      </T.Group>
    </T.Group>
  {/each}
</T.Group>
