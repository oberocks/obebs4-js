
const OBEBS4 = function () {
    'use strict';
    let self = this;
    this.version = '0.1.0',
    this.laurem = {
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
            'Laurem Ipsum',
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
    this.isElement = function (el) {
        // FROM: http://stackoverflow.com/a/36894871/1204556
        return el instanceof Element || el instanceof HTMLDocument;  
    },
    this.isString = function (str) {
        return typeof str === 'string' || str instanceof String;  
    },
    this.logErrorElement = function () {
        console.error('A string argument (intended to define a dynamically generated element tag) is required when using the OBEBS4.element() method!');
    },
    this.logErrorItemNotNode = function (functionName, arrayItemIndex) {
        console.error("Element array items are required to be element node objects. Please check your " + functionName + " method's array item (at index: " + arrayItemIndex + ") to fix this issue. For now, this array item was skipped! :(");
    },
    this.randomHeadline = function () {
        let index = self.getRandomIndex(this.laurem.headlines.length);
        return this.laurem.headlines[index];
    },
    this.randomParagraph = function () {
        let index = self.getRandomIndex(this.laurem.paragraphs.length);
        return this.laurem.paragraphs[index];
    },
    this.randomQuote = function () {
        let index = self.getRandomIndex(this.laurem.quotes.length);
        return this.laurem.quotes[index];
    },
    this.randomBrand = function () {
        let index = self.getRandomIndex(this.laurem.brands.length);
        return this.laurem.brands[index];
    },
    this.element = function (elemType, elemText = false, attributes = false, nestedElem = false) {
        
        // initialize the returned element as a var
        let elem;

        // check for a passed element tag
        if (elemType) {
            
            // create the element
            elem = document.createElement(elemType);

        } else {
            
            self.logErrorElement();

        }
        
        // check for passed element text
        if (elemText && elemText.length > 0) {
            
            // if passed, then create a text node and append it to the returned element
            let node = document.createTextNode(elemText);
            elem.appendChild(node);

        }

        // check for passed object of html attribute key/value pairs
        if (attributes) {
            
            // check that the argument is an object and is not null
            if (typeof attributes === 'object' && attributes !== null) {
                
                // loop through the object
                for (var attr in attributes) {
                    
                    if (attributes.hasOwnProperty(attr)) {
                        // set the attribute and value
                        elem.setAttribute(attr, attributes[attr]);
                    }

                }

            }

        }
        
        // check for passed element array
        if (nestedElem) {
            
            // check if the passed argument is an array
            if (Array.isArray(nestedElem)) {
                
                // loop through the array
                for (var i = 0; i < nestedElem.length; i++) {
                    // append each as a child element
                    elem.appendChild(nestedElem[i]);
                }

            } else {
                
                // if it's not an array (and is just a single element) then append the element
                elem.appendChild(nestedElem);

            }
        }

        // return the element
        return elem;
        
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
                    laurem : {
                        headline : self.randomHeadline(),
                        paragraph : self.randomParagraph()
                    }
                }
            };
    
            let extendedSettings = settings;
            if (settingsObj) {
                extendedSettings = self.extend(true, settings, settingsObj);
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
                                // append each item to the column
                                column.appendChild(columnsArrays[i][j]);
                            }
    
                        } else {
                            
                            // append items
                            column.appendChild(columnsArrays[i]);
    
                        }
    
                        // append the column to the row
                        row.appendChild(column);
                        
                    }
    
                } else {
                    
                    // if it's not an array (and is just a single element) then append the element
                    let column = self.element('div', false, {'class' : extendedSettings.classes.column});
                    column.appendChild(columnsArrays);
                    row.appendChild(column);
    
                }
    
            } else {
                
                // if nothing was passed, then generate default placeholder content and attach it
                let column = self.element('div', false, {'class' : extendedSettings.classes.column});
                let h = self.element('h1', extendedSettings.content.laurem.headline);
                column.appendChild(h);
                let p1 = self.element('p', extendedSettings.content.laurem.paragraph);
                column.appendChild(p1);
                let p2 = self.element('p', extendedSettings.content.laurem.paragraph);
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
                        laurem : {
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
                    extendedSettings = self.extend(true, settings, settingsObj);
                }
        
                // initialize the returned element as a var
                let nav = self.element('nav', false, {'class' : extendedSettings.classes.navbar});
        
                // check for passed brandElementsArray
                if (brandElementsArray) {
                    
                    // check if the passed argument is an array
                    if (Array.isArray(brandElementsArray)) {
                        
                        // if it is an array, then loop through the array
                        for (var i = 0; i < brandElementsArray.length; i++) {
                            // and attach each element
                            nav.appendChild(brandElementsArray[i]);
                        }

                    } else {
                        
                        // if it's not an array, then just attach the passed element
                        nav.appendChild(brandElementsArray);
                        
                    }

                } else {
                    
                    let a = self.element('a', extendedSettings.content.laurem.brand, {
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
                            if (self.isElement(navigationLinksArray[i])) {
                                
                                // and attach each element
                                let li = self.element('li', false, {'class' : extendedSettings.classes.item}, navigationLinksArray[i]);
                                listParent.appendChild(li);
                                
                            } else {

                                self.logErrorItemNotNode('.content.navbar.basic()', i);

                            }

                        }

                    } else {
                        
                        // and attach each element
                        let li = self.element('li', false, {'class' : extendedSettings.classes.item}, navigationLinksArray);
                        listParent.appendChild(li);
                        
                    }

                    // and append all to the return element
                    nav.appendChild(collapseElem);

                } else {
                    
                    // if nothing was passed, then create default placeholder content

                    // append the collapse btn
                    nav.appendChild(collapse_btn);
                    
                    // loop through default placeholder laurem.navigation array, and generate + append each as a list item with an anchor child
                    for (var i = 0; i < self.laurem.navigation.length; i++) {
                        let a = self.element('a', self.laurem.navigation[i], {
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
    }
};


















// ---------------------------------
// T E S T I N G / E X A M P L E S
// ---------------------------------


let obebs4 = new OBEBS4();
console.log(obebs4.version);

const target = document.getElementById('obebs4-app');




// NAVBAR EXAMPLES (MUST BE MANUALLY TOGGLED ON AND OFF BECAUSE OBE DEFAULT NAVBAR BEHAVIOR IS FIXED TOP)

// Example of a default navbar section using OBEBS4.content.navbar.basic()
/*
let navbar_1 = obebs4.content.navbar.basic();
target.appendChild(navbar_1);
*/

// Example of a customized navbar section using OBEBS4.content.navbar.basic()

// settings
let navbar_2_settings = {
    classes : {
        navbar : 'navbar justify-content-start fixed-top navbar-expand-lg navbar-dark bg-dark box-shadow-sm',
        toggler : 'navbar-toggler ml-auto',
        list : 'navbar-nav ml-auto'
    }
};
// brand content
let navbar_2_img_size = 30;
let navbar_2_img = new Image(navbar_2_img_size, navbar_2_img_size);
navbar_2_img.alt = 'Brand Icon Image';
navbar_2_img.src = 'https://via.placeholder.com/' + navbar_2_img_size;
let navbar_2_brand_anchor = obebs4.element('a', 'Brand Name', {'class' : 'navbar-brand ml-3', 'href' : '#'});
// nav content
let link_1 = obebs4.element('a', 'Home', {'class' : 'nav-link', 'href' : '#'});
let link_2 = obebs4.element('a', 'About', {'class' : 'nav-link', 'href' : '#'});
let link_3 = obebs4.element('a', 'Contact', {'class' : 'nav-link', 'href' : '#'});
// generate final parent elem with children and append
let navbar_2 = obebs4.content.navbar.basic(navbar_2_settings, [navbar_2_img, navbar_2_brand_anchor], [link_1, link_2, link_3]);
target.appendChild(navbar_2);




// Example of a manually built section using OBEBS4.element()

let article_0_h_1 = obebs4.element('h3', 'First Headline', {'class' : 'pt-5'});
let article_0_hr_1 = obebs4.element('hr', '', {'class' : 'border-success'});
let article_0_p_1 = obebs4.element('p', 'This is the first sample paragraph.');

let article_0_h_2 = obebs4.element('h3', 'Second Headline', {'class' : 'pt-5'});
let article_0_hr_2 = obebs4.element('hr', '', {'class' : 'border-success'});
let article_0_p_2 = obebs4.element('p', 'This is the second sample paragraph.');

let article_0_column_1 = obebs4.element('div', false, {'class' : 'col-md-6'}, [article_0_h_1, article_0_hr_1, article_0_p_1]);
let article_0_column_2 = obebs4.element('div', false, {'class' : 'col-md-6'}, [article_0_h_2, article_0_hr_2, article_0_p_2]);

let article_0_row = obebs4.element('div', false, {'class' : 'row justify-content-center'}, [article_0_column_1, article_0_column_2]);

let article_0_container = obebs4.element('div', false, {'class' : 'container'}, article_0_row);

let article_0_container_fluid = obebs4.element('div', false, {'class' : 'container-fluid bg-primary text-light py-5'}, article_0_container);

target.appendChild(article_0_container_fluid);




// Example article section using a default OBEBS4.content.article()

let article_1 = obebs4.content.article();
target.appendChild(article_1);




// Example article section using a customized settings for OBEBS4.content.article() (and random placeholder strings from the laurem sub-object)

let article_2_settings = {
    classes : {
        article : 'container-fluid bg-danger text-white py-5',
        row : 'row justify-content-center',
        column : 'col col-sm-10 col-md-9 col-lg-8 col-xl-7'
    }
};

let article_2_h_1 = obebs4.element('h3', obebs4.randomHeadline(), {'class' : 'text-shadow'});
let article_2_hr_1 = obebs4.element('hr', '', {'class' : 'border-success'});
let article_2_p_1 = obebs4.element('p', obebs4.randomParagraph());
let article_2_p_2 = obebs4.element('p', obebs4.randomQuote(), {'class' : 'lead p-3 border-left border-yellow border-width-5'});
let article_2_p_3 = obebs4.element('p', obebs4.randomParagraph());

let article_2 = obebs4.content.article(
    article_2_settings,
    [
        article_2_h_1,
        article_2_hr_1,
        article_2_p_1,
        article_2_p_2,
        article_2_p_3
    ]
);
target.appendChild(article_2);




// Example article section using an OBEBS4.content.article() function with custom content

let article_3_settings = {
    classes : {
        column : ['col col-md-3', 'col col-md-6', 'col col-md-3']
    }
};

let article_3_col_1_h_1 = obebs4.element('h3', obebs4.randomHeadline(), {'class' : 'text-shadow'});
let article_3_col_1_hr_1 = obebs4.element('hr', '', {'class' : 'border-success'});
let article_3_col_1_p_1 = obebs4.element('p', obebs4.randomParagraph());

let article_3_col_2_h_1 = obebs4.element('h3', obebs4.randomHeadline(), {'class' : 'text-shadow'});
let article_3_col_2_hr_1 = obebs4.element('hr', '', {'class' : 'border-danger'});
let article_3_col_2_p_1 = obebs4.element('p', obebs4.randomParagraph());

let article_3_col_3_h_1 = obebs4.element('h3', obebs4.randomHeadline(), {'class' : 'text-shadow'});
let article_3_col_3_hr_1 = obebs4.element('hr', '', {'class' : 'border-cyan'});
let article_3_col_3_p_1 = obebs4.element('p', obebs4.randomParagraph());

let article_3 = obebs4.content.article(
    article_3_settings,
    [
        [
            article_3_col_1_h_1,
            article_3_col_1_hr_1,
            article_3_col_1_p_1
        ],[
            article_3_col_2_h_1,
            article_3_col_2_hr_1,
            article_3_col_2_p_1
        ],[
            article_3_col_3_h_1,
            article_3_col_3_hr_1,
            article_3_col_3_p_1
        ]
    ]
);

target.appendChild(article_3);