import { c as createComponent } from './astro-component_BCZhGd5T.mjs';
import 'piccolore';
import { r as renderComponent, p as renderTemplate, m as maybeRenderHead, j as addAttribute } from './ssr-function_BzHB8mxP.mjs';
import { $ as $$MainLayout, r as renderScript } from './MainLayout_B5_cWVeY.mjs';
import { $ as $$HomeMovieCard } from './HomeMovieCard_Fls-5Eno.mjs';

const prerender = false;
const $$id = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$id;
  const API_KEY = "0ce830400809e6a1d1bf1f1488ac4ba3";
  const id = Astro2.params.id;
  Astro2.url.searchParams.get("autoplay");
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=es-ES&append_to_response=videos`
  );
  const pelicula = await response.json();
  const trailer = pelicula.videos.results.find(
    (video) => video.type === "Trailer" && video.site === "YouTube"
  );
  const similarResponse = await fetch(
    `https://api.themoviedb.org/3/movie/${id}/similar?api_key=${API_KEY}&language=es-ES&page=1`
  );
  const similarData = await similarResponse.json();
  const similares = similarData.results.slice(0, 6);
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, {}, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<a href="javascript:history.back()" class="back-button"> ⬅ Volver atrás </a> <section class="movie-hero-detail"> <div class="movie-poster-box"> <img${addAttribute(`https://image.tmdb.org/t/p/w500${pelicula.poster_path}`, "src")}${addAttribute(pelicula.title, "alt")}> </div> <div class="movie-info"> <span class="movie-tag">Película</span> <h1>${pelicula.title}</h1> <p class="movie-overview"> ${pelicula.overview} </p> <div class="movie-meta"> <span>
⭐ ${pelicula.vote_average.toFixed(1)} </span> <span>
📅 ${pelicula.release_date} </span> <span>
⏱️ ${pelicula.runtime} min
</span> </div> <p> <strong>Géneros:</strong> ${pelicula.genres.map((g) => g.name).join(", ")} </p> <div class="detail-buttons"> <button class="watch-button large-watch-button" id="openModal">
▶ Ver película
</button> <button class="favorite-button" id="favoriteBtn"${addAttribute(pelicula.id, "data-id")}${addAttribute(pelicula.title, "data-title")}${addAttribute(pelicula.poster_path, "data-poster")}>
❤️ Añadir a mi lista
</button> </div> </div> </section>  ${trailer ? renderTemplate`<section class="trailer-section"> <h2>Trailer oficial</h2> <div class="trailer-container"> <iframe${addAttribute(`https://www.youtube.com/embed/${trailer.key}`, "src")}${addAttribute(`Trailer de ${pelicula.title}`, "title")} allowfullscreen></iframe> </div> </section>` : renderTemplate`<p class="no-trailer">No hay trailer disponible.</p>`} <h2>🔥 También te puede gustar</h2> <div class="movies-grid"> ${similares.map((peliculaSimilar) => renderTemplate`${renderComponent($$result2, "HomeMovieCard", $$HomeMovieCard, { "pelicula": peliculaSimilar })}`)} </div>  <div class="movie-modal" id="movieModal"> <div class="movie-modal-content"> <button class="close-modal" id="closeModal"> ✖ </button> <div class="modal-video"> ${trailer ? renderTemplate`<iframe${addAttribute(`https://www.youtube.com/embed/${trailer.key}?autoplay=1`, "src")}${addAttribute(`Trailer de ${pelicula.title}`, "title")} allowfullscreen></iframe>` : renderTemplate`<div class="fake-player"> <h2>🎬 Próximamente</h2> <p>
Esta película aún no está disponible en
                                streaming.
</p> </div>`} </div> </div> </div>  <div class="toast" id="toast">❤️ Película añadida a Mi Lista</div> ${renderScript($$result2, "C:/Users/Usuario/Documents/Paginas web app/CineApp API/src/pages/pelicula/[id].astro?astro&type=script&index=0&lang.ts")} ` })}`;
}, "C:/Users/Usuario/Documents/Paginas web app/CineApp API/src/pages/pelicula/[id].astro", void 0);
const $$file = "C:/Users/Usuario/Documents/Paginas web app/CineApp API/src/pages/pelicula/[id].astro";
const $$url = "/pelicula/[id]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
   __proto__: null,
   default: $$id,
   file: $$file,
   prerender,
   url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
