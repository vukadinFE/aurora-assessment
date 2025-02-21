<script lang="ts" setup>
import type { TMovie } from "~/services/movies/types";

type Props = {
  movie: TMovie;
};

defineProps<Props>();
</script>

<template>
  <button
    class="aspect-[1/1.3] grid grid-cols-1 grid-rows-1 rounded-md overflow-hidden shadow border border-(--ui-border) group text-left cursor-pointer"
  >
    <img
      :src="movie.image_url"
      :alt="movie.title"
      class="object-cover w-full h-full col-start-1 col-end-1 row-start-1 row-end-1 transition-transform duration-300 transform group-hover:scale-125 group-focus-visible:scale-125"
    />
    <div
      class="relative p-4 col-start-1 col-end-1 row-start-1 row-end-1 flex flex-col justify-end bg-gradient-to-t from-black to-transparent"
    >
      <div class="flex gap-1 items-center">
        <h2 class="text-lg font-semibold truncate">
          {{ movie.title }}
        </h2>

        <UBadge class="font-bold rounded-full" variant="subtle">{{
          movie.rating
        }}</UBadge>
      </div>
      <p
        class="text-sm text-neutral-300 group-hover:block group-focus-visible:block line-clamp-1"
      >
        {{ movie.description }}
      </p>
    </div>
  </button>
</template>
