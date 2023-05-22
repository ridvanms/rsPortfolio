import { html } from "../../../node_modules/lit-html/lit-html.js";

const error404Template = () => {
  return html`
    <section class="vh-100  baskerville ">
      <header class="tc ph5 lh-copy">
        <h1 class="f1 f-headline-l code mb3 fw9 dib ">404</h1>
        <h2 class="tc f1-l fw1 light-orange">
          Sorry, we can't find the page you are looking for.
        </h2>
      </header>
      <p class="fw1 i tc mt4 mt5-l f4 f3-l">
        Are you looking for one of these?
      </p>
      <ul class="list tc pl0 w-100 mt5 ">
        <li class="dib">
          <a class="f5 f4-ns link white db pv2 ph3 hover-light-orange " href="/"
            >Home</a
          >
        </li>
        <li class="dib">
          <a
            class="f5 f4-ns link white db pv2 ph3 hover-light-orange"
            href="/about"
            >About</a
          >
        </li>
        <li class="dib">
          <a
            class="f5 f4-ns link white db pv2 ph3 hover-light-orange"
            href="/contacts"
            >Contacts</a
          >
        </li>
        <li class="dib">
          <a
            class="f5 f4-ns link white db pv2 ph3 hover-light-orange"
            href="/projects"
            >Projects</a
          >
        </li>
      </ul>
    </section>
  `;
};
export function error404Page(ctx) {
  ctx.render(error404Template());
}
