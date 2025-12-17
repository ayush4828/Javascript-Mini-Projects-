const body = document.querySelector('body');

body.addEventListener('click' , (e)=>
{
   const circleElement =  document.createElement('div');
   circleElement.classList.add('circle');
   const helloMessages = [
  "Hello",
  "Namaste",
  "Hola",
  "Bonjour",
  "Ciao",
  "Hallo",
  "Olá",
  "Salaam",
  "Konnichiwa",
  "Annyeong",
  "Ni Hao",
  "Zdravstvuyte",
  "Merhaba",
  "Sawubona",
  "Shalom",
  "Yassas",
  "Selamat Pagi",
  "Halo",
  "Hej",
  "Hei",
  "Hei",
  "Dzień Dobry",
  "Ahoj",
  "Kamusta",
  "Jambo",
  "Sawasdee",
  "Xin Chào",
  "Goddag",
  "Szia",
  "Namaskar",
  "Vanakkam",
  "Namaskaram",
  "Nomoskar",
  "Suswagatam"
];
   circleElement.textContent = helloMessages[Math.floor(Math.random()*34)];
   const color = [ 
  "red", "blue", "green", "yellow", "orange",
  "purple", "pink", "black", "white", "gray",
  "brown", "cyan", "magenta", "lime", "teal",
  "indigo", "violet", "gold", "silver", "maroon",
  "navy", "olive", "coral", "turquoise", "beige"];

  circleElement.style.backgroundColor = color[Math.floor(Math.random()*25)];

  //main logic here
  circleElement.style.top = `${e.clientY-35}px`;
  circleElement.style.left = `${e.clientX-35}px`;


  body.append(circleElement); 

  setTimeout(()=>{
      circleElement.remove();
  },5000)

})