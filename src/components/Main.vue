<template>
    <div>
        <Header />
        <router-view />
    </div>
</template>


<script>
import Header from './header/Header.vue';
export default {
    name: 'Main',
    components: {
    Header
}
}
</script>


<style scoped>
    
</style>