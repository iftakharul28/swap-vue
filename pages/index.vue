<script setup lang="ts">
import baseUrl from '@/helpers/baseUrl';
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
    <ProductList v-if="i === 5" v-bind:lists="content.lists?.restaurants ? content.lists?.restaurants : []" />
  </template>
</template>
