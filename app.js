console.log("bonjour");

let style= document.querySelector('.styled')
let body= document.querySelector('body')

style.addEventListener('click', function(){
    body.style.backgroundColor = 'red';
});