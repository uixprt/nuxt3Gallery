<template>
  <button @click="next">next</button>
  <button @click="reset">reset</button>
  <div ref="scrollComponent">
    <div v-if="pending">{{ pending }}</div>
    <pre v-if="!pending" v-for="photo in photos">
      {{ photo.id }}
      {{ photo.thumbnailUrl }}
    </pre>
  </div>

</template>

<script setup>
import {formatPhotos} from "@/utils/format-photos";

const base_url = 'https://jsonplaceholder.typicode.com/'
const limit = 5;

const page = ref(0);

const {
  data: photos,
  pending,
  refresh,
  error
} = await useFetch(() => `photos?_start=${page.value * limit}&_limit=${limit}`, {
      baseURL: base_url,
      transform: formatPhotos
    }
);

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

</script>
