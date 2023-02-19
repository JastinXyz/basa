var eval2 = eval;
var current_lang_index = 0;
var useLS = false;
var current_lang;
var dict;

const changeLang = function (lang) {
  current_lang = lang;
  if (useLS) localStorage.setItem("lang", lang);
  const elements = document.querySelectorAll("[data-basa]");

  elements.forEach((element) => {
    const key = element.dataset.basa;
    element.innerHTML = eval2(`dict${["[", "."].includes(key) ? key : `.${key}`}`)[current_lang] || "N/A";
  });
};

const getCurrentLang = function () {
  return current_lang;
};

const init = function ({
  languages = [],
  useLocalStorage = false,
  dictionary = {},
}) {
  current_lang_index = 0;
  current_lang = languages[current_lang_index];
  useLS = useLocalStorage;
  dict = dictionary;

  let ls = localStorage.getItem("lang");
  if (useLocalStorage) return changeLang(ls ? ls : current_lang);

  changeLang(current_lang);
};

module.exports = {
  init,
  changeLang,
  getCurrentLang,
};
