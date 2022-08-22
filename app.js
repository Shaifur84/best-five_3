
const playerSelected = [];

function selectPlayer(player) {
    const playerName = player.parentNode.children[0].innerText;
    playerSelected.push(playerName);
    document.getElementById("total-player").innerText = playerSelected.length;
    addedPlayersshowcase(playerSelected)

}

function addedPlayersshowcase(playersList) {

    const listOfPlayer = document.getElementById("players-list");
    listOfPlayer.innerHTML = "";

    for (let i = 0; i < playerSelected.length; i++) {
        const name = playerSelected[i];
        const li = document.createElement("li");
        li.innerHTML = `<li> ${i + 1} ${name} </li>`
        listOfPlayer.appendChild(li);

    }
}

document.getElementById('player-rate').addEventListener('click', function () {
    const playerRate = document.getElementById('player-rate');
    const playerRateString = playerRate.value;
    const ratePerPlayer = parseFloat(playerRateString);
    console.log(ratePerPlayer);
})

document.getElementById('btn-calculate').addEventListener('click', function () {
    const playerRate = document.getElementById('player-rate');
    const playerRateString = playerRate.value;
    const ratePerPlayer = parseFloat(playerRateString);
    playerRate.value = "";
    const player = document.getElementById('total-player');
    const playerString = player.innerText;
    const playerTotal = parseInt(playerString)
    const calculate = ratePerPlayer * playerTotal;
    const playerExpense = document.getElementById('player-expenses');
    const playerExpenseString = playerExpense.innerText;
    const playerExpenseTotal = parseInt(playerExpenseString)
    playerExpense.innerText = calculate;
    console.log(calculate);
})


document.getElementById('manager-rate').addEventListener('click', function () {
    const managerRate = document.getElementById('manager-rate');
    const managerRateString = managerRate.value;
    const ratePermanager = parseFloat(managerRateString);
    console.log(ratePermanager);
})
document.getElementById('coach-rate').addEventListener('click', function () {
    const coachRate = document.getElementById('coach-rate');
    const coachRateString = coachRate.value;
    const ratePercoach = parseFloat(coachRateString);
    console.log(ratePercoach);
})

document.getElementById('calculate-total').addEventListener('click', function () {
    const managerRate = document.getElementById('manager-rate');
    const managerRateString = managerRate.value;
    const ratePermanager = parseFloat(managerRateString);
    const coachRate = document.getElementById('coach-rate');
    const coachRateString = coachRate.value;
    const ratePercoach = parseFloat(coachRateString);
    managerRate.value = "";
    coachRate.value = "";
    const playerExpense = document.getElementById('player-expenses');
    const playerExpenseString = playerExpense.innerText;
    const playerExpenseTotal = parseInt(playerExpenseString)
    const total = ratePermanager + ratePercoach + playerExpenseTotal;
    const totalExpense = document.getElementById('total-expenses');
    totalExpense.innerText = total;

    console.log(total)


})



