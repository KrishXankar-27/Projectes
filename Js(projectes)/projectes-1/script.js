console.log("hallo");

const buttons = document.querySelectorAll('.button'); // Select elements with class 'button'
const body = document.querySelector('body');

buttons.forEach(function (button) {
  console.log(button);
  button.addEventListener('click', function(event){
    console.log(event);
    console.log(event.target);

    // Change background color to the id of the clicked button
    // const color = event.target.id;
    // body.style.backgroundColor = color;

const changecolor = event.target.id

switch (changecolor) {
  case 'grey':
    body.style.backgroundColor = 'grey'
    break;
  case 'white':
    body.style.backgroundColor = 'white'
    break;
  case 'blue':
    body.style.backgroundColor = 'blue'
    break;
  case 'yellow':
    body.style.backgroundColor = event.target.id
    break;

  default: 
  console.log("invalied option");
  
    break;
}
  });
});