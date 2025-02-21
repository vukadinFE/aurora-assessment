import { defineStore } from "pinia";

export const usePurchaseStore = defineStore("purchase", () => {
  const purchaseModal = ref(false);

  return { purchaseModal };
});
