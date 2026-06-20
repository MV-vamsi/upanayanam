
function openInvite(){
 document.body.classList.add('open');
 setTimeout(()=>{
   document.getElementById('welcome').style.display='none';
   document.getElementById('invite').style.display='flex';
 },2000);
}
const target=new Date('2026-07-01T00:00:00');
function tick(){
 const now=new Date();
 const diff=target-now;
 const d=Math.floor(diff/86400000);
 document.getElementById('countdown').innerText='Countdown: '+d+' days';
}
tick(); setInterval(tick,1000);
