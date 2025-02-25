<script lang="ts">
  import {
    InstancedSprite,
    buildSpritesheet,
    type SpritesheetMetadata,
  } from "@threlte/extras";

  let billboarding = true;

  const ponziboysAtlasMeta = [
    {
      url: "/textures/ponziboys-atlas.png",
      type: "rowColumn",
      width: 3,
      height: 3,
      animations: [
        { name: "eth", frameRange: [0, 0] },
        { name: "builder", frameRange: [1, 1] },
        { name: "stone", frameRange: [2, 2] },
        { name: "paper", frameRange: [3, 3] },
        { name: "brother", frameRange: [4, 4] },
        { name: "strk", frameRange: [5, 5] },
        { name: "ponzilord", frameRange: [6, 6] },
      ],
    },
  ] as const satisfies SpritesheetMetadata;

  const ponziboysAtlas =
    buildSpritesheet.from<typeof ponziboysAtlasMeta>(ponziboysAtlasMeta);

  let sprite: any;



</script>

{#await ponziboysAtlas.spritesheet then spritesheet}
  <InstancedSprite
    count={10}
    autoUpdate={false}
    playmode={"PAUSE"}
    {billboarding}
    {spritesheet}
    bind:ref={sprite}
    castShadow
  >
    {#snippet children({ Instance }: { Instance: any })}
      {#each { length: 10 } as _, i}
        <Instance
          position={[
            Math.random() * 5 - 2.5,
            Math.random() * 5 - 2.5,
            Math.random() * 5 - 2.5,
          ]}
          scale={[1, 1]}
          flipX
          id={i}
        />
      {/each}
    {/snippet}
  </InstancedSprite>
{/await}
