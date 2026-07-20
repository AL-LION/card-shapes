import { createRequire } from 'module';

createRequire(import.meta.url);

// src/components/styles/cardShapes.scss
var cardShapes_default = "/* Card shape styles will go here. */\n.bases-card.card-shape-landscape .bases-card-image {\n  aspect-ratio: 16/9 !important;\n}\n\n.bases-card.card-shape-portrait .bases-card-image {\n  aspect-ratio: 3/4 !important;\n}\n\n.bases-card.card-shape-square .bases-card-image {\n  aspect-ratio: 1/1 !important;\n}";

// src/components/scripts/cardShapes.inline.ts
var cardShapes_inline_default = 'function r(){let s=document.querySelectorAll(".bases-card");for(let a of s){let o=a.querySelectorAll(".bases-card-row");for(let t of o){if(t.querySelector(".bases-card-label")?.textContent?.trim().toLowerCase()!=="card-shape")continue;let e=t.querySelector(".bases-card-value .bases-text")?.textContent?.trim().toLowerCase();a.classList.remove("card-shape-landscape","card-shape-portrait","card-shape-square"),(e==="landscape"||e==="portrait"||e==="square")&&a.classList.add(`card-shape-${e}`),t.hidden=!0}}}document.addEventListener("nav",r);window.addCleanup(()=>{document.removeEventListener("nav",r)});\n';

// src/components/CardShapes.tsx
var CardShapes_default = (() => {
  const CardShapes = () => {
    return null;
  };
  CardShapes.css = cardShapes_default;
  CardShapes.afterDOMLoaded = cardShapes_inline_default;
  return CardShapes;
});

export { CardShapes_default as CardShapes };
//# sourceMappingURL=index.js.map
//# sourceMappingURL=index.js.map