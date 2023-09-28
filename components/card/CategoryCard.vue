<template>
  <div :aria-label="$props.title" className="w-max group-first:first:pl-4">
    <figure className="w-[144px] h-[180px]">
      <img className="h-full w-full object-cover" :src="$props.image" :alt="$props.title" />
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
