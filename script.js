
function openInvite(){
 document.body.classList.add('open');
 setTimeout(()=>{
   document.getElementById('welcome').style.display='none';
   document.getElementById('invite').style.display='flex';
 },2000);
}
const target = new Date('2026-07-01T07:05:00');

function tick() {
    const now = new Date();
    const diff = target - now;

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);

    document.getElementById('countdown').innerHTML =
`
<div>${days}<br>Days</div>
<div>${hours}<br>Hours</div>
<div>${minutes}<br>Minutes</div>
<div>${seconds}<br>Seconds</div>
`;
}
tick();
setInterval(tick, 1000);
