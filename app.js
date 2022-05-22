const userinput = document.getElementById("email")
const output = document.getElementById("demo")

// console.log(document.getElementsByTagName("h2")[0].innerHTML)

const RegexPattern = /^[A-Za-z0-9\_]+\@[A-Za-z]+\.[A_Za-z]{2,3}$/

// userinput.addEventListener("focus", () => {
//     if (userinput.value === "") {
//         output.innerHTML = "enter your email"
//         output.style.color = "red"
//     }
// })

userinput.addEventListener("keyup", () => {
    // console.log(userinput.value)
    // console.log(RegexPattern.test(userinput.value))

    if (RegexPattern.test(userinput.value)) {
        output.innerHTML = "your email is valid"
        output.style.color = "green"
    } else {
        output.innerHTML = "your email is not valid"
        output.style.color = "red"
    }
})

//! image the first

const buttons = document.getElementById("minus");
const buttons1 = document.getElementById("plus");
buttons.addEventListener("click", myFunction);
let parca = parseInt(document.getElementById("pieces1").innerHTML);
let parca1 = parseInt(document.getElementById("pieces2").innerHTML);
let fiyat1 = parseFloat(document.getElementById("price1").innerHTML); 
let fiyat2 = parseFloat(document.getElementById("price2").innerHTML);
let toplam = parseFloat(document.getElementById("prices").innerHTML);
let total = fiyat1 + fiyat2;
let summinus = 54.99;
let sumplus = 54.99;
let summinus2 = 74.99;
let sumplus2 = 74.99;

function myFunction(){
    parca -= 1;
    document.getElementById("pieces1").innerHTML = parca
    sumplus -= summinus
    document.getElementById("price1").innerHTML = sumplus.toFixed(2)
    total = sumplus + sumplus2 + 19
    // fiyat1 = sumplus
    document.getElementById("prices").innerHTML = total.toFixed(2)
    // console.log(parca)
}
// let parca = parseInt(document.getElementById("pieces1").innerHTML);
console.log(parca);
buttons1.addEventListener("click", () => {
    parca += 1;
    document.getElementById("pieces1").innerHTML = parca
    sumplus += fiyat1
    document.getElementById("price1").innerHTML = sumplus.toFixed(2)
    total = sumplus + sumplus2 + 19
    // fiyat1 = sumplus
    document.getElementById("prices").innerHTML = total.toFixed(2)
});
//! image that is below
const buttons2 = document.getElementById("minus1");
const buttons3 = document.getElementById("plus1");
buttons2.addEventListener("click", myFunction1);
function myFunction1(){
    parca1 -= 1;
    document.getElementById("pieces2").innerHTML = parca1
    sumplus2 -= summinus2
    document.getElementById("price2").innerHTML = sumplus2.toFixed(2)
    total = sumplus + sumplus2 + 19
    document.getElementById("prices").innerHTML = total.toFixed(2)
}
// let parca = parseInt(document.getElementById("pieces1").innerHTML);
console.log(parca1);
buttons3.addEventListener("click", () => {
    parca1 += 1;
    document.getElementById("pieces2").innerHTML = parca1
    sumplus2 += fiyat2
    document.getElementById("price2").innerHTML = sumplus2.toFixed(2)
    total = sumplus + sumplus2 + 19
    document.getElementById("prices").innerHTML = total.toFixed(2)

});