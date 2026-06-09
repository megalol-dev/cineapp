import { c as createComponent } from './astro-component_BCZhGd5T.mjs';
import 'piccolore';
import { r as renderComponent, p as renderTemplate, m as maybeRenderHead, j as addAttribute } from './ssr-function_BzHB8mxP.mjs';
import { $ as $$MainLayout, r as renderScript } from './MainLayout_B5_cWVeY.mjs';

const prerender = false;
const $$genero = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$genero;
  const genero = Astro2.params.genero;
  const genreId = Astro2.url.searchParams.get("id");
  const currentPage = Number(Astro2.url.searchParams.get("page")) || 1;
  const API_KEY = "0ce830400809e6a1d1bf1f1488ac4ba3";
  const response = await fetch(
    `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=${genreId}&language=es-ES&page=${currentPage}`
  );
  const data = await response.json();
  const peliculas = data.results;
  const totalPages = data.total_pages;
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, {}, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<a href="/" class="back-button">
⬅ Volver al inicio
</a> <h1 class="section-title">
Categoría: ${genero} </h1> <div class="movies-grid"> ${peliculas.map((pelicula) => renderTemplate`<div class="movie-card mobile-click-card"> <div class="movie-image-container"> <!-- INDICADOR FAVORITOS --> <div class="favorite-indicator"${addAttribute(pelicula.id, "data-movie-id")}>
❤️
</div> <img${addAttribute(`https://image.tmdb.org/t/p/w500${pelicula.poster_path}`, "src")}${addAttribute(pelicula.title, "alt")}> <!-- OVERLAY --> <div class="movie-overlay"> <div class="overlay-content"> <h3>${pelicula.title}</h3> <div class="overlay-info"> <span>
⭐ ${pelicula.vote_average.toFixed(1)} </span> <span>
📅 ${pelicula.release_date} </span> </div> <p class="overlay-description"> ${pelicula.overview?.slice(0, 120)}...
</p> <div class="movie-buttons"> <a${addAttribute(`/pelicula/${pelicula.id}`, "href")} class="info-button">
Ver info
</a> <a${addAttribute(`/pelicula/${pelicula.id}?autoplay=true`, "href")} class="watch-button">
▶ Ver
</a> </div> </div> </div> </div> </div>`)} </div>  <div class="pagination"> ${currentPage > 1 && renderTemplate`<a${addAttribute(`/categoria/${genero}?id=${genreId}&page=${currentPage - 1}`, "href")} class="page-button">
⬅ Anterior
</a>`} <p>
Página ${currentPage} de ${totalPages} </p> ${currentPage < totalPages && renderTemplate`<a${addAttribute(`/categoria/${genero}?id=${genreId}&page=${currentPage + 1}`, "href")} class="page-button">
Siguiente ➡
</a>`} </div> ${renderScript($$result2, "C:/Users/Usuario/Documents/Paginas web app/CineApp API/src/pages/categoria/[genero].astro?astro&type=script&index=0&lang.ts")} ` })}`;
}, "C:/Users/Usuario/Documents/Paginas web app/CineApp API/src/pages/categoria/[genero].astro", void 0);
const $$file = "C:/Users/Usuario/Documents/Paginas web app/CineApp API/src/pages/categoria/[genero].astro";
const $$url = "/categoria/[genero]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$genero,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
