const firstCurrency = document.getElementById('firstCurrency');
const secondCurrency = document.getElementById('secondCurrency');
const count = document.getElementById('count');
const equal = document.getElementById('equal');
const exchangeRate = document.getElementById('exchangeRate');




updateRate();

function updateRate(){
    fetch(`https://v6.exchangerate-api.com/v6/6ad41fbbd5f4c7351ee719dd/latest/${firstCurrency.value}`)
    .then((res)=>res.json()).then((data)=>{
        const rate=data.conversion_rates[secondCurrency.value];
        equal.textContent=(count.value*rate).toFixed(2);
        exchangeRate.textContent=`1 ${firstCurrency.value} = ${rate} ${secondCurrency.value}`;
    });
}

firstCurrency.addEventListener('change',updateRate);
secondCurrency.addEventListener('change',updateRate);
count.addEventListener('input',updateRate);