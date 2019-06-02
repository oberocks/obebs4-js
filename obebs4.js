const OBEBS4 = function () {
    'use strict';
    let self = this;
    this.version = '2.1.0',
    this.placeholders = {
        headlines : [
            'Lorem Ipsum Dolor Sit',
            'Quisque Feugiat Hendrerit',
            'Mauris Ut Nulla Id Libero',
            'Sed Bibendum Nisi A Est Semper'
        ],
        paragraphs : [
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed iaculis bibendum augue, in facilisis lorem euismod fermentum. Maecenas non auctor magna, et tempor purus. Morbi et ex iaculis nunc tincidunt semper a eget dui. Nulla ac turpis id arcu cursus condimentum eget vel ante. Quisque vel malesuada sapien. Etiam non urna vitae urna iaculis rutrum non non sem.',
            'Quisque feugiat hendrerit ornare. Ut in magna mi. Donec pellentesque viverra lorem, id vestibulum nibh. Pellentesque egestas sit amet ante sed malesuada. Suspendisse commodo facilisis nulla, a malesuada ante accumsan convallis. Sed maximus tellus eu justo ornare, varius ullamcorper nibh scelerisque. Nulla facilisi. Quisque sed eros ex. In fringilla justo odio.',
            'Mauris ut nulla id libero viverra lobortis. Phasellus ut elit eu diam feugiat scelerisque. Vivamus semper nibh id turpis pharetra bibendum. In eget felis risus. Nullam at tincidunt tellus, non fermentum enim. Mauris varius suscipit lectus ac feugiat. Pellentesque pulvinar semper tempor. Vivamus ac ipsum bibendum, malesuada magna id, viverra erat. Ut aliquet neque nec hendrerit tristique.',
            'Sed bibendum nisi a est semper consequat. Aliquam mi neque, blandit lobortis justo sit amet, commodo consectetur sem. Donec sagittis erat quis venenatis dignissim. Duis ac iaculis leo, viverra fringilla lacus. In hac habitasse platea dictumst. Vestibulum euismod purus et tellus congue accumsan. Sed ligula libero, finibus non neque sed, semper consectetur est. Ut tincidunt, sapien aliquam varius fermentum, diam sem consequat risus, eget molestie erat ante quis erat.'
        ],
        quotes : [
            'Nulla ac turpis id arcu cursus condimentum eget vel ante.',
            'Suspendisse commodo facilisis nulla, a malesuada ante accumsan convallis.',
            'In eget felis risus. Nullam at tincidunt tellus, non fermentum enim.',
            'Duis ac iaculis leo, viverra fringilla lacus. In hac habitasse platea dictumst.'
        ],
        brands : [
            'Lorem Ipsum',
            'Suspendisse',
            'Nulla Ac Magna',
            'Aliquam Vulputate'
        ],
        navigation : [
            'Link One',
            'Link Two',
            'Link Three'
        ]
    },
    this.dom = function (parent, type, el, subType = false, refNode = false) {
        
        let t = type.toLowerCase();

        if (t === 'appendchild' || t === 'append') {
            
            parent.appendChild(el);

        } else if (t === 'insert') {
            
            if (subType === 'after') {
                
                parent.insertBefore(el, refNode.nextSibling);

            } else if (subType === 'before' || subType != false) {
                
                parent.insertBefore(el, refNode);

            }

        } else if (t === 'insertafter' || t === 'after') {
            
            parent.insertBefore(el, subType.nextSibling);

        } else if (t === 'insertbefore' || t === 'before') {
            
            parent.insertBefore(el, subType);

        } else if (t === 'replacechild' || t === 'replace') {
            
            if (subType === 'with' || self.isString(subType)) {
                
                let ref = refNode ? refNode : undefined;
                if (ref) {
                    parent.replaceChild(ref, el);
                }

            } else if (self.isElementNode(subType)) {
                
                parent.replaceChild(subType, el);

            }

        } else if (t === 'removechild' || t === 'remove') {
            
            parent.removeChild(el);

        } else if (t === 'prepend' || t === 'firstchild') {
            
            let firstChild = parent.firstChild;
            parent.insertBefore(el, firstChild);

        }

    },
    this.extend = function () {

        // Helper function to merge user setings into obebs4 settings
        // from: https://gomakethings.com/vanilla-javascript-version-of-jquery-extend/
        // Pass in the objects to merge as arguments.
        // For a deep extend, set the first argument to `true`.
        
        // Variables
        var extended = {};
        var deep = false;
        var i = 0;
        var length = arguments.length;
    
        // Check if a deep merge
        if ( Object.prototype.toString.call( arguments[0] ) === '[object Boolean]' ) {
            deep = arguments[0];
            i++;
        }
    
        // Merge the object into the extended object
        var merge = function (obj) {
            for ( var prop in obj ) {
                if ( Object.prototype.hasOwnProperty.call( obj, prop ) ) {
                    // If deep merge and property is an object, merge properties
                    if ( deep && Object.prototype.toString.call(obj[prop]) === '[object Object]' ) {
                        extended[prop] = self.extend( true, extended[prop], obj[prop] );
                    } else {
                        extended[prop] = obj[prop];
                    }
                }
            }
        };
    
        // Loop through each object and conduct a merge
        for ( ; i < length; i++ ) {
            var obj = arguments[i];
            merge(obj);
        }
    
        return extended;
    
    },
    this.getRandomIndex = function (arrayLength) {
        // Helper function to get random index for an array length
        // from: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
        return Math.floor(Math.random() * Math.floor(arrayLength));
    },
    this.isElementNode = function (el) {
        // FROM: http://stackoverflow.com/a/36894871/1204556
        return el instanceof Element || el instanceof HTMLDocument;  
    },
    this.isObject = function (obj) {
        return typeof obj === 'object' && obj !== null;  
    },
    this.isString = function (str) {
        return typeof str === 'string' || str instanceof String;  
    },
    this.logElementError = function () {
        console.error("OBEBS4.JS ERROR: The .element() method requires a valid string argument to define a dynamically generated element tag!");
    },
    this.logTextArrayError = function () {
        console.error("OBEBS4.JS ERROR: The .element() method's optional 2nd argument must be a string or an array of exclusively strings and/or element nodes!");
    },
    this.logNodeError = function (string) {
        console.error("OBEBS4.JS ERROR: Element array items must be element node objects. Please update your " + string + ".");
    },
    this.logSettingsError = function (string) {
        console.error("OBEBS4.JS ERROR: Settings for methods must be valid JavaScript objects. Please update your " + string + " so your settings can be applied.");
    },
    this.randomHeadline = function () {
        let index = self.getRandomIndex(this.placeholders.headlines.length);
        return this.placeholders.headlines[index];
    },
    this.randomParagraph = function () {
        let index = self.getRandomIndex(this.placeholders.paragraphs.length);
        return this.placeholders.paragraphs[index];
    },
    this.randomQuote = function () {
        let index = self.getRandomIndex(this.placeholders.quotes.length);
        return this.placeholders.quotes[index];
    },
    this.randomBrand = function () {
        let index = self.getRandomIndex(this.placeholders.brands.length);
        return this.placeholders.brands[index];
    },
    this.textNode = function (str) {
        return document.createTextNode(str);
    },
    this.element = function (elemType, elemText = false, attributes = false, nestedElem = false) {
        
        // initialize the returned element as a var
        let el;

        // check for a passed element tag
        if (elemType) {
            
            // create the element
            el = document.createElement(elemType);

        } else {
            
            self.logElementError();

        }
        
        // check for passed elemText
        if (elemText) {

            // check if value is a string and has length
            if (self.isString(elemText) && elemText.length > 0) {
                
                // if it's a string then create a text node and append it to the returned element
                el.appendChild(self.textNode(elemText));

            } 
            // if the value is an array
            else if (Array.isArray(elemText) && elemText.length > 0) 
            {
                
                // loop through the array
                for (var i = 0; i < elemText.length; i++) {
                    
                    // if it's a string then create a text node and append it to the returned element
                    if (self.isString(elemText[i])) {
                        
                        el.appendChild(self.textNode(elemText[i]));

                    }
                    // if it's an element node then append it to the returned element
                    else if (self.isElementNode(elemText[i])) {
                        
                        el.appendChild(elemText[i]);

                    } else {

                        self.logTextArrayError();

                    }

                }

            } else {

                self.logTextArrayError();

            }
            
        }
            

        // check for passed object of html attribute key/value pairs
        if (attributes) {
            
            // check that the argument is an object and is not null
            if (self.isObject(attributes)) {
                
                // loop through the object
                for (var attr in attributes) {
                    
                    if (attributes.hasOwnProperty(attr)) {
                        
                        // set the attribute and value
                        el.setAttribute(attr, attributes[attr]);

                    }

                }

            } else {

                self.logSettingsError(".element()'s 3rd argument");

            }

        }
        
        // check for passed element array
        if (nestedElem) {
            
            // check if the passed argument is an array
            if (Array.isArray(nestedElem)) {
                
                // loop through the array
                for (var i = 0; i < nestedElem.length; i++) {
                    
                    // check the array item is an element node
                    if (self.isElementNode(nestedElem[i])) {
                                
                        // and attach each element
                        el.appendChild(nestedElem[i]);
                        
                    } else {

                        self.logNodeError(".element()'s 4th argument at index: [" + i + "]");

                    }

                }

            } else {
                
                // check that the passed item is an element node
                if (self.isElementNode(nestedElem)) {
                                
                    // if so, then just attach the passed element
                    el.appendChild(nestedElem);
                    
                } else {

                    self.logNodeError(".element()'s 4th argument");

                }

            }
        }

        // return the element
        return el;

    },
    this.defaults = {
        navbar : [
            {
                tag : 'nav',
                attributes : {
                    class : 'navbar fixed-top navbar-expand-lg navbar-dark bg-dark box-shadow-sm'
                },
                children : [
                    {
                        tag : 'a',
                        attributes : {
                            class : 'navbar-brand',
                            href : '#'
                        },
                        text : 'Brand Name'
                    },
                    {
                        tag : 'button',
                        attributes : {
                            class : 'navbar-toggler',
                            type : 'button',
                            'data-toggle' : 'collapse',
                            'data-target' : '#components-navbar-id',
                            'aria-controls' : 'components-navbar-id',
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
                            id : 'components-navbar-id'
                        },
                        children : [
                            {
                                tag : 'div',
                                attributes : {
                                    class : 'navbar-nav'
                                },
                                children : [
                                    {
                                        tag : 'a',
                                        attributes : {
                                            class : 'nav-item nav-link',
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
        ],
        layout : [
            {
                tag : 'article',
                attributes : {
                    class : 'container-fluid py-5'
                },
                children : [
                    {
                        tag : 'div',
                        attributes : {
                            class : 'container'
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
                                            class : 'col-md-6'
                                        },
                                        children : [
                                            {
                                                tag : 'h1',
                                                text : self.randomHeadline()
                                            },
                                            {
                                                tag : 'hr',
                                                attributes : {
                                                    class : 'border-primary'
                                                }
                                            },
                                            {
                                                tag : 'p',
                                                text : self.randomParagraph()
                                            },
                                            {
                                                tag : 'p',
                                                text : self.randomParagraph()
                                            }
                                        ]
                                    },
                                    {
                                        tag : 'div',
                                        attributes : {
                                            class : 'col-md-6'
                                        },
                                        children : [
                                            {
                                                tag : 'h1',
                                                text : self.randomHeadline()
                                            },
                                            {
                                                tag : 'hr',
                                                attributes : {
                                                    class : 'border-primary'
                                                }
                                            },
                                            {
                                                tag : 'p',
                                                text : self.randomParagraph()
                                            },
                                            {
                                                tag : 'p',
                                                text : self.randomParagraph()
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ]
    },
    this.components = {
        navbar : function (passedSettings = false) {
            
            let defaults = self.defaults.navbar;
    
            // set user submitted settings or defaults
            let settings;
            if (passedSettings) {
                settings = passedSettings;
            } else {
                settings = defaults;
            }

            // generate the navbar markup and return it
            let navbar = self.layout(settings);
            return navbar;

        }
    },
    this.layout = function (passedSettings = false) {
        
        let defaults = self.defaults.layout;
    
        let settings;
        if (passedSettings) {
            settings = passedSettings;
        } else {
            settings = defaults;
        }

        // initialize the output variable as a fragment
        let output = document.createDocumentFragment();
        
        // utility function to check for attributes
        let layoutAttributes = function (parentEl, obj) {
            if (self.isObject(obj)) {
                for (var attr in obj) {
                    if (obj.hasOwnProperty(attr)) {
                        parentEl.setAttribute(attr, obj[attr]);
                    }
                }
            }
        };

        // utility function to check for text
        let layoutText = function (parentEl, array) {
            if (Array.isArray(array)) {
                for (var i = 0; i < array.length; i++) {
                    if (self.isString(array[i])) {
                        let node = document.createTextNode(array[i]);
                        parentEl.appendChild(node);
                    } else if (self.isElementNode(array[i])) {
                        parentEl.appendChild(array[i]);
                    }
                }
            } else if (self.isString(array)) {
                let node = document.createTextNode(array);
                parentEl.appendChild(node);
            }
        };

        // recursive utility function to check for children (and their attributes, text, & children)
        let layoutChildren = function (parentEl, array) {
            if (Array.isArray(array)) {
                for (var j = 0; j < array.length; j++) {
                    if (array[j].tag) {
                        let child = document.createElement(array[j].tag);
                        // check for attributes
                        layoutAttributes(child, array[j].attributes);
                        // check for text
                        layoutText(child, array[j].text);  
                        // check for children (recursively)
                        layoutChildren(child, array[j].children);
                        parentEl.appendChild(child);
                    } else if (self.isElementNode(array[j])) {
                        parentEl.appendChild(array[j]);
                    }
                }
            }
        };

        for (var i = 0; i < settings.length; i++) {
            
            if (self.isObject(settings[i])) {
                
                if (settings[i].tag) {
                    
                    let parent = document.createElement(settings[i].tag);

                    if (settings[i].attributes) {
                        layoutAttributes(parent, settings[i].attributes);
                    }

                    if (settings[i].text) {
                        layoutText(parent, settings[i].text);
                    }

                    if (settings[i].children) {
                        layoutChildren(parent, settings[i].children);
                    }

                    output.appendChild(parent);

                } else { console.error("OBE:BS4 Error: The array of objects you passed (at index " + i + ") did not have a 'tag' property. This property's String value is REQUIRED to properly generate your markup!") }

            } else { console.error("OBE:BS4 Error: The .layout() method requires that you pass an array of objects to properly generate your markup!") }

        }

        return output;

    }
};