const count = document.querySelector('#counter');
const increment = ()=>{
    let value = parseInt(count.innerHTML)
    value = value+1;
    count.innerHTML = value;
}
const decrement = ()=>{
    let value = parseInt(count.innerHTML)
    value = value-1;
    count.innerHTML = value;
}