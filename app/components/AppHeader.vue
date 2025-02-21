<script setup lang="ts">
const items = ref([
  {
    label: "",
    icon: "i-simple-icons-github",
    to: "https://github.com/vukadinFE/aurora-assessment",
  },
]);
</script>
<template>
  <header class="fixed top-0 left-0 z-50 w-full pt-4">
    <UContainer>
      <div
        class="flex gap-2 justify-between items-center p-4 border border-(--ui-border) rounded-xl bg-(--ui-bg)/70 backdrop-blur supports-[backdrop-filter]:bg-(--ui-bg)/70"
      >
        <NuxtLink to="/" class="flex items-center gap-2 mr-auto text-primary">
          <UIcon class="text-3xl" name="i-lucide-film" />
          <span class="text-xl font-bold">Aurora Movies</span>
        </NuxtLink>

        <UNavigationMenu :items="items" class="justify-center" />
      </div>
    </UContainer>
  </header>
</template>
