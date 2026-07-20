import type {
  QuartzComponent,
  QuartzComponentConstructor,
} from "@quartz-community/types";

import style from "./styles/cardShapes.scss";

// @ts-ignore - inline script import handled by Quartz bundler
import script from "./scripts/cardShapes.inline.ts";

export default (() => {
  const CardShapes: QuartzComponent = () => {
    return null;
  };

  CardShapes.css = style;
  CardShapes.afterDOMLoaded = script;

  return CardShapes;
}) satisfies QuartzComponentConstructor;