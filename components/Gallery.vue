<template>
  <div ref="scrollComponent" v-if="photos">
    <GalleryMasonryWall :items="photos" :column-width="250" :gap="10">
      <template #default="{ item: photo }">
        <GalleryMasonryWallThumbnail
            class="item"
            :thumbnailUrl="photo.thumbnailUrl"
            :title="photo.title"
            :id="photo.id"
            :height="photo.height"
        ></GalleryMasonryWallThumbnail>
      </template>
    </GalleryMasonryWall>
  </div>
</template>

<script setup lang="ts">
import {
  formatPhotos,
  FormattedPhoto
} from "@/utils/format-photos";

const base_url = 'https://jsonplaceholder.typicode.com/'
const limit = 25;

const page = ref(0);

const {
  data,
  refresh,
} = await useFetch<FormattedPhoto[]>(() => `photos?_start=${page.value * limit}&_limit=${limit}`, {
      baseURL: base_url,
      transform: formatPhotos
    }
);

const photos = ref<FormattedPhoto[]>(null);

function next() {
  if (page.value === 3) {
    return;
  }
  page.value++;
  refresh();
}

function reset() {
  page.value = 0
  refresh();
}

watch(
    () => data.value,
    (newValue, oldValue) => {
      if (page.value === 0) {
        photos.value = newValue;
        return;
      }
      if (oldValue && newValue !== oldValue) {
        photos.value = [...photos.value, ...newValue];
      }
    }
)

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
    next();
  }
}
</script>
