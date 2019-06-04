<template>
    <div class="container-fluid mt-5 d-flex flex-wrap justify-content-center align-items-center">
        <Post v-for="post in posts" :key="post.id" :postDet="post" :is-admin="isAdmin"/>
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
        },
        posts: {
            type: Array,
            required: true
        }
    }
}
</script>

<style>

</style>
