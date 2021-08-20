function getInputValue(isIncreasing, product, price){
    let input = document.getElementById( product +'-input');
    const inputText = input.value;
    let inputNumber = parseInt(inputText);
    if(isIncreasing == true){
        inputNumber = inputNumber + 1;
    }
    else if(inputNumber >0){
        inputNumber = inputNumber -1;
    }
    input.value = inputNumber;
    
const productPrice = document.getElementById( product + '-price');
productPrice.innerText = input.value * price;
calculate();
}


function getSubTotal(product){
    const price = document.getElementById(product + '-input');
    const priceAmount = parseInt(price.value);
    return priceAmount;
}


// calculate all
function calculate(){
    const phonePrice = getSubTotal('phone')  * 1219;
    const casePrice = getSubTotal('case') * 59;
    const subAmount = phonePrice + casePrice;
    const tax = subAmount / 10;
    const total = subAmount + tax;
   document.getElementById('sub-total').innerText = subAmount;
   document.getElementById('tax').innerText = tax;
   document.getElementById('total').innerText = total;
   
}








document.getElementById('phone-plus').addEventListener('click', function(){

getInputValue(true, 'phone', 1219);

})

document.getElementById('phone-minus').addEventListener('click', function (){
    getInputValue(false, 'phone', 1219)
    // calculate()
})

document.getElementById('case-plus').addEventListener('click', function(){

getInputValue(true, 'case', 59)
    
})

document.getElementById('case-minus').addEventListener('click', function (){
    getInputValue(false, 'case', 59)
})