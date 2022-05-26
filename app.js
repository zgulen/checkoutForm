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
    if (RegexPattern.test(userinput.value)) {
        output.innerHTML = "your email is valid"
        output.style.color = "green"
    } else {
        output.innerHTML = "your email is not valid"
        output.style.color = "red"
    }
})

////image the first

let parca = parseInt(document.getElementById("pieces1").innerHTML); //! backpack piece
let parca1 = parseInt(document.getElementById("pieces2").innerHTML); //! shoe piece
let parca2 = parseInt(document.getElementById("pieces3").innerHTML); //! clock piece

let fiyat1 = parseFloat(document.getElementById("price1").innerHTML); //? backpack price
let fiyat2 = parseFloat(document.getElementById("price2").innerHTML); //? shoe price
let fiyat3 = parseFloat(document.getElementById("price3").innerHTML); //? shoe price

let toplam = parseFloat(document.getElementById("prices").innerHTML); //? total price
//!
//!

let tax = (fiyat1 + fiyat2 + fiyat3) * 0.18; //!total
let total = fiyat1 + fiyat2 + fiyat3 + 19 + tax
//? -------------------------
let discount = 94.99; //! discount backpack
let summinus = 54.99; //!backpack
let sumplus = 54.99; //!backpack
//? ------------------------
let discount1 = 124.99; //!discount Shoes
let summinus2 = 74.99; //!shoes
let sumplus2 = 74.99; //!shoes
// //? ------------------------
let discount2 = 124.99 //! discount clock
let summinus3 = 74.99 //! clock
let sumplus3 = 74.99 //! clock
//? -------------------------


let coupon = parseFloat(document.getElementById("none").innerHTML);
let coupon1 = parseFloat(document.getElementById("none1").innerHTML);

let coupon2 = parseFloat(document.getElementById("none2").innerHTML);

//!Backpack Section
const buttons = document.getElementById("minus");
buttons.addEventListener("click", myFunction);

//! bacpack remove price reset
function remove1() {
    const element = document.getElementById("img1");
    element.remove();
    return sumplus = 0,
        total = sumplus + sumplus2 + sumplus3 + 19,
        document.getElementById("prices").innerHTML = total.toFixed(2),
        subtotal = sumplus + sumplus2 + sumplus3,
        document.getElementById("subtotal").innerHTML = subtotal.toFixed(2),
        tax = (sumplus + sumplus2 + sumplus3) * 0.18,
        document.getElementById("tax").innerHTML = "$" + tax.toFixed(2);
}

//! shoes remove price reset
function remove2() {
    const element = document.getElementById("img2");
    element.remove();
    return sumplus2 = 0,
        total = sumplus + sumplus2 + sumplus3 + 19,
        document.getElementById("prices").innerHTML = total.toFixed(2),
        subtotal = sumplus + sumplus2 + sumplus3,
        document.getElementById("subtotal").innerHTML = subtotal.toFixed(2),
        tax = (sumplus + sumplus2 + sumplus3) * 0.18,
        document.getElementById("tax").innerHTML = "$" + tax.toFixed(2);
}

//! shoes remove price reset
function remove3() {
    const element = document.getElementById("img3");
    element.remove();
    return sumplus3 = 0,
        total = sumplus + sumplus2 + sumplus3 + 19,
        document.getElementById("prices").innerHTML = total.toFixed(2),
        subtotal = sumplus + sumplus2 + sumplus3,
        document.getElementById("subtotal").innerHTML = subtotal.toFixed(2),
        tax = (sumplus + sumplus2 + sumplus3) * 0.18,
        document.getElementById("tax").innerHTML = "$" + tax.toFixed(2);
    }

let subtotal = fiyat1 + fiyat2 + fiyat3;
document.getElementById("tax").innerHTML = tax.toFixed(2)
document.getElementById("subtotal").innerHTML = subtotal.toFixed(2)
document.getElementById("prices").innerHTML = total.toFixed(2)
//! backpack minus
function myFunction() {
    if (parca > 0) {
        parca -= 1;
        document.getElementById("pieces1").innerHTML = parca
        sumplus -= summinus
        document.getElementById("price1").innerHTML = sumplus.toFixed(2)
        tax = (sumplus + sumplus2 + sumplus3) * 0.18 
        total = sumplus + sumplus2 + sumplus3 + 19 + tax
        subtotal = sumplus + sumplus2 + sumplus3
        document.getElementById("subtotal").innerHTML = subtotal.toFixed(2)
        document.getElementById("prices").innerHTML = total.toFixed(2)
        discount -= coupon
        document.getElementById("none").innerHTML = "$" + discount.toFixed(2)
        document.getElementById("tax").innerHTML = "$" + tax.toFixed(2);
    } else if (parca === 0) {
        document.getElementById("none").style.display = "none"
    }
}
//! backpack additon
const buttons1 = document.getElementById("plus");
buttons1.addEventListener("click", () => {
    parca += 1;
    document.getElementById("pieces1").innerHTML = parca
    sumplus += fiyat1
    document.getElementById("price1").innerHTML = sumplus.toFixed(2)
    tax = (sumplus + sumplus2 + sumplus3) * 0.18
    total = sumplus + sumplus2 + sumplus3 + 19 + tax
    // fiyat1 = sumplus
    discount += coupon
    document.getElementById("none").innerHTML = "$" + discount.toFixed(2)
    document.getElementById("tax").innerHTML = "$" + tax.toFixed(2);
    document.getElementById("prices").innerHTML = total.toFixed(2)
    document.getElementById("none").style.display = "inline"
    subtotal = sumplus + sumplus2 + sumplus3
    document.getElementById("subtotal").innerHTML = subtotal.toFixed(2)
});


