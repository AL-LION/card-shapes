function applyCardShapes() {
  const cards = document.querySelectorAll<HTMLElement>(".bases-card");

  for (const card of cards) {
    const rows = card.querySelectorAll<HTMLElement>(".bases-card-row");

    for (const row of rows) {
      const label = row
        .querySelector<HTMLElement>(".bases-card-label")
        ?.textContent?.trim()
        .toLowerCase();

      if (label !== "card-shape") {
        continue;
      }

      const shape = row
        .querySelector<HTMLElement>(".bases-card-value .bases-text")
        ?.textContent?.trim()
        .toLowerCase();

      card.classList.remove("card-shape-landscape", "card-shape-portrait", "card-shape-square");

      if (shape === "landscape" || shape === "portrait" || shape === "square") {
        card.classList.add(`card-shape-${shape}`);
      }

      row.hidden = true;
    }
  }
}

document.addEventListener("nav", applyCardShapes);

window.addCleanup(() => {
  document.removeEventListener("nav", applyCardShapes);
});
