# OBE:BS4 JavaScript Markup Factory & Methods
A JavaScript library to compliment any OBE:BS4 project with dynamically generated markup requirements.


---


## Table of Contents

* [Installation](#installation)
* [The Global Object](#the-global-object)
* [Initialization](#initialization)
* [Workflow](#workflow)
    * [Placeholder Content](#placeholder-content)
    * [Object Utility Methods](#object-utility-methods)
    * [Object Content Methods](#object-content-methods)


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

### Placeholder Content

(Coming Soon)

### Object Utility Methods

(Coming Soon)

### Object Content Methods

(Coming Soon)