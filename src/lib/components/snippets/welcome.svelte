<script>
  import {T} from "@threlte/core"
  import { BentPlaneGeometry } from "$lib/BentPlaneGeometry";
  import { HTML, ImageMaterial } from "@threlte/extras";
  import { DoubleSide } from "three";
  import { fade } from "svelte/transition";

  let { isVisible } = $props();

</script>
<T.Group>
  <T.Mesh>
    <T is={BentPlaneGeometry} args={[0.1, 8, 5, 20, 20]} />
    <ImageMaterial
      side={DoubleSide}
      url="/images/fullart-default.png"
      radius={0.1}
    />
  </T.Mesh>
  <HTML position={[-2.5, 0, 1]} transform>
    {#if isVisible}
      <h2
        class="font-display text-stroke"
        transition:fade={{ duration: 400 }}
      >
        DIVE IN A BRAND <br /> NEW WORLD !
      </h2>
    {/if}
  </HTML>
</T.Group>