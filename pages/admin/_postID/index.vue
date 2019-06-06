<template>
    <PostForm @postsend="update($event)" :loadedpost="post" :is-updated="true" />
</template>

<script>
import axios from 'axios'
import PostForm from '@/components/admin/PostForm'
export default {
    data(){
        return{
            post: '',
            posts: []
        }
    },
    components: {
        PostForm
    },
    methods:{
        update(val){
            this.$store.dispatch('updatePost', {...val, id: this.$route.params.postID})
            .then(res => {
                this.$router.push('/admin')
            })
        }
    },
    created(){
        this.posts = this.$store.getters.getPosts
        for(let i in this.posts){
            if(this.posts[i].id == this.$route.params.postID){
                this.post = this.posts[i] 
            }
        }
    }
}
</script>

<style>

</style>
