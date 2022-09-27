<template>
    <div :class="type">
        <img :src="img">
        <p>{{name}}</p>
    </div>

</template>

<script>
export default {
    name:"card",
    props:{
        type:{
            type:String,
            default:"normal",
        },
        img:{
            type:String,
            default:"https://arc-anglerfish-arc2-prod-copesa.s3.amazonaws.com/public/LUOOHUM2OVEEXG7ZTRSNI6XWLY.png"
        },
        name:{
            type:String,
            default:"Pókemon not founded",
        }
    },
    computed:{
        toUpper(value){
            console.log(value);
            return value.Uppercase();
        }
    }
    
}
</script>

<style scoped>
div{
    width:80%;
    border:3px solid black;
    border-radius:20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
}
img{
    background: rgba(00,00,00,0.5);
    border-radius:inherit;
    height: 100px;
    margin:3px 0 10px 0;
}
p{
    display:block;
    background: rgba(00,00,00,0.7);
    color:aliceblue;
    width:100%;
    text-align: center;
}

</style>