import { c as createComponent } from './astro-component_BCZhGd5T.mjs';
import 'piccolore';
import { l as createRenderInstruction, m as maybeRenderHead, p as renderTemplate, n as renderHead, r as renderComponent, o as renderSlot } from './ssr-function_BzHB8mxP.mjs';
import 'clsx';

async function renderScript(result, id) {
  const inlined = result.inlinedScripts.get(id);
  let content = "";
  if (inlined != null) {
    if (inlined) {
      content = `<script type="module">${inlined}</script>`;
    }
  } else {
    const resolved = await result.resolve(id);
    content = `<script type="module" src="${result.userAssetsBase ? (result.base === "/" ? "" : result.base) + result.userAssetsBase : ""}${resolved}"></script>`;
  }
  return createRenderInstruction({ type: "script", id, content });
}

const $$Header = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<header class="header"> <!-- ARRIBA - OPCIONES --> <nav class="nav nav-left"> <a href="/"> 🏠 Inicio </a> <a href="/favoritos"> ❤️ Mi lista </a> </nav> <!-- CENTRO - LOGOTIPO --> <a href="/" class="logo"> 🎬 ¿QUÉ PELÍCULA VER? </a> <!-- ABAJO - MENU DE BUSCAR CATEGORIAS --> <div class="categories-dropdown"> <button class="categories-button" id="categoriesBtn">
🎞 Categorías
</button> <!-- LISTA DE TODAS LAS CATEGORIAS --> <div class="dropdown-content"> <a href="/categoria/accion?id=28">Acción</a> <a href="/categoria/aventura?id=12">Aventura</a> <a href="/categoria/animacion?id=16">Animación</a> <a href="/categoria/comedia?id=35">Comedia</a> <a href="/categoria/crimen?id=80">Crimen</a> <a href="/categoria/documental?id=99">Documental</a> <a href="/categoria/drama?id=18">Drama</a> <a href="/categoria/familiar?id=10751">Familiar</a> <a href="/categoria/fantasia?id=14">Fantasía</a> <a href="/categoria/historia?id=36">Historia</a> <a href="/categoria/terror?id=27">Terror</a> <a href="/categoria/musica?id=10402">Música</a> <a href="/categoria/misterio?id=9648">Misterio</a> <a href="/categoria/romance?id=10749">Romance</a> <a href="/categoria/ciencia-ficcion?id=878"> Ciencia Ficción </a> <a href="/categoria/pelicula-tv?id=10770"> Película TV </a> <a href="/categoria/thriller?id=53"> Thriller </a> <a href="/categoria/belica?id=10752"> Bélica </a> <a href="/categoria/western?id=37"> Western </a> </div> </div> <!-- JS - MANEJA LOS EVENTOS DEL BOTONES CATEGORIAS--> ${renderScript($$result, "C:/Users/Usuario/Documents/Paginas web app/CineApp API/src/components/Header.astro?astro&type=script&index=0&lang.ts")} </header>`;
}, "C:/Users/Usuario/Documents/Paginas web app/CineApp API/src/components/Header.astro", void 0);

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$Footer;
  return renderTemplate`${maybeRenderHead()}<footer class="footer"> <p>Proyecto personal para portfolio realizado con Astro.</p> <p>Datos obtenidos desde TMDB API.</p> </footer>`;
}, "C:/Users/Usuario/Documents/Paginas web app/CineApp API/src/components/Footer.astro", void 0);

const $$MainLayout = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`<html lang="es"> <head><meta charset="UTF-8"><title>¿Qué Película Ver?</title>${renderHead()}</head> <body> ${renderComponent($$result, "Header", $$Header, {})} <main class="main-content"> ${renderSlot($$result, $$slots["default"])} </main> ${renderComponent($$result, "Footer", $$Footer, {})} </body></html>`;
}, "C:/Users/Usuario/Documents/Paginas web app/CineApp API/src/layouts/MainLayout.astro", void 0);

export { $$MainLayout as $, renderScript as r };
