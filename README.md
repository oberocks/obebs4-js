# OBE:BS4 JavaScript Markup Factory & Methods
A JavaScript library to compliment any OBE:BS4 project with dynamically generated markup requirements.


---


## Table of Contents

* [Installation](#installation)
* [The Global Object](#the-global-object)
* [Initialization](#initialization)
* [Workflow](#workflow)
    * [OBE:BS4 Content Methods](#object-content-methods)
        * [.element()](#obebs4element)
        * [.content.article()](#obebs4contentarticle)
        * [.content.navbar.basic()](#obebs4contentnavbarbasic)
    * [OBE:BS4 Placeholder Content](#object-placeholder-content)
    * [OBE:BS4 Utility Methods](#object-utility-methods)
        * [.extend()](#obebs4extend)
        * [.getRandomIndex()](#obebs4getrandomindex)
        * [.randomHeadline()](#obebs4randomheadline)
        * [.randomParagraph()](#obebs4randomparagraph)
        * [.randomQuote()](#obebs4randomquote)
        * [.randomBrand()](#obebs4randombrand)


---


## Installation

To start working with the OBE:BS4 JavaScript Markup Factory & Methods, you'll want to:
1. Download this project as a .zip file, and unzip the file
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

The OBE:BS4 JavaScript Markup Factory & Methods were designed to render single elements, default content sections (with randomized placeholder text content), and complex nested content - all with standard JavaScript.

When coupled with the OBE:BS4 Design System's massive collection of Bootstrap 4 derived atomic CSS classes, the OBE:BS4 JavaScript Markup Factory & Methods become both a powerful rapid prototyping tool, a performant AJAX response DOM library for dynamic production sites, and a basis for an SPA without any shadow DOM.

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
<!-- Content Output Element -->
<div id="obebs4-app"></div>
```

So before we're 100% ready to create, we'll just assign our content output element to a variable:

```javascript
const target = document.getElementById('obebs4-app');
```

### Object Content Methods

The core goal for the OBE:BS4 JavaScript Markup Factory & Methods, is to facilitate "exprssive" design and development decision making for web projects at any scale. These content methods are engineered specifically for this goal.

Many of the OBE:BS4 JavaScript Markup Factory methods automatically generate default (and fully structured/accessible) markup when called without any passed arugments. Additionally, upon page load, any placeholder copy will be re-generated with newly randomiozed placeholder content, so all stakeholders can "see" and "get a feel for" how layout decisions are impacted by varying content.

This system allows for a signifigantly more customizable CMS design premise/execution compared to anything that exists in the market today. ;)

But that's not all! This system was also designed with empathy for front end developers. Because with an FED skill set, the same factory methods can be used for infinately complex multi-element and multi-component structures... sans a lot of the code repitition those projects end-up having.

#### OBEBS4.element()

_Returns a singleton element or a singleton parent element (with child elements), according to the options that are passed into the method. PLEASE NOTE: This method DOES NOT produce a default element NOR placeholder copy. Any OBEBS4.element() call needs specify at least a HTML tag value to avoid throwing an error._

Order | Parameter | Required | Expected Primitive Type(s) | Details/Notes
----- | --------- | -------- | -------------------------- | -------------
1 | HTML Tag | YES | `string` | This does not have to be a valid HTML5 value!
2 | Text Node Content | NO | `string` or `boolean` | This parameter IS REQUIRED if using any Element Attributes or Child Element(s) params! In those cases, you can express this parameter as either a boolean `false` value or an empty string (`''` or `""`) value.
3 | Element Attributes | NO | `object` or `boolean` | This parameter IS REQUIRED if using the next Child Element(s) param! In those cases, you can express this parameter as either a boolean `false` value or an empty object (`{}`) value.
4 | Child Element(s) | NO | `element node` or `array` (of element nodes) | This final optional paramater allows you to pass an element node or an array of element nodes, which will be returned as children of the parent HTML Tag you've specified. If using an array of element nodes, it should be a 1-dimentional array of exclusively element nodes.

```javascript
// OBEBS4.element() span tag example
let span = obebs4.element('span', 'This is the text for my span!');
console.log(span);

// OBEBS4.element() parent with single child div tags example
let child = obebs4.element('div', 'This is the child element!');
let parent = obebs4.element('div', false, { 'class' : 'p-3' }, child);
console.log(parent);

// OBEBS4.element() parent with multiple child div tags example
let child_1 = obebs4.element('div', 'This is the 1st child element!');
let child_2 = obebs4.element('div', 'This is the 2nd child element!');
let parent = obebs4.element('div', false, { 'class' : 'p-3' }, [child_1, child_2]);
console.log(parent);

// OBEBS4.element() content section example (using a combination of techniques to exemplify syntatic options)
let headline = obebs4.element('h1', 'My Section Headline');
let hr = obebs4.element('hr', false, { 'class' : 'border-primary' });
let lead = obebs4.element('p', "This is my new section's lead paragraph!", { 'class' : 'lead' });
let placeholder_paragraph = obebs4.element('p', obebs4.laurem.paragraphs[obebs4.getRandomIndex(obebs4.laurem.paragraphs.length)]);
let column = obebs4.element('div', false, { 'class' : 'col-md-9 col-lg-6' }, [headline, hr, lead, placeholder_paragraph]);
let row = obebs4.element('section', false, { 'class' : 'row justify-content-center' }, [column]);
let section = obebs4.element('section', false, { 'class' : 'container py-5' }, row);
console.log(section);
```

#### OBEBS4.content.article()

_Returns a parent element (with child elements), according to the options that are passed into the method._

Order | Parameter | Required | Expected Primitive Type(s) | Details/Notes
----- | --------- | -------- | -------------------------- | -------------
1 | Settings | NO | `object` (structured) | Structure: `let mySettings = { classes : { article : '...', container : '...', row : '...', column : '...'}, content : { laurem : { headline : '...', paragraph : '...' } } };`
2 | Array(s) of Child Node(s) | NO | `element node`, `array` (of element nodes), or `array` (of arrays of element nodes) | This final optional paramater allows you to pass an element node or an array of element nodes, or an array of arrays of element nodes. In the first two scenarios, a parent `<article>` element will be returned, with a single columm containing the node or array of nodes. In the latter scenario, each sub-array of child nodes will be applied to a column for each sub-array of element nodes.

> IMPORTANT TIP:
> When using the OBEBS4.content.article() method, the structure of the settings is strict whenever using the method for multiple columns! In this use case, the settings column option needs to be an `array` of strings. The length of this array **SHOULD ALWAYS** match the length of the array of arrays of child element nodes your are passing into the method. This means that the columns settings array string at index [0] will be applied to the child element nodes array at index [0], and so fourth for each column of content you specify!

```javascript
// OBEBS4.content.article() default example
let article = obebs4.content.article();
console.log(article);
```

```javascript
// OBEBS4.content.article() example using customized settings (and random placeholder strings from the laurem sub-object)

// STEP 1: customize the CSS classes settings object
let settings = {
    classes : {
        article : 'container-fluid bg-primary text-white py-5',
        row : 'row justify-content-center',
        column : 'col col-sm-10 col-md-9 col-lg-8 col-xl-7'
    }
};

// STEP 2: generate content element nodes
let article_h = obebs4.element('h3', obebs4.randomHeadline(), {'class' : 'text-shadow'});
let article_hr = obebs4.element('hr', '', {'class' : 'border-success'});
let article_p_1 = obebs4.element('p', obebs4.randomParagraph());
let article_p_2 = obebs4.element('p', obebs4.randomQuote(), {'class' : 'lead p-3 border-left border-yellow border-width-5'});
let article_p_3 = obebs4.element('p', obebs4.randomParagraph());

// STEP 3: call the method and pass in the settings and content nodes
let article = obebs4.content.article(
    settings,
    [
        article_h,
        article_hr,
        article_p_1,
        article_p_2,
        article_p_3
    ]
);
console.log(article);
```

```javascript
// OBEBS4.content.article() multi-column example

let settings = {
    classes : {
        column : ['col col-md-3', 'col col-md-6', 'col col-md-3']
    }
};

let article_col_1_h = obebs4.element('h3', obebs4.randomHeadline(), {'class' : 'text-shadow'});
let article_col_1_hr = obebs4.element('hr', '', {'class' : 'border-success'});
let article_col_1_p = obebs4.element('p', obebs4.randomParagraph());

let article_col_2_h = obebs4.element('h3', obebs4.randomHeadline(), {'class' : 'text-shadow'});
let article_col_2_hr = obebs4.element('hr', '', {'class' : 'border-danger'});
let article_col_2_p = obebs4.element('p', obebs4.randomParagraph());

let article_col_3_h = obebs4.element('h3', obebs4.randomHeadline(), {'class' : 'text-shadow'});
let article_col_3_hr = obebs4.element('hr', '', {'class' : 'border-cyan'});
let article_col_3_p = obebs4.element('p', obebs4.randomParagraph());

let article = obebs4.content.article(
    settings,
    [
        [
            article_col_1_h,
            article_col_1_hr,
            article_col_1_p
        ],[
            article_col_2_h,
            article_col_2_hr,
            article_col_2_p
        ],[
            article_col_3_h,
            article_col_3_hr,
            article_col_3_p
        ]
    ]
);
console.log(article);
```

#### OBEBS4.content.navbar.basic()

_Returns a parent element (with child elements), according to the options that are passed into the method._

### Object Placeholder Content

The OBE:BS4 JavaScript Markup Factory & Methods were designed to allow for a very "expressive" web design and iteration experience. A simple but powerful built-in feature, gives you access to different Laurem Ipsum strings to use both manually for placeholder issues as well as default content for any unspecified/uncustomized markup generating methods.

This means you can get content design ideas on a page incredibly quickly, while also having different placeholder strings showing up each time you reload the page, since each string is randomly determined at run time. This was done to allow anyone to "see" how content layout decisions are impacted by different content string lengths, specifically for responsive design content issues.

But... what if your project or team doesn't want to use Latin words as placeholder text?!

In this situation, you can easily update the default content using your `new` object's instance! All default placeholder text is found in the `OBEBS4.laurem` object. This object has several properties, all of which should be an array of unique string values. Here's a list of the `OBEBS4.laurem` object's properties:

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

#### OBEBS4.extend()

_Merges two objects into a single object, taking the values of the second object over the first. Set the first argument to `true` for deep merging._

```javascript
let defaults = {
    classes : {
        article : 'container-fluid'
    }
};

let myDefaults = {
    classes : {
        article : 'container-fluid py-5'
    }
};

let merged = obebs4.extend(true, defaults, myDefaults);
console.log(merged);
```

#### OBEBS4.getRandomIndex()

_Returns a "random" interger between 0 and a passed array `.length` value._

```javascript
let index = obebs4.getRandomIndex(obebs4.laurem.headlines.length);
console.log(obebs4.laurem.headlines[index]);
```

#### OBEBS4.randomHeadline()

_Returns a "random" headline string from the `OBEBS4.laurem.headlines` array._

```javascript
let headline = obebs4.randomHeadline();
console.log(headline);
```

#### OBEBS4.randomParagraph()

_Returns a "random" paragraph string from the `OBEBS4.laurem.paragraphs` array._

```javascript
let paragraph = obebs4.randomParagraph();
console.log(paragraph);
```

#### OBEBS4.randomQuote()

_Returns a "random" quote string from the `OBEBS4.laurem.quotes` array._

```javascript
let quote = obebs4.randomQuote();
console.log(quote);
```

#### OBEBS4.randomBrand()

_Returns a "random" brand name string from the `OBEBS4.laurem.brands` array._

```javascript
let brandname = obebs4.randomBrand();
console.log(brandname);
```