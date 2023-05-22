import { html } from "../../../node_modules/lit-html/lit-html.js";
import Typed from "../../../node_modules/typed.js/dist/typed.module.js";

const homeTemplate = () => html`
  <section class="homeSection">
    <div class="divImg">
      <img
        class="center "
        src="./asserts/images/to the got.jpg"
        alt="homeImg"
      />
      <div>
        <h1 class="">Hey, I am Ridvan Saraliev</h1>
        <hr />
        <h2 style="height:2em"><i>I build things for the web.</i></h2>
      </div>
    </div>
  </section>
`;
export const homePage = (ctx) => {
  ctx.render(homeTemplate());


};
