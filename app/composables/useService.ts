import { moviesService } from "~/services/movies";

export default function useService() {
  const nuxtApp = useNuxtApp();
  const services = {
    movies: moviesService(nuxtApp.$apiClient),
  };

  return services;
}
