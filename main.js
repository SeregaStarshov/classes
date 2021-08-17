'use strict';

function DomElement(selector, height, width, background, fontSize, position) {
    this.selector = selector;
    this.height = height;
    this.width = width;
    this.bg = background;
    this.fontSize = fontSize;
    this.position = position;
}


DomElement.prototype.createElement = function() {
    let elem;
    if(this.selector.startsWith('.')) {
        elem = document.createElement('div');
        elem.classList.add('main');
        elem.style.cssText =`height: ${this.height};
         width: ${this.width}; background: ${this.bg}; fontSize: ${this.fontSize};
         position: ${this.position};`;
        elem.textContent = this.text;

        
    } else if(this.selector.startsWith('#')) {
        elem = document.createElement('p');
        elem.setAttribute('id', 'main');
        elem.style.cssText =`height: ${this.height};
         width: ${this.width}; background: ${this.bg};
          fontSize: ${this.fontSize}; font-family: ${this.fontFamily}; position: ${this.position};`;
        elem.textContent = this.text;
    }

    document.body.append(elem);
    let left = 0,
        top = 0,
        right = 0,
        down = 0;
    document.addEventListener('keydown', (event) => {
        
        if(event.code === 'ArrowRight') {
            left += 10;
            elem.style.left = left + 'px';
        } else if(event.code === 'ArrowLeft') {
           left -= 10;
            elem.style.left = left + 'px';
        } else if (event.code === 'ArrowDown') {
            top += 10;
            elem.style.top = top + 'px';
        } else if (event.code === 'ArrowUp') {
            top -= 10;
            elem.style.top = top + 'px';
        }
        
    });
};

let newElement = new DomElement('.main', '100px', '100px', 'green', '32px', 'absolute');


document.addEventListener('DOMContentLoaded', newElement.createElement());

