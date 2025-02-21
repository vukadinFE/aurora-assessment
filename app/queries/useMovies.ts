import { keepPreviousData } from "@tanstack/vue-query";

export const QUERY_MOVIES = "MOVIES";

const LIMIT = 12;

export default function useMovies(query: Ref<string>) {
  const queryKey = [QUERY_MOVIES, query];
  const { movies } = useService();
  const results = useInfiniteQuery({
    queryKey,
    initialPageParam: 0,
    staleTime: 1 * 60 * 1000, // 1 minute
    placeholderData: keepPreviousData,
    queryFn: async ({ pageParam }) => {
      return await movies.search(pageParam * LIMIT, LIMIT, query.value);
    },
    getNextPageParam: (lastPage, allPages) => {
      if (lastPage.items.length < LIMIT) {
        return undefined;
      }
      return allPages.length;
    },
  });

  return {
    ...results,
    items: computed(
      () => results.data.value?.pages.flatMap((page) => page.items) ?? []
    ),
  };
}
