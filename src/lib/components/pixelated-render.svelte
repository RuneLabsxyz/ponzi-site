<script lang="ts">
  import { useTask, useThrelte } from '@threlte/core';
  import {
    BlendFunction,
    EffectComposer,
    EffectPass,
    OutlineEffect,
    PixelationEffect,
    RenderPass
  } from 'postprocessing';
  import type { Mesh } from 'three';

  type Props = {
    mesh: Mesh;
    granularity: number;
  };

  let { mesh, granularity }: Props = $props();

  const { scene, renderer, camera, size, autoRender, renderStage } = useThrelte();

  const composer = new EffectComposer(renderer);

  const renderPass = new RenderPass(scene);
  composer.addPass(renderPass);

  $effect(() => {
    composer.setSize($size.width, $size.height);
  });

  // OUTLINE

  export const outlineEffectOptions: ConstructorParameters<typeof OutlineEffect>[2] = {
    blendFunction: BlendFunction.ALPHA,
    visibleEdgeColor: 0x000,
    edgeStrength: 100,
    pulseSpeed: 0.0,
    xRay: false,
    blur: true
  };

  const outlineEffect = new OutlineEffect(scene, undefined, outlineEffectOptions);

  $effect(() => {
    outlineEffect.selection.add(mesh);
    return () => {
      outlineEffect.selection.clear();
    };
  });

  const outlineEffectPass = new EffectPass(undefined, outlineEffect);
  composer.addPass(outlineEffectPass);

  // PIXELATION

  const pixelationEffect = new PixelationEffect(granularity);

  const pixelationEffectPass = new EffectPass(undefined, pixelationEffect);
  composer.addPass(pixelationEffectPass);

  $effect(() => {
    renderPass.mainCamera = $camera;
    pixelationEffect.mainCamera = $camera;
    pixelationEffectPass.mainCamera = $camera;
    outlineEffect.mainCamera = $camera;
    outlineEffectPass.mainCamera = $camera;
  });

  $effect(() => {
    pixelationEffect.granularity = granularity;
    composer.render(0);
  });

  $effect(() => {
    return () => {
      composer.removeAllPasses();
      pixelationEffectPass.dispose();
      renderPass.dispose();
      composer.dispose();
    };
  });

  $effect(() => {
    const last = autoRender.current;
    autoRender.set(false);
    return () => {
      autoRender.set(last);
    };
  });

  useTask(
    (delta) => {
      composer.render(delta);
    },
    { stage: renderStage, autoInvalidate: false }
  );
</script>
