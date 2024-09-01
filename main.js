import { API } from "./js/api.js";
import { elements } from "./js/helpers.js";

const api = new API();

elements.form.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log(e);
  const query = e.target(0).value;

  if (!query) {
    alert("Lütfen bir şarkı adı giriniz");
    return;
  }
  api.searchMusic(query);
});
