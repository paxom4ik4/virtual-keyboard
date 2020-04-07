const BODY = document.querySelector("body"); // Создаём константу body.

// Создаем объект, который хранит в себе коды всех необходимых клавиш
const keyButtons = [
    {code: 'Backquote', en: '`', ru: 'ё', printable: true},
    {code: 'Digit1', en: '1', ru: '1', printable: true},
    {code: 'Digit2', en: '2', ru: '2', printable: true},
    {code: 'Digit3', en: '3', ru: '3', printable: true},
    {code: 'Digit4', en: '4', ru: '4', printable: true},
    {code: 'Digit5', en: '5', ru: '5', printable: true},
    {code: 'Digit6', en: '6', ru: '6', printable: true},
    {code: 'Digit7', en: '7', ru: '7', printable: true},
    {code: 'Digit8', en: '8', ru: '8', printable: true},
    {code: 'Digit9', en: '9', ru: '9', printable: true},
    {code: 'Digit0', en: '0', ru: '0', printable: true},
    {code: 'Minus', en: '-', ru: '-', printable: true},
    {code: 'Equal', en: '=', ru: '=', printable: true},
    {code: 'Backslash', en: '\\', ru: '\\', printable: true},
    {code: 'Backspace', en: 'Back', ru: 'Back', printable: false},
    {code: 'Tab', en: 'Tab', ru: 'Tab', printable: false},
    {code: 'KeyQ', en: 'q', ru: 'й', printable: true},
    {code: 'KeyW', en: 'w', ru: 'ц', printable: true},
    {code: 'KeyE', en: 'e', ru: 'у', printable: true},
    {code: 'KeyR', en: 'r', ru: 'к', printable: true},
    {code: 'KeyT', en: 't', ru: 'е', printable: true},
    {code: 'KeyY', en: 'y', ru: 'н', printable: true},
    {code: 'KeyU', en: 'u', ru: 'г', printable: true},
    {code: 'KeyI', en: 'i', ru: 'ш', printable: true},
    {code: 'KeyO', en: 'o', ru: 'щ', printable: true},
    {code: 'KeyP', en: 'p', ru: 'з', printable: true},
    {code: 'BracketLeft', en: '[', ru: 'х', printable: true},
    {code: 'BracketRight', en: ']', ru: 'ъ', printable: true},
    {code: 'Delete', en: 'DEL', ru: 'DEL', printable: false},
    {code: 'CapsLock', en: 'Caps Lock', ru: 'Caps Lock', printable: false},
    {code: 'KeyA', en: 'a', ru: 'ф', printable: true},
    {code: 'KeyS', en: 's', ru: 'ы', printable: true},
    {code: 'KeyD', en: 'd', ru: 'в', printable: true},
    {code: 'KeyF', en: 'f', ru: 'а', printable: true},
    {code: 'KeyG', en: 'g', ru: 'п', printable: true},
    {code: 'KeyH', en: 'h', ru: 'р', printable: true},
    {code: 'KeyJ', en: 'j', ru: 'о', printable: true},
    {code: 'KeyK', en: 'k', ru: 'л', printable: true},
    {code: 'KeyL', en: 'l', ru: 'д', printable: true},
    {code: 'Semicolon', en: ';', ru: 'ж', printable: true},
    {code: 'Quote', en: '\'', ru: 'э', printable: true},
    {code: 'Enter', en: 'Enter', ru: 'Enter', printable: false},
    {code: 'ShiftLeft', en: 'Shift', ru: 'Shift', printable: false},
    {code: 'IntlBackslash', en: '\\', ru: '\\', printable: true},
    {code: 'KeyZ', en: 'z', ru: 'я', printable: true},
    {code: 'KeyX', en: 'x', ru: 'ч', printable: true},
    {code: 'KeyC', en: 'c', ru: 'с', printable: true},
    {code: 'KeyV', en: 'v', ru: 'м', printable: true},
    {code: 'KeyB', en: 'b', ru: 'и', printable: true},
    {code: 'KeyN', en: 'n', ru: 'т', printable: true},
    {code: 'KeyM', en: 'm', ru: 'ь', printable: true},
    {code: 'Comma', en: ',', ru: 'б', printable: true},
    {code: 'Period', en: '.', ru: 'ю', printable: true},
    {code: 'Slash', en: '/', ru: '.', printable: true},
    {code: 'ShiftRight', en: 'Shift', ru: 'Shift', printable: false},
    {code: 'ControlLeft', en: 'Ctrl', ru: 'Ctrl', printable: false},
    {code: 'MetaLeft', en: 'Win', ru: 'Win', printable: false},
    {code: 'AltLeft', en: 'Alt', ru: 'Alt', printable: false},
    {code: 'Space', en: ' ', ru: ' ', printable: true},
    {code: 'AltRight', en: 'Alt', ru: 'Alt', printable: false},
    {code: 'ArrowLeft', en: '◄', ru: '◄', printable: false},
    {code: 'ArrowUp', en: '▲', ru: '▲', printable: false},
    {code: 'ArrowDown', en: '▼', ru: '▼', printable: false},
    {code: 'ArrowRight', en: '►', ru: '►', printable: false},
    {code: 'ControlRight', en: 'Ctrl', ru: 'Ctrl', printable: false}
];

