import { type TMovie } from "~/services/movies/types";

export const useStreamStore = defineStore("stream", () => {
  const movieToStream = ref<TMovie | null>(null);

  const openMovie = (movie: TMovie) => {
    movieToStream.value = movie;
  };

  const closeMovie = () => {
    movieToStream.value = null;
  };

  const videoModalOpen = computed(() => movieToStream.value !== null);

  return {
    videoModalOpen,
    movieToStream,
    openMovie,
    closeMovie,
  };
});
