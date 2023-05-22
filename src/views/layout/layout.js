import { html } from "../../../node_modules/lit-html/lit-html.js";

export function layoutTemplate(content) {
  return html`
    <header>
      <a href="/" class="logo">
        <img src="./asserts/logo/R-LOGO.svg" alt="" />
      </a>

      <input
        class="menu-icon"
        type="checkbox"
        id="menu-icon"
        name="menu-icon"
      />
      <label for="menu-icon"></label>

      <nav class="nav">
        <ul class="pt-5">
          <li>
            <a href="/"><i class="fa-solid fa-house"></i> Home</a>
          </li>
          <li><a href="/about"> About</a></li>
          <li><a href="/projects">Projects</a></li>
          <li><a href="/contacts">Contacts</a></li>
        </ul>
      </nav>
    </header>
    <main>${content}</main>
  `;
}
