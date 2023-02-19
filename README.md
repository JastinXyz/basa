# Basajs

a javascript library that allows your website to be multi-language with ease of use.

## Installation

Add script in the `<head>`:
```html
<script src="https://unpkg.com/basajs@latest/dist/basa.js"></script>
```

## Use It

### Basic
```html
<p data-basa="hello"></p>
<p data-basa="greeting"></p>

<button onclick="Basa.changeLang('id')">id</button>
<button onclick="Basa.changeLang('en')">en</button>

<script>
    const dict = {
        hello: {
            id: "halo",
            en: "hello",
        },
        greeting: {
            id: "selamat datang",
            en: "welcome",
        },
    };

    Basa.init({
        languages: ["id", "en"],
        useLocalStorage: true,
        dictionary: dict,
    });
</script>
```

### Nested
```js
const dict = {
    hello: {
        top: {
            id: "halo",
            en: "hello"
        }
    }
}
```

use it with
```html
<p data-basa="hello.top"></p>
```

## Default Settings

```js
Basa.init({
    languages: [] // language array,
    useLocalStorage: false // When true, localstorage will store the language in the `lang` key which can be used if the client revisits the page, the language will automatically use the one in localstorage,
    dictionary: {} // translation object
});
```

