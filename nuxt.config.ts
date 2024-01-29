// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  ssr: false,
  runtimeConfig: {
    public: {
      sanityDataset: process.env.sanityDataset,
      sanityProjectId: process.env.sanityProjectId,
    },
  },
  devServer: {
    port: 4243,
  },
});
