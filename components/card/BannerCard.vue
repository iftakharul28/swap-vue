<template>
  <div :aria-label="$props.title" class="w-max group-first:first:pl-4">
    <figure class="w-[425px] h-[252px]">
      <img class="h-full w-full object-cover" :src="$props.image" :alt="$props.title" />
    </figure>
  </div>
</template>
<script lang="ts">
export default {
  props: {
    image: String,
    title: String,
  },
};
</script>
