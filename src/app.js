import page from "../node_modules/page/page.mjs";
import { render } from "../node_modules/lit-html/lit-html.js";

import Typed from "../node_modules/typed.js/dist/typed.module.js";

import { layoutTemplate } from "./views/layout/layout.js";
import { homePage } from "./views/home/home.js";
import { aboutPage } from "./views/about/about.js";
import { projectsPage } from "./views/projects/projects.js";
import { contactsPage } from "./views/contacts/contacts.js";
import { error404Page } from "./views/error404/error404.js";
import { loader } from "./views/loader/loader.js";

const root = document.body;

// page.exit("*", (ctx, next) => {
//   render(loader(), root);
//   setTimeout(() => {
//     next();
//   }, 2000);
// });
render(loader(), root);

setTimeout(() => {
  page(decorateContext);
  page("index.html", "/");
  page("/", homePage);
  page("/about", aboutPage);
  page("/projects", projectsPage);
  page("/projects/:id", projectsPage);
  page("/contacts", contactsPage);

  page("*", error404Page);
  page.start();
}, 2000);

// function loader() {
//   render(loader(), root);
// }

function renderView(content) {
  render(layoutTemplate(content), root);
}
function decorateContext(ctx, next) {
  ctx.render = renderView;

  next();
}
// NOTE simulating Click after a-tag click in nav
setTimeout(()=>{
  document.querySelectorAll(".pt-5 a").forEach((el) => {
    el.addEventListener("click", function () {
      setTimeout(() => {
        document.querySelector("header label").click();
      }, 150);
    });
  });
},2200)
// NOTE some note
