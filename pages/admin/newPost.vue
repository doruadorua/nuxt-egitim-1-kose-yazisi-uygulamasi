<template>
    <PostForm @post="savePost($event)"/>
</template>

<script>
import PostForm from '@/components/admin/PostForm'
export default {
    components: {
        PostForm
    },
    methods:{
        savePost(val){
            console.log(val)
        }
    }
}
</script>

<style>

</style>
