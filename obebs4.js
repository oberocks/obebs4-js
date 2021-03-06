const OBEBS4 = function () {
    'use strict';
    let self = this;
    this.version = '3.3.1',
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
    this.year = function () {
        return new Date().getFullYear();
    },
    this.dom = function (parent, type, el, subType = false, refNode = false) {
        
        let t = type.toLowerCase();

        if (t === 'appendchild' || t === 'append') {
            
            parent.appendChild(el);

        } else if (t === 'insert') {
            
            if (subType === 'after') {
                
                parent.insertBefore(el, refNode.nextSibling);

            } else if (subType === 'before' || subType !== false) {
                
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
        aside : [
            {
                tag : 'aside',
                attributes : {
                    class : 'container-fluid bg-danger text-white text-shadow py-5'
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
                                    class : 'row justify-content-center align-items-center'
                                },
                                children : [
                                    {
                                        tag : 'div',
                                        attributes : {
                                            class : 'col-md-6 pb-5 pb-md-0 text-center text-md-left'
                                        },
                                        children : [
                                            {
                                                tag : 'h1',
                                                text : self.randomHeadline()
                                            },
                                            {
                                                tag : 'p',
                                                attributes : {
                                                    class : 'mb-0'
                                                },
                                                text : self.randomQuote()
                                            }
                                        ]
                                    },
                                    {
                                        tag : 'div',
                                        attributes : {
                                            class : 'col-md-6 pb-3 pb-md-0 text-center'
                                        },
                                        children : [
                                            {
                                                tag : 'button',
                                                attributes : {
                                                    class : 'btn btn-lg btn-white text-danger rounded-0'
                                                },
                                                text : 'BUY NOW'
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ],
        footer : [
            {
                tag : 'footer',
                attributes : {
                    class : 'container-fluid bg-black text-light-gray pt-5 px-sm-5'
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
                                    class : 'col-lg-4 pb-5'
                                },
                                children : [
                                    {
                                        tag : 'h5',
                                        text : 'Contact',
                                        attributes : {
                                            class : 'text-light'
                                        }
                                    },
                                    {
                                        tag : 'hr',
                                        attributes : {
                                            class : 'border-gray'
                                        }
                                    },
                                    {
                                        tag : 'address',
                                        text : [
                                            self.element('strong', 'Business Name', { class : 'text-light' }),
                                            self.element('br'),
                                            '1234 Main St, Suite 9000',
                                            self.element('br'),
                                            'Anywhere, AZ 12345',
                                            self.element('br'),
                                            self.element('abbr', 'P:', { title : 'Phone Number' }),
                                            ' (123) 456-7890',
                                            self.element('br'),
                                            self.element('abbr', 'E:', { title : 'Email Address' }),
                                            ' dept@company.com',
                                        ]
                                    },
                                    {
                                        tag : 'div',
                                        text : 'Connect With Us',
                                        attributes : {
                                            class : 'font-weight-bold text-light py-2'
                                        }
                                    },
                                    {
                                        tag : 'ul',
                                        attributes : {
                                            class : 'list-inline'
                                        },
                                        children : [
                                            {
                                                tag : 'li',
                                                attributes : {
                                                    class : 'list-inline-item'
                                                },
                                                children : [
                                                    {
                                                        tag : 'button',
                                                        attributes : {
                                                            class : 'btn btn-primary btn-xl fab-lg rounded-0',
                                                            type : 'button'
                                                        },
                                                        children : [
                                                            {
                                                                tag : 'i',
                                                                attributes : {
                                                                    class : 'fab fa-facebook',
                                                                    title : 'Connect with us on Facebook!'
                                                                }
                                                            }
                                                        ]
                                                    }
                                                ]
                                            },
                                            {
                                                tag : 'li',
                                                attributes : {
                                                    class : 'list-inline-item'
                                                },
                                                children : [
                                                    {
                                                        tag : 'button',
                                                        attributes : {
                                                            class : 'btn btn-primary btn-xl fab-lg rounded-0',
                                                            type : 'button'
                                                        },
                                                        children : [
                                                            {
                                                                tag : 'i',
                                                                attributes : {
                                                                    class : 'fab fa-twitter',
                                                                    title : 'Connect with us on Twitter!'
                                                                }
                                                            }
                                                        ]
                                                    }
                                                ]
                                            },
                                            {
                                                tag : 'li',
                                                attributes : {
                                                    class : 'list-inline-item'
                                                },
                                                children : [
                                                    {
                                                        tag : 'button',
                                                        attributes : {
                                                            class : 'btn btn-primary btn-xl fab-lg rounded-0',
                                                            type : 'button'
                                                        },
                                                        children : [
                                                            {
                                                                tag : 'i',
                                                                attributes : {
                                                                    class : 'fab fa-linkedin',
                                                                    title : 'Connect with us on LinkedIn!'
                                                                }
                                                            }
                                                        ]
                                                    }
                                                ]
                                            },
                                            {
                                                tag : 'li',
                                                attributes : {
                                                    class : 'list-inline-item'
                                                },
                                                children : [
                                                    {
                                                        tag : 'button',
                                                        attributes : {
                                                            class : 'btn btn-primary btn-xl fab-lg rounded-0',
                                                            type : 'button'
                                                        },
                                                        children : [
                                                            {
                                                                tag : 'i',
                                                                attributes : {
                                                                    class : 'fab fa-youtube',
                                                                    title : 'Connect with us on YouTube!'
                                                                }
                                                            }
                                                        ]
                                                    }
                                                ]
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                tag : 'div',
                                attributes : {
                                    class : 'col-lg-3 pb-5'
                                },
                                children : [
                                    {
                                        tag : 'h5',
                                        text : 'Links',
                                        attributes : {
                                            class : 'text-light'
                                        }
                                    },
                                    {
                                        tag : 'hr',
                                        attributes : {
                                            class : 'border-gray'
                                        }
                                    },
                                    {
                                        tag : 'a',
                                        text : 'Home',
                                        attributes : {
                                            class : 'text-light',
                                            href : '#'
                                        }
                                    },
                                    {
                                        tag : 'br'
                                    },
                                    {
                                        tag : 'a',
                                        text : 'Shop',
                                        attributes : {
                                            class : 'text-light',
                                            href : '#'
                                        }
                                    },
                                    {
                                        tag : 'br'
                                    },
                                    {
                                        tag : 'a',
                                        text : 'Blog',
                                        attributes : {
                                            class : 'text-light',
                                            href : '#'
                                        }
                                    },
                                    {
                                        tag : 'br'
                                    },
                                    {
                                        tag : 'a',
                                        text : 'Our Story',
                                        attributes : {
                                            class : 'text-light',
                                            href : '#'
                                        }
                                    },
                                    {
                                        tag : 'br'
                                    },
                                    {
                                        tag : 'a',
                                        text : 'Careers',
                                        attributes : {
                                            class : 'text-light',
                                            href : '#'
                                        }
                                    }
                                ]
                            },
                            {
                                tag : 'div',
                                attributes : {
                                    class : 'col-lg-5 pb-5'
                                },
                                children : [
                                    {
                                        tag : 'h5',
                                        text : 'Our Story',
                                        attributes : {
                                            class : 'text-light'
                                        }
                                    },
                                    {
                                        tag : 'hr',
                                        attributes : {
                                            class : 'border-gray'
                                        }
                                    },
                                    {
                                        tag : 'p',
                                        text : [
                                            self.randomParagraph(),
                                            self.element('a', 'Read More...', { class : 'text-light ml-3' })
                                        ]
                                    },
                                    {
                                        tag : 'label',
                                        attributes : {
                                            for : 'post-btn-input',
                                            class : 'font-weight-bold pt-2 text-light'
                                        },
                                        text : 'Newsletter Signup:'
                                    },
                                    {
                                        tag : 'div',
                                        attributes : {
                                            class : 'input-group input-group-lg'
                                        },
                                        children : [
                                            {
                                                tag : 'input',
                                                attributes : {
                                                    type : 'text',
                                                    class : 'form-control border-light-gray rounded-0',
                                                    placeholder : 'Enter Email',
                                                    id : 'post-btn-input',
                                                    name : 'post-btn-input',
                                                    'aria-describedby' : 'post-btn-input-help'
                                                }
                                            },
                                            {
                                                tag : 'div',
                                                attributes : {
                                                    class : 'input-group-append'
                                                },
                                                children : [
                                                    {
                                                        tag : 'button',
                                                        attributes : {
                                                            class : 'btn btn-outline-light-gray rounded-0',
                                                            type : 'button'
                                                        },
                                                        text : 'SUBMIT'
                                                    }
                                                ]
                                            }
                                        ]
                                    },
                                    {
                                        tag : 'small',
                                        attributes : {
                                            id : 'post-btn-input-help',
                                            class : 'form-text text-gray'
                                        },
                                        text : 'A valid email address is required.'
                                    }
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                tag : 'small',
                attributes : {
                    class : 'd-block bg-black text-gray text-center p-2'
                },
                text : '© ' + self.year() + ' | All Rights Reserved'
            }
        ],
        hero : [
            {
                tag : 'article',
                attributes : {
                    class : 'container-fluid bg-primary text-white py-5 text-center'
                },
                children : [
                    {
                        tag : 'div',
                        attributes : {
                            class : 'container pt-5'
                        },
                        children : [
                            {
                                tag : 'h1',
                                attributes : {
                                    class : 'text-shadow pt-2'
                                },
                                text : self.randomHeadline()
                            },
                            {
                                tag : 'p',
                                attributes : {
                                    class : 'lead mb-5'
                                },
                                text : self.randomQuote()
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
                                            class : 'col-md-6 pb-4 pb-md-0'
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
        ],
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
                            'data-target' : '#layouts-navbar-id',
                            'aria-controls' : 'layouts-navbar-id',
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
                            id : 'layouts-navbar-id'
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
        ]
    },
    this.components = {},
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

    },
    this.layouts = {
        aside : function (passedSettings = false) {

            // get the default settings
            let defaults = self.defaults.aside;
    
            // set user submitted settings if provided, otherwise use defaults
            let settings = passedSettings ? passedSettings : defaults;

            // generate the navbar markup
            let aside = self.layout(settings);
            
            // return the markup
            return aside;

        },
        footer : function (passedSettings = false) {

            // get the default settings
            let defaults = self.defaults.footer;
    
            // set user submitted settings if provided, otherwise use defaults
            let settings = passedSettings ? passedSettings : defaults;

            // generate the navbar markup
            let footer = self.layout(settings);
            
            // return the markup
            return footer;

        },
        hero : function (passedSettings = false) {
            
            // get the default settings
            let defaults = self.defaults.hero;
    
            // set user submitted settings if provided, otherwise use defaults
            let settings = passedSettings ? passedSettings : defaults;

            // generate the navbar markup
            let hero = self.layout(settings);
            
            // return the markup
            return hero;

        },
        navbar : function (passedSettings = false) {
            
            // get the default settings
            let defaults = self.defaults.navbar;
    
            // set user submitted settings if provided, otherwise use defaults
            let settings = passedSettings ? passedSettings : defaults;

            // generate the navbar markup
            let navbar = self.layout(settings);
            
            // return the markup
            return navbar;

        }
    },
    this.nodeDepth = function(nodes, currentDepth = 1){
    
        let depth = currentDepth;
    
        if (nodes.hasChildNodes())
        {
            // assign the child nodes to a variable
            let kids = nodes.childNodes;
            
            // loop through the child nodes to determine the depth of the children
            for (var i = 0; i < kids.length; i++)
            {
                // check if the node is an element node
                if (kids[i].nodeType === Node.ELEMENT_NODE)
                {
                    // if so, increment the depth
                    depth++;
                    // run the function again recursively, and return the final incremented depth
                    return self.nodeDepth(kids[i], depth);
                }
            }
    
            return depth;
        }
        else
        {
            return depth;
        }
    
    },
    this.generateConstruct = function(nodes){
    
        // initialize an object to output
        let obj = {};
        
        // assign the tag name of the 
        obj.tag = nodes.tagName.toLowerCase();
        
        // check if the node has any attributes
        if (nodes.hasAttributes())
        {
            // if so create an empty attributes object
            let attributes = {};
            
            // assign the attributes to a variable
            let attrs = nodes.attributes;
            
            // loop through the attributes
            for (var i = 0; i < attrs.length; i++)
            {
                // assign each key/value pair to the attributes object
                attributes[attrs[i].name] = attrs[i].value;
            }
            
            // assign the attributes to the output object
            obj.attributes = attributes;
        }
    
        if (nodes.hasChildNodes())
        {
            // if so create an empty children array
            let children = [];
            
            // assign the child nodes to a variable
            let kids = nodes.childNodes;
    
            // get the depth of the nodes
            let depth = self.nodeDepth(nodes);
            
            // loop through the child nodes
            for (var i = 0; i < kids.length; i++)
            {
                if (kids[i].firstChild != null || kids[i].nodeType === Node.ELEMENT_NODE)
                {
                    // run this function recursively and add the returned object to the children array
                    children.push(self.generateConstruct(kids[i]));
                }
                else
                {
                    if (depth != kids.length)
                    {
                        // create an empty object
                        let node = {};
                        // assign a tag property
                        node.tag = 'span';
                        // assign the passed string
                        node.text = [kids[i].textContent];
                        // add the object to the passed array
                        children.push(node);
                    }
                    else
                    {
                        obj.text = [kids[i].textContent];
                    }
                    
                }
                
            }
    
            if (children.length > 0)
            {
                obj.children = children;
            }
    
        }
    
        return obj;
    
    }
};