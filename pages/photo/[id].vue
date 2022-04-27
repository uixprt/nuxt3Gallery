<template>
  <Header></Header>
  <Photo
      :id="id"
      :url="data.url"
      :title="data.title"
  ></Photo>
</template>

<script setup lang="ts">
import {useFetch} from "#app";

const rout = useRoute();
const id = +rout.params.id;

const {data} = useFetch(`https://jsonplaceholder.typicode.com/photos/${id}`)
</script>
