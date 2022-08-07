const   slider = document.querySelector(".sliderInput"),
        sliderAmount = document.querySelector(".sliderAmount"),
        startBtn = document.querySelector(".startBtn");

let variableme = "hello there"


slider.oninput = ()=>{
    let inputVal = slider.value;
    sliderAmount.innerText = `$${inputVal}.00`;

    let x = (inputVal/32)*100;

    slider.style.background = `linear-gradient(to right, var(--clr-primary-500--) ${x}%, var(--clr-neutral-100--) 0%)`;

    if (inputVal == 0) {
        startBtn.style.cursor = "not-allowed";
        startBtn.style.opacity = "0.5";
    }else{
        startBtn.style.cursor = "pointer";
        startBtn.style.opacity = "1";
    }
}