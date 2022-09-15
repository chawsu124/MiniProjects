const btn = document.querySelector("#light");
const body = document.querySelector("body");

btn.addEventListener("click", function() {
    console.log("Hello");
    this.classList.toggle("bi-moon");
    if (this.classList.contains("fa-sharp fa-solid fa-sun")) {
        this.classList.toggle("fa-solid fa-moon");
        body.style.background = "white";
        body.style.color = "black";
        body.style.transition = "2s";
    } else {
        this.classList.toggle("fa-solid fa-sun");
        body.style.background = "black";
        body.style.color = "white";
        body.style.transition = "2s";
    }
}); 
