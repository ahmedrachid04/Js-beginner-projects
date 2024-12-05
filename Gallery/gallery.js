// ahmeds notes
////////the images are random placeholders


let scrollContainer=document.querySelector(".gallery")
let backBtn=document.getElementById("backBTN")
let nextBtn=document.getElementById("nextBTN")

scrollContainer.addEventListener("wheel",(e)=>{
    e.preventDefault()
    scrollContainer.scrollLeft +=e.deltaY
    scrollContainer.style.scrollBehavior="auto"

})

nextBtn.addEventListener("click",()=>{
    scrollContainer.style.scrollBehavior="smooth"
    scrollContainer.scrollLeft+=1000
})
backBtn.addEventListener("click",()=>{
    scrollContainer.style.scrollBehavior="smooth"
    scrollContainer.scrollLeft-=1000
})