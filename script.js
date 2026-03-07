window.onload=function(){

for(let i=0;i<30;i++){

let spark=document.createElement("div");
spark.className="confetti";

spark.style.left=Math.random()*100+"vw";
spark.style.background=`hsl(${Math.random()*360},100%,50%)`;

document.body.appendChild(spark);

setTimeout(()=>{
spark.remove();
},4000);

}

}
const text = `Anha, you’re not just someone I talk to — you’re someone who genuinely matters to me. 
Over time, your presence became a comfort I started valuing more than I expected. 
The way you listen, the calm you bring, and the way of talking that you have — it all makes my days feel lighter. 
Somewhere between normal conversations and small moments, I realized you hold a special place in my life. 
This feeling didn’t come from excitement or impulse, but from sincerity. 
You’re important to me in a way that’s quiet, real, and meaningful. 
Some people come into our life and make ordinary moments feel better. 
You are one of those people in my life. 🌸`;

let i = 0;
function typeWriter() {
  if (i < text.length) {
    document.getElementById("typewriter").innerHTML += text.charAt(i);
    i++;
    setTimeout(typeWriter, 25);
  }
}

window.onload = typeWriter;

const observer = new IntersectionObserver(entries=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      entry.target.classList.add("show");
    }
  });
});

document.querySelectorAll(".hidden").forEach(el=>{
  observer.observe(el);
});

const petalsContainer = document.querySelector(".petals");

for(let i=0;i<20;i++){
let petal = document.createElement("div");
petal.className="petal";
petal.innerHTML="🌸";
petal.style.left=Math.random()*100+"vw";
petal.style.animationDuration=(5+Math.random()*5)+"s";
petalsContainer.appendChild(petal);
}
document.addEventListener("mousemove",e=>{
let sparkle=document.createElement("div");
sparkle.className="sparkle";
sparkle.style.left=e.pageX+"px";
sparkle.style.top=e.pageY+"px";
document.body.appendChild(sparkle);

setTimeout(()=>{
sparkle.remove();
},500);
});
