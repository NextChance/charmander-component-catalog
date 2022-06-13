<script setup lang="ts">
import { hasValue } from "@/utils/hasValue";
import { computed } from "vue";
import { VBtn } from "vuetify/components";

const props = defineProps<{
  type?: "primary" | "secondary" | "tertiary";
  isSmall?: boolean;
  isFitContent?: boolean;
  disabled?: boolean;
}>();

const getType = computed(() => (hasValue(props.type) ? props.type : "primary"));

const buttonHeight = props.isSmall ? 36 : 48;
</script>

<template>
  <v-btn
    :block="!isFitContent"
    :disabled="disabled"
    flat
    :height="buttonHeight"
    class="tc-button"
    :class="getType"
  >
    <slot></slot>
  </v-btn>
</template>

<style lang="scss">
.v-btn.tc-button {
  text-transform: none;
  letter-spacing: inherit;
  @extend .typography-high-s !optional;
}

.v-btn.tc-button.primary {
  background-color: var(--ch-button-primary-background-color, lightblue);
  color: var(--color-content-inverse);

  &:hover {
    opacity: 0.6;
  }

  &:active,
  &:disabled {
    opacity: 0.4;
  }
}

.v-btn.tc-button.secondary {
  @extend .tertiary !optional;

  border: solid 1px var(--color-primary-high);
}

.v-btn.tc-button.tertiary {
  @extend .tertiary !optional;
}

.tertiary {
  background-color: var(--color-content-inverse);
  color: var(--color-primary-high);

  &:hover {
    opacity: var(--disable-opacity);
  }

  &:active {
    opacity: 0.4;
  }

  &:disabled {
    opacity: 0.45;
  }

  .v-btn__overlay {
    background-color: var(--color-content-inverse);
  }
}
</style>
