class Header {
    placeToRender;
    headerElement;
    h1Element;

    constructor(placeToRender) {
        this.placeToRender = placeToRender;

        this.headerElement = document.createElement('header');
        this.h1Element = document.createElement('h1');

        this.h1Element.innerText = 'Kies je avatar';

        this.render();
    }

    render = () => {
        this.placeToRender.appendChild(this.headerElement);
        this.headerElement.appendChild(this.h1Element);
    }
}

class AvatarCirlce {
    placeToRender;
    liElement;
    buttonElement;
    imgElement;
    number;
    alt;
    src;

    constructor(placeToRender, number) {
        this.placeToRender = placeToRender;
        this.number = number;
        if (this.number > 6) {
            this.alt = 'random';
            this.src = `./img/question.webp`
        } else {
            this.alt = this.number;
            this.src = `./img/av-${this.number}.webp`;
        }

        this.liElement = document.createElement('li');
        this.buttonElement = document.createElement('button');
        this.imgElement = document.createElement('img');

        this.liElement.classList = 'circle';
        this.buttonElement.classList = 'img-buttons';

        this.imgElement.src = this.src;;
        this.imgElement.alt = `avatar-${this.alt}`;
        this.imgElement.classList = 'avatar-frame';

        this.render();
    }

    render = () => {
        this.placeToRender.appendChild(this.liElement);
        this.liElement.appendChild(this.buttonElement);
        this.buttonElement.appendChild(this.imgElement);
    }
}

class Avatars {
    placeToRender;
    mainElement;
    listElement;
    randomListElement;

    constructor(placeToRender) {
        this.placeToRender = placeToRender;

        this.mainElement = document.createElement('main');
        this.listElement = document.createElement('ul');
        this.randomListElement = document.createElement('ul');

        this.mainElement.classList = 'overlay';
        this.listElement.classList = 'circles';
        this.randomListElement.classList = 'random-circles';

        this.render();
    }

    render = () => {
        this.placeToRender.appendChild(this.mainElement);
        this.mainElement.appendChild(this.listElement);
        this.mainElement.appendChild(this.randomListElement);
    }
}

class Button {
    placeToRender;
    buttonElement;

    constructor(placeToRender) {
        this.placeToRender = placeToRender;

        this.buttonElement = document.createElement('button');

        this.buttonElement.classList = 'Proceed__Button';
        this.buttonElement.textContent = 'Proceed';

        this.render();
    }

    render = () => {
        this.placeToRender.appendChild(this.buttonElement);
    }
}

class App {
    placeToRender;
    header;
    avatars;
    avatarCard;

    constructor(placeToRender) {
        this.placeToRender = document.getElementsByTagName(placeToRender)[0];

        this.header = new Header(this.placeToRender);
        this.avatars = new Avatars(this.placeToRender);
        this.button = new Button(this.placeToRender);

        this.generateAvatars();
    }

    generateAvatars = () => {
        for (let i = 1; i < 8; i++) {
            if (i != 7) {
                this.avatarCard = new AvatarCirlce(this.avatars.listElement, i);
            } else this.avatarCard = new AvatarCirlce(this.avatars.randomListElement, i);
        }
    }
}

const app = new App('body');