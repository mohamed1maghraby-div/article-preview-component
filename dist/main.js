var elem = document.querySelector('.testi-1');
document.querySelector('.prev').onclick = function(){
    elem.nextElementSibling.style.display = 'none';
    elem.style.display = 'block';
}
document.querySelector('.next').onclick = function(){
    elem.nextElementSibling.style.display = 'block';
    elem.style.display = 'none';
}