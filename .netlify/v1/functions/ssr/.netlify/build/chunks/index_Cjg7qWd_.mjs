import { c as createComponent } from './astro-component_BCZhGd5T.mjs';
import 'piccolore';
import { r as renderComponent, p as renderTemplate, m as maybeRenderHead, j as addAttribute } from './ssr-function_BzHB8mxP.mjs';
import { $ as $$MainLayout, r as renderScript } from './MainLayout_B5_cWVeY.mjs';
import { $ as $$HomeMovieCard } from './HomeMovieCard_Fls-5Eno.mjs';

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const API_KEY = "0ce830400809e6a1d1bf1f1488ac4ba3";
  const response = await fetch(
    `https://api.themoviedb.org/3/trending/movie/week?api_key=${API_KEY}&language=es-ES`
  );
  const data = await response.json();
  const topPeliculas = data.results.slice(0, 10);
  async function obtenerGenero(id) {
    const response2 = await fetch(
      `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=${id}&sort_by=vote_average.desc&vote_count.gte=1000&language=es-ES`
    );
    const data2 = await response2.json();
    return data2.results.slice(0, 5);
  }
  const accion = await obtenerGenero(28);
  const comedia = await obtenerGenero(35);
  const terror = await obtenerGenero(27);
  const drama = await obtenerGenero(18);
  const cienciaFiccion = await obtenerGenero(878);
  const animacion = await obtenerGenero(16);
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, {}, { "default": async ($$result2) => renderTemplate`    ${maybeRenderHead()}<section class="hero-slider"> ${topPeliculas.map((pelicula, index) => renderTemplate`<div${addAttribute(`hero-slide ${index === 0 ? "active-slide" : ""}`, "class")}${addAttribute(`background-image:url(https://image.tmdb.org/t/p/original${pelicula.backdrop_path})`, "style")}> <div class="hero-overlay"> <div class="hero-content"> <span class="hero-rank">
🔥 TOP #${index + 1} DEL MOMENTO
</span> <h1>${pelicula.title}</h1> <p>${pelicula.overview}</p> <div class="hero-stats"> <span>
⭐ ${pelicula.vote_average.toFixed(1)} </span> <span>🌍 Trending mundial</span> <span>👥 ${pelicula.vote_count} votos</span> <span>📅 ${pelicula.release_date}</span> </div> <div class="hero-buttons"> <a${addAttribute(`/pelicula/${pelicula.id}`, "href")} class="hero-info-btn">
Ver información
</a> <a${addAttribute(`/pelicula/${pelicula.id}?autoplay=true`, "href")} class="hero-watch-btn">
▶ Ver película
</a> </div> </div> </div> </div>`)} </section>    <section class="home-search-section"> <h2>Encuentra cualquier película</h2> <div class="search-container"> <form action="/busqueda" method="GET" id="search-form"> <input type="text" name="q" id="search-input" placeholder="Buscar película..."> <button type="submit"> Buscar </button> </form> </div> </section>    <section class="home-categories"> <!-- ACCIÓN --> <div class="category-row"> <h2>🔥 Acción</h2> <div class="movies-grid"> ${accion.map((pelicula) => renderTemplate`${renderComponent($$result2, "HomeMovieCard", $$HomeMovieCard, { "pelicula": pelicula })}`)} </div> </div> <!-- COMEDIA --> <div class="category-row"> <h2>😂 Comedia</h2> <div class="movies-grid"> ${comedia.map((pelicula) => renderTemplate`${renderComponent($$result2, "HomeMovieCard", $$HomeMovieCard, { "pelicula": pelicula })}`)} </div> </div> <!-- TERROR --> <div class="category-row"> <h2>😱 Terror</h2> <div class="movies-grid"> ${terror.map((pelicula) => renderTemplate`${renderComponent($$result2, "HomeMovieCard", $$HomeMovieCard, { "pelicula": pelicula })}`)} </div> </div> <!-- DRAMA --> <div class="category-row"> <h2>🎭 Drama</h2> <div class="movies-grid"> ${drama.map((pelicula) => renderTemplate`${renderComponent($$result2, "HomeMovieCard", $$HomeMovieCard, { "pelicula": pelicula })}`)} </div> </div> <!-- CIENCIA FICCIÓN --> <div class="category-row"> <h2>🚀 Ciencia ficción</h2> <div class="movies-grid"> ${cienciaFiccion.map((pelicula) => renderTemplate`${renderComponent($$result2, "HomeMovieCard", $$HomeMovieCard, { "pelicula": pelicula })}`)} </div> </div> <!-- ANIMACIÓN --> <div class="category-row"> <h2>🎌 Animación</h2> <div class="movies-grid"> ${animacion.map((pelicula) => renderTemplate`${renderComponent($$result2, "HomeMovieCard", $$HomeMovieCard, { "pelicula": pelicula })}`)} </div> </div> </section> ${renderScript($$result2, "C:/Users/Usuario/Documents/Paginas web app/CineApp API/src/pages/index.astro?astro&type=script&index=0&lang.ts")} ` })}`;
}, "C:/Users/Usuario/Documents/Paginas web app/CineApp API/src/pages/index.astro", void 0);
const $$file = "C:/Users/Usuario/Documents/Paginas web app/CineApp API/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
