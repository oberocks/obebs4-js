
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

const OBEBS4 = function () {
    this.version = '0.0.3',
    this.laurem = {
        headlines = {
            one : 'Lorem Ipsum',
            two : 'Dolor Sit Amet',
            three : 'Consectetur Adipiscing',
            four : 'Pellentesque Ornare Justo'
        },
        paragraphs = {
            one : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ornare justo iaculis lacus facilisis, in volutpat diam luctus. Sed diam ipsum, laoreet eu lobortis a, interdum vel nunc. Sed vitae nulla id sem mattis rhoncus.',
            two : '',
            three : '',
            four : ''
        }
    }
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
            one : function (settingsObj = false, nestedElem = false) {
                let settings = {
                    classes : {
                        article : 'container-fluid py-5',
                        container : 'container',
                        row : 'row justify-content-center',
                        col : 'col col-sm-10 col-md-8 col-lg-7 col-xl-6'
                    },
                    content : {
                        default : {
                            headline : 'Lorem Ipsum',
                            paragraph : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ornare justo iaculis lacus facilisis, in volutpat diam luctus. Sed diam ipsum, laoreet eu lobortis a, interdum vel nunc. Sed vitae nulla id sem mattis rhoncus.'
                        }
                    }
                };
                let extendedSettings = settings;
                if (settingsObj) {
                    extendedSettings = extend(true, settings, settingsObj);
                    console.log('extendedSettings:');
                    console.log(extendedSettings);
                }
                // initialize the returned element as a var
                let article = document.createElement('article');
                article.classList = extendedSettings.classes.article;
                let container = document.createElement('div');
                container.classList = extendedSettings.classes.container;
                let row = document.createElement('div');
                row.classList = extendedSettings.classes.row;
                let col = document.createElement('div');
                col.classList = extendedSettings.classes.col;
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
                    let h = document.createElement('h1');
                    let h_txt = document.createTextNode(extendedSettings.content.default.headline);
                    h.appendChild(h_txt);
                    col.appendChild(h);
                    let p = document.createElement('p');
                    let p_txt = document.createTextNode(extendedSettings.content.default.paragraph);
                    p.appendChild(p_txt);
                    col.appendChild(p);
                }
                // append elements
                row.appendChild(col);
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


// Example article section using OBEBS4.articles.columns.one()

let article = obebs4.articles.columns.one();
target.appendChild(article);


let article_2_settings = {
    classes : {
        article : 'container-fluid bg-primary text-light py-5',
        row : 'row justify-content-center',
        col : 'col col-sm-10 col-md-9 col-lg-8 col-xl-7'
    }
};

let article_2_h_1 = obebs4.element('h3', 'First Headline', {'class' : 'text-shadow'});
let article_2_hr_1 = obebs4.element('hr', '', {'class' : 'border-success'});
let article_2_p_1 = obebs4.element('p', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ornare justo iaculis lacus facilisis, in volutpat diam luctus. Sed diam ipsum, laoreet eu lobortis a, interdum vel nunc. Sed vitae nulla id sem mattis rhoncus.');
let article_2_p_2 = obebs4.element('p', 'Interdum vel nunc. Sed vitae nulla id sem mattis rhoncus.', {'class' : 'lead p-3 border-left border-yellow border-width-5'});
let article_2_p_3 = obebs4.element('p', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ornare justo iaculis lacus facilisis, in volutpat diam luctus. Sed diam ipsum, laoreet eu lobortis a, interdum vel nunc. Sed vitae nulla id sem mattis rhoncus.');

let article_2 = obebs4.articles.columns.one(
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