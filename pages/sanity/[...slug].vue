<template>
  <div class="progress-wrapper" v-if="!loaded">
    <v-progress-circular
      indeterminate
      size="100"
      width="7"
    ></v-progress-circular>
  </div>
  <div id="app" class="sanity"></div>
</template>

<script setup lang="ts">
import { renderStudio, defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import test from "../../schemas/test";
onMounted(async () => {
  loadSanity();
});

async function loadSanity() {
  const runtime = useRuntimeConfig();
  const config = defineConfig({
    title: "Test",
    projectId: runtime.public.sanityProjectId,
    dataset: runtime.public.sanityDataset,
    plugins: [structureTool()],
    schema: { types: [test] as any },
    basePath: "/sanity",
  });

  renderStudio(document.getElementById("app"), config);
  loaded.value = true;
}

const loaded = ref(false);
</script>

<style scoped>
.progress-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh; /* Adjust this to control the vertical space */
}

.sanity {
  height: 100vh;
  max-height: 100dvh;
  overscroll-behavior: none;
  -webkit-font-smoothing: antialiased;
  overflow: auto;
}
</style>
