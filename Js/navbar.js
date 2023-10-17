let btn = document.querySelector('nav button');

btn.onclick = function(){
    document.querySelector("nav .container ul").classList.toggle("ul-open");
}