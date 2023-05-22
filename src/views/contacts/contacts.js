import { html, nothing } from "../../../node_modules/lit-html/lit-html.js";

const contactsTemplate = (addText) => html`
  <section class="contacts">
    <div
      class="contactsInfo animate__animated animate__pulse  animate-slower "
    >
      <h1>Contacts</h1>
    </div>
    <div class="social-container">
      <ul class="social-icons">
        <li>
          <a
            href="https://www.linkedin.com/in/ridvan-saraliev-947ba5237/"
            target="_blank"
            ><i class="fa fa-linkedin"></i></a
          >${addText ? "LinkedIn" : nothing}
        </li>
        <li>
          <a href="https://github.com/ridvanms" target="_blank"
            ><i class="fa-brands fa-github "></i></a
          >${addText ? "Github" : nothing}
        </li>
        <li>
          <a href="mailto:ridvans@abv.bg"
            ><i class="fa-solid fa-envelope"></i></a
          >${addText ? "Mail" : nothing}
        </li>
      </ul>
    </div>
  </section>
`;
export function contactsPage(ctx) {
  console.log(screen.width);
  let addText = screen.width > 600;
  ctx.render(contactsTemplate(addText));

  // NOTE
}
