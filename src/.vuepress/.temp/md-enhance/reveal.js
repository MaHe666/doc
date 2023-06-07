import { reveal, revealMarkdown, revealHighlight, revealMath, revealSearch, revealNotes, revealZoom } from "D:/myCodes/VuePress/vuepress-hope-doc/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-beta.219_vuepress@2.0.0-beta.62/node_modules/vuepress-plugin-md-enhance/lib/client/index.js";

export const useReveal = () => [reveal(), revealMarkdown(), revealHighlight(), revealMath(), revealSearch(), revealNotes(), revealZoom()];
