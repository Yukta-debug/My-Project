const chips = document.querySelectorAll(".chip");
const cards = document.querySelectorAll(".card[data-t]");

chips.forEach(chip => {
  chip.addEventListener("click", () => {
    chips.forEach(c => c.classList.remove("active"));
    chip.classList.add("active");
    const f = chip.dataset.f;
    cards.forEach(card => {
      card.style.display = (f === "all" || card.dataset.t === f) ? "block" : "none";
    });
  });
});