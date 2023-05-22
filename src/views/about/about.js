import { html } from "../../../node_modules/lit-html/lit-html.js";

const aboutTemplate = () => html`
  <section class="about">
    <div class="leftPartAbout">
      <img src="./asserts/images/AZ3I0429-removebg.png" class="center" alt="" />
    </div>
    <div class="rightPartAbout">
      <div class="aboutText">
        <h1>About</h1>
        <div>
          <p>
            Hey,my name is Ridvan Saraliev.I enjoy creating things that live on
            the internet.I'm a UX/UI designer and front-end web developer from
            Bulgaria.I'm also passionate about pop music.I'm always curious to
            learn more when it comes to new technologies.
          </p>
        </div>

        <a
          href="../../../asserts/Ridvan's Resume.pdf"
          target="_blank"
          alt="resume"
          class="resume"
          >↓Resume</a
        >
      </div>
    </div>
  </section>
`;
export const aboutPage = (ctx) => {
  ctx.render(aboutTemplate());
};
