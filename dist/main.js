/* this site made by Mohamed Maghraby */
document.querySelector('.share-icons button').onclick = function(){
    if(this.classList.contains('active')){
        this.classList.remove('active');
        document.querySelector('.icons').style.display = 'none';
    }else{
        this.classList.add('active');
        document.querySelector('.icons').style.display = 'block';
    }
}