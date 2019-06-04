<template>
    <div>
        <div class="container-fluid bg p-0 d-flex justify-content-center align-items-center">
            <div class="overlay"></div>
            <h1 class="text-center text-white"> {{ fetchedData.title }} </h1>
            </div>
            <div class="container mt-5 d-flex flex-column justify-content-center align-items-center">
            <blockquote class="blockquote">
                <h3> {{ fetchedData.title }} </h3>
                <p> {{ fetchedData.subtitle }} </p>
                <p class="mb-0"> {{ fetchedData.text }} </p>
                <footer class="blockquote-footer">Someone famous in <cite title="Source Title"> {{ fetchedData.author }} </cite></footer>
            </blockquote>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            fetchedData: ''
        }
    },
    created(){
        //this.fetchedData = this.$store.getters('getSinglePost', this.$route.params.)
    }
}
</script>

<style>

</style>
