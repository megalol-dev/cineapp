import { c as createComponent } from './astro-component_BCZhGd5T.mjs';
import 'piccolore';
import { r as renderComponent, p as renderTemplate, m as maybeRenderHead } from './ssr-function_BzHB8mxP.mjs';
import { $ as $$MainLayout, r as renderScript } from './MainLayout_B5_cWVeY.mjs';

const $$Favoritos = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<h1 class="section-title">❤️ Mi lista</h1> <div class="movies-grid fixed-grid" id="favoritesGrid"></div> ${renderScript($$result2, "C:/Users/Usuario/Documents/Paginas web app/CineApp API/src/pages/favoritos.astro?astro&type=script&index=0&lang.ts")} ` })}`;
}, "C:/Users/Usuario/Documents/Paginas web app/CineApp API/src/pages/favoritos.astro", void 0);

const $$file = "C:/Users/Usuario/Documents/Paginas web app/CineApp API/src/pages/favoritos.astro";
const $$url = "/favoritos";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Favoritos,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
