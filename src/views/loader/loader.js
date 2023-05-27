import { html } from "../../../node_modules/lit-html/lit-html.js";

export function loader() {
  return html`
    <div class="cube-wrapper">
      <div class="cube-folding">
        <span class="leaf1"></span>
        <span class="leaf2"></span>
        <span class="leaf3"></span>
        <span class="leaf4"></span>
      </div>
      <span class="loading" data-name="Loading">Loading</span>
    </div>
  `;
}
