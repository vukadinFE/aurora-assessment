<script setup lang="ts">
import { usePurchaseStore } from "~/store/usePurchaseStore";

const purchaseStore = usePurchaseStore();

useSeoMeta({
  title: "VN - Aurora Movies Assessment",
});
</script>

<template>
  <div>
    <AppHero />
    <MovieList id="movies" v-if="!purchaseStore.purchaseModal" />
  </div>
</template>
