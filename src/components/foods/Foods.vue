<template lang="">
  <div class="bg-white">
    <div class="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
      <h1>Total Foods: {{length}}</h1>
      <div  class="grid grid-cols-1 gap-y-20 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 xl:gap-x-8">
        <div v-for="(item, index) in lists" :key="index">
            <div class="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
              <img v-bind:src="item.strCategoryThumb" class="h-full w-full object-cover object-center group-hover:opacity-75">
            </div>
            <h3 class="mt-4 text-sm text-gray-700">{{item.strCategory}}</h3>
            <p>{{item.strCategoryDescription.slice(0, 150)}}</p>
            <p class="mt-1 text-lg font-medium text-gray-900">$48</p>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import {mydata} from "../../hooks/hooks"

export default {
    name: 'Foods',
    
    data() {
    return {
      lists: [],
      length: 0,
    };
  },

  mounted() {
    mydata().then((data) => {
      this.lists = data.categories;
      this.length = data.categories.length;
    });
  },

}
</script>
<style scoped>
    
</style>  