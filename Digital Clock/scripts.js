const div = document.querySelector('div');
//setinterval is used for executing code in specifieng time intervals
setInterval(()=>{
    let time = new Date();
div.innerHTML = time.toLocaleTimeString(); //toLocaleTimeString() main important part of this code
},1000)