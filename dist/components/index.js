import { createRequire } from 'module';

createRequire(import.meta.url);

// src/components/styles/cardShapes.scss
var cardShapes_default = ".bases-card {\n  background: transparent !important;\n  border: none !important;\n  box-shadow: none !important;\n}\n\n.bases-card-body {\n  background: transparent !important;\n  padding: 0.75rem 0 0 !important;\n}\n\n.bases-card-title {\n  display: none !important;\n}\n\n.bases-card-row[hidden] {\n  display: none !important;\n}\n\n.bases-card.card-shape-landscape .bases-card-image {\n  aspect-ratio: 16/9 !important;\n}\n\n.bases-card.card-shape-portrait .bases-card-image {\n  aspect-ratio: 3/4 !important;\n}\n\n.bases-card.card-shape-square .bases-card-image {\n  aspect-ratio: 1/1 !important;\n}\n\n.card-tags-row {\n  display: block !important;\n}\n\n.card-tags-row .bases-card-label {\n  display: none !important;\n}\n\n.card-tags-row .bases-card-value,\n.card-tags-row .bases-list {\n  display: flex !important;\n  flex-wrap: wrap;\n  gap: 0.4rem;\n}\n\n.card-tags-row .bases-text {\n  font-size: 0.9rem;\n}";

// src/components/scripts/cardShapes.inline.ts
var cardShapes_inline_default = 'function r(){let c=document.querySelectorAll(".bases-card");for(let a of c){let d=a.querySelectorAll(".bases-card-row");for(let t of d){let o=t.querySelector(".bases-card-label")?.textContent?.trim().toLowerCase();if(o==="card-shape"){let e=t.querySelector(".bases-card-value .bases-text")?.textContent?.trim().toLowerCase();a.classList.remove("card-shape-landscape","card-shape-portrait","card-shape-square"),(e==="landscape"||e==="portrait"||e==="square")&&a.classList.add(`card-shape-${e}`),t.hidden=!0;continue}if(o==="tags"){t.classList.add("card-tags-row");let e=t.querySelectorAll(".bases-text");for(let n of e){let s=n.textContent?.trim();s&&!s.startsWith("#")&&(n.textContent=`#${s}`)}}}}}r();document.addEventListener("nav",r);window.addCleanup(()=>{document.removeEventListener("nav",r)});\n';

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