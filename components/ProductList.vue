<template>
  <section class="container my-9">
    <div>
      <h2 class="text-2xl font-BasisGrotesqueProBlack">Restaurants with online food delivery in Mumbai</h2>
    </div>
    <div class="card-wrapper mt-10">
      <ProductCard
        v-for="(list, i) in props.lists"
        :key="`card-no-${i}`"
        :title="list.info.name"
        :image="`${mediaPath.medium}/${list.info.cloudinaryImageId}`"
        :tags="list.info.cuisines.map((cuisine) => ` ${cuisine}`).toString()"
        :stars="list.info.avgRating"
        :address="list.info.areaName"
        :offer_text="getOfferText(list)" />
    </div>
  </section>
</template>
<script setup lang="ts">
import { mediaPath } from '~/constants/variables';
import type { restaurantType } from '~/types/restaurant';
import ProductCard from './card/ProductCard.vue';
const props = defineProps<{
  lists: Array<restaurantType>;
}>();

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
