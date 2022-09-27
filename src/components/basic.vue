<template>
    <div class="container-fluid">
        <div class="information" v-text="weight"></div>
        <div class="information" v-text="height"></div>
        <div class="information" v-text="habitat"></div>
        <div class="types">
            <div v-for="(type, index) in types" class="information" :class="type.type.name">
                <span v-text="type.type.name"></span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:"basic",
    props:{
        weight:{
            type:Number,
            default:0,
        },
        height:{
            type:Number,
            default:0,
        },
        habitat:{
            type:String,
            default:"not known",
        },
        types:{
            type:Object,
        }

    }
}
</script>

<style scoped>
.container-fluid{
    width:100%;
    background: yellow;
    display:flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
    padding:10px;
    border:3px solid black;
    border-radius: 2
    0px;
}
.container-fluid div{
    margin:5px;
}
.information{
    border:2px solid black;
    border-radius:30px;
    width:70px;
    text-align: center;
}
.types{
    width:100%;
    border-top:7px inset rgba(00, 00, 00, 0.5);
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
}
</style>