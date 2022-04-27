<script setup lang="ts">
interface PlaceholderPhoto {
  url: string;
  title: string;
  id: number;
}

const placeholderPhotoHeights = [100, 210, 320];

function formatPhotos(photos) {
  return photos.map(photo => {
    const size = `150x${placeholderPhotoHeights[Math.floor(Math.random() * placeholderPhotoHeights.length)]}.webp`
    const url = photo.url.replace('600', size);
    return {...photo, url};
  })
}

const url = (page: number) => `https://jsonplaceholder.typicode.com/photos?_start=${page}&_limit=100`;

async function loadPhotos(page: number): Promise<PlaceholderPhoto[]> {
  const data = await fetch(url(page));
  return formatPhotos(await data.json());
}

let page = ref(0);
const items = ref(await loadPhotos(page.value));

/* 
// prep for pagination
function append() {
  console.log('append', page)
  if (page.value > 5) {
    return;
  }
  page.value++
}


watch(page, async (newPage, oldPage) => {
  if (oldPage === 0) {
    page.value++;
    return;
  }
  try {
    const data = await loadPhotos(newPage)
    items.value.push(...data);
  } catch (error) {
    console.log({error});
  }
}) */
</script>


<template>
  <div class="container">
  <masonry-wall :items="items" :ssr-columns="1" :column-width="150" :gap="10">
      <template #default="{item}">
        <figure class="item">
          <img :src="item.url" alt="">
          <figcaption><span>{{ item.id }}) {{ item.title }}</span></figcaption>
        </figure>
      </template>
    </masonry-wall>
  </div>
</template>

<style lang="scss">
.container {
  padding-top: 8px;
  width: calc(100% - 18px);
  margin: 0 auto;
}

img {
  display: block;
  object-fit: cover;
  width: 100%;
}

figure {
  display: block;
  margin: 0;
  position: relative;
  overflow: hidden;
}

figcaption {
  opacity: 0;
  transition: opacity 300ms ease-in-out;
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;


  figure:hover & {
    opacity: 1;
  }

  span {
    max-width: 80%;
    text-align: center;
  }
}
</style>
