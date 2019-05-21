
// Helper function to merge user setings into obebs4 settings
// from: https://gomakethings.com/vanilla-javascript-version-of-jquery-extend/
// Pass in the objects to merge as arguments.
// For a deep extend, set the first argument to `true`.
var extend = function () {

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
					extended[prop] = extend( true, extended[prop], obj[prop] );
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

};

// Helper function to get random index for an array length
// from: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
function getRandomIndex(arrayLength) {
    return Math.floor(Math.random() * Math.floor(arrayLength));
}

const OBEBS4 = function () {
    let self = this;
    this.version = '0.0.5',
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
        ]
    },
    this.randomHeadline = function () {
        let index = getRandomIndex(this.laurem.headlines.length);
        return this.laurem.headlines[index];
    },
    this.randomParagraph = function () {
        let index = getRandomIndex(this.laurem.paragraphs.length);
        return this.laurem.paragraphs[index];
    },
    this.randomQuote = function () {
        let index = getRandomIndex(this.laurem.quotes.length);
        return this.laurem.quotes[index];
    },
    this.element = function (elemType, elemText = false, attributes = false, nestedElem = false) {
        
        // initialize the returned element as a var
        let elem;

        // check for a passed element tag
        if (elemType) {
            // create the element
            elem = document.createElement(elemType);
        } else { console.log('ERROR: An element (tag) type must be passed as the first argument.') }
        
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
    this.articles = {
        columns : {
            single : function (settingsObj = false, nestedElem = false) {
                
                let settings = {
                    classes : {
                        article : 'container-fluid py-5',
                        container : 'container',
                        row : 'row justify-content-center',
                        column : 'col col-sm-10 col-md-8 col-lg-7 col-xl-6'
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
                    extendedSettings = extend(true, settings, settingsObj);
                }

                // initialize the returned element as a var
                let article = document.createElement('article');
                article.classList = extendedSettings.classes.article;
                let container = document.createElement('div');
                container.classList = extendedSettings.classes.container;
                let row = document.createElement('div');
                row.classList = extendedSettings.classes.row;
                let col = document.createElement('div');
                col.classList = extendedSettings.classes.column;

                // check for passed element array
                if (nestedElem) {
                    // check if the passed argument is an array
                    if (Array.isArray(nestedElem)) {
                        // loop through the array
                        for (var i = 0; i < nestedElem.length; i++) {
                            // append each as a child element
                            col.appendChild(nestedElem[i]);
                        }
                    } else {
                        // if it's not an array (and is just a single element) then append the element
                        col.appendChild(nestedElem);
                    }
                } else {
                    // if nothing was passed, then generate default placeholder content and attach it
                    let h = document.createElement('h1');
                    let h_txt = document.createTextNode(extendedSettings.content.laurem.headline);
                    h.appendChild(h_txt);
                    col.appendChild(h);
                    let p = document.createElement('p');
                    let p_txt = document.createTextNode(extendedSettings.content.laurem.paragraph);
                    p.appendChild(p_txt);
                    col.appendChild(p);
                }

                // append elements
                row.appendChild(col);
                container.appendChild(row);
                article.appendChild(container);

                // return the article elements
                return article;

            },
            multi : function (settingsObj = false, columnsArrays = false) {
                
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
                    extendedSettings = extend(true, settings, settingsObj);
                }

                // initialize the returned element as a var
                let article = document.createElement('article');
                article.classList = extendedSettings.classes.article;
                let container = document.createElement('div');
                container.classList = extendedSettings.classes.container;
                let row = document.createElement('div');
                row.classList = extendedSettings.classes.row;

                // check for passed element array
                if (columnsArrays) {
                    
                    // check if the passed argument is an array
                    if (Array.isArray(columnsArrays)) {
                        
                        // loop through the array
                        for (var i = 0; i < columnsArrays.length; i++) {
                            
                            // create a column
                            let column = document.createElement('div');
                            
                            // set the column classes conditionally
                            if (Array.isArray(extendedSettings.classes.column)) {
                                column.classList = extendedSettings.classes.column[i];
                            } else {
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
                        let column = document.createElement('div');
                        column.classList = extendedSettings.classes.column;
                        column.appendChild(columnsArrays);
                        row.appendChild(column);

                    }

                } else {
                    
                    // if nothing was passed, then generate default placeholder content and attach it
                    let column = document.createElement('div');
                    column.classList = extendedSettings.classes.column;
                    let h = document.createElement('h1');
                    let h_txt = document.createTextNode(extendedSettings.content.laurem.headline);
                    h.appendChild(h_txt);
                    column.appendChild(h);
                    let p = document.createElement('p');
                    let p_txt = document.createTextNode(extendedSettings.content.laurem.paragraph);
                    p.appendChild(p_txt);
                    column.appendChild(p);
                    row.appendChild(column);

                }

                // append elements
                container.appendChild(row);
                article.appendChild(container);

                // return the article elements
                return article;

            }
        }
    }

};



let obebs4 = new OBEBS4();
console.log(obebs4.version);

const target = document.getElementById('obebs4-app');




// Example section using OBEBS4.element()

let h_1 = obebs4.element('h3', 'First Headline');
let hr_1 = obebs4.element('hr', '', {'class' : 'border-success'});
let p_1 = obebs4.element('p', 'This is the first sample paragraph.');

let h_2 = obebs4.element('h3', 'Second Headline');
let hr_2 = obebs4.element('hr', '', {'class' : 'border-success'});
let p_2 = obebs4.element('p', 'This is the second sample paragraph.');

let column_1 = obebs4.element('div', false, {'class' : 'col-md-6'}, [h_1, hr_1, p_1]);
let column_2 = obebs4.element('div', false, {'class' : 'col-md-6'}, [h_2, hr_2, p_2]);

let row = obebs4.element('div', false, {'class' : 'row justify-content-center'}, [column_1, column_2]);

let container = obebs4.element('div', false, {'class' : 'container'}, row);

let container_fluid = obebs4.element('div', false, {'class' : 'container-fluid bg-dark text-light py-5'}, container);

target.appendChild(container_fluid);




// Example article section using a default OBEBS4.articles.columns.single()

let article = obebs4.articles.columns.single();
target.appendChild(article);




// Example article section using a customized settings for OBEBS4.articles.columns.single() (and random placeholder strings from the laurem sub-object)

let article_2_settings = {
    classes : {
        article : 'container-fluid bg-primary text-light py-5',
        row : 'row justify-content-center',
        column : 'col col-sm-10 col-md-9 col-lg-8 col-xl-7'
    }
};

let article_2_h_1 = obebs4.element('h3', obebs4.randomHeadline(), {'class' : 'text-shadow'});
let article_2_hr_1 = obebs4.element('hr', '', {'class' : 'border-success'});
let article_2_p_1 = obebs4.element('p', obebs4.randomParagraph());
let article_2_p_2 = obebs4.element('p', obebs4.randomQuote(), {'class' : 'lead p-3 border-left border-yellow border-width-5'});
let article_2_p_3 = obebs4.element('p', obebs4.randomParagraph());

let article_2 = obebs4.articles.columns.single(
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




// Example article section using a default OBEBS4.articles.columns.multi()

let article_3 = obebs4.articles.columns.multi();
target.appendChild(article_3);




// Example article section using an OBEBS4.articles.columns.multi() function with custom content

let article_4_settings = {
    classes : {
        column : ['col col-md-3', 'col col-md-6', 'col col-md-3']
    }
};

let article_4_col_1_h_1 = obebs4.element('h3', obebs4.randomHeadline(), {'class' : 'text-shadow'});
let article_4_col_1_hr_1 = obebs4.element('hr', '', {'class' : 'border-success'});
let article_4_col_1_p_1 = obebs4.element('p', obebs4.randomParagraph());

let article_4_col_2_h_1 = obebs4.element('h3', obebs4.randomHeadline(), {'class' : 'text-shadow'});
let article_4_col_2_hr_1 = obebs4.element('hr', '', {'class' : 'border-danger'});
let article_4_col_2_p_1 = obebs4.element('p', obebs4.randomParagraph());

let article_4_col_3_h_1 = obebs4.element('h3', obebs4.randomHeadline(), {'class' : 'text-shadow'});
let article_4_col_3_hr_1 = obebs4.element('hr', '', {'class' : 'border-cyan'});
let article_4_col_3_p_1 = obebs4.element('p', obebs4.randomParagraph());

let article_4 = obebs4.articles.columns.multi(
    article_4_settings,
    [
        [
            article_4_col_1_h_1,
            article_4_col_1_hr_1,
            article_4_col_1_p_1
        ],[
            article_4_col_2_h_1,
            article_4_col_2_hr_1,
            article_4_col_2_p_1
        ],[
            article_4_col_3_h_1,
            article_4_col_3_hr_1,
            article_4_col_3_p_1
        ]
    ]
);

target.appendChild(article_4);