/* Создаем элементы на странице */
const textarea = document.createElement('textarea');
textarea.setAttribute("readonly", "null");
textarea.classList.add("text_area")
document.body.append(textarea);

const keyboard = document.createElement('div');
keyboard.classList.add("keyboard")
document.body.append(keyboard);

// Получаем данные по ключу с помощью API
let language = sessionStorage.getItem('lang') || 'en';

/* Добавляем клавиши на клавиатуру */
let start = function addButtons() {
for (let i = 0; i < keyButtons.length; i++) {
        const keyButton = document.createElement('div');
        keyboard.append(keyButton);
        keyButton.dataset.code = keyButtons[i].code;
        keyButton.dataset.en = keyButtons[i].en;
        keyButton.dataset.ru = keyButtons[i].ru;
        keyButton.dataset.printable = keyButtons[i].printable;
        keyButton.innerHTML = keyButtons[i][language];
        keyButton.classList.add('key_button');
    }
}
// Отрисовка клавиш
start();

function inputFunc(e) {
    if (e.dataset.printable === 'false') {
        if (e.dataset.code === 'Tab') {
        return textarea.innerHTML += '      ';
        }
        if (e.dataset.code === 'Enter') {
        return textarea.innerHTML += '\n';
        }
        if (e.dataset.code === 'Space') {
        return textarea.innerHTML += ' ';
        }
        if (e.dataset.code === 'ArrowRight') {
        return textarea.innerHTML += '►';
        }
        if (e.dataset.code === 'ArrowLeft') {
        return textarea.innerHTML += '◄';
        }
        if (e.dataset.code === 'ArrowDown') {
        return textarea.innerHTML += '▼';
        }
        if (e.dataset.code === 'ArrowUp') {
        return textarea.innerHTML += '▲';
        }
        if (e.dataset.code === 'Delete') {
        return textarea.innerHTML = textarea.innerHTML.substring(textarea.innerHTML.length-1, 0);
        }
        if (e.dataset.code === 'Backspace') {
        return textarea.innerHTML = textarea.innerHTML.substring(0, textarea.innerHTML.length-1);
        }
        return "";
    }
        if (e.dataset.code === "Comma" && language === "en" && e.dataset.code === "ShiftLeft"){
            return textarea.innerHTML += "<"
        }
        if (e.dataset.code === "Period" && language === "en" && e.dataset.code === "ShiftLeft"){
            return textarea.innerHTML += ">"
        }
    let value = e.innerHTML;
    return textarea.textContent += value;
};

// Меняем содержимое некоторых кнопок при зажатом Shift
BODY.addEventListener('keydown', e => {
    if ((e.code === 'ShiftLeft' || e.code === 'ShiftRight') && ShiftOn === false) {
        ShiftOn = true;
        keyboard.querySelectorAll('.key_button').forEach(el => {
        if (el.dataset.printable === 'true') {
        el.innerHTML = el.innerHTML.toUpperCase();
        }
        if (el.dataset.code === 'Digit1') {
        el.innerHTML = '!';
        }
        if (el.dataset.code === 'Digit2' && language === 'en') {
        el.innerHTML = '@';
        } else if (el.dataset.code === 'Digit2' && language === 'ru') {
        el.innerHTML = '"';
        }
        if (el.dataset.code === 'Digit3' && language === 'en') {
        el.innerHTML = '#';
        } else if (el.dataset.code === 'Digit3' && language === 'ru') {
        el.innerHTML = '№';
        }
        if (el.dataset.code === 'Digit4' && language === 'en') {
        el.innerHTML = '$';
        } else if (el.dataset.code === 'Digit4' && language === 'ru') {
        el.innerHTML = ';';
        }
        if (el.dataset.code === 'Digit5' && language === 'en') {
        el.innerHTML = '%';
        } else if (el.dataset.code === 'Digit5' && language === 'ru') {
        el.innerHTML = '%';
        }
        if (el.dataset.code === 'Digit6' && language === 'en') {
        el.innerHTML = '^';
        } else if (el.dataset.code === 'Digit6' && language === 'ru') {
        el.innerHTML = ':';
        }
        if (el.dataset.code === 'Digit7' && language === 'en') {
        el.innerHTML = '&';
        } else if (el.dataset.code === 'Digit7' && language === 'ru') {
        el.innerHTML = '?';
        }
        if (el.dataset.code === 'Digit8' && language === 'en') {
        el.innerHTML = '*';
        } else if (el.dataset.code === 'Digit8' && language === 'ru') {
        el.innerHTML = '*';
        }
        if (el.dataset.code === 'Digit9' && language === 'en') {
        el.innerHTML = '(';
        } else if (el.dataset.code === 'Digit9' && language === 'ru') {
        el.innerHTML = '(';
        }
        if (el.dataset.code === 'Digit0' && language === 'en') {
        el.innerHTML = ')';
        } else if (el.dataset.code === 'Digit0' && language === 'ru') {
        el.innerHTML = ')';
        }
        if (el.dataset.code === 'Minus' && language === 'en') {
        el.innerHTML = '_';
        } else if (el.dataset.code === 'Minus' && language === 'ru') {
        el.innerHTML = '_';
        }
        if (el.dataset.code === 'Equal' && language === 'en') {
        el.innerHTML = '+';
        } else if (el.dataset.code === 'Equal' && language === 'ru') {
        el.innerHTML = '+';
        }
        if (el.dataset.code === 'Backslash' && language === 'en') {
        el.innerHTML = '|';
        } else if (el.dataset.code === 'Backslash' && language === 'ru') {
        el.innerHTML = '/';
        }
        if (el.dataset.code === 'BracketLeft' && language === 'en') {
        el.innerHTML = '{';
        }
        if (el.dataset.code === 'Semicolon' && language === 'en') {
        el.innerHTML = ':';
        }
        if (el.dataset.code === 'Quote' && language === 'en') {
        el.innerHTML = '"';
        }
        if (el.dataset.code === 'BracketRight' && language === 'en') {
        el.innerHTML = '}';
        }
        if (el.dataset.code === 'Comma' && language === 'en') {
        el.innerHTML = '<';
        }
        if (el.dataset.code === 'Period' && language === 'en') {
        el.innerHTML = '>';
        }
    });
    }
});
 
