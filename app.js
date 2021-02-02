/* console.log("bonjour");

let style= document.querySelector('.styled')
let body= document.querySelector('body')

style.addEventListener('click', function(){
    body.style.backgroundColor = 'red';
}); */


let color = document.querySelector('#color')

color.addEventListener('change', function(e){
    document.body.style.backgroundColor = e.currentTarget.value
});

