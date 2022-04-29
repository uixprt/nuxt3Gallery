enum PhotoHeights {
  sm = 100,
  md = 210,
  lg = 320,
}

const PHOTO_HEIGHTS = [
  PhotoHeights.sm,
  PhotoHeights.md,
  PhotoHeights.lg,
]

interface apiPhoto {
  url: string;
  thumbnailUrl: string;
  title: string;
  id: number;
  height?: number;
}

interface formattedPhoto {
  url: string;
  thumbnailUrl: string;
  title: string;
  id: number;
  height: number;
}

export function formatPhotos(photos: apiPhoto[]): formattedPhoto[] {
  return photos.map((photo) => {
    const height =
      PHOTO_HEIGHTS[
        Math.floor(Math.random() * PHOTO_HEIGHTS.length)
        ];
    const file = `250x${height}.webp`;
    const thumbnailUrl = photo.thumbnailUrl.replace("150", file);
    return {...photo, thumbnailUrl, height};
  });
}
