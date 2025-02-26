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

  const rInner = 0.5;
  const rOuter = 3;

  const ponziboysInstances = Array.from({ length: 200 }, (_, id) => {
    const { x, y, z } = randomPointBetweenSpheres(rInner, rOuter);
    const animationIndex = Math.floor(
      Math.random() * ponziboysAtlasMeta[0].animations.length
    );
    const animationName = ponziboysAtlasMeta[0].animations[animationIndex].name;
    return {
      position: [x, y, z],
      scale: [0.5, 0.5],
      animationName,
      id,
    };
  });

  function isTooCloseToPyramid({ x, y, z }: { x: number; y: number; z: number }) {
    const pyramidPosition = [0, 0, 0];
    const pyramidHeight = 2;
    const pyramidRadius = 2;
    const distanceThreshold = 0.2;

    const pyramidTop = pyramidPosition[1] + pyramidHeight / 2;
    const pyramidBottom = pyramidPosition[1] - pyramidHeight / 2;
    // function that in function of y checks if the distance of the point is less than the radius at that height
    const radiusAtHeight = (y: number) => {
      return pyramidRadius * Math.sqrt(1 - Math.pow((y - pyramidPosition[1]) / pyramidHeight, 2));
    };
    // check if the point is inside the pyramid
    if ((y > pyramidBottom - distanceThreshold) && y < pyramidTop + distanceThreshold) {
      const distanceToPyramid = Math.sqrt(
        Math.pow(x - pyramidPosition[0], 2) +
          Math.pow(z - pyramidPosition[2], 2)
      );
      return distanceToPyramid < radiusAtHeight(y) + distanceThreshold;
    }

    return false;
  }

  const filteredPonziboysInstances = ponziboysInstances.filter(
    (instance) =>
      !isTooCloseToPyramid({
        x: instance.position[0],
        y: instance.position[1],
        z: instance.position[2],
      })
  );

  function randomPointBetweenSpheres(rInner: number, rOuter: number) {
    // Generate a random radius within the desired range
    const r = Math.random() * (rOuter - rInner) + rInner;

    // Generate random angles
    const theta = Math.random() * Math.PI; // Polar angle
    const phi = Math.random() * 2 * Math.PI; // Azimuthal angle

    // Convert spherical coordinates to Cartesian coordinates
    const x = r * Math.sin(theta) * Math.cos(phi);
    const y = r * Math.sin(theta) * Math.sin(phi);
    const z = r * Math.cos(theta);

    return { x, y, z };
  }

  const ponziboysAtlas =
    buildSpritesheet.from<typeof ponziboysAtlasMeta>(ponziboysAtlasMeta);

  let sprite: any;
</script>

{#await ponziboysAtlas.spritesheet then spritesheet}
  <InstancedSprite
    count={filteredPonziboysInstances.length + 1}
    autoUpdate={true}
    playmode={"PAUSE"}
    {billboarding}
    {spritesheet}
    bind:ref={sprite}
    castShadow
  >
    {#snippet children({ Instance }: { Instance: any })}
      {#each filteredPonziboysInstances as instance}
        <Instance
          position={instance.position}
          scale={instance.scale}
          animationName={instance.animationName}
          id={instance.id}
        />
      {/each}
    {/snippet}
  </InstancedSprite>
{/await}
