const form = document.querySelector('form')
const answer = {
  q1:"CSS",        
  q2:"Boolean",    
  q3:"MySQL",      
  q4:"a",        
  q5:"Git"         
}

form.addEventListener('submit',(e)=>{
e.preventDefault();
const data = new FormData(form)
let result = 0

for(let [name,value] of data.entries()){
    if(answer[name]==value){
        result++;
    }
}

document.getElementById('answer').textContent = `Your Score Is ${result} out of 5`;
})
