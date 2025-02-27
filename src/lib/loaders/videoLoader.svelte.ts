import { setAsset, videoProgress, videosLoaded } from "./index.svelte.js";

const videoAssets = [
  { key: 'nukeAnimation', path: '/videos/nuke-animation.mp4' },
  { key: 'claimVideo', path: '/videos/claim.mov' }
];

export function preloadVideos() {
  return new Promise<void>((resolve) => {
    // For server-side rendering safety
    if (typeof window === 'undefined') {
      videosLoaded.set(true);
      videoProgress.set(1);
      return resolve();
    }
    
    const totalVideos = videoAssets.length;
    let loadedCount = 0;
    
    videoAssets.forEach(({ key, path }) => {
      const video = document.createElement('video');
      video.muted = true;
      
      // Just preload the metadata for videos to speed up initial load
      video.preload = 'metadata';
      
      video.onloadedmetadata = () => {
        loadedCount++;
        setAsset(key, video);
        videoProgress.set(loadedCount / totalVideos);
        
        if (loadedCount === totalVideos) {
          videosLoaded.set(true);
          resolve();
        }
      };
      
      video.onerror = () => {
        console.error(`Failed to load video: ${path}`);
        loadedCount++;
        videoProgress.set(loadedCount / totalVideos);
        
        if (loadedCount === totalVideos) {
          videosLoaded.set(true);
          resolve();
        }
      };
      
      video.src = path;
    });
  });
}