<template>
  <section class="container mt-28">
    <div class="flex items-center justify-between">
      <h2 class="text-2xl font-BasisGrotesqueProBlack">Best offers for you</h2>
      <div class="flex gap-2">
        <button :class="['p-2 rounded-full bg-tertiary', activeButton.left ? '' : 'opacity-60']" @click="onScroll('left')" type="button" aria-label="click here to move previous">
          <SliderArrowIcon />
        </button>
        <button :class="['p-2 rounded-full bg-tertiary', activeButton.right ? '' : 'opacity-60']" @click="onScroll('right')" type="button" aria-label="click here to move next">
          <SliderArrowIcon class="rotate-180" />
        </button>
      </div>
    </div>
    <div class="overflow-x-scroll hide-scrollbar -mx-4 mt-9" ref="scrollref">
      <div class="flex space-x-4 group" ref="cardref">
        <BannerCard v-for="(list, i) in props.lists" :key="`card-no-${i}`" :title="list.accessibility.altText" :image="getFullImagePath(list.imageId, 'medium')" />
      </div>
    </div>
  </section>
</template>
<script setup lang="ts">
import type { restaurantInfoType } from '~/types/restaurant';
import BannerCard from '../card/BannerCard.vue';
import SliderArrowIcon from '~/assets/icons/SliderArrowIcon.vue';
import getFullImagePath from '~/helpers/getImagePath';
const props = defineProps<{
  lists: Array<restaurantInfoType>;
}>();

const scrollref = ref<any>(null);
const cardref = ref<any>(null);
const activeButton = ref({
  left: false,
  right: true,
});

const onScroll = (type: 'left' | 'right') => {
  if (!scrollref._value) return;
  const cardWidth = cardref._value.childNodes.length ? cardref._value.firstElementChild?.clientWidth || 0 : scrollref._value.scrollWidth / props.lists?.length!;
  const scrollLeftMax = Number(scrollref._value.scrollLeftMax);
  const scrollLeft = scrollref._value.scrollLeft;

  switch (type) {
    case 'right':
      if (scrollLeftMax === scrollLeft) {
        activeButton.value.left = true;
        activeButton.value.right = false;
        return;
      }
      if (scrollLeftMax > scrollLeft) {
        activeButton.value.left = true;
        activeButton.value.right = true;
      }
      // console.log(cardWidth);
      scrollref.value.scroll({
        left: scrollLeft + cardWidth * 2,
        behavior: 'smooth',
      });
      break;
    case 'left':
      if (scrollLeft === 0) {
        activeButton.value.left = false;
        activeButton.value.right = true;
        return;
      }
      if (scrollLeft > 0) {
        activeButton.value.left = true;
        activeButton.value.right = true;
      }
      // console.log(cardWidth);
      scrollref.value.scroll({
        left: scrollLeft - cardWidth * 2,
        behavior: 'smooth',
      });
      break;
  }
};
</script>
