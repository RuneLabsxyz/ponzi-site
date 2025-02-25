<script lang="ts">
  import { T } from '@threlte/core';
  import { interactivity, useTexture } from '@threlte/extras';
  import { Checkbox, Pane } from 'svelte-tweakpane-ui';
  import { Spring } from 'svelte/motion';
  import { NearestFilter, RepeatWrapping, SRGBColorSpace, Texture, type Mesh } from 'three';

  interactivity();

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
    scaleOffset
  }: Props = $props();

  let y = $state(0);

  let rotation = $derived((y / document.body.scrollHeight) * rotateFactor + rotateOffset);

  let scale = $derived.by(() => {
    const scale = (y / document.body.scrollHeight) * scaleFactor + scaleOffset;
    return scale;
  });

  let translate = $derived.by(() => {
    const translate = (y / document.body.scrollHeight) * translateFactor + translateOffset;
    return translate - 1;
  });

  function pixelTexture(texture: Texture) {
    texture.minFilter = NearestFilter;
    texture.magFilter = NearestFilter;
    texture.generateMipmaps = false;
    texture.wrapS = RepeatWrapping;
    texture.wrapT = RepeatWrapping;
    texture.colorSpace = SRGBColorSpace;
    return texture;
  }

  const texture = useTexture('/3d/textures/checker.png', {
    transform: (texture) => {
      return pixelTexture(texture);
    }
  });
</script>

<svelte:window bind:scrollY={y} />

<T.PerspectiveCamera
  makeDefault
  position={[14, 2, 0]}
  oncreate={(ref) => {
    ref.lookAt(0, -0.3, 0);
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

{#await texture then map}
  {@const floorMap = () => {
    map.repeat.set(3, 3);
    return map.clone();
  }}
  {@const cubeMap = () => {
    map.repeat.set(1, 1);
    return map.clone();
  }}

  <T
    is={mesh}
    {scale}
    position.y={translate}
    position.z={translate * 1.5}
    rotation.y={-rotation}
    castShadow
  >
    <T.ConeGeometry args={[2.5, 3, 4, 1]} />
    <T.MeshStandardMaterial color="#0B4F6C" />
  </T>
  <!-- 
  <T.Mesh rotation.x={-Math.PI / 2} receiveShadow>
    <T.PlaneGeometry args={[6, 6]} />
    <T.MeshStandardMaterial map={floorMap()} />
  </T.Mesh> -->
{/await}
