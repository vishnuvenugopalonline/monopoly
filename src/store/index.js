import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
export default new Vuex.Store({
  state: {
    playerStatus: [
                  {'player':1, 'name': 'Lallu', 'amount':2000, 'score':0, 'position':0,'house_owned':3,'restaurant_owned':10, 'active': false, 'properties_owned': [1,3,5], 'playing': true, 'notifications':[{'title': 'trade', 'tradeCount': 0, 'tradeItems':[]}]},
                  {'player':2, 'name': 'Rahul', 'amount':2000, 'score':0, 'position':5,'house_owned':5,'restaurant_owned':2, 'active': true, 'properties_owned': [1,3,5,6], 'playing': true, 'notifications':[{'title': 'trade', 'tradeCount': 0, 'tradeItems':[]}]},
                  {'player':3, 'name': 'Niyon', 'amount':2000, 'score':0, 'position':9,'house_owned':6,'restaurant_owned':3, 'active': false, 'properties_owned': [], 'playing': true, 'notifications':[{'title': 'trade', 'tradeCount': 0, 'tradeItems':[]}]},
                  {'player':4, 'name': 'Tony', 'amount':2000, 'score':0, 'position':7,'house_owned':7,'restaurant_owned':4, 'active': false, 'properties_owned': [], 'playing': true, 'notifications':[{'title': 'trade', 'tradeCount': 0, 'tradeItems':[]}]}
                ],
                // Player 1 = playerStatus[0], 
                // Player 2 = playerStatus[1], 
                // Player 3 = playerStatus[2],
                // Player 4 = playerStatus[3]
    diceValues: [
                {'name':'dice1', 'value':0},
                {'name':'dice2', 'value':0},
                {'name':'totalDiceValue', 'value': 0}
              ],

    boardCell: [
                {'index':0, 'title':'Go', 'price': null, 'type':'defaultCell', 'player_owned': null, 'players_stay':[],'house': null},
                {'index':1, 'title':'MG Road', 'price': 80, 'type':'property', 'player_owned': null, 'players_stay':[],'house': null},
                {'index':2, 'title':'Community Chest', 'price': null, 'type':'Community Chest', 'player_owned': null, 'players_stay':[],'house': null}, 
                {'index':3, 'title':'Lucknow', 'price': 100, 'type':'property', 'player_owned': 4, 'players_stay':[],'house': null},
                {'index':4, 'title':'Income Tax', 'price': 100, 'type':'service', 'player_owned': null, 'players_stay':[],'house': null},
                {'index':5, 'title':'Kanpur Railway Station', 'price': 120, 'type':'service', 'player_owned': null, 'players_stay':[],'house': null},
                {'index':6, 'title':'Oriental Avenue', 'price': 100, 'type':'property', 'player_owned': null, 'players_stay':[],'house': null}, 
                {'index':7, 'title':'Chance', 'price': null, 'type':'Chance', 'player_owned': null, 'players_stay':[],'house': null},
                {'index':8, 'title':'Central Perk', 'price': 200, 'type':'property', 'player_owned': 2, 'players_stay':[],'house': null},
                {'index':9, 'title':'Hilltop View', 'price': 130, 'type':'property', 'player_owned': null, 'players_stay':[],'house': null},
                {'index':10, 'title':'Jail', 'price': null, 'type':'defaultCell', 'player_owned': null, 'players_stay':[],'house': null},
                {'index':11, 'title':'Red Fort', 'price': 140, 'type':'property', 'player_owned': null, 'players_stay':[],'house': null},
                {'index':12, 'title':'Electric Company', 'price': 150, 'type':'service', 'player_owned': 1, 'players_stay':[],'house': null},
                {'index':13, 'title':'Taj Mahal', 'price': 180, 'type':'property', 'player_owned': null, 'players_stay':[],'house': null},
                {'index':14, 'title':'Ladakh', 'price': 200, 'type':'property', 'player_owned': 2, 'players_stay':[],'house': null},
                {'index':15, 'title':'Old Delhi Railway Station', 'price': 160, 'type':'service', 'player_owned': null, 'players_stay':[],'house': null},
                {'index':16, 'title':'St. Peters Tower', 'price': 100, 'type':'property', 'player_owned': null, 'players_stay':[],'house': null},
                {'index':17, 'title':'Community Chest', 'price': null, 'type':'Community Chest', 'player_owned': null, 'players_stay':[],'house': null},
                {'index':18, 'title':'Sports Hub', 'price': 200, 'type':'property', 'player_owned': 4, 'players_stay':[],'house': null},
                {'index':19, 'title':'TownHall', 'price': 150, 'type':'property', 'player_owned': 2, 'players_stay':[],'house': null},
                {'index':20, 'title':'Free Parking', 'price': null, 'type':'defaultCell', 'player_owned': null, 'players_stay':[],'house': null},
                {'index':21, 'title':'Jaipur', 'price': 220, 'type':'property', 'player_owned': 3, 'players_stay':[],'house': null},
                {'index':22, 'title':'Chance', 'price': null, 'type':'Chance', 'player_owned': null, 'players_stay':[],'house': null},
                {'index':23, 'title':'Kochi', 'price': 250, 'type':'property', 'player_owned': 2, 'players_stay':[],'house': null},
                {'index':24, 'title':'Clock Tower', 'price': 140, 'type':'property', 'player_owned': 4, 'players_stay':[],'house': null},
                {'index':25, 'title':'Cuttack Railway Station', 'price': 150, 'type':'service', 'player_owned': 1, 'players_stay':[],'house': null},
                {'index':26, 'title':'Surat', 'price': 190, 'type':'property', 'player_owned': 3, 'players_stay':[],'house': null},
                {'index':27, 'title':'Ambakar Road', 'price': 130, 'type':'property', 'player_owned': 3, 'players_stay':[],'house': null},
                {'index':28, 'title':'Waterworks', 'price': 120, 'type':'service', 'player_owned': null, 'players_stay':[],'house': null},
                {'index':29, 'title':'Silent Valley', 'price': 200, 'type':'property', 'player_owned': 1, 'players_stay':[],'house': null},
                {'index':30, 'title':'Go to Jail', 'price': null, 'type':'defaultCell', 'player_owned': null, 'players_stay':[],'house': null},
                {'index':31, 'title':'Banglore', 'price': 300, 'type':'property', 'player_owned': 4, 'players_stay':[],'house': null},
                {'index':32, 'title':'Shillong', 'price': 320, 'type':'property', 'player_owned': null, 'players_stay':[],'house': null},
                {'index':33, 'title':'Community Chest', 'price': null, 'type':'Community Chest', 'player_owned': null, 'players_stay':[],'house': null},
                {'index':34, 'title':'Chennai', 'price': 320, 'type':'property', 'player_owned': null, 'players_stay':[],'house': null},
                {'index':35, 'title':'Qutab Minar', 'price': 200, 'type':'property', 'player_owned': 3, 'players_stay':[],'house': null},
                {'index':36, 'title':'Chance', 'price': null, 'type':'Chance', 'player_owned': null, 'players_stay':[],'house': null},
                {'index':37, 'title':'City Palace', 'price': 350, 'type':'property', 'player_owned': null, 'players_stay':[],'house': null},
                {'index':38, 'title':'Luxury Tax', 'price': 75, 'type':'service', 'player_owned': null, 'players_stay':[],'house': null},
                {'index':39, 'title':'Marine Drive', 'price': 400, 'type':'property', 'player_owned': null, 'players_stay':[],'house': null},
    ]
  },

  getters: {
      playerCurrentStatus: (state) => {
        return state.playerStatus[1].position;
      },
 
      activePlayer: (state) => {      
        var activePlayer = state.playerStatus.filter(item => item.active === true)
        return activePlayer;
      },

      nonActivePlayers: (state) => {
        var nonActivePlayers = state.playerStatus.filter(item => item.active === !true)
        return nonActivePlayers;
      },

      allPlayers: (state) => {
        var allPlayers = state.playerStatus;
        return allPlayers;
      },

      getTotalDiceValues: (state) => {
        return state.diceValues.filter(item => item.name === 'totalDiceValue')
      },

      getEachDiceValues: (state) => {
        return state.diceValues.filter(item => item.name !== 'totalDiceValue')
      },

      getBoardCell: (state) => {
        return state.boardCell.map(item => item)
      },
    },

  mutations: {
    movePosition(state, payload){
      let steps = payload.finalDiceValue;
      let playerIDindex = payload.playerID - 1;
      let position = state.playerStatus[playerIDindex].position;
      if(playerIDindex > 3){
        playerIDindex = 0;
      }
      position += steps;
      if(position > 39){
        position = position - 40;
      }
      console.log('latest', position, playerIDindex);
      console.log('latestPlayerStatus', state.playerStatus[1]);
      state.playerStatus[playerIDindex].position = position;
      // Player Swiching Section
      state.playerStatus[playerIDindex].active = false;
      playerIDindex += 1;
      if(playerIDindex > 3){
        playerIDindex = 0;
      }
      state.playerStatus[playerIDindex].active = true;
    },

    updateDiceValues(state, payload){
      state.diceValues[0].value = payload.dice1;
      state.diceValues[1].value = payload.dice2;
      state.diceValues[2].value = payload.dice1 + payload.dice2;
    },

    afterDiceRoll(state, payload){
      console.log("afterDiceRoll fn is working");
      console.log(payload.getCurrentActivePlayer, payload.getBoardCells);
      let cellID = payload.getCurrentActivePlayer[0].position;
      let playerID = payload.getCurrentActivePlayer[0].player;
      let boardCells = payload.getBoardCells;

      console.log("CellID, PlayerID, boardCells", cellID, playerID, boardCells);
      switch(cellID) {
        case 0:
          break;
        case 1:
          // MG ROAD - 80 Rs. - Property
          // [Code] check it is property and Noboby own it. Then provide option for Buying it
          var cellStatus = boardCells.filter(item => item.index == cellID);
          if(cellStatus[0].player_owned == null){ // [code] add && if the player brought the property 
            state.playerStatus[playerID-1].amount -= 80;
            state.boardCell[cellID].player_owned = playerID;
          }
          else {
            state.boardCell[cellID].players_stay.push(playerID); //[code] remove if player is out
          }
          break;
        case 2:
          // Community Chest
          break;

        case 3:
          // Lucknow - 100 Rs. - Property
          var cellStatus3 = boardCells.filter(item => item.index == cellID);
          if(cellStatus3[0].player_owned == null){ // [code] add && if the player brought the property 
            state.playerStatus[playerID-1].amount -= 100;
            state.boardCell[cellID].player_owned = playerID;
          }
          else {
            state.boardCell[cellID].players_stay.push(playerID); //[code] remove if player is out
          }
          break;

        case 4:
          // Income Tax - 120 Rs. 
          state.playerStatus[playerID-1].amount -= 100;
          state.boardCell[cellID].players_stay.push(playerID); //[code] remove if player is out
          break;

        case 5:
          // Kanpur Railway Station - 130 Rs.
          var cellStatus5 = boardCells.filter(item => item.index == cellID);
          if(cellStatus5[0].player_owned == null){ // [code] add && if the player brought the property 
            state.playerStatus[playerID-1].amount -= 130; 
            state.boardCell[cellID].player_owned = playerID;
          }
          else {
            state.boardCell[cellID].players_stay.push(playerID); //[code] remove if player is out
          }
          break;

        case 6:
          // Oriental Avenue - 100 Rs.
          var cellStatus6 = boardCells.filter(item => item.index == cellID);
          if(cellStatus6[0].player_owned == null){ // [code] add && if the player brought the property 
            state.playerStatus[playerID-1].amount -= 100; 
            state.boardCell[cellID].player_owned = playerID;
          }
          else {
            state.boardCell[cellID].players_stay.push(playerID); //[code] remove if player is out
          }
          break;

        case 7:
          // Chance
          break;

        case 8:
          // Central Perk - 200 Rs.
          var cellStatus8 = boardCells.filter(item => item.index == cellID);
          if(cellStatus8[0].player_owned == null){ // [code] add && if the player brought the property 
            state.playerStatus[playerID-1].amount -= 200; 
            state.boardCell[cellID].player_owned = playerID;
          }
          else {
            state.boardCell[cellID].players_stay.push(playerID); //[code] remove if player is out
          }
          break;

        case 9:
          // HillTop View - 130 Rs.
          var cellStatus9 = boardCells.filter(item => item.index == cellID);
          if(cellStatus9[0].player_owned == null){ // [code] add && if the player brought the property 
            state.playerStatus[playerID-1].amount -= 130; 
            state.boardCell[cellID].player_owned = playerID;
          }
          else {
            state.boardCell[cellID].players_stay.push(playerID); //[code] remove if player is out
          }
          break;

        case 10:
          // Jail
          break;

        case 11:
          // Red Fort - 140 Rs.
          var cellStatus10 = boardCells.filter(item => item.index == cellID);
          if(cellStatus10[0].player_owned == null){ // [code] add && if the player brought the property 
            state.playerStatus[playerID-1].amount -= 140; 
            state.boardCell[cellID].player_owned = playerID;
          }
          else {
            state.boardCell[cellID].players_stay.push(playerID); //[code] remove if player is out
          }
          break;

        case 12:
          // Electric Company - 150 Rs.
          var cellStatus11 = boardCells.filter(item => item.index == cellID);
          if(cellStatus11[0].player_owned == null){ // [code] add && if the player brought the property 
            state.playerStatus[playerID-1].amount -= 150; 
            state.boardCell[cellID].player_owned = playerID;
          }
          else {
            state.boardCell[cellID].players_stay.push(playerID); //[code] remove if player is out
          }
          break;

        case 13:
          // Taj Mahal - 180 Rs.
          var cellStatus13 = boardCells.filter(item => item.index == cellID);
          if(cellStatus13[0].player_owned == null){ // [code] add && if the player brought the property 
            state.playerStatus[playerID-1].amount -= 180; 
            state.boardCell[cellID].player_owned = playerID;
          }
          else {
            state.boardCell[cellID].players_stay.push(playerID); //[code] remove if player is out
          }
          break;

        case 14:
          // Ladakh - 200 Rs.
          var cellStatus14 = boardCells.filter(item => item.index == cellID);
          if(cellStatus14[0].player_owned == null){ // [code] add && if the player brought the property 
            state.playerStatus[playerID-1].amount -= 200; 
            state.boardCell[cellID].player_owned = playerID;
          }
          else {
            state.boardCell[cellID].players_stay.push(playerID); //[code] remove if player is out
          }
          break;

        case 15:
          // Old Delhi Railway Station - 160 Rs.
          var cellStatus15 = boardCells.filter(item => item.index == cellID);
          if(cellStatus15[0].player_owned == null){ // [code] add && if the player brought the property 
            state.playerStatus[playerID-1].amount -= 160; 
            state.boardCell[cellID].player_owned = playerID;
          }
          else {
            state.boardCell[cellID].players_stay.push(playerID); //[code] remove if player is out
          }
          break;

        case 16:
          // St. Peter's Tower - 100 Rs.
          var cellStatus16 = boardCells.filter(item => item.index == cellID);
          if(cellStatus16[0].player_owned == null){ // [code] add && if the player brought the property 
            state.playerStatus[playerID-1].amount -= 100; 
            state.boardCell[cellID].player_owned = playerID;
          }
          else {
            state.boardCell[cellID].players_stay.push(playerID); //[code] remove if player is out
          }
          break;

        case 17:
          // Community Chest
          state.boardCell[cellID].players_stay.push(playerID); //[code] remove if player is out
          break;

        case 18:
          //Sports Hub - 200 Rs.
          var cellStatus18 = boardCells.filter(item => item.index == cellID);
          if(cellStatus18[0].player_owned == null){ // [code] add && if the player brought the property 
            state.playerStatus[playerID-1].amount -= 200; 
            state.boardCell[cellID].player_owned = playerID;
          }
          else {
            state.boardCell[cellID].players_stay.push(playerID); //[code] remove if player is out
          }
          break;

        case 19:
          // TownHall - 150 Rs.
          var cellStatus19 = boardCells.filter(item => item.index == cellID);
          if(cellStatus19[0].player_owned == null){ // [code] add && if the player brought the property 
            state.playerStatus[playerID-1].amount -= 150; 
            state.boardCell[cellID].player_owned = playerID;
          }
          else {
            state.boardCell[cellID].players_stay.push(playerID); //[code] remove if player is out
          }
          break;

        case 20:
          // Free Parking.
          state.boardCell[cellID].players_stay.push(playerID); //[code] remove if player is out
          break;

        case 21:
          // Jaipur - 220 Rs.
          var cellStatus21 = boardCells.filter(item => item.index == cellID);
          if(cellStatus21[0].player_owned == null){ // [code] add && if the player brought the property 
            state.playerStatus[playerID-1].amount -= 220; 
            state.boardCell[cellID].player_owned = playerID;
          }
          else {
            state.boardCell[cellID].players_stay.push(playerID); //[code] remove if player is out
          }
          break;

        case 22:
          // Chance
          break;

        case 23:
          // Kochi - 250 Rs.
          var cellStatus23 = boardCells.filter(item => item.index == cellID);
          if(cellStatus23[0].player_owned == null){ // [code] add && if the player brought the property 
            state.playerStatus[playerID-1].amount -= 220; 
            state.boardCell[cellID].player_owned = playerID;
          }
          else {
            state.boardCell[cellID].players_stay.push(playerID); //[code] remove if player is out
          }
          break;

        case 24:
          // Clock Tower - 140 Rs.
          var cellStatus24 = boardCells.filter(item => item.index == cellID);
          if(cellStatus24[0].player_owned == null){ // [code] add && if the player brought the property 
            state.playerStatus[playerID-1].amount -= 140; 
            state.boardCell[cellID].player_owned = playerID;
          }
          else {
            state.boardCell[cellID].players_stay.push(playerID); //[code] remove if player is out
          }
          break;

        case 25:
          // Cuttack Railway Station - 150 Rs.
          var cellStatus25 = boardCells.filter(item => item.index == cellID);
          if(cellStatus25[0].player_owned == null){ // [code] add && if the player brought the property 
            state.playerStatus[playerID-1].amount -= 150; 
            state.boardCell[cellID].player_owned = playerID;
          }
          else {
            state.boardCell[cellID].players_stay.push(playerID); //[code] remove if player is out
          }
          break;

        case 26:
          // Surat - 190 Rs.
          var cellStatus26 = boardCells.filter(item => item.index == cellID);
          if(cellStatus26[0].player_owned == null){ // [code] add && if the player brought the property 
            state.playerStatus[playerID-1].amount -= 190; 
            state.boardCell[cellID].player_owned = playerID;
          }
          else {
            state.boardCell[cellID].players_stay.push(playerID); //[code] remove if player is out
          }
          break;

        case 27:
          // Ambakar Road - 130 Rs.
          var cellStatus27 = boardCells.filter(item => item.index == cellID);
          if(cellStatus27[0].player_owned == null){ // [code] add && if the player brought the property 
            state.playerStatus[playerID-1].amount -= 130; 
            state.boardCell[cellID].player_owned = playerID;
          }
          else {
            state.boardCell[cellID].players_stay.push(playerID); //[code] remove if player is out
          }
          break;

        case 28:
          // Water Works - 120 Rs.
          var cellStatus28 = boardCells.filter(item => item.index == cellID);
          if(cellStatus28[0].player_owned == null){ // [code] add && if the player brought the property 
            state.playerStatus[playerID-1].amount -= 120; 
            state.boardCell[cellID].player_owned = playerID;
          }
          else {
            state.boardCell[cellID].players_stay.push(playerID); //[code] remove if player is out
          }
          break;

        case 29:
          // Silent Valley - 200 Rs.
          var cellStatus29 = boardCells.filter(item => item.index == cellID);
          if(cellStatus29[0].player_owned == null){ // [code] add && if the player brought the property 
            state.playerStatus[playerID-1].amount -= 200; 
            state.boardCell[cellID].player_owned = playerID;
          }
          else {
            state.boardCell[cellID].players_stay.push(playerID); //[code] remove if player is out
          }
          break;

        case 30:
          // GO TO JAIL
          state.boardCell[cellID].players_stay.push(playerID); //[code] remove if player is out
          break;

        case 31:
          // Banglore - 300 Rs.
          var cellStatus31 = boardCells.filter(item => item.index == cellID);
          if(cellStatus31[0].player_owned == null){ // [code] add && if the player brought the property 
            state.playerStatus[playerID-1].amount -= 300; 
            state.boardCell[cellID].player_owned = playerID;
          }
          else {
            state.boardCell[cellID].players_stay.push(playerID); //[code] remove if player is out
          }
          break;

        case 32:
          // Shillong - 320 Rs.
          var cellStatus32 = boardCells.filter(item => item.index == cellID);
          if(cellStatus32[0].player_owned == null){ // [code] add && if the player brought the property 
            state.playerStatus[playerID-1].amount -= 320; 
            state.boardCell[cellID].player_owned = playerID;
          }
          else {
            state.boardCell[cellID].players_stay.push(playerID); //[code] remove if player is out
          }
          break;

        case 33:
          // Community Chest
          state.boardCell[cellID].players_stay.push(playerID); //[code] remove if player is out
          break;

        case 34:
          // Chennai - 320 Rs.
          var cellStatus34 = boardCells.filter(item => item.index == cellID);
          if(cellStatus34[0].player_owned == null){ // [code] add && if the player brought the property 
            state.playerStatus[playerID-1].amount -= 320; 
            state.boardCell[cellID].player_owned = playerID;
          }
          else {
            state.boardCell[cellID].players_stay.push(playerID); //[code] remove if player is out
          }
          break;

        case 35:
          // Qutab Minar - 200 Rs.
          var cellStatus35 = boardCells.filter(item => item.index == cellID);
          if(cellStatus35[0].player_owned == null){ // [code] add && if the player brought the property 
            state.playerStatus[playerID-1].amount -= 200; 
            state.boardCell[cellID].player_owned = playerID;
          }
          else {
            state.boardCell[cellID].players_stay.push(playerID); //[code] remove if player is out
          }
          break;

        case 36:
          // Chance
          state.boardCell[cellID].players_stay.push(playerID); //[code] remove if player is out
          break;

        case 37:
          // City Palace - 350 Rs.
          var cellStatus37 = boardCells.filter(item => item.index == cellID);
          if(cellStatus37[0].player_owned == null){ // [code] add && if the player brought the property 
            state.playerStatus[playerID-1].amount -= 350; 
            state.boardCell[cellID].player_owned = playerID;
          }
          else {
            state.boardCell[cellID].players_stay.push(playerID); //[code] remove if player is out
          }
          break;

        case 38:
          // Luxuary Tax - 220 Rs.
          state.playerStatus[playerID-1].amount -= 125;          
          state.boardCell[cellID].players_stay.push(playerID); //[code] remove if player is out
          break;

        case 39:
          // Marine Drive - 400 Rs.
          var cellStatus39 = boardCells.filter(item => item.index == cellID);
          if(cellStatus39[0].player_owned == null){ // [code] add && if the player brought the property 
            state.playerStatus[playerID-1].amount -= 400; 
            state.boardCell[cellID].player_owned = playerID;
          }
          else {
            state.boardCell[cellID].players_stay.push(playerID); //[code] remove if player is out
          }
          break;


        default:
          return true;
      }
    }
  },

  actions: {
    movePosition(context, payload){
      context.commit('movePosition', payload);
    },

    updateDiceValues(context, payload){
      context.commit('updateDiceValues', payload);
    },

    afterDiceRoll(context, payload){
      context.commit('afterDiceRoll', payload);
    }
  }
})
