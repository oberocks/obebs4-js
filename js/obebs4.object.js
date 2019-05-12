
const OBEBS4 = function () {
    this.version = '0.0.3',
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
                        col : 'col col-sm-10 col-md-8 col-lg-7 col-xl-6'
                    },
                    content : {
                        default : {
                            headline : 'Lorem Ipsum',
                            paragraph : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ornare justo iaculis lacus facilisis, in volutpat diam luctus. Sed diam ipsum, laoreet eu lobortis a, interdum vel nunc. Sed vitae nulla id sem mattis rhoncus.'
                        }
                    }
                };
                if (settingsObj) {
                    const returnedTarget = Object.assign(settings, settingsObj);
                }
                // initialize the returned element as a var
                let article = document.createElement('article');
                article.classList = settings.classes.article;
                let container = document.createElement('div');
                container.classList = settings.classes.container;
                let row = document.createElement('div');
                row.classList = settings.classes.row;
                let col = document.createElement('div');
                col.classList = settings.classes.col;
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
                    let h_txt = document.createTextNode(settings.content.default.headline);
                    h.appendChild(h_txt);
                    col.appendChild(h);
                    let p = document.createElement('p');
                    let p_txt = document.createTextNode(settings.content.default.paragraph);
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


// first section

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


// article section

let articleSettings = {};
let article = obebs4.articles.columns.single();

target.appendChild(article);