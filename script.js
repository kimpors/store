const buttons = document.querySelectorAll("button");

buttons.forEach((btn) => {
  btn.addEventListener("click", (event) => {
    let cl = event.target.className;
    if (cl != "available") {
      window.alert("Одежа розпродана");
    }
  });
});
