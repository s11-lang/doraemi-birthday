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