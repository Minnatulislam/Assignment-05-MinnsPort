// Globa declaration Start 
const players = [];
const showPlayers = document.getElementById('show-players');
const showPlayerExpense = document.getElementById("playerExpense");
const perPlayerCosting = document.getElementById("player-costing");
let playerExpense;

// Globa declaration End

// player selection Area
function getPlayersName(player){
    players.push(player)
   if(players.length > 5){
    
   return alert('Your player selection area is full. Please put the right numbers of player') 
} 
else{
    let p = document.createElement('p') 
    p.innerText = players.length + '. ' + player;
    showPlayers.appendChild(p);

// player selection and player cost total area 
    document.getElementById('player-costing-calculation-btn').addEventListener('click', function(){
        const perPlayerCosting = document.getElementById('player-costing');
        const perPlayerCostingString = perPlayerCosting.value;
        const playerCosting = parseFloat(Number(perPlayerCostingString));
         // validation
         if(!playerCosting || playerCosting < 0 || typeof playerCosting !== "number"){
            return alert('Please type a Valid input');
        }
        else{
            playerExpense = playerCosting * players.length;
            showPlayerExpense.innerText = playerCosting * players.length
        }            
        });

        // Budget calculation area 
        document.getElementById('btn-calculation').addEventListener('click', function(){
  
            const managerCosting = document.getElementById('manager-costing');
            const coachCosting = document.getElementById('coach-costing');
            const managerCostingAmountString = parseFloat(Number(managerCosting.value));
             
            const coachCostingAmountString = parseFloat(Number(coachCosting.value));
        
            playerExpense = managerCostingAmountString + coachCostingAmountString + playerExpense;
        
            const totalAmountField = document.getElementById('total-amount');
            totalAmountField.innerHTML = playerExpense;
            
            managerCosting.value = '';
            coachCosting.value = '';
        });
    
}   
}