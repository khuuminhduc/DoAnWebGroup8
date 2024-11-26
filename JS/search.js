const contentSearch = document.getElementById("sr");
console.log(contentSearch);
contentSearch.addEventListener("keydown", (event) => {
  contentSearch.value = ""; // Đặt lại input trống
  let contentInput;
  if (event === "Enter") {
    contentInput = contentSearch.value.trim();
  }
  console.log(contentInput);
});
