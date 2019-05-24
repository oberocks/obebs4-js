# OBE:BS4 JavaScript Markup Factory & Methods
A JavaScript library to compliment any OBE:BS4 project with dynamically generated markup requirements.


---


## Table of Contents

* [Installation](#installation)
* [The Global Object](#the-global-object)
* [Initialization](#initialization)
    * [XXXXXXX](#list-of-color-wheel-colors)


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

To initialize the `OBEBS4` global constant, you'll want to use JavaScript's `new` keyword like this:

```javascript
// initialize factory
let obebs4 = new OBEBS4();
```

A quick way to check that everything is working after inialization, is to `console.log()` the version number, like so:

```javascript
console.log(obebs4.version);
```