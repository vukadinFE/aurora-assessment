<script setup lang="ts">
import type { UInput } from "#components";
import useMovies from "~/queries/useMovies";
import { useStreamStore } from "~/store/useStreamStore";

const search = ref("");
const searchDebounced = refDebounced(search, 300);

const {
  items: movies,
  isFetching,
  fetchNextPage,
  hasNextPage,
  isFetched,
} = useMovies(searchDebounced);

const input = useTemplateRef<typeof UInput>("input");

defineShortcuts({
  meta_k: () => {
    input.value?.inputRef?.focus();
  },
});

const onFocus = () => {
  document.getElementById("movies")?.scrollIntoView({ behavior: "smooth" });
};

const steamStore = useStreamStore();
</script>

<template>
  <section class="py-30">
    <UContainer>
      <div class="flex justify-end mb-6">
        <UInput
          ref="input"
          icon="i-lucide-search"
          size="xl"
          variant="outline"
          placeholder="Search..."
          v-model="search"
          :loading="isFetching"
          @keydown.esc="search = ''"
          @focus="onFocus"
        >
          <template #trailing>
            <UButton
              v-if="search?.length"
              color="neutral"
              variant="link"
              size="sm"
              icon="i-lucide-circle-x"
              aria-label="Clear input"
              @click="search = ''"
            />
            <UKbd value="meta" size="lg" />
            +
            <UKbd value="K" size="lg" /> </template
        ></UInput>
      </div>
      <div
        class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
      >
        <MovieItem
          v-for="movie in movies"
          :key="movie.id"
          :movie="movie"
          @click="steamStore.openMovie(movie)"
        />
        <template v-if="isFetching">
          <USkeleton
            v-for="(_, i) in Array.from({ length: 12 })"
            :key="i"
            class="aspect-[1/1.3]"
          />
        </template>
      </div>

      <div
        v-if="isFetched && !movies.length"
        class="text-center py-30 text-neutral-500"
      >
        <UIcon name="i-lucide-rat" :size="240" />
        <h2 class="text-2xl mt-5 font-extrabold">(*_*) No movies found</h2>
      </div>

      <InfinityTrigger
        v-if="hasNextPage"
        :options="{ threshold: 0.3 }"
        @intersected="fetchNextPage"
      />
    </UContainer>
  </section>
</template>
