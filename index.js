const costPrice = document.querySelector("#stock-price-bought");
const numberOfShares = document.querySelector("#number-of-shares");
const sellingPrice = document.querySelector("#stock-price-current")
const submitButton = document.querySelector("#submit-btn");
const message = document.querySelector("#message");
const loading = document.querySelector("#loading");
const leftDiv = document.querySelector(".left");
const rightDiv = document.querySelector(".right");
const leftMessage = document.querySelector("#left-message")
const profitImage = document.querySelector("#profit-image")
const lossImage = document.querySelector("#loss-image")
console.log(leftMessage)
submitButton.addEventListener('click', function () {
    if (costPrice.value > 0 && numberOfShares.value > 0 && sellingPrice.value > 0) {
        loading.style.display = "block";
        message.style.display = "none";
        profitImage.style.display = "none";
        lossImage.style.display = "none";
        setTimeout(function () {
            loading.style.display = "none"
            message.style.display = "block"

            let cost = Number(costPrice.value);
            let sell = Number(sellingPrice.value)
            let totalShares = Number(numberOfShares.value)
            let profit = sell - cost;
            let profitPercentage = ((profit / cost) * 100).toFixed(2);
            let loss = cost - sell
            let lossPercentage = ((loss / cost) * 100).toFixed(2);
            let moneyMade = profit * totalShares;
            let moneyLost = loss * totalShares;
            if (sell > cost) {
                message.innerHTML = `You made a profit of ${moneyMade}₹ and gained ${profitPercentage}%`
                message.style.color = "#10B981";//green 
                profitImage.style.display = "block";
            } else if (cost > sell) {
                message.innerHTML = `You lost ${moneyLost}₹ which is about ${lossPercentage}%`
                message.style.color = "#F87171";//red
                lossImage.style.display = "block"
            } else {
                message.innerHTML = "You did not make or lose any money"
                message.style.color = "white"
            }
        }, 2000)
    } else {
        leftMessage.innerHTML = "Enter Valid input"
    }
})