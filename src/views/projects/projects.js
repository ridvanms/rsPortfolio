import { html, nothing } from "../../../node_modules/lit-html/lit-html.js";
import Typed from "../../../node_modules/typed.js/dist/typed.module.js";

let objWithLinkToProject = {
  1: `https://smart-brain-app-h4yx.onrender.com/`,
  2: `https://recipeb-k.netlify.app/`,
  3: `https://mapty-ridvan.netlify.app/`,
  4: `https://recipeapp-demo.netlify.app/`,
  5: `https://banking-ridvan.netlify.app/`,
  6: `https://marvelous-robotfriends.netlify.app/`,
  7: `https://lux-colorgenerator.netlify.app/`,
};
let objWithLinkToImg = {
  1: `../../../asserts/projectImages/brave_screenshot_smart-brain.png`,
  2: `../../../asserts/projectImages/brave_screenshot_recipeb-k.netlify.app.png`,
  3: `../../../asserts/projectImages/brave_screenshot_mapty-ridvan.netlify.app.png`,
  4: `../../../asserts/projectImages/brave_screenshot_recipeapp-demo.netlify.app.png`,
  5: `../../../asserts/projectImages/brave_screenshot_banking-ridvan.netlify.app.png`,
  6: `../../../asserts/projectImages/brave_screenshot_marvelous-robotfriends.netlify.app.png`,
  7: `../../../asserts/projectImages/brave_screenshot_lux-colorgenerator.png`,
};
const projectsTemplate = (linkToProject, linkToImg) => html`
  <section class="projects">
    <div class="rightPartProjects">
      <table class="scroller">
        <tr>
          <th><h1>Projects</h1></th>
        </tr>
        <tr>
          <td>
            <a id="1" href="/projects/1" class="hover-underline-animation"
              >SmartBrain-app</a
            >
          </td>
        </tr>
        <tr>
          <td>
            <a id="2" href="/projects/2" class="hover-underline-animation "
              >recipeBook</a
            >
          </td>
        </tr>
        <tr>
          <td>
            <a id="3" href="/projects/3" class="hover-underline-animation"
              >mapty</a
            >
          </td>
        </tr>
        <tr>
          <td>
            <a id="4" href="/projects/4" class="hover-underline-animation"
              >recipeApp-demo</a
            >
          </td>
        </tr>
        <tr>
          <td>
            <a id="5" href="/projects/5" class="hover-underline-animation"
              >Banking-demo</a
            >
          </td>
        </tr>
        <tr>
          <td>
            <a id="6" href="/projects/6" class="hover-underline-animation"
              >RobotFriends</a
            >
          </td>
        </tr>
        <tr>
          <td>
            <a id="7" href="/projects/7" class="hover-underline-animation"
              >ColorGenerator</a
            >
          </td>
        </tr>
      </table>
    </div>
    <div class="leftPartProjects">
      <div class="divImgProjects">
        ${linkToImg ? html` <img src="${linkToImg}" alt="" />` : nothing}
      </div>
      ${linkToProject
        ? html`<a
            href="${linkToProject}"
            target="_blank"
            class="hover-underline-animation"
            alt="viewSite"
            >VIEWSITE</a
          >`
        : nothing}
    </div>
  </section>
`;

export function projectsPage(ctx) {
  let id = ctx.params.id;

  let linkToImg = objWithLinkToImg[id];
  let linkToProject = objWithLinkToProject[id];
  ctx.render(projectsTemplate(linkToProject, linkToImg));

  document.querySelectorAll(".rightPartProjects a").forEach((a) =>
    a.addEventListener("click", function () {
      window.scrollTo({
        left: 0,
        top: document.body.scrollHeight,
        behavior: "smooth",
      });
    })
  );
}
