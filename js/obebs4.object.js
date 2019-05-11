
const OBEBS4 = function () {
    this.version = '0.0.1',
    this.element = function (elemType, elemText = false, attributes = false, nestedElem = false) {
        let elem = document.createElement(elemType);
        if (elemText) {
            let node = document.createTextNode(elemText);
            elem.appendChild(node);
        }
        if (attributes) {
            if (typeof attributes === 'object' && attributes !== null) {
                for (var attr in attributes) {
                    if (attributes.hasOwnProperty(attr)) {
                        elem.setAttribute(attr, attributes[attr]);
                    }
                }
            }
        }
        if (nestedElem) {
            if (Array.isArray(nestedElem)) {
                for (var i = 0; i < nestedElem.length; i++) {
                    elem.appendChild(nestedElem[i]);
                }
            } else {
                elem.appendChild(nestedElem);
            }
        }
        return elem;
    }
};



let obebs4 = new OBEBS4();
console.log(obebs4.version);


console.log('----------------');


/*
console.log('----------------');

let span = obebs4.element('span', 'text-danger', 'Span Text Here!');

let div = obebs4.element(
    'div',
    'text-lg text-primary',
    'This is my div! ',
    {
        "id" : "test-id",
        "data-value" : "test-id-value"
    },
    span
);

target.appendChild(div);
*/


let h_1 = obebs4.element('h3', 'First Headline');
let hr_1 = obebs4.element('hr', false, {'class' : 'border-success'});
let p_1 = obebs4.element('p', 'This is the first sample paragraph.');

let h_2 = obebs4.element('h3', 'Second Headline');
let hr_2 = obebs4.element('hr', false, {'class' : 'border-success'});
let p_2 = obebs4.element('p', 'This is the second sample paragraph.');

let column_1 = obebs4.element('div', false, {'class' : 'col-md-6'}, [h_1, hr_1, p_1]);
let column_2 = obebs4.element('div', false, {'class' : 'col-md-6'}, [h_2, hr_2, p_2]);

let row = obebs4.element('div', false, {'class' : 'row justify-content-center'}, [column_1, column_2]);

let container = obebs4.element('div', false, {'class' : 'container'}, row);

let container_fluid = obebs4.element('div', false, {'class' : 'container-fluid bg-dark text-light py-5'}, container);

const target = document.getElementById('obebs4-app');
target.appendChild(container_fluid);

