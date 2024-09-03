/* eslint-disable */
import "bootstrap";
import "./style.css";

window.onload = function() {
  document.querySelector(".excusas").innerHTML = randomExcuse();
};
function randomExcuse() {
  let who = ["Mi perro", "José Luis", "Mi hermano", "La mosca de mi casa"];
  let action = [" rompió", " se comió", " se robó", " aplastó"];
  let what = [
    " mi casa",
    " el lapicero que me prestaste",
    " a mi madre",
    " el tanque de agua"
  ];
  let when = [
    " ayer",
    " hace 32 segundos",
    " justo ahora",
    " la semana pasada"
  ];

  let randomWho = who[Math.floor(Math.random() * 4)];
  let randomAction = action[Math.floor(Math.random() * 4)];
  let randomWhat = what[Math.floor(Math.random() * 4)];
  let randomWhen = when[Math.floor(Math.random() * 4)];

  return randomWho + randomAction + randomWhat + randomWhen;
}
