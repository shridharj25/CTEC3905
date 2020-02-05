// const button = document.getElementById ("text");
//
// button.addEventListener("dblclick", sup);
//
// function sup() {
//   if ( (button.innerHTML === "Click me")) {
//     button.innerHTML = "thanks";
//   } else {
//     button.innerHTML ="Click me";
//   }
//
// }

const button = document.getElementById ("text2");

button.addEventListener("click", hello);
let count  = 0;

function hello() {

  button.insertAdjacentHTML('afterend', `<p>${count}</p>`);
  count++;
}
