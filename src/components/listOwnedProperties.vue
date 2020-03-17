<template>
    <div id="wrapper">
        <table>
            <!-- <div v-show="playerID !== null">
                <span>Player id is not NULL</span>
                <tr v-for="items in getActivePlayer[0].properties_owned" :key="items">
                    <td class="propertyCellCheckbox"><input type="checkbox" :id="items" title="Check this box to include this property in the trade."></td>
                    <td class="propertyCellColor" >{{randomColorGenerator()}}</td>
                    <td class="propertyCellName">{{items}}</td>
                    <span>Player id = not  Null {{getDetailsByPlayerID(3)}}</span>
                </tr>
            </div>
            <div v-show="playerID == null">
                <span>Player ID is NULL</span>
                <tr v-for="items in getNonActivePlayer[0].properties_owned" :key="items">
                    <td class="propertyCellCheckbox"><input type="checkbox" :id="items" title="Check this box to include this property in the trade."></td>
                    <td class="propertyCellColor" >{{randomColorGenerator()}}</td>
                    <td class="propertyCellName">{{items}}</td>
                    <span>Player id = Null {{getDetailsByPlayerID(1)}}</span>
                </tr>
            </div>
             -->

             <div id="activePlayerArrayLoop">
                 <tr v-for="item in getActivePlayerOwnedItems" :key="item.index">
                    <td class="propertyCellCheckbox"><input type="checkbox" :id="items" title="Check this box to include this property in the trade."></td>
                    <td class="propertyCellColor" :style="{ 'background-color': randomColorGenerator()}"></td>
                    <td class="propertyCellName">{{item.title}}</td>
                </tr>
             </div>
             <hr/>
             <div id="nonActivePlayerOwnedProperties">
                 <tr v-for="item in this.getNonActivePlayerItems" :key="item"> 
                    <td class="propertyCellCheckbox"><input type="checkbox" :id="items" title="Check this box to include this property in the trade."></td>
                    <td class="propertyCellColor" :style="{ 'background-color': randomColorGenerator()}"></td>
                    <td class="propertyCellName">{{item.title}}</td>
                </tr>
             </div>
        </table>
    </div>
</template>

<script>
export default {
    name: 'listOwnedProperties',
    props:{ playerID : String },

    // data: function() {
    //     return {
    //         playerColor: {'background-color': 'red', 'border-color': 'blue'}
    //     }
    // },
    computed: {
        getActivePlayer : function(){
            return this.$store.getters.activePlayer;
        },

        getNonActivePlayer : function(){
            return this.$store.getters.nonActivePlayers;
        },

        getActivePlayerOwnedItems : function(){
            var EachboardCell = this.$store.getters.getBoardCell;
            var activePlayerOwnedItems =  this.$store.getters.activePlayer[0].properties_owned;
            return EachboardCell.filter(value => activePlayerOwnedItems.includes(value.index));
        },

        getNonActivePlayerItems : function(){
            return this.getPlayerOwnedItems(this.playerID);

        },

        // getNonActivePlayerOwnedItems :  function(playerID){
        //     var EachboardCell = this.$store.getters.getBoardCell;
        //     var nonActivePlayers =  this.$store.getters.nonActivePlayers;
        //     var nonActivePlayersOwnedItems = nonActivePlayers.filter(item => item.properties_owned);
        //     console.log(nonActivePlayersOwnedItems);
        //     console.log(EachboardCell[4].index);
        //     return EachboardCell[4].index;
        //     // return EachboardCell.filter(value => nonActivePlayersOwnedItems.includes(value.index));
        //     // return nonActivePlayersOwnedItems;
        // }   
    },
    methods: {
        randomColorGenerator : function(){
            var letters = '0123456789ABCDEF';
            var color = '#';
            for (var i=0; i<6; i++){
                color += letters[Math.floor(Math.random() * 16)];
            }
            return color;
        },
        
        getDetailsByPlayerID: function(playerID){
            var nonActivePlayersArr = this.$store.getters.nonActivePlayers;
            return nonActivePlayersArr.filter(item => item.player == this.playerID);
        },

        getPlayerOwnedItems : function(playerID) {
            console.log("nworking :>>>>");
            var EachboardCell = this.$store.getters.getBoardCell;
            console.log(EachboardCell.filter(item => item.player_owned == playerID),'PlayerID: ',this.playerID);
            return EachboardCell.filter(item => item.player_owned == this.playerID);          
        }
    }
}
</script>

<style scoped>
    .propertyCellCheckbox {
        width: 20px;
        height: 20px;
        border: none;
        vertical-align: middle;
    }

    .propertyCellColor {
        padding: 0px;
        width: 20px;
        height: 20px;
        border-width: 1px;
        border-style: solid;
        border-color: white;
    }

    .propertyCellName {
        height: 20px;
        width: 250px;
        border: none;
        cursor: default;
        text-align: left;
        vertical-align: middle;
    }
</style>