<template>
<div>
    <div class="container d-flex justify-content-center align-items-center">
        <button @click="$router.push('/admin/newPost')" class="btn btn-dark">Yeni Bir Yazı Ekle</button>
    </div>
    <PostList :posts="fetchedPosts" :is-admin="true" />
</div>
</template>

<script>
import PostList from '@/components/post/postList'
export default {
    layout: 'admin',
    components: {
        PostList
    },
    computed:{
        fetchedPosts(){
            return this.$store.getters.getPosts
        }
    }
}
</script>

<style>

</style>
