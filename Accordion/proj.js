//ahmeds notes
//the text inside the accordion isjust place holder



const acc=document.querySelectorAll('.container');
for(let i=0;i<acc.length;i++){
    acc[i].addEventListener('click', function(){
        this.classList.toggle('active');
    })
};