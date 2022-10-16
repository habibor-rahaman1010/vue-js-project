<template>
    <div style="box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 5px 0px, rgba(0, 0, 0, 0.1) 0px 0px 1px 0px;">
        <div class=" bg-white">
            <div class="mx-auto max-w-4xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-2">
                <h2 class="text-2xl font-bold tracking-tight text-gray-900">Product List</h2>

                <div class="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">

                    <div v-for="() in 8" class="product group relative">
                        <div class="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-80">
                        <img src="https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg" alt="Front of men&#039;s Basic Tee in black." class="h-full w-full object-cover object-center lg:h-full lg:w-full">
                        </div>
                        <div class="mt-4 flex justify-between">
                        <div>
                            <h3 class="text-sm text-gray-700">
                            <a href="#">
                                <span aria-hidden="true" class="absolute inset-0"></span>
                                Basic Tee 
                            </a>
                            <h3>{{item}}</h3>
                            </h3>
                            <p class="mt-1 text-sm text-gray-500">Black</p>
                        </div>
                        <p class="text-sm font-medium text-gray-900">$35</p>
                        </div>
                    </div>

                <!-- More products... -->

                </div>
            </div>
            
        </div>
    </div>

    <Feature />

</template>
<script>
import Featur from '../product/Feature.vue'
import Feature from './Feature.vue'

export default {
    name: 'Product',
    components: {
    Feature
}

}
</script>
<style scoped>
    .product{
        box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
        padding: 12px;
        border-radius: 3px;
    }
</style>