//! REMOVE



//! Shoes Section
const buttons2 = document.getElementById("minus1");
const buttons3 = document.getElementById("plus1");
buttons2.addEventListener("click", myFunction1);
//!minus 
function myFunction1() {
    if (parca1 > 0) {
        parca1 -= 1;
        document.getElementById("pieces2").innerHTML = parca1
        sumplus2 -= summinus2
        document.getElementById("price2").innerHTML = sumplus2.toFixed(2)
        tax = (sumplus + sumplus2 + sumplus3) * 0.18
        total = sumplus + sumplus2 + sumplus3 + 19 + tax
        document.getElementById("prices").innerHTML = total.toFixed(2)
        document.getElementById("tax").innerHTML = "$" + tax.toFixed(2)
        discount1 -= coupon1
        document.getElementById("none1").innerHTML = "$" + discount1.toFixed(2)
        subtotal = sumplus + sumplus2 + sumplus3
        document.getElementById("subtotal").innerHTML = subtotal.toFixed(2)
    } else if (parca1 === 0) {
        document.getElementById("none1").style.display = "none"
    }
}
// let parca = parseInt(document.getElementById("pieces1").innerHTML);

//! additon
console.log(parca1);
buttons3.addEventListener("click", () => {
    parca1 += 1;
    document.getElementById("pieces2").innerHTML = parca1
    sumplus2 += fiyat2
    document.getElementById("price2").innerHTML = sumplus2.toFixed(2)
    tax = (sumplus + sumplus2 + sumplus3) * 0.18 
    total = sumplus + sumplus2 + sumplus3 + 19 + tax
    document.getElementById("prices").innerHTML = total.toFixed(2)
    document.getElementById("tax").innerHTML = "$" + tax.toFixed(2)
    discount1 += coupon1
    document.getElementById("none1").innerHTML = "$" + discount1.toFixed(2)
    document.getElementById("none1").style.display = "inline"
    subtotal = sumplus + sumplus2 + sumplus3
    document.getElementById("subtotal").innerHTML = subtotal.toFixed(2)
});

//! Clock section

const buttons4 = document.getElementById("minus2");
const buttons5 = document.getElementById("plus2");
buttons4.addEventListener("click", myFunction2);

function myFunction2() {
    if (parca2 > 0) {
        parca2 -= 1;
        document.getElementById("pieces3").innerHTML = parca2
        sumplus3 -= fiyat3
        document.getElementById("price3").innerHTML = sumplus3.toFixed(2)
        tax = (sumplus + sumplus2 + sumplus3) * 0.18
        total = sumplus3 + sumplus2 + sumplus + 19 + tax
        document.getElementById("prices").innerHTML = total.toFixed(2)
        discount2 -= coupon2
        document.getElementById("none2").innerHTML = "$" + discount2.toFixed(2)
        document.getElementById("tax").innerHTML = "$" + tax.toFixed(2);
        subtotal = sumplus + sumplus2 + sumplus3
        document.getElementById("subtotal").innerHTML = subtotal.toFixed(2)
    } else if (parca2 === 0) {
        document.getElementById("none2").style.display = "none"
    }
}

buttons5.addEventListener("click", () => {
    parca2 += 1;
    document.getElementById("pieces3").innerHTML = parca2
    sumplus3 += fiyat3
    document.getElementById("price3").innerHTML = sumplus3.toFixed(2)
    tax = (sumplus + sumplus2 + sumplus3) * 0.18
    total = sumplus + sumplus2 + sumplus3 + 19 + tax
    // fiyat1 = sumplus
    discount2 += coupon2
    document.getElementById("none2").innerHTML = "$" + discount2.toFixed(2)
    document.getElementById("tax").innerHTML = "$" + tax.toFixed(2);
    document.getElementById("prices").innerHTML = total.toFixed(2)
    document.getElementById("none2").style.display = "inline"
    subtotal = sumplus + sumplus2 + sumplus3
    document.getElementById("subtotal").innerHTML = subtotal.toFixed(2)
});

