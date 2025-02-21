<template>
  <span ref="trigger" />
</template>

<script lang="ts" setup>
import { ref, onMounted, onUnmounted, defineProps, defineEmits } from "vue";

type Props = {
  options?: {
    root?: null | HTMLElement;
    threshold: number | number[];
  };
  stop?: boolean;
};

const props = defineProps<Props>();

const emit = defineEmits(["intersected"]);

const observer = ref<IntersectionObserver | null>(null);
const trigger = ref<HTMLElement | null>(null);

const handleIntersect = (entry: IntersectionObserverEntry) => {
  if (entry.isIntersecting && !props.stop) emit("intersected");
};

onMounted(() => {
  observer.value = new IntersectionObserver((entries) => {
    if (entries[0]) {
      handleIntersect(entries[0]);
    }
  }, props.options);

  if (trigger.value) {
    observer.value.observe(trigger.value);
  }
});

onUnmounted(() => {
  observer.value?.disconnect();
});
</script>

<style scoped></style>
