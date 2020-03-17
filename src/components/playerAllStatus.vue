<template>
<div>
    <div v-for="player in getAllPlayer" :key="player.player" class="container">
        <div id="name" style="display: block;">
            {{player.name}}
        </div>
        <div id="amount" style="display: block;">
             {{player.amount}}
        </div>
    </div>
</div>   
</template>

<script>
export default {
    name: 'allPlayerStatus',
    computed: {
        getAllPlayer : function(){
            return this.$store.getters.allPlayers;
        }
    }
}
</script>

<style scoped>
.container{
    border: 1px solid #ccc;
    display: inline-block;
    padding: 16px;
    margin: 20px;
}

</style>