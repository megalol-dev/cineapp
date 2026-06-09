import { c as createComponent } from './astro-component_BCZhGd5T.mjs';
import 'piccolore';
import { m as maybeRenderHead, j as addAttribute, p as renderTemplate } from './ssr-function_BzHB8mxP.mjs';
import 'clsx';

const $$HomeMovieCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$HomeMovieCard;
  const { pelicula } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="movie-card mobile-click-card"> <div class="movie-image-container"> <div class="favorite-indicator"${addAttribute(pelicula.id, "data-movie-id")}>❤️</div> <img${addAttribute(`https://image.tmdb.org/t/p/w500${pelicula.poster_path}`, "src")}${addAttribute(pelicula.title, "alt")}> <div class="movie-overlay"> <div class="overlay-content"> <h3>${pelicula.title}</h3> <div class="overlay-info"> <span>
⭐ ${pelicula.vote_average.toFixed(1)} </span> <span>
📅 ${pelicula.release_date} </span> </div> <p class="overlay-description"> ${pelicula.overview?.slice(0, 120)}...
</p> <div class="movie-buttons"> <a${addAttribute(`/pelicula/${pelicula.id}`, "href")} class="info-button">
Ver info
</a> <a${addAttribute(`/pelicula/${pelicula.id}?autoplay=true`, "href")} class="watch-button">
▶ Ver
</a> </div> </div> </div> </div> </div>`;
}, "C:/Users/Usuario/Documents/Paginas web app/CineApp API/src/components/HomeMovieCard.astro", void 0);

export { $$HomeMovieCard as $ };
