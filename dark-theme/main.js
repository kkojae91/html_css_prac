const darkCheckBox = document.querySelector("#checkbox");
const rootHtml = document.querySelector("html");
darkCheckBox.addEventListener("click", () => {
  if (darkCheckBox.checked) {
    rootHtml.classList.add("dark");
  } else {
    rootHtml.classList.remove("dark");
  }
});
