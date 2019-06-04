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
    asyncData(context, callback){
        setTimeout(() => {
            callback(null, {
                postLists: [
                    {id: 1, title: 'baslik #1', subtitle: 'subtitle #1', text: 'text #1', author: 'doruadorua'},
                    {id: 2, title: 'baslik #2', subtitle: 'subtitle #2', text: 'text #2', author: 'doruadorua'}
                ]
            })
        }, 2000)
    }
}
</script>

<style>

</style>
