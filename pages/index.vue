<script setup lang="ts">
import baseUrl from '@/helpers/baseUrl';
import HeroSlider from '~/components/slider/HeroSlider.vue';
import ProductList from '~/components/ProductList.vue';
import CategorySlider from '~/components/slider/CategorySlider.vue';
import ProductSlider from '~/components/slider/ProductSlider.vue';
useHead({
  title: 'Order food online from Indias best food delivery service. Order from restaurants near you',
  meta: [
    {
      name: 'description',
      content:
        'Order food online from restaurants and get it delivered. Serving in Bangalore, Hyderabad, Delhi, Gurgaon, Nagpur, Jaipur, Coimbatore, Chandigarh, Ahemdabad, Visakhapatnam, Lucknow, Noida, Mumbai, Pune, Indore, Kochi, Kolkata and Chennai. Order Pizzas, Burgers, Biryanis, Desserts or order from Subway, Pizza Hut, Dominos, KFC, McDonalds.',
    },
  ],
});
const { pending, data: contents } = await useFetch(`${baseUrl()}/api/restaurants/list`, {
  method: 'get',
  lazy: true,
});
function increment() {
  console.log('hi');
}
const array = [
  {
    id: 1,
    name: 'jul',
  },
  {
    id: 2,
    name: 'abb',
  },
];
</script>
<template>
  <div v-if="pending">Loading ...</div>
  <template v-else v-for="(content, i) in contents">
    <HeroSlider v-if="i === 0" v-bind:lists="content.lists?.info ? content.lists?.info : []" />
    <CategorySlider v-else-if="i === 1" v-bind:lists="content.lists?.info ? content.lists?.info : []" />
    <template v-else-if="i === 5">
      <ProductSlider v-bind:lists="content.lists?.restaurants ? content.lists?.restaurants : []" />
      <ProductList v-bind:lists="content.lists?.restaurants ? content.lists?.restaurants : []" />
    </template>
  </template>
</template>
