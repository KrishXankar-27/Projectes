console.log("halo");


const forms =  document.querySelector('form');

forms.addEventListener('submit' , function(e){
    e.preventDefault();

const height = parseInt(document.querySelector("#height").value);
const weight = parseInt(document.querySelector("#weight").value);

const result = document.querySelector(`#results`);

if (height === '' || height === 0 || isNaN(height)) {
    result.innerHTML = `give a valid height ${height}`
} else if (weight === '' || weight === 0 || isNaN(weight)) {
    result.innerHTML = `give a valid height ${weight}`
}
  else {
    const bmi = (weight / ((height / 100) ** 2)).toFixed(2);
    result.innerHTML = `<span>${bmi}</span>`
    
  }
})