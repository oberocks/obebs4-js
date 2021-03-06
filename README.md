# OBEBS4.js Markup Factory & Methods
OBEBS4.js is a JavaScript library to compliment any OBE:BS4 Design System project with either dynamically generated markup requirements, or a need for rapid prototyping.


---


## Table of Contents

* [Installation](#installation)
* [The Global Object](#the-global-object)
* [Initialization](#initialization)
* [Getting Started](#getting-started)
* [OBEBS4.js Content Methods](#obebs4js-content-methods)
    * [.element()](#obebs4element)
    * [.layout()](#obebs4layout)
* [OBEBS4.js Layouts Methods](#obebs4js-layouts-methods)
    * [.layouts.footer()](#obebs4layoutsfooter)
    * [.layouts.navbar()](#obebs4layoutsnavbar)
* [OBEBS4.js Placeholder Content](#object-placeholder-content)
* [OBEBS4.js Utility Methods](#object-utility-methods)
    * [.dom()](#obebs4dom)
    * [.extend()](#obebs4extend)
    * [.generateConstruct()](#obebs4generateconstruct)
    * [.getRandomIndex()](#obebs4getrandomindex)
    * [.isElementNode()](#obebs4iselementnode)
    * [.isObject()](#obebs4isobject)
    * [.isString()](#obebs4isstring)
    * [.nodeDepth()](#obebs4nodedepth)
    * [.randomBrand()](#obebs4randombrand)
    * [.randomHeadline()](#obebs4randomheadline)
    * [.randomParagraph()](#obebs4randomparagraph)
    * [.randomQuote()](#obebs4randomquote)
    * [.year()](#obebs4year)
* [Extending OBEBS4.js Layouts and Defaults](#extending-obebs4js-layouts-and-defaults)
    * [Extending the Defaults Object](#extending-the-defaults-object)
    * [Extending the Layouts Object](#extending-the-layouts-object)
<!---
* [Console Errors](#console-errors)
--->


---


## Installation

To start working with the OBEBS4.js Markup Factory & Methods (for now and while this project is in an Alpha phase), you'll want to:
1. Download this project as a .zip file, and unzip the file.
1. Add the file `obebs4.js` (or `obebs4.min.js`) to your local/live site directory as needed.
1. Include the file on your page or page template, as you would any other external JS file.

## The Global Object

This script exposes a global constant to work with, which lets you establish your own namespace for the factory methods. The global constant is `OBEBS4`.

## Initialization

To work with the `OBEBS4` global constant, you'll need to use JavaScript's `new` keyword to assign the OBEBS4.js Markup Factory & Methods to a variable of your choice:

```javascript
// initialize factory
let obebs4 = new OBEBS4();
```

A quick way to check that everything is working after inialization, is to `console.log()` the object's version number:

```javascript
console.log(obebs4.version);
```

## Getting Started

The OBEBS4.js Markup Factory & Methods were designed to render single elements, default content sections (with randomized placeholder text content), and complex nested content - all with standard JavaScript.

When coupled with the OBE:BS4 Design System's massive collection of Bootstrap 4 derived atomic CSS classes, the OBEBS4.js Markup Factory & Methods become an extremely powerful rapid prototyping tool, a performant AJAX response DOM library for dynamic production sites, and a super-lean base library for Single Page App (SPA) functionality without any shadow DOM requirements.

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

        <title>OBEBS4.js Markup Factory & Methods</title>
        <meta name="description" content="An awesome page for my new app/website!">

    </head>

    <body>

        <!-- Content Output Element -->
        <div id="obebs4-app"></div>

        <!-- JavaScript -->
        <script src="https://library.mattmct.com/obebs4.production.bundle.js"></script>
        <script src="obebs4.js"></script>

    </body>

</html>
```

Keeping the boilerplate markup above in mind, we want to focus on our content output element for all of our examples:

```html
<!-- Content Output Element -->
<div id="obebs4-app"></div>
```

In order to be 100% ready to create, we'll want to assign our content output element to a variable for script access:

```javascript
const target = document.getElementById('obebs4-app');
```

## OBEBS4.js Content Methods

The core goal for the OBEBS4.js Markup Factory & Methods, is to facilitate "exprssive" design and development decision making for web projects at any scale, ideally from inside a browser itself. These content methods are engineered specifically for this goal.

Many of the OBEBS4.js Markup Factory & Methods automatically generate default (and fully accessible) markup when called without any passed arugments. Additionally upon page load, any placeholder copy will be re-generated with newly randomiozed placeholder content. This allows all stakeholders to "see" and "get a feel" for how layout decisions are impacted by varying content.

But that's not all! This system was also designed with empathy for front end developers. With an FED skill set, the same factory methods can be used for infinately complex multi-element and multi-component structures... sans almost all of the code repitition those projects typically end-up having.

### OBEBS4.element()

_Returns a singleton element or a singleton parent element (with child elements), according to the options that are passed into the method._

_**PLEASE NOTE**: This method DOES NOT produce a default element NOR any placeholder copy. All OBEBS4.element() method calls need to specify a `string` for a HTML tag value to avoid throwing an error._

Order | Parameter | Required | Expected Value Type(s) | Details/Notes
----- | --------- | -------- | -------------------------- | -------------
1 | HTML Tag | YES | `string` | This does not have to be a valid HTML5 value!
2 | Text Node Content | NO | `string` or `false` or `array` (of `string` and/or `element node` items) | This parameter IS REQUIRED if using any Element Attributes or Child Element(s) params! In those cases, you can express this parameter as either a boolean `false` value or an empty string (`''` or `""`) value. Additionally, you can pass an `array` of items each of which can be either a `string` or an `element node`.
3 | Element Attributes | NO | `object` or `false` | This parameter IS REQUIRED if using the next Child Element(s) param! In those cases, you can express this parameter as either a boolean `false` value or an empty object (`{}`) value.
4 | Child Element(s) | NO | `element node` or `array` (of `element node` items) | This final optional paramater allows you to pass an element node or an array of element nodes, which will be returned as children of the parent HTML Tag you've specified in your `OBEBS4.element()` method. If using an array of element nodes, it should be a 1-dimentional array of exclusively element nodes.

#### OBEBS4.element() `<span>` Tag Example:
```javascript
let span = obebs4.element('span', 'This is the text for my span!');

target.appendChild(span);
```
```html
<!-- The example above will generate and append this HTML to your target element: -->
<span>This is the text for my span!</span>
```

#### OBEBS4.element() Parent & Single `<div>` Child Element Example:
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

#### OBEBS4.element() Parent & Multiple Child Elements (With Advanced Syntactic Sugar) Example:
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

#### OBEBS4.element() Alternative Syntax for Text Arrays with Element Nodes Example:
```javascript
let ctAnchor = obebs4.element('a', 'Anchor Tag', { class : 'text-primary', href : '#' });
let ctSpan = obebs4.element('span', 'Span', { class : 'font-weight-bold' });

let complexText = obebs4.element('p', ['This is the beginning text of a paragraph. Next, there is an ', ctAnchor, ' folled by the rest of the string. And finally, a second ', ctSpan, ' tag is included to show multiple examples in one paragraph.'], { class : 'lead text-center pt-3' });

target.appendChild(complexText);
```
```html
<!-- The example above will generate and append this HTML to your target element: -->
<p class="lead text-center">This is the beginning text of a paragraph. Next, there is an <a class="text-primary" href="#">Anchor Tag</a> folled by the rest of the string. And finally, a second <span class="font-weight-bold">Span</span> tag is included to show multiple examples in one paragraph.</p>
```

### OBEBS4.layout()

_Returns an infinately complex chunk of markup based on the information/settings passed into the method. If nothing is passed into this method, it will generate a default content section, which is made up of an `article` element with a nested `.container` element, a nested `.row` element, and two nested `.col` (column) elements. Each column contains a `h1`, `hr`, and two `p` elements - all with random placeholder content._

#### OBEBS4.layout()'s Single Argument

_The OBEBS4.layout() method accepts a single argument, which should always be an `array` of `object` items. Each object item passed in through this array argument should follow the Key Name schema in the [OBEBS4.layout()'s Object Schema Table](#obebs4layouts-object-schema-table)._

Order | Parameter | Required | Expected Value Type(s) | Details/Notes
----- | --------- | -------- | -------------------------- | -------------
1 | Settings | NO | `array` (of `object` items) | Please refer to the next table (below) to see the requirements for each object in this array!

#### OBEBS4.layout()'s Object Schema Table

_The OBEBS4.layout() method's single array argument, expects array items that are all objects. These object items need to use specific/exact keys to work as expected._

Properties | Key Name | Required | Expected Value Type(s) | Details/Notes
----- | --------- | -------- | -------------------------- | -------------
1 | 'tag' | YES | `string` | This is a REQUIRED property where the value will become a HTML tag value.
2 | 'attributes' | NO | `object` | An object of key/value pairs where the key is the name of the HTML attribute and it's value is a string of what will become the exact value of that attribute.
3 | 'text' | NO | `string` or `array` (of `string` and/or `element node` items) | If a string is passed as a value to this property, then that string will be inserted into a text node. If an array of strings and/or element nodes is passed, each `string` will be inserted into a text node, and each `element node` will be inserted as itself, prior to moving on to any children elements. This allows you to specify the precise insertion of in-line elements (such as `anchor` and `span` tags) as well as nested ordered and unordered lists into list elements.
4 | 'children' | NO | `array` (of `object` and/or `element node` items) | An array of `object` and/or `element node` items, where any object items follow the 'tag', 'attributes', 'text', and 'children' Properties found in this table! (It's a recursive method under the hood!)

> **OBEBS4.layout() TIP**:
> 
> Remember: In JavaScript, any object property (or 'key') that has a dash/hyphen in it's string MUST be wrapped in quotes! For example, when defining a data attribute for a generated element `data-value : "some value"` won't work! Instead this must be written/expressed as `"data-value" : "some value"`!

#### OBEBS4.layout() Default Example:
```javascript
let layout = obebs4.layout()
target.appendChild(layout);
```
```html
<!-- The example above will generate and append this HTML to your target element: -->
<article class="container-fluid py-5">
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-6">
                <h1>Quisque Feugiat Hendrerit</h1>
                <hr class="border-primary">
                <p>Quisque feugiat hendrerit ornare. Ut in magna mi. Donec pellentesque viverra lorem, id vestibulum nibh. Pellentesque egestas sit amet ante sed malesuada. Suspendisse commodo facilisis nulla, a malesuada ante accumsan convallis. Sed maximus tellus eu justo ornare, varius ullamcorper nibh scelerisque. Nulla facilisi. Quisque sed eros ex. In fringilla justo odio.</p>
                <p>Mauris ut nulla id libero viverra lobortis. Phasellus ut elit eu diam feugiat scelerisque. Vivamus semper nibh id turpis pharetra bibendum. In eget felis risus. Nullam at tincidunt tellus, non fermentum enim. Mauris varius suscipit lectus ac feugiat. Pellentesque pulvinar semper tempor. Vivamus ac ipsum bibendum, malesuada magna id, viverra erat. Ut aliquet neque nec hendrerit tristique.</p>
            </div>
            <div class="col-md-6">
                <h1>Mauris Ut Nulla Id Libero</h1>
                <hr class="border-primary">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed iaculis bibendum augue, in facilisis lorem euismod fermentum. Maecenas non auctor magna, et tempor purus. Morbi et ex iaculis nunc tincidunt semper a eget dui. Nulla ac turpis id arcu cursus condimentum eget vel ante. Quisque vel malesuada sapien. Etiam non urna vitae urna iaculis rutrum non non sem.</p>
                <p>Sed bibendum nisi a est semper consequat. Aliquam mi neque, blandit lobortis justo sit amet, commodo consectetur sem. Donec sagittis erat quis venenatis dignissim. Duis ac iaculis leo, viverra fringilla lacus. In hac habitasse platea dictumst. Vestibulum euismod purus et tellus congue accumsan. Sed ligula libero, finibus non neque sed, semper consectetur est. Ut tincidunt, sapien aliquam varius fermentum, diam sem consequat risus, eget molestie erat ante quis erat.</p>
            </div>
        </div>
    </div>
</article>
```

#### OBEBS4.layout() Custom Example:
```javascript
let sectionSettings = [
    {
        tag : 'section',
        attributes : {
            class : 'container-fluid py-5 bg-primary text-white'
        },
        children : [
            {
                tag : 'div',
                attributes : {
                    class : 'row justify-content-center'
                },
                children : [
                    {
                        tag : 'div',
                        attributes : {
                            class : 'col-sm-11 col-md-9 col-lg-7 col-xl-6'
                        },
                        children : [
                            {
                                tag : 'h1',
                                text : obebs4.randomHeadline()
                            },
                            {
                                tag : 'p',
                                text : obebs4.randomParagraph()
                            },
                            {
                                tag : 'p',
                                attributes : {
                                    class : 'lead'
                                },
                                text : obebs4.randomQuote()
                            },
                            {
                                tag : 'p',
                                text : obebs4.randomParagraph()
                            }
                        ]
                    }
                ]
            }
        ]
    }
];
let sectionLayout = obebs4.layout(sectionSettings)
target.appendChild(sectionLayout);
```
```html
<!-- The example above will generate and append this HTML to your target element: -->
<section class="container-fluid py-5 bg-primary text-white">
    <div class="row justify-content-center">
        <div class="col-sm-11 col-md-9 col-lg-7 col-xl-6">
            <h1>Lorem Ipsum Dolor Sit</h1>
            <p>Quisque feugiat hendrerit ornare. Ut in magna mi. Donec pellentesque viverra lorem, id vestibulum nibh. Pellentesque egestas sit amet ante sed malesuada. Suspendisse commodo facilisis nulla, a malesuada ante accumsan convallis. Sed maximus tellus eu justo ornare, varius ullamcorper nibh scelerisque. Nulla facilisi. Quisque sed eros ex. In fringilla justo odio.</p>
            <p class="lead">Duis ac iaculis leo, viverra fringilla lacus. In hac habitasse platea dictumst.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed iaculis bibendum augue, in facilisis lorem euismod fermentum. Maecenas non auctor magna, et tempor purus. Morbi et ex iaculis nunc tincidunt semper a eget dui. Nulla ac turpis id arcu cursus condimentum eget vel ante. Quisque vel malesuada sapien. Etiam non urna vitae urna iaculis rutrum non non sem.</p>
        </div>
    </div>
</section>
```

#### OBEBS4.layout() Passing an Element Node as a Child Example:

(Coming Soon!)

## OBEBS4.js Layouts Methods

The OBEBS4.js Markup Factory & Methods include a collection of component methods to allow your code to be both more semantic and more expressive. Each of these methods use the `OBEBS4.layout()` method under the hood.

Additionally, each of these methods have associated default array of object items which are used to generate the default markup for each component. You can access them using the `OBEBS4.defaults` object. These defaults are available to you at all times, for both reference and quick prototyping. Here are examples of how to view/copy component default settings using `console.log()`, your browser console, and `JSON.stringify()`:

```javascript
console.log(JSON.stringify(obebs4.defaults.layout, null, '\t')); // Logs defaults for OBEBS4.layout()
console.log(JSON.stringify(obebs4.defaults.navbar, null, '\t')); // Logs defaults for OBEBS4.layouts.navbar()
```

### OBEBS4.layouts.footer()

_The OBEBS4.layouts.footer() method accepts a single argument, which should always be an `array` of `object` items. Each object item passed in through this array argument should follow the Key Name schema in the [OBEBS4.layout()'s Object Schema Table](#obebs4layouts-object-schema-table)._

#### OBEBS4.layouts.footer() Default Example

```javascript
let defaultFooter = obebs4.layouts.footer();
target.appendChild(defaultFooter);
```
```html
<!-- The example above will generate and append this HTML to your target element: -->
<footer class="container-fluid bg-black text-light-gray pt-5 px-sm-5">
    <div class="row justify-content-center">
        <div class="col-lg-4 pb-5">
            <h5 class="text-light">Contact</h5>
            <hr class="border-gray">
            <address>
                <strong class="text-light">Business Name</strong><br>
                1234 Main St, Suite 9000<br>
                Anywhere, AZ 12345<br>
                <abbr title="Phone Number">P:</abbr> (123) 456-7890<br>
                <abbr title="Email Address">E:</abbr> dept@company.com
            </address>
            <div class="font-weight-bold text-light py-2">Connect With Us</div>
            <ul class="list-inline">
                <li class="list-inline-item">
                    <button class="btn btn-primary btn-xl fab-lg rounded-0" type="button">
                        <i class="fab fa-facebook" title="Connect with us on Facebook!"></i>
                    </button>
                </li>
                <li class="list-inline-item">
                    <button class="btn btn-primary btn-xl fab-lg rounded-0" type="button">
                        <i class="fab fa-twitter" title="Connect with us on Twitter!"></i>
                    </button>
                </li>
                <li class="list-inline-item">
                    <button class="btn btn-primary btn-xl fab-lg rounded-0" type="button">
                        <i class="fas fa-linkedin" title="Connect with us on LinkedIn!"></i>
                    </button>
                </li>
                <li class="list-inline-item">
                    <button class="btn btn-primary btn-xl fab-lg rounded-0" type="button">
                        <i class="fab fa-youtube" title="Connect with us on YouTube!"></i>
                    </button>
                </li>
            </ul>
        </div>
        <div class="col-lg-3 pb-5">
            <h5 class="text-light">Links</h5>
            <hr class="border-gray">
            <a class="text-light" href="#">Home</a><br>
            <a class="text-light" href="#">Shop</a><br>
            <a class="text-light" href="#">Blog</a><br>
            <a class="text-light" href="#">Our Story</a><br>
            <a class="text-light" href="#">Careers</a>
        </div>
        <div class="col-lg-5 pb-5">
            <h5 class="text-light">Our Story</h5>
            <hr class="border-gray">
            <p>Sed bibendum nisi a est semper consequat. Aliquam mi neque, blandit lobortis justo sit amet, commodo consectetur sem. Donec sagittis erat quis venenatis dignissim. Duis ac iaculis leo, viverra fringilla lacus. In hac habitasse platea dictumst. Vestibulum euismod purus et tellus congue accumsan. Sed ligula libero, finibus non neque sed, semper consectetur est. Ut tincidunt, sapien aliquam varius fermentum, diam sem consequat risus, eget molestie erat ante quis erat.<a class="text-light ml-3">Read More...</a></p>
            <label for="post-btn-input" class="font-weight-bold pt-2 text-light">Newsletter Signup:</label>
            <div class="input-group input-group-lg">
                <input type="text" class="form-control border-light-gray rounded-0" placeholder="Enter Email" id="post-btn-input" name="post-btn-input" aria-describedby="post-btn-input-help">
                <div class="input-group-append">
                    <button class="btn btn-outline-light-gray rounded-0" type="button">SUBMIT</button>
                </div>
            </div>
            <small id="post-btn-input-help" class="form-text text-gray">A valid email address is required.</small>
        </div>
    </div>
</footer>
```

### OBEBS4.layouts.navbar()

_The OBEBS4.layouts.navbar() method accepts a single argument, which should always be an `array` of `object` items. Each object item passed in through this array argument should follow the Key Name schema in the [OBEBS4.layout()'s Object Schema Table](#obebs4layouts-object-schema-table)._

#### OBEBS4.layouts.navbar() Default Example

```javascript
let defaultNavbar = obebs4.layouts.navbar();
target.appendChild(defaultNavbar);
```
```html
<!-- The example above will generate and append this HTML to your target element: -->
<nav class="navbar fixed-top navbar-expand-lg navbar-dark bg-dark box-shadow-sm">
    <a class="navbar-brand" href="#">Brand Name</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#layouts-navbar-id" aria-controls="layouts-navbar-id" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="layouts-navbar-id">
        <div class="navbar-nav">
            <a class="nav-item nav-link" href="#">Home</a>
            <a class="nav-item nav-link" href="#">Shop</a>
            <a class="nav-item nav-link" href="#">Blog</a>
        </div>
    </div>
</nav>
```

#### OBEBS4.layouts.navbar() with Custom Settings Example

```javascript
let customNavbarImgSize = '30';
let customNavCollapseId = 'custom-navbar-id';
let customNavbarSettings = [
    {
        tag : 'nav',
        attributes : {
            class : 'navbar justify-content-start fixed-top navbar-expand-lg navbar-dark bg-dark box-shadow-sm'
        },
        children : [
            {
                tag : 'img',
                attributes : {
                    src : 'https://via.placeholder.com/' + customNavbarImgSize,
                    alt : 'Navbar Image Alt Text',
                    style : 'width:' + customNavbarImgSize + 'px; height:' + customNavbarImgSize + 'px;',
                    class : ''
                }
            },
            {
                tag : 'a',
                attributes : {
                    class : 'navbar-brand ml-3',
                    href : '#'
                },
                text : 'Brand Name'
            },
            {
                tag : 'button',
                attributes : {
                    class : 'navbar-toggler ml-auto',
                    type : 'button',
                    'data-toggle' : 'collapse',
                    'data-target' : '#' + customNavCollapseId,
                    'aria-controls' : customNavCollapseId,
                    'aria-expanded' : 'false',
                    'aria-label' : 'Toggle navigation'
                },
                children : [
                    {
                        tag : 'span',
                        attributes : {
                            class : 'navbar-toggler-icon'
                        }
                    }
                ]
            },
            {
                tag : 'div',
                attributes : {
                    class : 'collapse navbar-collapse',
                    id : customNavCollapseId
                },
                children : [
                    {
                        tag : 'div',
                        attributes : {
                            class : 'navbar-nav ml-auto'
                        },
                        children : [
                            {
                                tag : 'a',
                                attributes : {
                                    class : 'nav-item nav-link active',
                                    href : '#'
                                },
                                text : 'Home'
                            },
                            {
                                tag : 'a',
                                attributes : {
                                    class : 'nav-item nav-link',
                                    href : '#'
                                },
                                text : 'Shop'
                            },
                            {
                                tag : 'a',
                                attributes : {
                                    class : 'nav-item nav-link',
                                    href : '#'
                                },
                                text : 'Blog'
                            }
                        ]
                    }
                ]
            }
        ]
    }
];

let customNavbar = obebs4.layouts.navbar(customNavbarSettings);
target.appendChild(customNavbar);
```
```html
<!-- The example above will generate and append this HTML to your target element: -->
<nav class="navbar justify-content-start fixed-top navbar-expand-lg navbar-dark bg-dark box-shadow-sm">
    <img src="https://via.placeholder.com/30" alt="Navbar Image Alt Text" style="width:30px; height:30px;" class="">
    <a class="navbar-brand ml-3" href="#">Brand Name</a>
    <button class="navbar-toggler ml-auto" type="button" data-toggle="collapse" data-target="#custom-navbar-id" aria-controls="custom-navbar-id" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="custom-navbar-id">
        <div class="navbar-nav ml-auto">
            <a class="nav-item nav-link active" href="#">Home</a>
            <a class="nav-item nav-link" href="#">Shop</a>
            <a class="nav-item nav-link" href="#">Blog</a>
        </div>
    </div>
</nav>
```

## Object Placeholder Content

The OBEBS4.js Markup Factory & Methods were designed to allow for a very "expressive" web design and iteration experience. A simple but powerful built-in feature, gives you dynamic access to placeholder content strings to use when iterating.

This means you can get content design ideas on a page incredibly quickly, while also having different placeholder strings within your design each time you reload the page. Each placeholder string is randomly determined at run time. This was done to allow all project stakeholders the ability to "see" how content layout decisions are impacted by different content string lengths, specifically for responsive design content issues.

But... what if your project or team doesn't want to use Latin words for your placeholder text?!

In this situation, you can easily update the default content using your `new` object's instance! All default placeholder text is found in the `OBEBS4.placeholders` object. This object has several properties, all of which should have values that are an `array` of unique `string` values. Here's a list of the `OBEBS4.placeholders` object's properties for reference:

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

So, going with our initialized example, we can change the `OBEBS4.placeholders` object property array values like this:

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

The methods exposed by the OBEBS4.js Markup Factory & Methods can be used in your custom work much like they're used by the OBEBS4 object internally. Here's an example of each method, again using our initialized example above:

### OBEBS4.dom()

_A helper method that makes DOM element position manipulations more semantically readable and easier for non-specialists to understand. This method includes a flexible argument structure that provides access to standard JS DOM manipulation methods like: `.appendChild()`, `.insertBefore()`, `.replaceChild()` & `.removeChild()`. Additionally, there's a couple of jQuery inspired deritives of these standard JS methods, which are of the `.insertAfter()` & `.prepend()` varieties!_

>
> NOTE: All strings passed into this method are **Case Insensitive**, thanks to JS's `.toLowerCase()`!
>

Order | Parameter | Required | Expected Value Type(s) | Details/Notes
----- | --------- | -------- | -------------------------- | -------------
1 | Parent Element | YES | `element node` | This should be a valid JavaScript Element Node.
2 | Method Option | YES | `string` | Passed strings are **Case Insensitive**! Expects one of these specific strings: `'append'`, `'insert'`, `'replace'`, `'remove'`, or `'prepend'`.
3 | Child Element | YES | `element node` | This should be a valid JavaScript Element Node.
4 | Method Sub-Option or Child Element | NO | `string` or `element node` | This argument is REQUIRED when the 2nd argument is `'insert'` or `'replace'`! Depending on your choice for a 2nd parameter, this argument can be either a `string` or an `element node`. If you are using `'insert'` or `'replace'` for your 2nd argument, then the 4th argument should be either `'before'` or `'after'` (for `.insertBefore()` or `.insertAfter()` functionality). If the 2nd argument is `'replace'`, then the 4th argument can be any string (even an empty string) and it will work. That said, it's recommended to use the string `'with'` as a 4th argument for `'replace'`, because it's super easy to read afterwards. Don't forget, all passed strings are **Case Insensitive**!
5 | Reference Element | NO | `element node` | This should be a valid JavaScript Element Node. This argument is REQUIRED whenever using `'insert'` (both `'before'` & `'after'` variations) along with the `'replace'`/`'with'` option.

#### OBEBS4.dom() Semantic Examples (Recommended):
```javascript
// Create a parent DOM element to work with
let domSection = obebs4.element('section', false, { class : 'text-center pb-5' });

// Create the child elements to play with
let element_0 = obebs4.element('div', '.dom() Method Test Examples', { class : 'bg-light p-2 mb-5' });
let element_1 = obebs4.element('div', 'Element #1', { class : 'text-secondary' });
let element_2 = obebs4.element('div', 'Element #2', { class : 'text-primary' });
let element_3 = obebs4.element('div', 'Element #3', { class : 'text-warning' });
let element_4 = obebs4.element('div', 'Element #4', { class : 'text-danger' });
let element_5 = obebs4.element('div', 'Element #5', { class : 'text-info' });
let element_6 = obebs4.element('div', 'Element #6', { class : 'text-success' });
let element_7 = obebs4.element('div', 'Element #7', { class : 'text-dark' });
let element_8 = obebs4.element('div', 'Element #8', { class : 'text-light' });

// .dom() "semantic" examples
obebs4.dom(domSection, 'append', element_1);
obebs4.dom(domSection, 'append', element_3);
obebs4.dom(domSection, 'insert', element_2, 'before', element_3);
obebs4.dom(domSection, 'append', element_5);
obebs4.dom(domSection, 'insert', element_4, 'after', element_3);
obebs4.dom(domSection, 'append', element_6);
obebs4.dom(domSection, 'append', element_7);
obebs4.dom(domSection, 'replace', element_7, 'with', element_8);
obebs4.dom(domSection, 'remove', element_8);
obebs4.dom(domSection, 'prepend', element_0);

// append our working section to our example element
obebs4.dom(target, 'append', domSection);
```
```html
<!-- The example above will generate and append this HTML to your target element: -->
<section class="bg-gradient-white text-center pb-5">
    <div class="bg-secondary text-white p-2 mb-5">.dom() Method Test Examples</div>
    <div class="text-secondary">Element #1</div>
    <div class="text-primary">Element #2</div>
    <div class="text-warning">Element #3</div>
    <div class="text-danger">Element #4</div>
    <div class="text-info">Element #5</div>
    <div class="text-success">Element #6</div>
</section>
```

#### OBEBS4.dom() Alternative Syntaxes:
```javascript
obebs4.dom(domSection, 'appendChild', element_1);
obebs4.dom(domSection, 'appendChild', element_3);
obebs4.dom(domSection, 'insertBefore', element_2, element_3);
// ALT VERSION: obebs4.dom(domSection, 'before', element_2, element_3);
obebs4.dom(domSection, 'appendChild', element_5);
obebs4.dom(domSection, 'insertAfter', element_4, element_3);
// ALT VERSION:  obebs4.dom(domSection, 'after', element_4, element_3);
obebs4.dom(domSection, 'appendChild', element_6);
obebs4.dom(domSection, 'appendChild', element_7);
obebs4.dom(domSection, 'replaceChild', element_7, element_8);
// ALT VERSION:  obebs4.dom(domSection, 'replace', element_7, element_8);
obebs4.dom(domSection, 'removeChild', element_8);
obebs4.dom(domSection, 'firstChild', element_0);
```

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

### OBEBS4.generateConstruct()

_Returns a JavaScript object notated with the markup tags, attributes, text, and child structure(s) for a single passed DOM node list object._

```javascript
let nav = document.querySelector('nav');
let nav_construct = obebs4.generateConstruct(nav);
console.log(nav_construct);
```

_The object returned by `.generateConstruct()` can be used in conjunction with the `.layout()` method to re-create the exact markup from the construct. To do this, you'll want to pack any generated constructs into an array to pass them into the layout function. **NOTE: The array is required in all cases (even to pass in a single construct) when using the .layout() function!**_

```javascript
let nav = document.querySelector('nav');
let nav_construct = obebs4.generateConstruct(nav);

let section = document.querySelector('section');
let section_construct = obebs4.generateConstruct(section);

let new_layout = obebs4.layout([nav_construct, section_construct]);
target.appendChild(new_layout);
```

>
> NOTE: The `.generateConstruct()` method will modify certain text node values by wrapping them in span tags, whenever an inline element is found that is flanked by text node content! This is done to reduce the complixity of the conditionals under the hood, because it has no visual impact of the rendered text in the browser. If the text content is just text though (without any element siblings), it will show up as a value for the element's text object property.
>

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

### OBEBS4.nodeDepth()

_Returns an interger that is 1 or more, representing the depth of child (grand-child, great grand-child, etc.) elements in a parent element's node list object._

```javascript
let navdepth = obebs4.nodeDepth(document.querySelector('nav'));
console.log('The nav depth is: ' + navdepth);
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

### OBEBS4.year()

_Returns the current full year (YYYY)._

```javascript
let year = obebs4.year();
console.log(year);
```

## Extending OBEBS4.js Layouts and Defaults

If you and/or your team are using the [OBE:BS4 Design System](https://github.com/oberocks/obebs4) in conjunction with OBEBS4.js, you'll find that you have a nearly infinite amount of options available to sculpt the presentation of your content. Extending the OBEBS4.js Layouts (`OBEBS4.layouts{}`) and Defaults (`OBEBS4.defaults{}`) becomes a natural progression as you use the Design System and the Library together.

The OBEBS4.js `.layouts` and `.defaults` objects are de-coupled from each other purposefully. This architecture was meant to allow users of all skill levels, to access/reference/use any existing .defaults to quickly come up with new markup schemas. However due to this de-coupling, you will generally want to take a 2 step approach to adding a new Layout with default settings.

### Extending the Defaults Object

_The 1st step is to add the necessary defaults settings that will be used whenever your new layout method is called without any passed settings._

For example, you can extend the OBEBS4.defaults object like this:

```javascript
obebs4.defaults.myNewLayout = [
    {
        tag : 'section',
        attributes : {
            class : 'container-fluid bg-light py-5'
        },
        children : [
            {
                tag : 'div',
                attributes : {
                    class : 'container pt-5'
                },
                children : [
                    {
                        tag : 'div',
                        attributes : {
                            class : 'row justify-content-center'
                        },
                        children : [
                            {
                                tag : 'div',
                                attributes : {
                                    class : 'col-md-8'
                                },
                                children : [
                                    {
                                        tag : 'h1',
                                        attributes : {
                                            class : 'text-shadow pt-2'
                                        },
                                        text : obebs4.randomHeadline()
                                    },
                                    {
                                        tag : 'p',
                                        attributes : {
                                            class : 'lead mb-5'
                                        },
                                        text : obebs4.randomQuote()
                                    },
                                    {
                                        tag : 'a',
                                        attributes : {
                                            class : 'btn btn-lg btn-white text-primary rounded-0 mt-2 mb-4',
                                            role : 'button'
                                        },
                                        text : 'LEARN MORE'
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ]
    }
];
```

### Extending the Layouts Object

_The 2nd step is to add the necessary layout code to process your new default settings or any future (passed) user settings, and then return the specified markup for each scenario._

The OBEBS4.layouts object can be extended like this:

```javascript
obebs4.layouts.myNewLayout = function (passedSettings = false) {

    // get the default settings
    let defaults = obebs4.defaults.myNewLayout;

    // set user submitted settings if provided, otherwise use defaults
    let settings = passedSettings ? passedSettings : defaults;

    // generate the navbar markup
    let myNewLayout = obebs4.layout(settings);
    
    // return the markup
    return myNewLayout;

};
```

With both your new layout and new defaults added to your OBEBS4,js instance, you can call your new layout like this:

```javascript
let myNewLayout = obebs4.layouts.myNewLayout();
target.appendChild(myNewLayout);
```

<!---
### Console Errors

The OBEBS4.js Markup Factory & Methods have built-in custom error reporting to help users to quickly and efficiently correct errors. In most cases, these error methods are implemented so they fail quietly, thus allowing your code to continue to generate as many elements as possible. This design decision was made to keep iterations and ideas flowing, especially when rapidly protyping.

All of the errors use a standard `console.error()` method to log the issue to your browser's console. In cases where arrays of items were passed as arguments, the error will let you know the specific index where the problem can be found. Otherwise, the error will let you know the method name and the argument that triggered the error.

Also, in most modern browser's you are usually able to expand the custom error message block in the console log, to reveal a `console.trace()` output that allows you to trace the error back to the offending line in your code. 

Console Errors have been tested in Chrome (74.0.3729.169), Firefox (65.0.1), Opera (60.0.3255.109), and Safari (12.1.1) browsers.

>
>**DON'T FORGET**: All JavaScript array indexes start at `[0]`!
>
--->