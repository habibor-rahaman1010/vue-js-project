<template lang="">
    <div>
        <div class="bg-white">
            <div class="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
            <h1>Total Foods: {{length}}</h1>
            <div  class="grid grid-cols-1 gap-y-20 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 xl:gap-x-12">
                <div v-for="(item, index) in allFoods" :key="index">
                    <div class="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
                    <img v-bind:src="item.strMealThumb" class="h-full w-full object-cover object-center group-hover:opacity-75">
                    </div>
                    <h3 class="mt-4 text-sm text-gray-700">{{item.strCategory}}</h3>
                    <p>{{item.strInstructions.slice(0, 130)}}...</p>
                    <p class="mt-1 text-lg font-medium text-gray-900">$48</p>

                  <!-- <router-link class="button" :to="`/all-foods/food-details/${item.idMeal}`">Details More...</router-link> -->

                    <router-link class="button" :to="{name: 'FoodDetails', params: {id: item.idMeal}}">Details More...</router-link> <br> <br>
                    
                    <!-- <button @click="readPost(item.idMeal)">Read More</button> -->
                </div>
            </div>
        </div>
        </div>
    </div>
</template>


<script>
import {allFoods} from '../../hooks/hooks'

export default {
    name: 'AllFoods',

    data() {
        return{
            allFoods: [],
            length: 0,
        }
    },

    mounted(){
        allFoods().then((data) => {
            this.allFoods = data.meals;
            this.length = data.meals.length;
        })
    },
    
    // //for button
    // methods: {
    //     readPost(mealId){
    //         this.$router.push({name: 'FoodDetails', params: {id: mealId}})
    //     }
    // }
}
</script>
<style scoped>
    .button{
        color: rgb(0, 113, 128);
        padding-top: 14px;
        display: inline-block;
    }
</style>