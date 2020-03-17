<template>
    <div>
        <listOwnedProperties :playerID="3"/>
        <div id="wrapper">
            <div id="trade">
                <table style="border-spacing: 4px;">
                    <tr>
                        <td class="trade-cell">
                            <div id="trade-leftp-name">{{getActivePlayer[0].name}} (Player {{getActivePlayer[0].player}})</div>
                        </td>
                        <td class="trade-cell">
                            <div id="trade-rightp-name">
                                <select v-model="selected">
                                    <option v-for="eachPlayer in getNonActivePlayers" :key="eachPlayer.player" :value="{ playerID: eachPlayer.player, name: eachPlayer.name}">
                                        {{eachPlayer.name}} (Player {{eachPlayer.player}}
                                    </option>
                                </select>

                            </div>
                            <div id="test2">{{selected}}</div>
                        </td>
                    </tr>
                    <tr>
                        <td class="trade-cell">
                            &#8377;<input id="trade-leftp-money" value="0" title="Enter amount to exchange with the other player." />
                        </td>
                        <td class="trade-cell">
                            &#8377;<input id="trade-rightp-money" value="0" title="Enter amount to exchange with the other player." />
                        </td>
                    </tr>
                    <tr>
                        <td id="trade-leftp-property" class="trade-cell"></td>
                        <td id="trade-rightp-property" class="trade-cell"></td>
                    </tr>
                    <tr>
                        <td colspan="2" class="trade-cell">
                            <input type="button" id="proposetradebutton" value="Propose Trade" onclick="game.proposeTrade();" title="Exchange the money and properties that are checked above." />
                            <input type="button" id="canceltradebutton" value="Cancel Trade" onclick='game.cancelTrade();' title="Cancel the trade." />
                            <input type="button" id="accepttradebutton" value="Accept Trade" onclick="game.acceptTrade();" title="Accept the proposed trade." style="display: none;"/>
                            <input type="button" id="rejecttradebutton" value="Reject Trade" onclick='game.cancelTrade();' title="Reject the proposed trade." style="display: none;"/>
                        </td>
                    </tr>
                </table>
                <hr/>
                
                <hr/>
            </div>
        </div>
    </div>

  
</template>
<script>
import listOwnedProperties from '../listOwnedProperties'

export default {
    data: function(){
      return {
      selected: ''}},

    components: {
        listOwnedProperties
    },
      
    computed: {
        getActivePlayer : function(){
            return this.$store.getters.activePlayer;
        },

        getNonActivePlayers : function(){
            return this.$store.getters.nonActivePlayers;
        },

        getEachCellValue : function() {
            return this.$store.getters.getBoardCell;
        },

        getActivePlayerOwnedItems : function() {
            var EachboardCell = this.$store.getters.getBoardCell;
            var activePlayerOwnedItems =  this.$store.getters.activePlayer[0].properties_owned;
            return EachboardCell.filter(value => activePlayerOwnedItems.includes(value.index));
        },

        //Trigger Select event when opponent player changes

        
    },

    methods: {
        getPlayerOwnedItems : function(playerID) {
            console.log("nworking :>>>>");
            var EachboardCell = this.$store.getters.getBoardCell;
            return EachboardCell.filter(item => item.player_owned == playerID);          
        }
    }
}
</script>
<style scoped>
#wrapper {
    border: 1px solid #000000;
    border-radius: 26px 26px 26px 26px;
    vertical-align: middle;
    align-content: center;
}

.trade-cell {
	border: none;
	border-radius: 3px;
	width: 308px;
	height: 26px;
	vertical-align: middle;
}

input [type="text"] {
    margin: 1px 8px;
}

.playerHeading {
    font-size: 13px;
    font-weight: bold;
    display: block;
}
</style>