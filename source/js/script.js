const coinObserver =new IntersectionObserver((entites)=>{
    entites.forEach((entity,index)=>{
        console.log(entity)
       
        if(entity.isIntersecting){
            setTimeout(()=>{
                entity.target.classList.add('animate')
            },(index+1) * 500)
        }else{
            entity.target.classList.remove('animate')
        }
    })
})
const coins=document.querySelectorAll(".currencies__img")
coins.forEach(element => {
    coinObserver.observe(element)
});


const cursorObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            document.querySelector(".commission__btn").classList.add('animate-button')
            entry.target.classList.add("animate-coursor"); // Add class when intersecting
        } else {
            document.querySelector(".commission__btn").classList.remove('animate-button')
            entry.target.classList.remove("animate-coursor"); // Remove class when not intersecting
        }
    });
});
const coursor=document.querySelector(".commission__cursor")
cursorObserver.observe(coursor)
