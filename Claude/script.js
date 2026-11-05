const greetings = ["Hello", "Hola", "Bonjour", "Ciao", "Hallo", "Aloha"];
const colors = ["#4a3200", "#2e8b3d", "#c98a0b", "#b3472b"];
const heading = document.getElementById("greeting");
let i = 0;

document.getElementById("btn").addEventListener("click", () => {
  i = (i + 1) % greetings.length;
  heading.textContent = greetings[i];
  heading.style.color = colors[i % colors.length];
});

document.getElementById("pineapple").addEventListener("click", () => {
  heading.textContent = "Hello";
  heading.style.color = "";
  i = 0;
});
