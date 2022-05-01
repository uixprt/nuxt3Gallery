import {formatPhotos, FormattedPhoto} from "@/utils/format-photos";

export function useLoadPhotos() {
  const BASE_URL = 'https://jsonplaceholder.typicode.com/'
  const LIMIT = 25;
  
  const page = ref(0);
  const data = ref(null);
  
  let refresh;
  
  useFetch<FormattedPhoto[]>(() => `photos?_start=${page.value * LIMIT}&_limit=${LIMIT}`, {
      baseURL: BASE_URL,
      transform: formatPhotos
    }
  ).then(resp => {
      data.value = resp.data;
      refresh = resp.refresh;
    }
  );
  
  function next() {
    if (page.value === 3) {
      return;
    }
    page.value++;
    refresh();
  }
  
  return {data, page, next};
}
