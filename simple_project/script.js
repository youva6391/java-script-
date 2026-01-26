const btn = document.getElementById("btn");
const countText = document.getElementById("count");

let count = 0;

btn.addEventListener("click", () => {
    count++;
    countText.textContent = count;
});
