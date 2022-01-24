function typeWriter(element , word , waitTime) {
    let speedTyping = 300;
    let startDelete = false;
    let text = ""
    type();
    function type() {
        if(startDelete)text = word.substring(0 , text.length - 1);
        else text = word.substring(0 , text.length + 1);
        element.textContent = text;
        if(startDelete)speedTyping = 150;
        if(!startDelete && text === word){
            startDelete = true;
            speedTyping = waitTime;
        }else if(startDelete && text === ""){
            speedTyping = 300;
            startDelete = false;
        }
        setTimeout(()=>type(),speedTyping);
    }
}
function eyes() {
    document.querySelector("body").addEventListener("mousemove" , eyeball);
    function eyeball(event) {
        const eye = document.querySelectorAll(".eye");
        eye.forEach((ele) => {
        const x = (ele.getBoundingClientRect().left) 
        + (ele.clientWidth / 2); 
        const y = (ele.getBoundingClientRect().top) 
        + (ele.clientHeight / 2); 
        const radian = Math.atan2(event.pageX - x , event.pageY - y);
        // console.log(radian)
          const rot = (radian * (180 / Math.PI)) * -1 + 90;
            // console.log(rot , ele);
            ele.style.transform = `rotate(${rot}deg)`;
        })
    }
}
document.addEventListener("DOMContentLoaded" , ()=> typeWriter(document.querySelector("span.type") , "Maher_Sefo" , 2000));
document.addEventListener("DOMContentLoaded" , eyes);
