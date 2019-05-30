const OBEBS4 = function () {
    'use strict';
    let self = this;
    this.version = '1.2.0',
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
    this.content = {
        article : function (settingsObj = false, columnsArrays = false) {
                
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
    
            let extendedSettings = settings;
            if (settingsObj) {
                
                // check that the argument is an object and is not null
                if (self.isObject(settingsObj)) {
                    
                    // merge the two settings objects
                    extendedSettings = self.extend(true, settings, settingsObj);

                } else {
                    
                    self.logSettingsError(".content.article()'s 1st argument");

                }

            }
    
            // initialize the returned element as a var
            let article = self.element('article', false, {'class' : extendedSettings.classes.article});
            let container = self.element('div', false, {'class' : extendedSettings.classes.container});
            let row = self.element('div', false, {'class' : extendedSettings.classes.row});
    
            // check for passed element array
            if (columnsArrays) {
                
                // check if the passed argument is an array
                if (Array.isArray(columnsArrays)) {
                    
                    // loop through the array
                    for (var i = 0; i < columnsArrays.length; i++) {
                        
                        // create a column
                        let column = self.element('div');
                        
                        // set the column classes conditionally
                        if (Array.isArray(extendedSettings.classes.column)) {
                            
                            // check if the classes for this column are specified
                            if (extendedSettings.classes.column[i]) {
                                
                                // if so use the value
                                column.classList = extendedSettings.classes.column[i];

                            } else {
                                
                                // if not use the last item in the classes array
                                column.classList = extendedSettings.classes.column[ extendedSettings.classes.column.length - 1 ];

                            }
                            
                        } else {
                            
                            // if it's not an array, then use the string value
                            column.classList = extendedSettings.classes.column;

                        }
                        
                        // check if the passed argument is an array
                        if (Array.isArray(columnsArrays[i])) {
                            
                            // loop through the array
                            for (var j = 0; j < columnsArrays[i].length; j++) {
                                
                                // check the array item is an element node
                                if (self.isElementNode(columnsArrays[i][j])) {
                                    
                                    // and attach each element
                                    column.appendChild(columnsArrays[i][j]);
                                    
                                } else {

                                    self.logNodeError(".content.article()'s 2nd argument at index: [" + i + "][" + j + "]");

                                }

                            }
    
                        } else {
                            
                            // check the array item is an element node
                            if (self.isElementNode(columnsArrays[i])) {
                                    
                                // and attach each element
                                column.appendChild(columnsArrays[i]);
                                
                            } else {

                                self.logNodeError(".content.article()'s 2nd argument at index: [" + i + "]");

                            }
    
                        }
    
                        // append the column to the row
                        row.appendChild(column);
                        
                    }
    
                } else {
                    
                    // check the array item is an element node
                    if (self.isElementNode(columnsArrays)) {
                                    
                        // and attach each element
                        let column = self.element('div', false, {'class' : extendedSettings.classes.column});
                        column.appendChild(columnsArrays);
                        row.appendChild(column);
                        
                    } else {

                        self.logNodeError(".content.article()'s 2nd argument");

                    }
    
                }
    
            } else {
                
                // if nothing was passed, then generate default placeholder content and attach it
                let column = self.element('div', false, {'class' : extendedSettings.classes.column});
                let h = self.element('h1', extendedSettings.content.placeholders.headline);
                column.appendChild(h);
                let p1 = self.element('p', extendedSettings.content.placeholders.paragraph);
                column.appendChild(p1);
                let p2 = self.element('p', extendedSettings.content.placeholders.paragraph);
                column.appendChild(p2);
                row.appendChild(column);
    
            }
    
            // append elements
            container.appendChild(row);
            article.appendChild(container);
    
            // return all article elements
            return article;
    
        },
        // nav : {},
        navbar : {
            basic : function (settingsObj = false, brandElementsArray = false, navigationLinksArray = false) {
                
                let settings = {
                    classes : {
                        navbar : 'navbar fixed-top navbar-expand-lg navbar-dark bg-dark box-shadow-sm',
                        brand : 'navbar-brand',
                        toggler : 'navbar-toggler',
                        icon : 'navbar-toggler-icon',
                        collapse : 'collapse navbar-collapse',
                        list : 'navbar-nav',
                        item : 'nav-item',
                        link : 'nav-link'
                    },
                    ids : {
                        collapse : 'navbar-collapse-id'
                    },
                    content : {
                        placeholders : {
                            brand : self.randomBrand()
                        },
                        aria : {
                            collapse : {
                                label : 'Toggle Navigation Links'
                            }
                        }
                    }
                };
        
                let extendedSettings = settings;
                if (settingsObj) {
                    
                    // check that the argument is an object and is not null
                    if (self.isObject(settingsObj)) {
                        
                        // merge the two settings objects
                        extendedSettings = self.extend(true, settings, settingsObj);

                    } else {
                        
                        self.logSettingsError(".content.navbar.basic()'s 1st argument");

                    }
                    
                }
        
                // initialize the returned element as a var
                let nav = self.element('nav', false, {'class' : extendedSettings.classes.navbar});
        
                // check for passed brandElementsArray
                if (brandElementsArray) {
                    
                    // check if the passed argument is an array
                    if (Array.isArray(brandElementsArray)) {
                        
                        // if it is an array, then loop through the array
                        for (var i = 0; i < brandElementsArray.length; i++) {
                            
                            // check the array item is an element node
                            if (self.isElementNode(brandElementsArray[i])) {
                                
                                // and attach each element
                                nav.appendChild(brandElementsArray[i]);
                                
                            } else {

                                self.logNodeError(".content.navbar.basic()'s 2nd argument at index: [" + i + "]");

                            }

                        }

                    } else {
                        
                        // check that the passed item is an element node
                        if (self.isElementNode(brandElementsArray)) {
                                
                            // if so, then just attach the passed element
                            nav.appendChild(brandElementsArray);
                            
                        } else {

                            self.logNodeError(".content.navbar.basic()'s 2nd argument");

                        }
                        
                    }

                } else {
                    
                    let a = self.element('a', extendedSettings.content.placeholders.brand, {
                        'class' : extendedSettings.classes.brand,
                        'href' : '#'
                    });
                    nav.appendChild(a);

                }


                //
                // START prepare basic navigation elements
                //

                    // create the collapse button elements
                    let collapse_btn_icon = self.element('span', false, {'class' : extendedSettings.classes.icon});
                    let collapse_btn = self.element('button', false, {
                        'class' : extendedSettings.classes.toggler,
                        'type' : 'button',
                        'data-toggle' : 'collapse',
                        'data-target' : '#' + extendedSettings.ids.collapse,
                        'aria-controls' : extendedSettings.ids.collapse,
                        'aria-expanded' : 'false',
                        'aria-label' : extendedSettings.content.aria.collapse.label
                    }, collapse_btn_icon);

                    // create the collapse navigation wrapper elements
                    let listParent = self.element('ul', false, {'class' : extendedSettings.classes.list});
                    let collapseElem = self.element('div', false, {
                        'class' : extendedSettings.classes.collapse,
                        'id' : extendedSettings.ids.collapse
                    }, listParent);

                //
                // END prepare basic navigation elements
                //


                // check for passed navigationLinksArray
                if (navigationLinksArray) {

                    // append the collapse btn
                    nav.appendChild(collapse_btn);
                    
                    // check if the passed argument is an array
                    if (Array.isArray(navigationLinksArray)) {
                        
                        // loop through the passed array
                        for (var i = 0; i < navigationLinksArray.length; i++) {
                            
                            // check the array item is an element node
                            if (self.isElementNode(navigationLinksArray[i])) {
                                
                                // and attach each element
                                let li = self.element('li', false, {'class' : extendedSettings.classes.item}, navigationLinksArray[i]);
                                listParent.appendChild(li);
                                
                            } else {

                                self.logNodeError(".content.navbar.basic()'s 3rd argument at index: [" + i + "]");

                            }

                        }

                    } else {
                        
                        // check that the passed item is an element node
                        if (self.isElementNode(navigationLinksArray)) {
                                
                            // if so, then just attach the passed element
                            let li = self.element('li', false, {'class' : extendedSettings.classes.item}, navigationLinksArray);
                            listParent.appendChild(li);
                            
                        } else {

                            self.logNodeError(".content.navbar.basic()'s 3rd argument");

                        }
                        
                    }

                    // and append all to the return element
                    nav.appendChild(collapseElem);

                } else {
                    
                    // if nothing was passed, then create default placeholder content

                    // append the collapse btn
                    nav.appendChild(collapse_btn);
                    
                    // loop through default placeholders.navigation array, and generate + append each array item as a list item with an anchor child
                    for (var i = 0; i < self.placeholders.navigation.length; i++) {
                        let a = self.element('a', self.placeholders.navigation[i], {
                            'class' : extendedSettings.classes.link,
                            'href' : '#'
                        });
                        let li = self.element('li', false, {'class' : extendedSettings.classes.item}, a);
                        listParent.appendChild(li);
                    }

                    // and append all to the return element
                    nav.appendChild(collapseElem);

                }
        
                // return all nav elements
                return nav;
    
            }
        }
    },
    this.forms = {
        groups : {
            inputs : {},
            textareas : {}
        }
    }
};