var initialPrice = document.querySelector("#initial-price");
var stocksQty = document.querySelector("#Qty-of-stocks");
var currentPrice = document.querySelector("#Current-stocks");


var submitBtn  = document.querySelector("#submit-btn");
var outputBox = document.querySelector("#output-box");

submitBtn.addEventListener('click', submitHandler);

function submitHandler(){
    var ip = Number(initialPrice.value);
    var qty = Number(stocksQty.value);
    var curr = Number(currentPrice.value);
    calculateProfitandLoss(ip ,qty , curr);
}




function calculateProfitandLoss(initial , quantity , current){
    if (initial > current) {
        var loss = (initial-current) * quantity;
        var lossPercentage = (loss/initial) * 100;

        showOutput( `loss is ${loss} and the loss percentage is ${lossPercentage}% `) ;
    }
    else if (current > initial) {
        var profit = (current - initial) * quantity;
        var profitPercentage = (profit/initial) * 100;
        showOutput(`profit is ${profit} and the profit percentage is ${profitPercentage}% `)    
    }
    else {
        showOutput(
            "No pain No gain"
        )
    }
} 

function showOutput(message){
    outputBox.innerHTML = message;
}