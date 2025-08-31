const baseurl = "https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@2024-03-06/v1/currencies/";

const dropdown = document.querySelectorAll(".dropdown select");
const btn = document.querySelector("form button");
const fromCurr = document.querySelector(".from select");
const toCurr = document.querySelector(".to select");
for (let select of dropdown){
    for (let currCode in currencyToCountry){
let newOption = document.createElement("option");
newOption.innerText = currCode;
if (select.name === "from" && currCode==="NPR"){
    newOption.selected = true;
    
}else if(select.name === "to" && currCode==="USD"){
    newOption.selected = true;}
select.append(newOption)
    }
    select.addEventListener("change",(evt)=>{
        updateFlag(evt.target);
    });
}


const updateFlag = (element)=>{
    let currCode = element.value;
    let countryCode = currencyToCountry[currCode];
    let newSrc = `https://flagsapi.com/${countryCode}/shiny/64.png` 
    let img = element.parentElement.querySelector("img");
    img.src=newSrc;
}

btn.addEventListener("click",async (evt)=>{
    evt.preventDefault();
    let amount = document.querySelector(".amount input");
    let amtValue = amount.value;
    if (amtValue === "" || amtValue < 1){
        amtValue = 1;
        amount.value = "1";

    }
            // console.log(fromCurr.value, toCurr.value);
        const URL = `${baseurl}${fromCurr.value.toLowerCase()}.json`;
        let response = await fetch (URL)
        console.log(response);
});