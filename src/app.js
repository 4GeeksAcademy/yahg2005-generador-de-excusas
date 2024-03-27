/* eslint-disable */
window.onload = function() {
  //write your code here
  document.querySelector(`#btn`).addEventListener("click", () => {
    document.querySelector(`#the-excuse`).innerHTML = generateExcuse();
  });
  console.log("Hello Rigo from the console!");
};
function generateExcuse() {
  let who = ["El perro", "Mi abuela", "Mi pájaro"];
  let action = ["se comió", "rompió", "perdió", "dañó"];
  let what = ["mi tarea", "mi teléfono", "el coche"];
  let when = [
    "antes de la clase",
    "cuando estaba durmiendo",
    "mientras hacía ejercicio",
    "durante mi almuerzo",
    "mientras rezaba"
  ];
  let sujeto = who[Math.floor(Math.random() * who.length)];
  let verbo = action[Math.floor(Math.random() * action.length)];
  let objeto = what[Math.floor(Math.random() * what.length)];
  let tiempo = when[Math.floor(Math.random() * when.length)];
  let excusa = sujeto + " " + verbo + " " + objeto + " " + tiempo + ".";

  return excusa;
}
