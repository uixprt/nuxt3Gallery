<template>
  <div class="container">
    <Header/>
    <NuxtLink class="button" to="/">Home</NuxtLink>
    <SinglePhoto
        :url="data.url"
        :title="data.title"
    ></SinglePhoto>
  </div>
</template>

<script setup lang="ts">
const rout = useRoute();
const id = +rout.params.id;

const {data} = await useFetch(`https://jsonplaceholder.typicode.com/photos/${id}`)
</script>
