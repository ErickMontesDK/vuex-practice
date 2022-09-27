<template>
    <div :style="{'--hei':'long'+'px'}">
    </div>
</template>

<script>
export default {
    name:"foot",
    props:['long'],
    calculated:{
        
    }
}
</script>

<style scoped>
div{
    background: gray;
    height:var(--hei);
    width:100%;
}
</style>