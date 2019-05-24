# OBE:BS4 JavaScript Markup Factory & Methods
A JavaScript library to compliment any OBE:BS4 project with dynamically generated markup requirements.


---


## Table of Contents

* [Installation](#installation)
* [The Global Object](#the-global-object)
* [Initialization](#initialization)
* [Workflow](#workflow)
    * [Object Content Methods](#object-content-methods)
    * [Placeholder Content](#placeholder-content)
    * [Object Utility Methods](#object-utility-methods)


---


## Installation

To start working with the OBE:BS4 JavaScript Markup Factory & Methods, you'll want to:
1. Download this project as a .zip file
1. Unpack the .zip file
1. Add the file `obebs4.object.js` to your local/live site directory as needed
1. Include the file on your page(s) as you would any other external JS file

## The Global Object

This script exposes a global object to work with, which establishes a namespace for all of the object methods. The global constant is `OBEBS4`.

## Initialization

To initialize the `OBEBS4` global constant, you'll want to use JavaScript's `new` keyword:

```javascript
// initialize factory
let obebs4 = new OBEBS4();
```

A quick way to check that everything is working after inialization, is to `console.log()` the object's version number:

```javascript
console.log(obebs4.version);
```

## Workflow

The OBE:BS4 JavaScript Markup Factory & Methods were designed to render both default content sections (with randomized placeholder text content) and complex nested content - all through vanilla JavaScript code.

When coupled with the OBE:BS4 Design System's massive collection of Bootstrap 4 derived atomic CSS classes, the OBE:BS4 JavaScript Markup Factory & Methods become both a powerful rapid prototyping tool, as well as a performant AJAX response DOM library for dynamic production sites.

For sake of brevity and before digging in, let's assume the following boilerplate HTML is being used:

```html
<!doctype html>
<html lang="en">

    <head>

        <!-- Required meta tags -->
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

        <!-- Bootstrap CSS -->
        <link rel="stylesheet" href="https://library.mattmct.com/css/obebs4.production.bundle.css">

        <title>OBE:BS4 JS Markup Factory Tool</title>
        <meta name="description" content="An awesome page for my new app/website!">

    </head>

    <body>

        <!-- Content Output Element -->
        <div id="obebs4-app"></div>

        <!-- JavaScript -->
        <script src="https://library.mattmct.com/obebs4.production.bundle.js"></script>
        <script src="obebs4.object.js"></script>

    </body>

</html>
```

Keeping the boilerplate markup above in mind, we want to focus on our content output element:

```html
<div id="obebs4-app"></div>
```

So before we're 100% ready to create, we'll just assign our content output element to a variable:

```javascript
const target = document.getElementById('obebs4-app');
```

### Object Content Methods

(Intro Coming Soon)

**OBEBS4.element()**:
(Coming Soon)

**OBEBS4.element()**:
(Coming Soon)

**OBEBS4.content.article()**:
(Coming Soon)

**OBEBS4.content.nav.navbar.basic()**:
(Coming Soon)

### Placeholder Content

The OBE:BS4 JavaScript Markup Factory & Methods were designed to allow for a very "expressive" web design and iteration experience. A simple but powerful built-in feature, gives you access to different Laurem Ipsum strings to use both manually for placeholder issues as well as default content for any unspecified/uncustomized markup generating methods.

This means you can get content design ideas on a page incredibly quickly, while also having different placeholder strings showing up each time you reload the page, since each string is randomly determined at run time. This was done to allow anyone to "see" how content layout decisions are impacted by different content string lengths, specifically for responsive design content issues.

But... what if your project or team doesn't want to use Latin words as placeholder text?!

In this situation, you can easily update the default content using your `new` object's instance! All default placeholder text is found in the `OBEBS4.laurem` object. This object has several properties, all of which should be an array of different string values. Here's a list of the  `OBEBS4.laurem` object's properties:

```javascript
const OBEBS4 = function () {
    this.laurem = {
        headlines : [...],  // Expects an array of strings
        paragraphs : [...], // Expects an array of strings
        quotes : [...],     // Expects an array of strings
        brands : [...],     // Expects an array of strings
        navlinks : [...]    // Expects an array of strings
    },
    ...
};
```

So, going with our initialized example, we could change the `OBEBS4.laurem` object's array values like so:

```javascript
obebs4.laurem.headlines = ["My Custom Headline", "Another Custom One", "A Final Custom Headline"];
```
```javascript
obebs4.laurem.paragraphs = [
    "Tingling of the spine prime number billions upon billions explorations vanquish the impossible as a patch of light. Made in the interiors of collapsing stars dream of the mind's eye astonishment bits of moving fluff with pretty stories for which there's little good evidence encyclopaedia galactica.",
    "Stirred by starlight across the centuries Jean-François Champollion science as a patch of light gathered by gravity. Tingling of the spine citizens of distant epochs paroxysm of global death rich in mystery from which we spring circumnavigated. Rings of Uranus brain is the seed of intelligence extraordinary claims require extraordinary evidence emerged into consciousness encyclopaedia galactica network of wormholes. "
];
```
```javascript
obebs4.laurem.quotes = [
    "Tingling of the spine prime number billions upon billions.",
    "Rings of Uranus brain is the seed of intelligence extraordinary claims.",
    "Hearts of the stars hundreds of thousands emerged into consciousness cosmic ocean at the edge of forever."
];
```
```javascript
obebs4.laurem.brands = ["My Project"];
```
```javascript
obebs4.laurem.navlinks = ["Home", "Products", "Services", "Contact"];
```

### Object Utility Methods

The methods exposed by the OBE:BS4 JavaScript Markup Factory can be used in your custom work much like they're used by the OBEBS4 object. Here's an example of each method, again using our initialized example:

**OBEBS4.getRandomIndex()**:

```javascript
let myHeadlines = obebs4.laurem.headlines;
let randomHeadlineIndex = obebs4.getRandomIndex(myHeadlines.length);
console.log('Random Headline Index: ' + randomHeadlineIndex);
```

**OBEBS4.getRandomIndex()**:
(Coming Soon)

**OBEBS4.randomHeadline()**:
(Coming Soon)

**OBEBS4.randomParagraph()**:
(Coming Soon)

**OBEBS4.randomQuote()**:
(Coming Soon)

**OBEBS4.randomBrand()**:
(Coming Soon)