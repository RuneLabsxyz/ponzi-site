import { assetMap, imageProgress, imagesLoaded, setAsset } from "./index.svelte.js";

const imageAssets = [
  { key: "logo", path: "/images/logo.png" },
  { key: "logoText", path: "/images/logo-text.png" },
  { key: "bg", path: "/images/bg.png" },
  { key: "coinFlat", path: "/images/coin-flat.png" },
  { key: "fullartDefault", path: "/images/fullart-default.png" },
  { key: "fullartNuke", path: "/images/fullart-nuke-incoming.png" },
  { key: "biomesSheet", path: "/sheets/biomes.png" },
  { key: "buildingsSheet", path: "/sheets/buildings.png" },
  { key: "roadSheet", path: "/sheets/road.png" },
  { key: "checkerTexture", path: "/textures/checker.png" },
  { key: "ponziboysAtlas", path: "/textures/ponziboys-atlas.png" },
  { key: "uiFrame", path: "/ui/frame.png" },
  { key: "uiTexture", path: "/ui/texture.png" },
];

export function preloadImages() {
  return new Promise<void>((resolve) => {
    const totalImages = imageAssets.length;
    let loadedCount = 0;

    imageAssets.forEach(({ key, path }) => {
      const img = new Image();

      img.onload = () => {
        loadedCount++;
        setAsset(key, img);
        imageProgress.set(loadedCount / totalImages);

        if (loadedCount === totalImages) {
          imagesLoaded.set(true);
          resolve();
        }
      };

      img.onerror = () => {
        console.error(`Failed to load image: ${path}`);
        loadedCount++;
        imageProgress.set(loadedCount / totalImages);

        if (loadedCount === totalImages) {
          imagesLoaded.set(true);
          resolve();
        }
      };

      img.src = path;
    });
  });
}