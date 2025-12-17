const result = document.getElementById('result');
const marriageDate = new Date(2026,0,25);
setInterval(()=>{


const currentDate = Date.now();


let gap = marriageDate-currentDate ;

const day = Math.floor(gap/(1000*60*60*24));
gap%=1000*60*60*24;

const hour = Math.floor(gap/(1000*60*60));
gap%=1000*60*60;

const minute = Math.floor(gap/(1000*60));
gap%=1000*60;

const second = Math.floor(gap/(1000));

result.innerHTML = `${day} Days   ${hour} Hours  ${minute} Minutes  ${second} Seconds`;



} , 1000)
