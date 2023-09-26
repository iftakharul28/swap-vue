<script setup lang="ts">
import { RouteLocationRaw } from '#vue-router';
const props = defineProps<{
  type: 'link' | 'button' | 'submit' | 'reset';
  href?: RouteLocationRaw;
  class: String;
  click?: (payload: MouseEvent) => void;
}>();
</script>
<template>
  <NuxtLink v-if="props.type === 'link'" :class="[props.class ? props.class : '']" :to="props.href"> <slot /></NuxtLink>
  <button @click="props.click" v-else type="button" :class="[props.class ? props.class : '']">
    <slot></slot>
  </button>
</template>
