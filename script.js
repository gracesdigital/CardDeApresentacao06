// Links e destinos são configurados no index.html.
document.querySelectorAll(".link-pill").forEach((link) => {
  link.addEventListener("click", () => {
    link.classList.add("is-active");
    window.setTimeout(() => link.classList.remove("is-active"), 220);
  });
});
