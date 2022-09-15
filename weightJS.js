// Weight Converter//
const form = document.querySelector("form");

const pounds = document.querySelector(".pounds");
const grams = document.querySelector(".grams");
const kilograms = document.querySelector(".kilograms");
const ounces = document.querySelector(".ounces");


form.addEventListener("input", (event) => {
    if(event.target.classList.contains("pounds")){
        // console.log("pounds");
        let x = event.target.value;
        grams.value = (x / 0.0022046).toFixed(2);
        kilograms.value = (x / 2.2046).toFixed(2);
        ounces.value = (x * 16).toFixed(2);
    }
    if(event.target.classList.contains("grams")){
        let x = event.target.value;
        pounds.value = x * 0.0022046;
        kilograms.value = x / 1000;
        ounces.value = x * 0.035274;
    }
    if(event.target.classList.contains("kilograms")){
        let x = event.target.value;
        pounds.value = x * 2.2046;
        grams.value = x * 1000;
        ounces.value = x * 35.274;
    }
    if(event.target.classList.contains("ounces")){
        let x = event.target.value;
        pounds.value = x * 0.0625;
        grams.value = x / 0.035274;
        kilograms.value = x / 35.274;
    }
})