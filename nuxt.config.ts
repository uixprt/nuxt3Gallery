import {defineNuxtConfig} from "nuxt";

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  ssr: false, // Disable Server Side rendering
  definePageMeta: {
    keepalive: true,
  },
  head: {
    title: "Nuxt 3 Gallery",
    description: "Masonry Gallery implementation with Vue Composition API and Nuxt 3",
    meta: [
      {charset: "UTF-8"},
      {name: 'viewport', content: 'width=device-width, initial-scale=1'},
      {name: "theme-color", content: "#e2e2e2"},
    ],
    link: [
      {rel: "icon", href: "/public/favicon.ico", sizes: "any"},
      {rel: "icon", href: "/public/favicon.svg", type: "image/x-icon"},
      {rel: "mask-icon", href: "/public/favicon.svg", type: "image/x-icon"},
      {rel: "apple-touch-icon", href: "safari-pinned-tab.svg", color: "#24a1bc"},
      {rel: "manifest", href: "/public/site.webmanifest"},
      {
        rel: "stylesheet",
        href:
          "https://fonts.googleapis.com/css2?family=Montserrat:wght@300&display=swap",
      },
    ],
  },
});
