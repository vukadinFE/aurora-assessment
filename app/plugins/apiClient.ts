import axios, { type AxiosError } from "axios";
import { usePurchaseStore } from "~/store/usePurchaseStore";

export default defineNuxtPlugin(() => {
  const baseURL = useRuntimeConfig().public.API_BASE;
  const apiClient = axios.create({ baseURL, maxRedirects: 5 });

  apiClient.interceptors.response.use(
    (response) => response,
    async (error: AxiosError<{ detail: string }>) => {
      console.log("Debug vercel", { error });
      if (error.response?.status === 307) {
        const redirectUrl = error.response.headers.location;
        console.log("Debug vercel", { redirectUrl });
        if (redirectUrl) {
          return apiClient.request({
            ...error.config,
            url: redirectUrl,
          });
        }
      }

      if (error.response?.status === 402) {
        const paymentStore = usePurchaseStore();
        paymentStore.purchaseModal = true;
        return Promise.reject(error);
      }

      if (error.response?.status === 405) {
        if (error.config?.method === "GET") {
          console.log("Retrying request with GET method...");
          return apiClient.post(error.config.url!);
        }
      }

      const toast = useToast();
      toast.add({
        title: error.response?.data?.detail || "Oops! We have a problem",
        description: "Hold on, it could be nothing!",
        duration: 5000,
        color: "error",
        icon: "i-lucide-server-crash",
      });

      return Promise.reject(error);
    }
  );

  return {
    provide: { apiClient },
  };
});
