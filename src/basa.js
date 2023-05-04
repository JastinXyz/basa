var eval2 = eval;
var current_lang_index = 0;
var useLS = false;
var useActive = false;
var current_lang;
var langs;
var dict;

const changeLang = function (lang) {
  current_lang = lang;

  if(useActive) {
    langs.forEach(element => {
      document.getElementById(element)?.classList.remove("active");
    });

    document.getElementById(lang)?.classList.add("active");
  }

  if (useLS) localStorage.setItem("lang", lang);
  const elements = document.querySelectorAll("[data-basa]");

  elements.forEach((element) => {
    const key = element.dataset.basa;
    element.innerHTML = eval2(`let basa_dict = ${JSON.stringify(dict)};\nbasa_dict${["[", "."].includes(key) ? key : `.${key}`}`)[current_lang] || "N/A"
  });
};

const getCurrentLang = function () {
  return current_lang;
};

const init = function ({
  languages = [],
  useLocalStorage = false,
  addActiveClass = false,
  dictionary = {},
}) {
  current_lang_index = 0;
  current_lang = languages[current_lang_index];
  useLS = useLocalStorage;
  useActive = addActiveClass;
  langs = languages;
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
