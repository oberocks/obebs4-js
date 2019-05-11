
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
    }    
};



let obebs4 = new OBEBS4();
console.log(obebs4.version);

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

const target = document.getElementById('obebs4-app');
target.appendChild(container_fluid);

