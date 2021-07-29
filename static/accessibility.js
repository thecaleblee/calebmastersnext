// Fix screen reader accessibility for tech stack toggles
document.addEventListener("load", function () {
  document
    .querySelectorAll(".tech a")
    .forEach((link) => link.setAttribute("tabindex", -1));

  document.documentElement.lang = "en-us";
});
