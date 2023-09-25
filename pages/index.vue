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
const { pending, data } = await useFetch(`${baseUrl()}/api/restaurants/list`, {
  method: 'get',
  lazy: true,
});
</script>
<template>
  <p>Home Page</p>
  <p>hi this is a home page</p>
  <p>{{ JSON.stringify(data) }}</p>
</template>
