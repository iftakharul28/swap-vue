<template>
  <section className="container my-9">
    <h2 className="text-2xl font-BasisGrotesqueProBlack">Best Places to Eat Across Cities</h2>
    <div className="flex flex-wrap mt-4">
      <Badage
        v-for="(item, i) in props.lists.slice(0, showAll)"
        :key="`card-no-${i}`"
        class="flex justify-center flex-[1_1_20%] mx-4 mb-4 rounded p-4 border border-card-3"
        :name="item.text"
        type="button"
        :url="item.link" />
      <Badage
        v-if="showAll !== props.lists.length + 1"
        class="flex justify-center flex-[1_1_20%] mx-4 mb-4 rounded p-4 border border-card-3"
        name="Show More"
        type="button"
        :click="() => (showAll = props.lists.length + 1)" />
    </div>
  </section>
</template>
<script setup lang="ts">
import Badage from './Badage.vue';
import type { brandsType } from '~/types/restaurant';
const showAll = useState('showAll', () => 7);
const props = defineProps<{
  lists: brandsType[];
}>();
</script>
