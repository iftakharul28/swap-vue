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
      <div class="flex space-x-4 group">
        <div v-for="(list, i) in props.lists" className="min-w-[273px] group-first:first:pl-4">
          <ProductCard
            :key="`card-no-${i}`"
            :title="list.info.name"
            :image="getFullImagePath(list.info.cloudinaryImageId, 'medium')"
            :tags="list.info.cuisines.map((cuisine) => ` ${cuisine}`).toString()"
            :stars="list.info.avgRating"
            :address="list.info.areaName"
            :offer_text="getOfferText(list)" />
        </div>
      </div>
    </div>
  </section>
</template>
<script setup lang="ts">
import getFullImagePath from '~/helpers/getImagePath';
import type { restaurantType } from '~/types/restaurant';
import ProductCard from '../card/ProductCard.vue';
import SliderArrowIcon from '~/assets/icons/SliderArrowIcon.vue';
const props = defineProps<{
  lists: Array<restaurantType>;
}>();

const scrollref = ref<any>(null);
const activeButton = ref({
  left: false,
  right: true,
});

const onScroll = (type: 'left' | 'right') => {
  if (!scrollref._value) return;
  const cardWidth = scrollref._value.childNodes.length ? scrollref._value.firstElementChild?.clientWidth || 0 : scrollref._value.scrollWidth / props.lists?.length!;
  const scrollLeftMax = Number(scrollref._value.scrollLeftMax);
  const scrollLeft = scrollref._value.scrollLeft;
  console.log(cardWidth, scrollLeftMax, scrollLeft);
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
const getOfferText = (list: restaurantType) => {
  if (list.info.aggregatedDiscountInfoV1 && list.info.aggregatedDiscountInfoV3 != undefined) {
    return `${list.info.aggregatedDiscountInfoV1?.header + ' ' + list.info.aggregatedDiscountInfoV1?.subHeader}`;
  } else if (list.info.aggregatedDiscountInfoV2 && list.info.aggregatedDiscountInfoV3 != undefined) {
    return `${list.info.aggregatedDiscountInfoV2?.header + ' ' + list.info.aggregatedDiscountInfoV2?.subHeader}`;
  } else if (list.info.aggregatedDiscountInfoV3 && list.info.aggregatedDiscountInfoV3 != undefined && list.info.aggregatedDiscountInfoV3?.header) {
    return `${list.info.aggregatedDiscountInfoV3?.header + ' ' + list.info.aggregatedDiscountInfoV3?.subHeader}`;
  } else {
    return '';
  }
};
</script>
