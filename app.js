const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];

const btn = document.querySelector("#btn");

const color = document.querySelector(".color");


btn.addEventListener("click", function(){
    const length = colors.length;
    const randomNumber = Math.ceil(Math.random()*length-1);
    console.log(randomNumber);

    document.body.style.backgroundColor = colors[randomNumber];

    document.querySelector(".color").textContent = colors[randomNumber];
});