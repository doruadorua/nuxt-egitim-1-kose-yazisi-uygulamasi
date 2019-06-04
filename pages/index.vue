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
    }/* ,
    fetch(context){
        return new Promise((resolve, reject) => {
            context.store.dispatch('setPosts', 
                [
                    {id: 1, title: 'baslik #1', subtitle: 'subtitle #1', text: 'text #1', author: 'doruadorua'}, 
                    {id: 2, title: 'baslik #2', subtitle: 'subtitle #2', text: 'text #2', author: 'doruadorua'},
                    {id: 3, title: 'falan', subtitle: 'filan', text: 'inter milan', author: 'doruadorua'}
                ])
            resolve()
        }).catch((e) => {
            console.log(e)
        })
    } */
}
</script>

<style>

</style>
