<script lang="ts" setup>
import { usePurchaseStore } from "~/store/usePurchaseStore";

const purchaseStore = usePurchaseStore();
</script>

<template>
  <UModal
    title="Payment Required"
    description="You reached the limit of free movies."
    v-model:open="purchaseStore.purchaseModal"
    :dismissible="false"
  >
    <template #body>
      <h2 class="text-2xl text-center py-10 px-5">
        Subscription plans will be available soon. Stay tuned! 🚀
      </h2>
    </template>
  </UModal>
</template>
