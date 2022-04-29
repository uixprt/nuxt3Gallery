interface Photo {
  url: string;
  thumbnailUrl: string;
  title: string;
  id: number;
  height?: number;
}

const placeholderPhotoHeights = [100, 210, 320];

function formatPhotos(photos: Photo[]): Photo[] {
  return photos.map((photo) => {
    const height =
      placeholderPhotoHeights[
        Math.floor(Math.random() * placeholderPhotoHeights.length)
        ];
    const file = `250x${height}.webp`;
    const thumbnailUrl = photo.thumbnailUrl.replace("150", file);
    return {...photo, thumbnailUrl, height};
  });
}

export function useLoadPhotos() {
  const page = ref(0);
  const photos = ref(null);
  let prevData = [];
  const url = (page: number, limit = 25) =>
    `https://jsonplaceholder.typicode.com/photos?_start=${
      page * limit
    }&_limit=${limit}`;
  
  function loadPhotos() {
    //photos.value = null;
    return fetch(url(page.value))
      .then((data) => data.json())
      .then((data) => formatPhotos(data))
  }
  
  loadPhotos().then((data) => {
    photos.value = data;
    prevData = data;
  });
  
  
  function next() {
    if (page.value > 3) {
      return;
    }
    page.value++;
    loadPhotos().then((data) => {
      photos.value = [...prevData, ...data];
      prevData = [...prevData, ...data];
    });
  }
  
  return {photos, next};
}
