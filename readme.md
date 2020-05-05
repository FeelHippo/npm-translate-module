# @feelhippo/translate

[![ npm (scoped) ](https://img.shields.io/badge/npm-v1.0.0-blue)](https://github.com/FeelHippo/npm-translate-module)

## i18n locales translate

This tiny and KISS package allows you to automatically translate your locales from English to 20 other languages
The package relies on Yandex's Translate API, which for single words and short sentences is just perfect. 
Once you have imported it, you only have to provide it with the route to your locale and voila'!

---
## Requirements

For development, you will only need Node.js and a node global package, Yarn, installed in your environement.

## Install

    $ npm install @feelhippo/translate

    or

    $ git clone https://github.com/FeelHippo/npm-translate-module
    $ cd npm-translate-module
    $ yarn install

## Configure app

``` js
// app.js

// import package
const translate = require('@feelhippo/translate');
// define the location of the i18n locales
const directory = path.join(__dirname, '/locales')

translate(directory)
```
