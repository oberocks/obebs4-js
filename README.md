# OBE:BS4 JavaScript Markup Factory & Methods
A JavaScript library to compliment any OBE:BS4 project with either dynamically generated markup requirements, or a need for rapid prototyping.


---


## Table of Contents

* [Installation](#installation)
* [The Global Object](#the-global-object)
* [Initialization](#initialization)
* [Getting Started](#getting-started)
* [OBE:BS4 Content Methods](#object-content-methods)
    * [.element()](#obebs4element)
    * [.content.article()](#obebs4contentarticle)
    * [.content.navbar.basic()](#obebs4contentnavbarbasic)
* [OBE:BS4 Placeholder Content](#object-placeholder-content)
* [OBE:BS4 Utility Methods](#object-utility-methods)
    * [.dom()](#obebs4dom)
    * [.extend()](#obebs4extend)
    * [.getRandomIndex()](#obebs4getrandomindex)
    * [.isElementNode()](#obebs4iselementnode)
    * [.isObject()](#obebs4isobject)
    * [.isString()](#obebs4isstring)
    * [.randomBrand()](#obebs4randombrand)
    * [.randomHeadline()](#obebs4randomheadline)
    * [.randomParagraph()](#obebs4randomparagraph)
    * [.randomQuote()](#obebs4randomquote)
* [Console Errors](#console-errors)


---


## Installation

To start working with the OBE:BS4 JavaScript Markup Factory & Methods (for now and while this project is in an Alpha phase), you'll want to:
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

## Getting Started

The OBE:BS4 JavaScript Markup Factory & Methods were designed to render single elements, default content sections (with randomized placeholder text content), and complex nested content - all with standard JavaScript.

When coupled with the OBE:BS4 Design System's massive collection of Bootstrap 4 derived atomic CSS classes, the OBE:BS4 JavaScript Markup Factory & Methods becomes a powerful rapid prototyping tool, a performant AJAX response DOM library for dynamic production sites, and a super-lean base library for a Single Page App (SPA) without any shadow DOM requirements.

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

In order to be 100% ready to create, next we'll assign our content output element to a variable for script access:

```javascript
const target = document.getElementById('obebs4-app');
```

## Object Content Methods

The core goal for the OBE:BS4 JavaScript Markup Factory & Methods, is to facilitate "exprssive" design and development decision making for web projects at any scale. These content methods are engineered specifically for this goal.

Many of the OBE:BS4 JavaScript Markup Factory methods automatically generate default (and fully structured/accessible) markup when called without any passed arugments. Additionally, upon page load, any placeholder copy will be re-generated with newly randomiozed placeholder content, so all stakeholders can "see" and "get a feel for" how layout decisions are impacted by varying content.

This system allows for a signifigantly more customizable CMS design premise/execution compared to anything that exists in the market today. ;)

But that's not all! This system was also designed with empathy for front end developers. Because with an FED skill set, the same factory methods can be used for infinately complex multi-element and multi-component structures... sans a lot of the code repitition those projects end-up having.

### OBEBS4.dom()

_A helper method that makes DOM element position manipulations very semantically accurate and easy. This method includes a flexible argument structure, allowing it to provide access to standard DOM manipulation methods like: `.appendChild()`, `.insertBefore()`, `.replaceChild()` & `.removeChild()`. Additionally, there's a couple of jQuery inspired deritives of these standard JS methods, which are of the `.insertAfter()` & `.prepend()` variety!_

Order | Parameter | Required | Expected Primitive Type(s) | Details/Notes
----- | --------- | -------- | -------------------------- | -------------
1 | Parent Element | YES | `element node` | xxxx
2 | Method Option | YES | `string` | xxxx
3 | Child Element | YES | `element node` | xxxx
4 | Method Sub-Option or Child Element | NO | `string` or `element node` | xxxx
5 | Reference Element | NO | `element node` | xxxx

### OBEBS4.element()

_Returns a singleton element or a singleton parent element (with child elements), according to the options that are passed into the method. PLEASE NOTE: This method DOES NOT produce a default element NOR placeholder copy. Any OBEBS4.element() call needs specify at least a HTML tag value to avoid throwing an error._

Order | Parameter | Required | Expected Primitive Type(s) | Details/Notes
----- | --------- | -------- | -------------------------- | -------------
1 | HTML Tag | YES | `string` | This does not have to be a valid HTML5 value!
2 | Text Node Content | NO | `string` or `boolean` | This parameter IS REQUIRED if using any Element Attributes or Child Element(s) params! In those cases, you can express this parameter as either a boolean `false` value or an empty string (`''` or `""`) value.
3 | Element Attributes | NO | `object` or `boolean` | This parameter IS REQUIRED if using the next Child Element(s) param! In those cases, you can express this parameter as either a boolean `false` value or an empty object (`{}`) value.
4 | Child Element(s) | NO | `element node` or `array` (of element nodes) | This final optional paramater allows you to pass an element node or an array of element nodes, which will be returned as children of the parent HTML Tag you've specified. If using an array of element nodes, it should be a 1-dimentional array of exclusively element nodes.

#### OBEBS4.element() `<span>` Tag Example:
```javascript
let span = obebs4.element('span', 'This is the text for my span!');
target.appendChild(span);
```
```html
<!-- The example above will generate and append this HTML to your target element: -->
<span>This is the text for my span!</span>
```

#### OBEBS4.element() Parent & Single Child `<div>` Tags Example:
```javascript
let child = obebs4.element('div', 'This is the child element!');
let parent = obebs4.element('div', false, { 'class' : 'p-3' }, child);
target.appendChild(parent);
```
```html
<!-- The example above will generate and append this HTML to your target element: -->
<div class="p-3">
    <span>This is the child element!</span>
</div>
```

#### OBEBS4.element() Parent & Multiple Child `<div>` Tags Example:
```javascript
let child_1 = obebs4.element('div', 'This is the 1st child element!');
let child_2 = obebs4.element('div', 'This is the 2nd child element!');
let parent = obebs4.element('div', false, { 'class' : 'p-3' }, [child_1, child_2]);
target.appendChild(parent);
```
```html
<!-- The example above will generate and append this HTML to your target element: -->
<div class="p-3">
    <div>This is the 1st child element!</div>
    <div>This is the 2nd child element!</div>
</div>
```

#### OBEBS4.element() Parent & Multiple Child `<div>` Tags (With Advanced Syntactic Sugar) Example:
```javascript
let headline = obebs4.element('h1', 'My Section Headline');
let hr = obebs4.element('hr', false, { 'class' : 'border-primary' });
let lead = obebs4.element('p', "This is my new section's lead paragraph!", { 'class' : 'lead' });
let placeholder_paragraph = obebs4.element('p', obebs4.placeholders.paragraphs[obebs4.getRandomIndex(obebs4.placeholders.paragraphs.length)]);
let column = obebs4.element('div', false, { 'class' : 'col-md-9 col-lg-6' }, [headline, hr, lead, placeholder_paragraph]);
let row = obebs4.element('div', false, { 'class' : 'row justify-content-center' }, [column]);
let section = obebs4.element('section', false, { 'class' : 'container py-5' }, row);
target.appendChild(section);
```
```html
<!-- The example above will generate and append this HTML to your target element: -->
<section class="container py-5">
    <div class="row">
        <div class="col-md-9 col-lg-6">
            <h1>My Section Headline</h1>
            <hr class="border-primary" />
            <p class="lead">This is my new section's lead paragraph!</p>
            <p>Quisque feugiat hendrerit ornare. Ut in magna mi. Donec pellentesque viverra lorem, id vestibulum nibh. Pellentesque egestas sit amet ante sed malesuada. Suspendisse commodo facilisis nulla, a malesuada ante accumsan convallis. Sed maximus tellus eu justo ornare, varius ullamcorper nibh scelerisque. Nulla facilisi. Quisque sed eros ex. In fringilla justo odio.</p>
        </div>
    </div>
</section>
```

### OBEBS4.content.article()

_Returns a parent element (with child elements), according to the options that are passed into the method._

Order | Parameter | Required | Expected Primitive Type(s) | Details/Notes
----- | --------- | -------- | -------------------------- | -------------
1 | Settings | NO | `object` (structured) | Structure: `let mySettings = { classes : { article : '...', container : '...', row : '...', column : '...'}, content : { placeholders : { headline : '...', paragraph : '...' } } };`
2 | Array(s) of Child Node(s) | NO | `element node`, `array` (of element nodes), or `array` (of arrays of element nodes) | This final optional paramater allows you to pass an element node or an array of element nodes, or an array of arrays of element nodes. In the first two scenarios, a parent `<article>` element will be returned, with a single columm containing the node or array of nodes. In the latter scenario, each sub-array of child nodes will be applied to a column for each sub-array of element nodes.

```javascript
// These are the OBEBS4.content.article() default settings
let settings = {
    classes : {
        article : 'container-fluid py-5',
        container : 'container',
        row : 'row justify-content-center',
        column : 'col col-md-6'
    },
    content : {
        placeholders : {
            headline : self.randomHeadline(),
            paragraph : self.randomParagraph()
        }
    }
};
```

> **MULTIPLE COLUMNS TIP:**
>
> When using the OBEBS4.content.article() method to generate a multi-column article, the structure of the settings is strict! In this use case, the `settings.classes.column` option needs to be an `array` of strings, where each string contains the CSS classes for each column.
>
>The length of this array **SHOULD** match the length of the array (of arrays of child element nodes) you are passing into the method. This means that the `settings.classes.column` string at index [0] will be applied to the array of child element nodes at index [0], and so on for each column of content you specify!
>
>That said, if the arrays of child nodes is longer than the array of column class strings, the factory will apply the last item in the class strings array to all subsequent element columns.

#### OBEBS4.content.article() Default (Prototyping) Example:
```javascript
let article = obebs4.content.article();
target.appendChild(article);
```
```html
<!-- The example above will generate and append this HTML to your target element: -->
<article class="container-fluid py-5">
    <div class="container">
        <div class="row justify-content-center">
            <div class="col col-md-6">
                <h1>Mauris Ut Nulla Id Libero</h1>
                <p>Sed bibendum nisi a est semper consequat. Aliquam mi neque, blandit lobortis justo sit amet, commodo consectetur sem. Donec sagittis erat quis venenatis dignissim. Duis ac iaculis leo, viverra fringilla lacus. In hac habitasse platea dictumst. Vestibulum euismod purus et tellus congue accumsan. Sed ligula libero, finibus non neque sed, semper consectetur est. Ut tincidunt, sapien aliquam varius fermentum, diam sem consequat risus, eget molestie erat ante quis erat.</p>
                <p>Quisque feugiat hendrerit ornare. Ut in magna mi. Donec pellentesque viverra lorem, id vestibulum nibh. Pellentesque egestas sit amet ante sed malesuada. Suspendisse commodo facilisis nulla, a malesuada ante accumsan convallis. Sed maximus tellus eu justo ornare, varius ullamcorper nibh scelerisque. Nulla facilisi. Quisque sed eros ex. In fringilla justo odio.</p>
            </div>
        </div>
    </div>
</article>
```

#### OBEBS4.content.article() Example (With Custom CSS Classes & Manually Implemented Placeholder Content Examples):
```javascript
// STEP 1: Customize the CSS classes settings object
let settings = {
    classes : {
        article : 'container-fluid bg-primary text-white py-5',
        row : 'row justify-content-center',
        column : 'col col-sm-10 col-md-9 col-lg-8 col-xl-7'
    }
};

// STEP 2: Generate content element nodes
let article_h = obebs4.element('h3', obebs4.randomHeadline(), {'class' : 'text-shadow'});
let article_hr = obebs4.element('hr', '', {'class' : 'border-success'});
let article_p_1 = obebs4.element('p', obebs4.randomParagraph());
let article_p_2 = obebs4.element('p', obebs4.randomQuote(), {'class' : 'lead p-3 border-left border-yellow border-width-5'});
let article_p_3 = obebs4.element('p', obebs4.randomParagraph());

// STEP 3: Call the method (passing in structured settings and a content nodes array)
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
target.appendChild(article);
```
```html
<!-- The example above will generate and append this HTML to your target element: -->
<article class="container-fluid bg-primary text-white py-5">
    <div class="container">
        <div class="row justify-content-center">
            <div class="col col-sm-10 col-md-9 col-lg-8 col-xl-7">
                <h3 class="text-shadow">Mauris Ut Nulla Id Libero</h3>
                <hr class="border-success" />
                <p>Sed bibendum nisi a est semper consequat. Aliquam mi neque, blandit lobortis justo sit amet, commodo consectetur sem. Donec sagittis erat quis venenatis dignissim. Duis ac iaculis leo, viverra fringilla lacus. In hac habitasse platea dictumst. Vestibulum euismod purus et tellus congue accumsan. Sed ligula libero, finibus non neque sed, semper consectetur est. Ut tincidunt, sapien aliquam varius fermentum, diam sem consequat risus, eget molestie erat ante quis erat.</p>
                <p class="lead p-3 border-left border-yellow border-width-5">Nulla ac turpis id arcu cursus condimentum eget vel ante.</p>
                <p>Quisque feugiat hendrerit ornare. Ut in magna mi. Donec pellentesque viverra lorem, id vestibulum nibh. Pellentesque egestas sit amet ante sed malesuada. Suspendisse commodo facilisis nulla, a malesuada ante accumsan convallis. Sed maximus tellus eu justo ornare, varius ullamcorper nibh scelerisque. Nulla facilisi. Quisque sed eros ex. In fringilla justo odio.</p>
            </div>
        </div>
    </div>
</article>
```

#### OBEBS4.content.article() Multi-Column Example:
```javascript
// STEP 1: Customize the CSS classes settings object
let settings = {
    classes : {
        column : ['col col-md-3', 'col col-md-6', 'col col-md-3']
    }
};

// STEP 2: Generate content element nodes
let article_col_1_h = obebs4.element('h3', obebs4.randomHeadline(), {'class' : 'text-shadow'});
let article_col_1_hr = obebs4.element('hr', '', {'class' : 'border-success'});
let article_col_1_p = obebs4.element('p', obebs4.randomParagraph());

let article_col_2_h = obebs4.element('h3', obebs4.randomHeadline(), {'class' : 'text-shadow'});
let article_col_2_hr = obebs4.element('hr', '', {'class' : 'border-danger'});
let article_col_2_p = obebs4.element('p', obebs4.randomParagraph());

let article_col_3_h = obebs4.element('h3', obebs4.randomHeadline(), {'class' : 'text-shadow'});
let article_col_3_hr = obebs4.element('hr', '', {'class' : 'border-cyan'});
let article_col_3_p = obebs4.element('p', obebs4.randomParagraph());

// STEP 3: Call the method (passing in structured settings and all content nodes arrays)
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
target.appendChild(article);
```
```html
<!-- The example above will generate and append this HTML to your target element: -->
<article class="container-fluid py-5">
    <div class="container">
        <div class="row justify-content-center">
            <div class="col col-md-3">
                <h1 class="text-shadow">Mauris Ut Nulla Id Libero</h1>
                <hr class="border-success" />
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed iaculis bibendum augue, in facilisis lorem euismod fermentum. Maecenas non auctor magna, et tempor purus. Morbi et ex iaculis nunc tincidunt semper a eget dui. Nulla ac turpis id arcu cursus condimentum eget vel ante. Quisque vel malesuada sapien. Etiam non urna vitae urna iaculis rutrum non non sem.</p>
            </div>
            <div class="col col-md-3">
                <h1 class="text-shadow">Lorem Ipsum Dolor Sit</h1>
                <hr class="border-danger" />
                <p>Quisque feugiat hendrerit ornare. Ut in magna mi. Donec pellentesque viverra lorem, id vestibulum nibh. Pellentesque egestas sit amet ante sed malesuada. Suspendisse commodo facilisis nulla, a malesuada ante accumsan convallis. Sed maximus tellus eu justo ornare, varius ullamcorper nibh scelerisque. Nulla facilisi. Quisque sed eros ex. In fringilla justo odio.</p>
            </div>
            <div class="col col-md-3">
                <h1 class="text-shadow">Sed Bibendum Nisi A Est Semper</h1>
                <hr class="border-cyan" />
                <p>Mauris ut nulla id libero viverra lobortis. Phasellus ut elit eu diam feugiat scelerisque. Vivamus semper nibh id turpis pharetra bibendum. In eget felis risus. Nullam at tincidunt tellus, non fermentum enim. Mauris varius suscipit lectus ac feugiat. Pellentesque pulvinar semper tempor. Vivamus ac ipsum bibendum, malesuada magna id, viverra erat. Ut aliquet neque nec hendrerit tristique.</p>
            </div>
        </div>
    </div>
</article>
```

### OBEBS4.content.navbar.basic()

_Returns a parent element (with child elements), according to the options that are passed into the method._

(Examples Coming Soon!)

## Object Placeholder Content

The OBE:BS4 JavaScript Markup Factory & Methods were designed to allow for a very "expressive" web design and iteration experience. A simple but powerful built-in feature, gives you access to different Lorem Ipsum strings to use when iterating.

This means you can get content design ideas on a page incredibly quickly, while also having different placeholder strings showing up each time you reload the page, since each string is randomly determined at run time. This was done to allow anyone to "see" how content layout decisions are impacted by different content string lengths, specifically for responsive design content issues.

But... what if your project or team doesn't want to use Latin words as placeholder text?!

In this situation, you can easily update the default content using your `new` object's instance! All default placeholder text is found in the `OBEBS4.placeholders` object. This object has several properties, all of which should be an array of unique string values. Here's a list of the `OBEBS4.placeholders` object's properties:

```javascript
const OBEBS4 = function () {
    this.placeholders = {
        headlines : [...],  // Expects an array of strings
        paragraphs : [...], // Expects an array of strings
        quotes : [...],     // Expects an array of strings
        brands : [...],     // Expects an array of strings
        navigation : [...]  // Expects an array of strings
    },
    ...
};
```

So, going with our initialized example, we could change the `OBEBS4.placeholders` object's array values like so:

```javascript
obebs4.placeholders.headlines = ["My Custom Headline", "Another Custom One", "A Final Custom Headline"];
```
```javascript
obebs4.placeholders.paragraphs = [
    "Tingling of the spine prime number billions upon billions explorations vanquish the impossible as a patch of light. Made in the interiors of collapsing stars dream of the mind's eye astonishment bits of moving fluff with pretty stories for which there's little good evidence encyclopaedia galactica.",
    "Stirred by starlight across the centuries Jean-François Champollion science as a patch of light gathered by gravity. Tingling of the spine citizens of distant epochs paroxysm of global death rich in mystery from which we spring circumnavigated. Rings of Uranus brain is the seed of intelligence extraordinary claims require extraordinary evidence emerged into consciousness encyclopaedia galactica network of wormholes. "
];
```
```javascript
obebs4.placeholders.quotes = [
    "Tingling of the spine prime number billions upon billions.",
    "Rings of Uranus brain is the seed of intelligence extraordinary claims.",
    "Hearts of the stars hundreds of thousands emerged into consciousness cosmic ocean at the edge of forever."
];
```
```javascript
obebs4.placeholders.brands = ["My Project"];
```
```javascript
obebs4.placeholders.navigation = ["Home", "Products", "Services", "Contact"];
```

## Object Utility Methods

The methods exposed by the OBE:BS4 JavaScript Markup Factory can be used in your custom work much like they're used by the OBEBS4 object internally. Here's an example of each method, again using our initialized example:

### OBEBS4.extend()

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

### OBEBS4.getRandomIndex()

_Returns a "random" interger between 0 and a passed array `.length` value._

```javascript
let index = obebs4.getRandomIndex(obebs4.placeholders.headlines.length);
console.log(obebs4.placeholders.headlines[index]);
```

### OBEBS4.isElementNode()

_Checks if an element is a JavaScript Element Node Object (generally for use inside the OBEBS4 object, to check for validity before appending an element to another element node.)_

```javascript
let div = obebs4.element('div');
console.log(obebs4.isElementNode(div)); // returns/logs: true
```

### OBEBS4.isObject()

_Checks if an passed value is a valid JavaScript Object._

```javascript
let object = {
    classes : {
        brand : 'navbar-brand'
    }
};
console.log(obebs4.isObject(object)); // returns/logs: true
```

### OBEBS4.isString()

_Checks if an passed value is a valid string or a JavaScript String Object string._

```javascript
let string = 'Hi! I am a string!';
console.log(obebs4.isString(string)); // returns/logs: true
```

### OBEBS4.randomBrand()

_Returns a "random" brand name string from the `OBEBS4.placeholders.brands` array._

```javascript
let brandname = obebs4.randomBrand();
console.log(brandname);
```

### OBEBS4.randomHeadline()

_Returns a "random" headline string from the `OBEBS4.placeholders.headlines` array._

```javascript
let headline = obebs4.randomHeadline();
console.log(headline);
```

### OBEBS4.randomParagraph()

_Returns a "random" paragraph string from the `OBEBS4.placeholders.paragraphs` array._

```javascript
let paragraph = obebs4.randomParagraph();
console.log(paragraph);
```

### OBEBS4.randomQuote()

_Returns a "random" quote string from the `OBEBS4.placeholders.quotes` array._

```javascript
let quote = obebs4.randomQuote();
console.log(quote);
```

### Console Errors

The OBE:BS4 JavaScript Markup Factory & Methods have built-in custom error reporting to help users to quickly and efficiently correct errors. In most cases, these error methods are implemented so they fail quietly, thus allowing your code to continue to generate as many elements as possible. This design decision was made to keep iterations and ideas flowing, especially when rapidly protyping.

All of the errors use a standard `console.error()` method to log the issue to your browser's console. In cases where arrays of items were passed as arguments, the error will let you know the specific index where the problem can be found. Otherwise, the error will let you know the method name and the argument that triggered the error.

Also, in most modern browser's you are usually able to expand the custom error message block in the console log, to reveal a `console.trace()` output that allows you to trace the error back to the offending line in your code. 

Console Errors have been tested in Chrome (74.0.3729.169), Firefox (65.0.1), Opera (60.0.3255.109), and Safari (12.1.1) browsers.

>
>**DON'T FORGET**: All JavaScript array indexes start at `[0]`!
>