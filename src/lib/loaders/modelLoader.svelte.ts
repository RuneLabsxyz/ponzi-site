// src/lib/loaders/modelLoader.ts
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { modelProgress, modelsLoaded, setAsset } from "./index.svelte.js";

const modelAssets = [{ key: "runelabsLogo", path: "/3d/runelabslogo.glb" }];

export function preloadModels() {
  return new Promise<void>((resolve) => {
    // For server-side rendering safety
    if (typeof window === "undefined") {
      modelsLoaded.set(true);
      modelProgress.set(1);
      return resolve();
    }

    const loader = new GLTFLoader();
    const totalModels = modelAssets.length;
    let loadedCount = 0;

    modelAssets.forEach(({ key, path }) => {
      loader.load(
        path,
        (gltf) => {
          loadedCount++;
          setAsset(key, gltf);
          modelProgress.set(loadedCount / totalModels);

          if (loadedCount === totalModels) {
            modelsLoaded.set(true);
            resolve();
          }
        },
        (xhr) => {
          // Progress callback if needed
          console.log(`${path}: ${(xhr.loaded / xhr.total) * 100}% loaded`);
        },
        (error) => {
          console.error(`Error loading model ${path}:`, error);
          loadedCount++;
          modelProgress.set(loadedCount / totalModels);

          if (loadedCount === totalModels) {
            modelsLoaded.set(true);
            resolve();
          }
        }
      );
    });
  });
}
