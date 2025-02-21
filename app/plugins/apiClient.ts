import axios, { type AxiosError } from "axios";
import { usePurchaseStore } from "~/store/usePurchaseStore";

export default defineNuxtPlugin(() => {
  const baseURL =
    useRuntimeConfig().public.API_BASE ||
    "https://november7-730026606190.europe-west1.run.app/";
  const apiClient = axios.create({
    baseURL,
    maxRedirects: 5,
    withCredentials: false,
  });

  apiClient.interceptors.response.use(
    (response) => response,
    async (error: AxiosError<{ detail: string }>) => {
      if (error.response?.status === 307) {
        const redirectUrl = error.response.headers.location.replace(
          "http://",
          "https://"
        );
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
