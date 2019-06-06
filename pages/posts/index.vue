<template>
<div>
    <PostList :posts="postLists"/>
</div>
</template>

<script>
import PostList from '@/components/post/postList'
export default {
    components: {
        PostList
    },
    computed:{
        postLists(){
            return this.$store.getters.getPosts
        }
    }
}
</script>

<style>

</style>
