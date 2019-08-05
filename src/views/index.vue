<template>
    <div>
        <div class="main">
            <navbarBox></navbarBox>
            <router-view></router-view>
        </div>
        <asideBox></asideBox>
    </div>
</template>

<script>
    import asideBox from './aside.vue'
    import navbarBox from './navbar.vue'

    export default {
        name: "index",
        components: {
            asideBox,
            navbarBox
        }
    }
</script>

<style scoped>
    @import "../assets/vendors/font-awesome/css/font-awesome.css";
</style>