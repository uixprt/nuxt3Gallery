<template>
  <div ref="scrollComponent" v-if="photos?.length >= 1">
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
const {data, page, next} = useLoadPhotos();
//const computedData =
const photos = ref(null);
onMounted(
    () => photos.value = ref(computed(() => data?.value))
);

watch(
    () => data,
    (newValue, oldValue) => {
      console.log({
        newValue,
        oldValue
      })

      /*console.log({
        newValue,
        oldValue, page: page.value, photos: photos.value
      })
      if (page.value === 0) {
        photos.value = newValue;
        return;
      }
      if (newValue && newValue !== oldValue) {
        photos.value = [...photos.value, ...newValue];
      }*/
    });


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
