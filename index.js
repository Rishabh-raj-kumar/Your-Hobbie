let inp = document.getElementById("inp");
let submit = document.querySelector("#submit");
let list = document.querySelector(".list");

let Arr = JSON.parse(localStorage.getItem("suggest")) || [];

submit.addEventListener("click", () => {
  let item = "";
  if (inp.value !== "") {
    item = inp.value;
  }
  console.log(item);
  inp.value = "";
  Arr.push(item);

  console.log(Arr);
  Arr = Arr.filter((x) => x !== "");
  localStorage.setItem("suggest", JSON.stringify(Arr));

  location.reload();
});

Arr.forEach((array) => {
  let li = document.createElement("li");
  li.innerHTML = array;

  if (
    array.toLowerCase().includes("sing") ||
    array.toLowerCase().includes("danc") ||
    array.toLowerCase().includes("athe") ||
    array.toLowerCase().includes("code") ||
    array.toLowerCase().includes("enterpreneur") ||
    array.toLowerCase().includes("politic") ||
    array.toLowerCase().includes("buisness")
  ) {
    li.classList.add("active");
  }
  list.appendChild(li);
});
