const Next = document.querySelector('.next');
const slides = document.querySelectorAll('.review');
const Previous = document.querySelector('.previous');

let current_review_index = 0;

Next.addEventListener('click', function(){
   next();   
})
Previous.addEventListener('click',function(){
    previous();
})
function next(){
    slides[current_review_index].classList.add('invisible');
    if(current_review_index < slides.length-1){
        current_review_index++;
        slides[current_review_index].classList.remove('invisible');
    }
    else{
        current_review_index = 0;
        slides[current_review_index].classList.remove('invisible');
        slides[slides.length-1].classList.add('invisible');
    }
}
function previous(){
    slides[slides.length-1].classList.add('invisible');
    if(current_review_index > 0){        
        current_review_index--;        
        slides[current_review_index].classList.remove('invisible'); 
        slides[current_review_index+1].classList.add('invisible');       
    }
    else{
        current_review_index = slides.length - 1;
        slides[current_review_index].classList.remove('invisible');
        slides[0].classList.add('invisible');
        
    }
}
