<template>
    <div style="height: 80vh;">
        <div class="container h-50">
            <div class="row align-items-center h-50">
                <div class="col-8 mx-auto">
                    <div class="bg-vue h-100">
                        <h3>Seite nicht gefunden...</h3>
                    </div>
                </div>
            </div>
            <hr>
            <div class="row align-items-center h-100">
                <div class="col-8 mx-auto">                      
                    <p class="lead">
                        Zurück zum <router-link to="/">Shop</router-link>
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Notfound'
        
    }
</script>

<style  scoped>

</style>