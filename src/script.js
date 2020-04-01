const LAYOUT = {};
LAYOUT.english = {
  general: [
    ['§', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'backspace'],
    ['tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', 'del'],
    ['capslock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', '&#39;', '&#92;', 'enter'],
    ['shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '&#47;', '&uarr;', 'shift'],
    ['ctrl', 'alt', 'cmd', 'space', 'cmd', '&larr;', '&darr;', '&rarr;', 'alt'],
  ],
  capsLockPressed: [
    ['§', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'backspace'],
    ['tab', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '[', ']', 'del'],
    ['capslock', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ';', '&#39;', '&#92;', 'enter'],
    ['shift', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', ',', '.', '&#47;', '&uarr;', 'shift'],
    ['ctrl', 'alt', 'cmd', 'space', 'cmd', '&larr;', '&darr;', '&rarr;', 'alt'],
  ],
  shiftPressed: [
    ['§', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', 'backspace'],
    ['tab', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '{', '}', 'del'],
    ['capslock', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ':', '"', '|', 'enter'],
    ['shift', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', '<', '>', '?', '&uarr;', 'shift'],
    ['ctrl', 'alt', 'cmd', 'space', 'cmd', '&larr;', '&darr;', '&rarr;', 'alt'],
  ],
};

LAYOUT.russian = {
  general: [
    ['ё', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'backspace'],
    ['tab', 'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', 'del'],
    ['capslock', 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э', '&#92;', 'enter'],
    ['shift', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', '.', '&uarr;', 'shift'],
    ['ctrl', 'alt', 'cmd', 'space', 'cmd', '&larr;', '&darr;', '&rarr;', 'alt'],
  ],
  capsLockPressed: [
    ['Ё', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'backspace'],
    ['tab', 'Й', 'Ц', 'У', 'К', 'Е', 'Н', 'Г', 'Ш', 'Щ', 'З', 'Х', 'Ъ', 'del'],
    ['capslock', 'Ф', 'Ы', 'В', 'А', 'П', 'Р', 'О', 'Л', 'Д', 'Ж', 'Э', '&#92;', 'enter'],
    ['shift', 'Я', 'Ч', 'С', 'М', 'И', 'Т', 'Ь', 'Б', 'Ю', '.', '&uarr;', 'shift'],
    ['ctrl', 'alt', 'cmd', 'space', 'cmd', '&larr;', '&darr;', '&rarr;', 'alt'],
  ],
  shiftPressed: [
    ['Ё', '!', '"', '№', ';', '%', ':', '?', '*', '(', ')', '_', '+', 'backspace'],
    ['tab', 'Й', 'Ц', 'У', 'К', 'Е', 'Н', 'Г', 'Ш', 'Щ', 'З', 'Х', 'Ъ', 'del'],
    ['capslock', 'Ф', 'Ы', 'В', 'А', 'П', 'Р', 'О', 'Л', 'Д', 'Ж', 'Э', '&#47;', 'enter'],
    ['shift', 'Я', 'Ч', 'С', 'М', 'И', 'Т', 'Ь', 'Б', 'Ю', ',', '&uarr;', 'shift'],
    ['ctrl', 'alt', 'cmd', 'space', 'cmd', '&larr;', '&darr;', '&rarr;', 'alt'],
  ],
};

const SPECIAL_KEYS = ['tab', 'backspace', 'del', 'capslock',
  'enter', 'shift', 'ctrl', 'alt', 'cmd', 'space',
  '&uarr;', '&larr;', '&darr;', '&rarr;'];

const DOUBLED_KEYS = ['shift', 'alt', 'cmd'];

let language = 'english';
let optPressed = false;
let shiftPressed = false;
let capsLockPressed = false;

class Keyboard {
  constructor() {
    this.layout = LAYOUT;
    this.language = language;
    this.specialKeys = SPECIAL_KEYS;
    return this.createKeyboard();
  }

  createKeyboard() {
    const keyboard = document.createElement('div');
    keyboard.classList.add('keyboard');
    const currentLayout = this.layout[language].general;
    this.createButtonsRows(currentLayout, keyboard);
    this.nameDoubledButtons(keyboard);
    this.addClickActions(keyboard);
    this.addMouseActions(keyboard);
    return keyboard;
  }

  createButtonsRows(array, keyboard) {
    array.forEach((arrayRow) => {
      const nodesRow = document.createElement('div');
      nodesRow.classList.add('keyboard__row');
      this.createButton(arrayRow, nodesRow);
      keyboard.append(nodesRow);
    });
  }

  createButton(arrayRow, nodesRow) {
    arrayRow.forEach((text) => {
      const btn = document.createElement('button');
      btn.innerHTML = text;
      this.markSpecialKeys(text, btn);
      nodesRow.append(btn);
    });
    return this;
  }

  checkIfSpecial(key) {
    return this.specialKeys.indexOf(key) !== -1;
  }

  markSpecialKeys(key, btn) {
    if (this.checkIfSpecial(key)) {
      switch (key) {
        case '&uarr;':
        case '&larr;':
        case '&darr;':
        case '&rarr;':
          btn.classList.add('arrow'); break;
        default:
          btn.classList.add(key);
      }
    }
    return btn;
  }

  nameDoubledButtons(keyboard) {
    DOUBLED_KEYS.forEach((doubledKey) => {
      const firstKey = keyboard.querySelectorAll(`.${doubledKey}`)[0];
      const secondKey = keyboard.querySelectorAll(`.${doubledKey}`)[1];
      firstKey.classList.add(`${doubledKey}__left`);
      secondKey.classList.add(`${doubledKey}__right`);
    });
    return this;
  }

  addClickActions(keyboard) {
    keyboard.addEventListener('click', (event) => {
      const output = document.querySelector('textarea');

      if (event.target.tagName === 'BUTTON') {
        this.activateButton(event.target);
        this.deactivateButton(event.target);

        if (!this.checkIfSpecial(event.target.innerText)) {
          output.value += event.target.innerText;
        }
      }
      output.focus();
    });
    return this;
  }

  addMouseActions(keyboard) {
    keyboard.addEventListener('mousedown', (event) => {
      if (event.target.tagName === 'BUTTON') {
        this.activateButton(event.target);
      }
    });
    keyboard.addEventListener('mouseup', (event) => {
      if (event.target.tagName === 'BUTTON') {
        this.deactivateButton(event.target);
      }
    });
    return this;
  }

  activateButton(key) {
    key.classList.add('active');
    return this;
  }

  deactivateButton(key) {
    setTimeout(() => { key.classList.remove('active'); }, 250);
    return this;
  }
}

window.onload = () => {
  // Create hint
  const hint = document.createElement('p');
  hint.innerHTML = '<strong>Сменить раскладку: Ctrl + Space</strong>. Сделано на маке, структура и кнопки клавиатуры могут отличаться от компьютера с Windows (как минимум, клавиша Cmd заменяет Win). Если проверяете с Windows, и что-то не работает, пожалуйста, пишите — телеграм <strong>hallovarvara</strong>, дискорд <strong>Varya Dev. (@hallovarvara)</strong>';

  // Create textarea
  const textarea = document.createElement('textarea');
  textarea.classList.add('text');

  // Add hint & textarea to document
  document.querySelector('body').append(hint, textarea);
  textarea.focus();

  // Create and add keyboard to document
  const keyboard = new Keyboard();
  document.querySelector('body').append(keyboard);
};
