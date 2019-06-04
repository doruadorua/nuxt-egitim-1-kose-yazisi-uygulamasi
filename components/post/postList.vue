<template>
    <div class="container-fluid mt-5 d-flex flex-wrap justify-content-center align-items-center">
        <Post v-for="index in 5" :key="index" :is-admin="isAdmin"/>
    </div>
</template>

<script>
import Post from '@/components/post/post'
export default {
    components: {
        Post
    },
    props: {
        isAdmin: {
            type: Boolean,
            default: false
        }
    }
}
</script>

<style>

</style>
