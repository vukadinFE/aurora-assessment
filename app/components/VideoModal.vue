<script setup lang="ts">
import { useStreamStore } from "~/store/useStreamStore";
import bg from "~/assets/movie.png";

const streamStore = useStreamStore();

const onOpen = (open: boolean) => {
  if (!open) {
    streamStore.closeMovie();
  }
};
</script>

<template>
  <UModal
    class="md:!min-w-[95vw] lg:!min-w-[960px]"
    :title="streamStore.movieToStream?.title"
    :description="streamStore.movieToStream?.description"
    :open="streamStore.videoModalOpen"
    @update:open="onOpen"
  >
    <template #body>
      <div
        class="aspect-[16/9] bg-black/70 rounded-lg flex items-center justify-center bg-bottom bg-contain"
        :style="{ backgroundImage: `url(${bg})` }"
      >
        <button>
          <UIcon name="i-lucide-play" :size="100" color="white" />
        </button>
      </div>
    </template>
  </UModal>
</template>
