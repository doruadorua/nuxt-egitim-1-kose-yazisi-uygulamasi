<template>
    <div class="card mr-3 mb-3 card-success" style="width: 18rem;">
        <div class="card-body">
            <h5 class="card-title"> {{ postDet.title }} </h5>
            <h6 class="card-subtitle mb-2 text-muted"> {{ postDet.subtitle }} </h6>
            <p class="card-text"> {{ postDet.text }} </p>
            <div v-if="isAdmin">
                <a href="#" @click.prevent="$router.push('/admin/' + postDet.id)" class="btn btn-outline-warning btn-sm">Düzenle</a>
                <a href="#" class="btn btn-outline-danger btn-sm">Sil</a>
            </div>
            <a v-else href="#" @click.prevent="$router.push('/posts/' + postDet.id)" class="btn btn-outline-info btn-sm">Görüntüle</a>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        isAdmin:{
            type: Boolean,
            required: true
        },
        postDet:{
            type: Object,
            required: true
        }
    }

}
</script>

<style>

</style>
