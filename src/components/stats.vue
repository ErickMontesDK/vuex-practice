<template>
    <div class="bars">
        <div class="bar" v-for="(stat,index,key) in stats">
            <span>{{stat.base_stat}}</span>
            <span>{{stat.stat.name}}</span>
        </div>  
    </div>
</template>

<script>
    

export default {
    name:"stats",
    components:{
        
    },
    props: {
        stats:Object,
    },
    computed:{
        statsInfo(){
            let stats = this.$store.getters.getStats;
            console.log(stats);
            let css=[];

            for (let i=0; i<stats.length; i++) {
                css.push(`height:"${stats[i].value}"`);
            }
            return css;
        }
    }
}
</script>

<style scoped>
.bars{
    background: purple;
    height:100px;
    width:100%;
    display:flex;
    flex-direction: row;
    justify-content: space-around;
}
.bar{
    width:calc(90%/6);
    display:flex;
    flex-direction: column;
    align-items: center;
}
.progress{
    background: rgba(00, 00, 00, 0.5);
    width:100%;
}
</style>