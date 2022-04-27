import {Photo} from '@/types/photo';


export async function useLoadPhotos(page: number) {
  
  
  const placeholderPhotoHeights = [100, 210, 320];
  
  function formatPhotos(photos: Photo[]): Photo[] {
    return photos.map(photo => {
      const height = placeholderPhotoHeights[Math.floor(Math.random() * placeholderPhotoHeights.length)];
      const file = `250x${height}.webp`
      const thumbnailUrl = photo.thumbnailUrl.replace('150', file);
      return {...photo, thumbnailUrl, height};
    })
  }
  
  const url = (page: number, limit = 25) => `https://jsonplaceholder.typicode.com/photos?_start=${page * limit}&_limit=${limit}`;
  
  async function loadPhotos(page: number): Promise<Photo[]> {
    const {data} = await useFetch<Photo[]>(url(page));
    return formatPhotos(data.value);
  }

  const photos = ref(await loadPhotos(page));
  
  return {photos, loadPhotos}
}
