<template>
    <PostForm @postsend="savePost($event)"/>
</template>

<script>
import axios from 'axios'
import PostForm from '@/components/admin/PostForm'
export default {
    components: {
        PostForm
    },
    methods:{
        savePost(val){
            this.$store.dispatch('addPost', val)
            .then(res => {
                this.$router.push('/admin')
            })
        }
    }
}
</script>

<style>

</style>
