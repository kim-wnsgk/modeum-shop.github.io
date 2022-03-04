const leftImage = document.querySelector(".leftImage");
const rightImage = document.querySelector(".rightImage");
const image = document.querySelector(".image");


leftImage.addEventListener("click", function(){
    image.style.backgroundImage = "url(./images/sleeping_mozzi.jpg)";
})
rightImage.addEventListener("click", function(){
    image.style.backgroundImage = "url(./images/deumseong.jpg)";
})

