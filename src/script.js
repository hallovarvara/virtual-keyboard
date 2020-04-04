const LAYOUT = {};
LAYOUT.english = {
  general: [
    ['§', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'backspace'],
    ['tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']'],
    ['capslock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', '&#39;', '&#92;', 'enter'],
    ['shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '&#47;', '&uarr;', 'shift'],
    ['ctrl', 'alt', 'cmd', 'space', 'cmd', '&larr;', '&darr;', '&rarr;', 'alt'],
  ],
  shiftPressed: [
    ['± ', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', 'backspace'],
    ['tab', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '{', '}'],
    ['capslock', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ':', '"', '|', 'enter'],
    ['shift', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', '<', '>', '?', '&uarr;', 'shift'],
    ['ctrl', 'alt', 'cmd', 'space', 'cmd', '&larr;', '&darr;', '&rarr;', 'alt'],
  ],
};

LAYOUT.russian = {
  general: [
    ['ё', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'backspace'],
    ['tab', 'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ'],
    ['capslock', 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э', '&#92;', 'enter'],
    ['shift', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', '.', '&uarr;', 'shift'],
    ['ctrl', 'alt', 'cmd', 'space', 'cmd', '&larr;', '&darr;', '&rarr;', 'alt'],
  ],
  shiftPressed: [
    ['Ё', '!', '"', '№', ';', '%', ':', '?', '*', '(', ')', '_', '+', 'backspace'],
    ['tab', 'Й', 'Ц', 'У', 'К', 'Е', 'Н', 'Г', 'Ш', 'Щ', 'З', 'Х', 'Ъ'],
    ['capslock', 'Ф', 'Ы', 'В', 'А', 'П', 'Р', 'О', 'Л', 'Д', 'Ж', 'Э', '&#47;', 'enter'],
    ['shift', 'Я', 'Ч', 'С', 'М', 'И', 'Т', 'Ь', 'Б', 'Ю', ',', '&uarr;', 'shift'],
    ['ctrl', 'alt', 'cmd', 'space', 'cmd', '&larr;', '&darr;', '&rarr;', 'alt'],
  ],
};

const SPECIAL_KEYS = ['tab', 'backspace', 'capslock',
  'enter', 'shift', 'ctrl', 'alt', 'cmd', 'space',
  '&uarr;', '&larr;', '&darr;', '&rarr;'];

const DOUBLED_KEYS = ['shift', 'alt', 'cmd'];

// let language = 'english';

class Keyboard {
  constructor() {
    this.layout = LAYOUT;
    this.specialKeys = SPECIAL_KEYS;
    this.language = 'english';
    this.shiftPressed = false;
    this.capslockPressed = false;
    this.addRealKeyboardActions();
    return this.createKeyboard();
  }

  createKeyboard(layoutType = 'general', layoutArray = false) {
    const keyboard = document.createElement('div');
    keyboard.classList.add('keyboard');

    const currentLayout = (!layoutArray) ? this.layout[this.language][layoutType] : layoutArray;
    // const currentLayout = this.layout[this.language][layoutType];

    this.createButtonsRows(currentLayout, keyboard);
    this.nameDoubledButtons(keyboard);
    this.addClickActions(keyboard);
    this.addMouseActions(keyboard);
    if (document.querySelector('.keyboard') != null) {
      document.querySelector('.keyboard').remove();
      document.querySelector('body').append(keyboard);
    }
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
          btn.classList.add('arrow', 'arrow__up'); break;
        case '&darr;':
          btn.classList.add('arrow', 'arrow__down'); break;
        case '&larr;':
          btn.classList.add('arrow', 'arrow__left'); break;
        case '&rarr;':
          btn.classList.add('arrow', 'arrow__right'); break;
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

  addRealKeyboardActions() {
    document.addEventListener('keydown', (realKey) => {
      const { code } = realKey;
      let key = realKey.key.toLocaleLowerCase();
      console.log(key);
      if (code === 'Space') key = 'space';
      if (key === 'control') key = 'ctrl';
      if (key === 'command') key = 'cmd';
      if (key === 'meta') key = (code === 'MetaRight') ? 'cmd__right' : 'cmd__left';
      if (key === 'alt') key = (code === 'AltRight') ? 'alt__right' : 'alt__left';
      if (key === 'arrowup') key = 'arrow__up';
      if (key === 'arrowdown') key = 'arrow__down';
      if (key === 'arrowleft') key = 'arrow__left';
      if (key === 'arrowright') key = 'arrow__right';
      if (key === 'shift') {
        key = (code === 'ShiftRight') ? 'shift__right' : 'shift__left';
        this.switchShift(key);
      } else if (key === 'capslock') {
        this.switchCapslock();
      } else {
        const downKey = Array.from(document.querySelectorAll('button')).find((e) => e.textContent.toLowerCase() === key || e.classList.contains(key));
        if (downKey !== undefined) {
          this.activateButton(downKey);
          this.deactivateButton(downKey);
        }
      }
    });
    document.addEventListener('keyup', (realKey) => {
      let key = realKey.key.toLocaleLowerCase();
      const { code } = realKey;
      if (key === 'capslock') this.switchCapslock();
      if (key === 'shift') {
        key = (code === 'ShiftRight') ? 'shift__right' : 'shift__left';
        this.switchShift(key);
      }
    });
    return this;
  }

  addClickActions(keyboard) {
    keyboard.addEventListener('click', (event) => {
      const textarea = document.querySelector('textarea');
      if (event.target.tagName === 'BUTTON') {
        textarea.value = this.changeTextareaValue(event.target.innerText, textarea.value);
      }
    });
    return this;
  }

  changeTextareaValue(key, current) {
    let changed = current;
    if (!this.checkIfSpecial(key)) changed += key;
    else if (key === 'tab') changed += '\t';
    else if (key === 'enter') changed += '\n';
    else if (key === 'space') changed += ' ';
    else if (key === 'backspace') changed = changed.slice(0, -1);
    return changed;
  }

  switchShift(shiftClass) {
    if (this.shiftPressed) {
      this.createKeyboard();
      this.deactivateButton(document.querySelector(`.${shiftClass}`));
      this.shiftPressed = false;
    } else {
      this.createKeyboard('shiftPressed');
      this.activateButton(document.querySelector(`.${shiftClass}`));
      this.shiftPressed = true;
    }
    return document.querySelector(`.${shiftClass}`);
  }

  switchCapslock() {
    const { general } = this.layout[this.language];
    const layout = general.map((row) => row.map((k) => ((k.length === 1) ? k.toUpperCase() : k)));
    if (this.capslockPressed) {
      this.createKeyboard();
      this.deactivateButton(document.querySelector('.capslock'));
      this.capslockPressed = false;
    } else {
      this.createKeyboard('', layout);
      this.activateButton(document.querySelector('.capslock'));
      this.capslockPressed = true;
    }
  }

  addMouseActions(keyboard) {
    keyboard.addEventListener('mousedown', (event) => {
      if (event.target.tagName === 'BUTTON') {
        if (event.target.innerText === 'shift') {
          this.switchShift(event.target.classList[1]);
        } else if (event.target.innerText === 'capslock') {
          this.switchCapslock();
        } else {
          this.activateButton(event.target);
        }
      }
    });
    keyboard.addEventListener('mouseup', (event) => {
      if (event.target.tagName === 'BUTTON') {
        if (event.target.innerText === 'shift') {
          this.switchShift(event.target.classList[1]);
        } else if (event.target.innerText !== 'capslock') {
          this.deactivateButton(event.target);
        }
      }
    });
    return this;
  }

  activateButton(key) {
    key.classList.add('active');
    return this;
  }

  deactivateButton(key) {
    setTimeout(() => { key.classList.remove('active'); }, 150);
    return this;
  }
}

window.onload = () => {
  // Create hint
  const hint = document.createElement('p');
  hint.innerHTML = '<strong>Сменить раскладку: Ctrl + Space</strong>. Сделано в&nbsp;Mac&nbsp;OS, расположение кнопок может отличаться от&nbsp;компьютера с&nbsp;Windows (как минимум, Cmd заменяет Win). Если на&nbsp;Windows что-то не&nbsp;работает, пожалуйста, напишите мне в&nbsp;телеграм <strong>hallovarvara</strong> или дискорд <strong>Varya Dev. (@hallovarvara)</strong>';

  // Create textarea
  const textarea = document.createElement('textarea');
  textarea.classList.add('text');

  // Add hint & textarea to document
  document.querySelector('body').append(hint, textarea);
  textarea.focus();
  textarea.addEventListener('blur', () => textarea.focus());

  // Create and add keyboard to document
  const keyboard = new Keyboard();
  document.querySelector('body').append(keyboard);
};
