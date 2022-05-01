<template>
  <div class="container">
    <Header />
    <NuxtLink class="button mb-1" to="/">Home</NuxtLink>
    <SinglePhoto v-if="data"
                 :url="data.url"
                 :title="data.title"
    ></SinglePhoto>
  </div>
</template>

<script setup lang="ts">
const rout = useRoute();
const id = +rout.params.id;

const {data} = await useFetch(`https://jsonplaceholder.typicode.com/photos/${id}`);
</script>
