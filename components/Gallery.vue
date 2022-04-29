<template>
  <div ref="scrollComponent" v-if="photos">
    <masonry-wall :items="photos" :column-width="250" :gap="10">
      <template #default="{ item: photo }">
        <thumbnail
            class="item"
            :thumbnailUrl="photo.thumbnailUrl"
            :title="photo.title"
            :id="photo.id"
            :height="photo.height"
        ></thumbnail>
      </template>
    </masonry-wall>
  </div>
</template>

<script setup lang="ts">
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

const url = (page: number, limit = 25) => `https://jsonplaceholder.typicode.com/photos?_start=${page * limit}&_limit=${limit}`;

async function loadPhotos(page: number): Promise<Photo[]> {
  const data = await fetch(url(page));
  return formatPhotos(await data.json());
}

// prep for pagination
const page = ref(0);
const photos = ref(await loadPhotos(page.value));

async function next() {

}

const scrollComponent = ref(null)

onMounted(() => {
  window.addEventListener("scroll", handleScroll)
})


onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll)
})

const handleScroll = async (e) => {
  let element = scrollComponent.value;
  if (element.getBoundingClientRect().bottom < window.innerHeight) {
    if (page.value === 3) {
      window.removeEventListener("scroll", handleScroll);
      return;
    }
    page.value++;
    const data = await loadPhotos(page.value)
    photos.value = [...photos.value, ...data];
  }
}
</script>
