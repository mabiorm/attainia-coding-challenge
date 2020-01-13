<template>
    <div class="navbar mb-4">
        <h2>Users</h2>
        <div class="nav-links">
            <router-link to="/" class="btn">Page 1</router-link>
            <router-link to="/page2" class="btn">Page 2</router-link>
        </div>
    </div>
</template>

<script>
export default {
    methods: {
        currentPage: function(el){
            el.className = "active";
        }
    }
}
</script>

<style scoped>
    .nav-links {
        text-decoration: none;
        display: flex;
    }
    .nav-links>a{
        margin: 0 10px;
    }
    .router-link-exact-active{
        background-color: white
    }
    .navbar{
        display: flex;
        justify-content: space-between;
        background-color: whitesmoke;
    }
</style>