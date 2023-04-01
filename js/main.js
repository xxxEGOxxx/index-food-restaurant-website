const btn = document.querySelector(".food-categories_card-btn1"),
      btn2 = document.querySelector(".food-categories_card-btn2"),
      btn3 = document.querySelector(".food-categories_card-btn3"),
      price1 = document.querySelector(".categories_price1"),
      price2 = document.querySelector(".categories_price2"),
      price3 = document.querySelector(".categories_price3");

let itemsInBucket = document.querySelector(".header_cart_count");


let countItemsInBucket = parseInt(loadCountOfItemsInBucket());

if (isNaN(countItemsInBucket)) {
    countItemsInBucket = 0;
  }

itemsInBucket.textContent = countItemsInBucket;
console.log(countItemsInBucket)

//123
function addToBucket() {
    const randomNumber = Math.floor(Math.random() * 900) + 100;
    countItemsInBucket++;
    itemsInBucket.textContent = countItemsInBucket;
    const randomNumber2 = Math.floor(Math.random() * 3) + 1;
    if(randomNumber2 == 1){
        price1.textContent = randomNumber + " ₽";
    }
    if(randomNumber2 == 2){
        price2.textContent = randomNumber + " ₽";
    }
    if(randomNumber2 == 3){
        price3.textContent = randomNumber + " ₽";
    }


    saveCountOfItemsInBucket()
    
    console.log(countItemsInBucket)
}

function saveCountOfItemsInBucket(){
    localStorage.setItem('countItemsInBucket', countItemsInBucket);
}

function loadCountOfItemsInBucket(){
    return localStorage.getItem('countItemsInBucket');
}


let cum = "globalCum"



function fun1() {
    function fun2(){
        let cum2 = "cum2"
        console.log(cum2)
        console.log(cum1)
        console.log(cum)
    }
    let cum1 = "cum1"
    
    console.log(cum1)
    console.log(cum)
    //console.log(cum2) will not work because no access to inner function vars

    fun2()
}

fun1()

const one = 1
const two = 2
const three = 3
btn.addEventListener("click", addToBucket);
btn2.addEventListener("click", addToBucket);
btn3.addEventListener("click", addToBucket);


