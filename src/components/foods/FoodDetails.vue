<template lang="">
    <div>
       
        <div class="bg-white">
            <div class="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-4xl lg:px-8">
                <h1>Total Foods: {{length}}</h1>
                <div  class="grid grid-cols-1 gap-y-20 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-1 xl:gap-x-12">
                    <div v-for="(item, index) in detailsFood" :key="index">
                        <div class="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
                        <img v-bind:src="item.strMealThumb" class="h-full w-full object-cover object-center group-hover:opacity-75">
                        </div>
                        <p class="mt-4 text-lg text-gray-700"><strong>{{item.strCategory}}</strong></p>
                        <p class="mt-4 text-lg text-gray-700"><strong>{{item.strMeal}}</strong></p>
                        <p class="mt-4 text-lg text-gray-700"><strong>{{item.strArea}}</strong></p>
                        <p class="mt-4 text-lg text-gray-700"><strong>{{item.strTags}}</strong></p>
                        <p class="mt-4 text-lg text-gray-700"><strong>{{item.strIngredient1}}</strong></p>
                        <p class="mt-4 text-lg text-gray-700"><strong>{{item.strIngredient2}}</strong></p>

                        <p class="mt-4 text-lg text-gray-700">{{item.strInstructions}}</p>
                        <p class="mt-1 text-lg font-medium text-gray-900">$48</p>
                    </div>
                </div>
                <button class="btn" @click="reDirect('AllFoods')">Back</button>   <!-- use component name by redirect-->
            </div>
        </div>

       <!--<router-link to="/">Back</router-link><br><br> -->  <!-- use direct route path by redirect-->
       <!-- <button @click="reDirect('/')">Back</button> <br><br>-->   <!-- use direct route path by redirect-->

    </div>
</template>
<script>
export default {
    name: 'FoodDetails',

    data() {
        return{
            mealId: this.$route.params.id,   
            detailsFood: [],
            length: 0, 
        }
    },

    mounted(){
        fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${this.mealId}`)
        .then((res) => res.json())
        .then((data) => {
            this.detailsFood = data.meals;
            this.length = data.meals.length;
        })
    },

    // for button
    methods: {
        reDirect(home){
            this.$router.push({name: home})  //use component name by redirect
            //this.$router.push(home)  //use direct route path by redirect
        }
    }
}
</script>
<style scoped>
    .btn{
       color: green;
       margin-top: 20px;
       background: lightgray;
       padding: 7px 20px;
       border-radius: 4px;
    }
</style>