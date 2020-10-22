document.querySelector(".solitaire").addEventListener("click", ()=>{
    window.open("https://kkr600.github.io/solitaire/", "_blank")
});
document.querySelector("#solitaireRepo").addEventListener("click", ()=>{
    window.open("https://github.com/kkr600/solitaire/", "_blank")
});

document.querySelector(".swapi").addEventListener("click", ()=>{
    window.open("https://kkr600.github.io/swapi/", "_blank")
});
document.querySelector("#swapiRepo").addEventListener("click", ()=>{
    window.open("https://github.com/kkr600/swapi", "_blank")
});

document.querySelector("#email").addEventListener("click", ()=>{
    window.open('mailto:kacper.krojna@gmail.com');
});

document.querySelector("#github").addEventListener("click", ()=>{
    window.open("https://github.com/kkr600", "_blank")
});


document.querySelector("#linkedIn").addEventListener("click", ()=>{
    window.open("https://linkedin.com/in/kacper-krojna-432131b8", "_blank")
});

window.addEventListener('scroll', function(e) {
    
    document.querySelector('section:first-child').style.opacity = 1 - (window.scrollY / window.innerHeight);
})
