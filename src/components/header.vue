<template>
<div class="container-fluid">
    <h1 v-text="title"></h1>
</div>
</template>

<script>
export default {
    name:"banner",
    props:{
        title:String,
    }
}
</script>

<style scoped>
div{
    background-color:red;
    height:100px;
    display: flex;
    justify-content: center;
    align-items: center;
}

</style>