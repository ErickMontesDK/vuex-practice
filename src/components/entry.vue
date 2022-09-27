<template>
    <div>
        <p v-text="nickname"></p>
        <p v-text="entry"></p>
    </div>
</template>

<script>
export default {
    name:"entry",
    props:{
        nickname:{
            type:String,
            default:"nope"
        },
        entry:{
            type:String,
            default:"nope"
        }
    }
}
</script>

<style scoped>
div{
    background: green;
    border:3px inset;
    height:100px;
    width:100%;
}
div p:first-child{
    background: rgba(00, 00, 00, 0.3);
    color:green;
}
</style>