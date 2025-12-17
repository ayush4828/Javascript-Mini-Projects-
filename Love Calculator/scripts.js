const form = document.querySelector('form');
const Boy = document.getElementById('Boy');
const Girl = document.getElementById('Girl');

form.addEventListener('submit' , (e)=>{
e.preventDefault();
    const boyl = Boy.value.length;
    const girll = Girl.value.length;

    let result;
    if(Boy.value.includes("vinit") && Girl.value.includes("rahi")){
        result=100;
    }
    
    else{
         result = Math.pow(boyl+girll , 3) % 101;
    }

    document.getElementById('result').innerHTML = `Result:${result}%`;
    
    form.reset();//

})