import type { NuxtApp } from "#app";
import type { TPaged } from "../types";
import type { TMovie } from "./types";
import queryString from "query-string";

export function moviesService(client: NuxtApp["$apiClient"]) {
  return {
    search: async (skip: number, limit: number, query?: string) => {
      const url = queryString.stringifyUrl({
        url: "/movies",
        query: { skip, query, limit },
      });
      const { data } = await client.get<TPaged<TMovie>>(url);
      return data;
    },
  };
}
