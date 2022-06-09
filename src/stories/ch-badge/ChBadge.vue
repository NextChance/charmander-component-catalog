<script setup lang="ts">
import { computed } from "vue";

const props = defineProps<{
  value: number;
}>();

const formattedValue = computed(() => {
  if (props.value < 10) {
    return `0${props.value}`;
  } else {
    return props.value;
  }
});
</script>

<template>
  <div class="ch-badge">
    <span class="value">{{ formattedValue }}</span>
  </div>
</template>

<style lang="scss">
$size: 1.25rem;

.ch-badge {
  width: $size;
  height: $size;
  padding: var(--ch-badge-spacing, 0.5rem);

  @extend .typography-low-s !optional; // check another ways to add typography

  border-radius: 50%;
  color: var(--color-content-inverse, white);
  background-color: var(--color-primary-high, #f97070);

  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
