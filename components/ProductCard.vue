<script lang="ts">
import Button from './Button.vue';

export default {
  props: {
    title: String,
    image: String,
    tags: String,
    address: String,
    offer_text: String,
    stars: Number,
  },
};
</script>
<template>
  <article>
    <Button type="link" :href="$props.title" class="block">
      <div className="relative before:h-0 before:block before:pb-[66.66%]">
        <figure className="absolute inset-0 h-full w-full rounded-2xl overflow-hidden">
          <img className="h-full w-full object-cover" :src="$props.image" :alt="$props.title" />
        </figure>
        <div v-if="$props.offer_text" className="absolute bottom-0 left-0 right-0 product-offer-text">
          <strong className="text-[22px] tracking-tighter font-BasisGrotesqueProBlack text-[rgba(255,255,255,0.92)] uppercase">{{ $props.offer_text }}</strong>
        </div>
      </div>
      <div className="">
        <div className=" text-lg text-card-1 font-bold">{{ $props.title }}</div>
        <div className="flex items-center gap-1 my-1">
          <StarIcon />
          <span className="text-base text-card-1">{{ $props.stars }}</span>
        </div>
        <div className="">
          <div className=" text-card-2 font-BasisGrotesqueProLight font-extralight overflow-hidden line-clamp-1">{{ $props.tags }}</div>
          <div className="text-card-2">{{ $props.address }}</div>
        </div>
      </div>
    </Button>
  </article>
</template>
