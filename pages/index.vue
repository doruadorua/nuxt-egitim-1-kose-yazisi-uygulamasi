<template>
<div>
    <PostList />
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
    }
}
</script>

<style>

</style>
