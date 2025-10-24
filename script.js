// Script interaktif sederhana
document.addEventListener("DOMContentLoaded", () => {
  const name = document.querySelector("h1");
  name.addEventListener("mouseover", () => {
    name.style.color = "#c8e6c9";
  });
  name.addEventListener("mouseout", () => {
    name.style.color = "white";
  });

  console.log("Website portfolio Kamil Rizikn Fajirin berhasil dimuat!");
});