/* Печатаем клавишу по клику. Добавляем класс Active */
BODY.addEventListener('keydown', event => {
    let currentButton = document.querySelector(`[data-code='${event.code}']`);
    currentButton.classList.add('active');
    inputFunc(currentButton);
});

/* Убираем класс Active */
BODY.addEventListener('keyup', event => {
    document.querySelector(`[data-code='${event.code}']`).classList.remove('active');
});

// Добавляем возможность печатать с помощью клика мыши
BODY.addEventListener('click', event => {
    if (event.target['classList'].contains('key_button')) {
        inputFunc(event.target);
    }
});

// Меняем язык по нажатию клавиш Ctrl + Alt
document.addEventListener('keydown', event => {
    if (event.code === 'AltLeft' && (event.ctrlKey) && language === 'en') {
        language = 'ru';
        sessionStorage.setItem('lang', language);
        keyboard.querySelectorAll('.key_button').forEach(el => el.remove());
        start();
    } else if (event.code === 'AltLeft' && (event.ctrlKey) && language === 'ru') {
        language = 'en';
        sessionStorage.setItem('lang', language);
        keyboard.querySelectorAll('.key_button').forEach(el => el.remove());
        start();
    }
});

// Работа с Caps Lock
let CapsOn = false;
document.addEventListener('keydown', event => {
    if (event.code === 'CapsLock' && CapsOn === false) {
        const currentButtonCapsOn = document.querySelector(`[data-code='CapsLock']`);
        currentButtonCapsOn.classList.add('caps');
        CapsOn = true;
        let allButtons = document.querySelectorAll('.key_button');
        allButtons.forEach(el => {
        if (el.dataset.printable === 'true') {
            el.innerHTML = el.innerHTML.toUpperCase();
        }
    });
} 
    else if (event.code === 'CapsLock' && CapsOn === true) {
        const currentButtonCapsOff = document.querySelector(`[data-code='CapsLock']`);
        currentButtonCapsOff.classList.remove('caps');
        CapsOn = false;
        let allButtons = document.querySelectorAll('.key_button');
        allButtons.forEach(el => {
        if (el.dataset.printable === 'true') {
            el.innerHTML = el.innerHTML.toLowerCase();
        }
    });
}
});

BODY.addEventListener('click', event => {
    if (event.target['dataset'].code === 'CapsLock' && CapsOn === false) {
        CapsOn = true;
        let currentButton = document.querySelector(`[data-code='CapsLock']`);
        currentButton.classList.add('active');
        let allButtons = document.querySelectorAll('.key_button');
        allButtons.forEach(el => {
        if (el.dataset.printable === 'true') {
          el.innerHTML = el.innerHTML.toUpperCase();
        }
      });
    } else if (event.target['dataset'].code === 'CapsLock' && CapsOn === true) {
        CapsOn = false;
        let currentButton = document.querySelector(`[data-code='CapsLock']`);
        currentButton.classList.remove('active');
        let allButtons = document.querySelectorAll('.key_button');
        allButtons.forEach(el => {
        if (el.dataset.printable === 'true') {
            el.innerHTML = el.innerHTML.toLowerCase();
        }
    });
    }
});

let ShiftOn = false;
BODY.addEventListener('keyup', event => {
    if ((event.code === 'ShiftLeft' || event.code === 'ShiftRight') && ShiftOn === true) {
        ShiftOn = false;
        keyboard.querySelectorAll('.key_button').forEach(el => el.remove());
        start();
    }
});

//Описание (Текст на старнице)  
let description = document.createElement('p');
description.classList.add("description");
description.innerHTML = "OS: Windows. Для переключения языка используйте Ctrl + Alt. Клавиатура без адаптива: корректное отображение на 1920х1080";
BODY.append(description);