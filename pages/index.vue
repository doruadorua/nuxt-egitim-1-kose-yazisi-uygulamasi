<template>
<div>
    <PostList :posts="postLists"/>
    <About />
</div>
</template>

<script>
import PostList from '@/components/post/postList'
import About from '@/components/home/about'
export default {
    components: {
        PostList,
        About
    },
    data(){
        return{
        }
    },
    computed:{
        postLists(){
            return this.$store.getters.getPosts
        }
    },
    created(){
        console.log(this.postLists)
    }
}
</script>

<style>

</style>
