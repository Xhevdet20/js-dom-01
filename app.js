var klika = document.querySelector('.kliko');
var button = document.querySelector('button');
var paragrafi = document.querySelector('p');
console.log(button);


klika.addEventListener('click', function() {
    if(klika.classList.contains('red')){
        klika.classList.remove('red');
    } else {
        klika.classList.add('red');
    }
});


button.addEventListener('click', function(){
    if(paragrafi.classList.contains('teksti')){
        paragrafi.classList.remove('teksti');
    } else {
        paragrafi.classList.add('teksti');
    }
})