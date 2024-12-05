//ahmeds note
////////no notes

let btn = document.querySelector('#newquote');
let qt = document.querySelector('.quote');
let pers = document.querySelector('.pers');
let cnt = document.querySelector('.content');
let quotes = [
    {quote:'Be yourself; everyone else is already taken.',
        person: 'Oscar Wilde'
    },{
        quote: 'Im selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you cant handle me at my worst, then you sure as hell dont deserve me at my best',
        person: 'Marilyn Monroe'
    },
    {
        quote: 'So many books, so little time.',
        person: 'Frank Zappa'
    },
    {
        quote: 'Two things are infinite: the universe and human stupidity; and Im not sure about the universe.',
        person: 'Albert Einstein'
    },
];
let i=0;
btn.addEventListener('click',function(){
    qt.textContent=quotes[i].quote;
    pers.textContent=quotes[i].person;
    if(i==1){
        cnt.style.height='400px';
    }
    if(i!=1){
        cnt.style.height='300px';
    }
    if(i<4){i++;}
    if(i==4){i=0;}
})