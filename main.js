'use strict';

function DomElement(selector, height, width, background, fontSize) {
    this.selector = selector;
    this.height = height;
    this.width = width;
    this.bg = background;
    this.fontSize = fontSize;
}


DomElement.prototype.createElement = function() {
    let elem;
    if(this.selector.startsWith('.')) {
        elem = document.createElement('div');
        elem.classList.add('main');
        elem.style.cssText =`height: ${this.height};
         width: ${this.width}; background: ${this.bg}; fontSize: ${this.fontSize};`;
        elem.textContent = this.text;
    } else if(this.selector.startsWith('#')) {
        elem = document.createElement('p');
        elem.setAttribute('id', 'main');
        elem.style.cssText =`height: ${this.height};
         width: ${this.width}; background: ${this.bg};
          fontSize: ${this.fontSize}; font-family: ${this.fontFamily};`;
        elem.textContent = this.text;
    }

    document.body.append(elem);
};

let newElement = new DomElement('.main', '250px', '850px', 'green', '32px');
newElement.createElement();
console.log(newElement);


function NewElem(selector, height, width, background, fontSize, text, fontFamily) {
    DomElement.apply(this, arguments);
    this.text = text;
    this.fontFamily = fontFamily;
}

NewElem.prototype = Object.create(DomElement.prototype);



let objNewElem = new NewElem('#main', '140px', '450px', 'blue', '32px', 'Lorem Ipsum', 'Candara');
console.log(objNewElem);
objNewElem.createElement();
