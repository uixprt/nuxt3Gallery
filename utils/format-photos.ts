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

export interface ApiPhoto {
  url: string;
  thumbnailUrl: string;
  title: string;
  id: number;
  height?: number;
}

export interface FormattedPhoto {
  url: string;
  thumbnailUrl: string;
  title: string;
  id: number;
  height: number;
}

export function formatPhotos(photos: ApiPhoto[]): FormattedPhoto[] {
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
