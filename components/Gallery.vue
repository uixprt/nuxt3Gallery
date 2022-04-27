<template>
  <div ref="scrollComponent">
    <masonry-wall :items="photos" :column-width="250" :gap="10">
      <template #default="{item, index}">
        <Photo class="item"
               :url="item.url"
               :title="item.title"
               :id="item.id"
        ></Photo>
      </template>
    </masonry-wall>
  </div>
</template>

<script setup lang="ts">
interface PlaceholderPhoto {
  url: string;
  title: string;
  id: number;
}

const placeholderPhotoHeights = [100, 210, 320];

function formatPhotos(photos: PlaceholderPhoto[]): PlaceholderPhoto[] {
  return photos.map(photo => {
    const file = `250x${placeholderPhotoHeights[Math.floor(Math.random() * placeholderPhotoHeights.length)]}.webp`
    const url = photo.url.replace('600', file);
    return {...photo, url};
  })
}

const url = (page: number, limit = 25) => `https://jsonplaceholder.typicode.com/photos?_start=${page * limit}&_limit=${limit}`;

async function loadPhotos(page: number): Promise<PlaceholderPhoto[]> {
  const data = await fetch(url(page));
  return formatPhotos(await data.json());
}

// prep for pagination
const page = ref(0);
const photos = ref(await loadPhotos(page.value));

async function append() {
  if (page.value >= 3) {
    return;
  }
  page.value++;
  const data = await loadPhotos(page.value)
  photos.value = [...photos.value, ...data];
}

const scrollComponent = ref(null)

onMounted(() => {
  window.addEventListener("scroll", handleScroll)
})

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll)
})

const handleScroll = (e) => {
  let element = scrollComponent.value;
  if (element.getBoundingClientRect().bottom < window.innerHeight) {
    append();
  }
}
</script>
