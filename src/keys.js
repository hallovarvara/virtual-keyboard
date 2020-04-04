export default [
  [ // 1st row
    {
      code: 'Backquote', en: '§', enShift: '±', ru: 'ё', ruShift: 'Ё',
    }, {
      code: 'Digit1', en: '1', enShift: '!', ru: '1', ruShift: '!',
    }, {
      code: 'Digit2', en: '2', enShift: '@', ru: '2', ruShift: '"',
    }, {
      code: 'Digit3', en: '3', enShift: '#', ru: '3', ruShift: '№',
    }, {
      code: 'Digit4', en: '4', enShift: '$', ru: '4', ruShift: ';',
    }, {
      code: 'Digit5', en: '5', enShift: '%', ru: '5', ruShift: '%',
    }, {
      code: 'Digit6', en: '6', enShift: '^', ru: '6', ruShift: ':',
    }, {
      code: 'Digit7', en: '7', enShift: '&', ru: '7', ruShift: '?',
    }, {
      code: 'Digit8', en: '8', enShift: '*', ru: '8', ruShift: '*',
    }, {
      code: 'Digit9', en: '9', enShift: '(', ru: '9', ruShift: '(',
    }, {
      code: 'Digit0', en: '0', enShift: ')', ru: '0', ruShift: ')',
    }, {
      code: 'Minus', en: '-', enShift: '_', ru: '-', ruShift: '_',
    }, {
      code: 'Equal', en: '=', enShift: '+', ru: '=', ruShift: '+',
    }, {
      code: 'Backspace', isSpecial: true, name: 'backspace', classes: 'backspace', callback: (value) => value.slice(0, -1),
    },
  ],

  [ // 2nd row
    {
      code: 'Tab', isSpecial: true, name: 'tab', classes: 'tab', callback: (value) => `${value}\t`,
    }, {
      code: 'KeyQ', en: 'q', enShift: 'Q', ru: 'й', ruShift: 'Й',
    }, {
      code: 'KeyW', en: 'w', enShift: 'W', ru: 'ц', ruShift: 'Ц',
    }, {
      code: 'KeyE', en: 'e', enShift: 'E', ru: 'у', ruShift: 'У',
    }, {
      code: 'KeyR', en: 'r', enShift: 'R', ru: 'к', ruShift: 'К',
    }, {
      code: 'KeyT', en: 't', enShift: 'T', ru: 'е', ruShift: 'Е',
    }, {
      code: 'KeyY', en: 'y', enShift: 'Y', ru: 'н', ruShift: 'Н',
    }, {
      code: 'KeyU', en: 'u', enShift: 'U', ru: 'г', ruShift: 'Г',
    }, {
      code: 'KeyI', en: 'i', enShift: 'I', ru: 'ш', ruShift: 'Ш',
    }, {
      code: 'KeyO', en: 'o', enShift: 'O', ru: 'щ', ruShift: 'Щ',
    }, {
      code: 'KeyP', en: 'p', enShift: 'P', ru: 'з', ruShift: 'З',
    }, {
      code: 'BracketLeft', en: '[', enShift: '{', ru: 'х', ruShift: 'Х',
    }, {
      code: 'BracketRight', en: ']', enShift: '}', ru: 'ъ', ruShift: 'Ъ',
    },
  ],

  [ // 3rd row
    {
      code: 'CapsLock', isSpecial: true, name: 'capslock', classes: 'capslock',
    }, {
      code: 'KeyA', en: 'a', enShift: 'A', ru: 'ф', ruShift: 'Ф',
    }, {
      code: 'KeyS', en: 's', enShift: 'S', ru: 'ы', ruShift: 'Ы',
    }, {
      code: 'KeyD', en: 'd', enShift: 'D', ru: 'в', ruShift: 'В',
    }, {
      code: 'KeyF', en: 'f', enShift: 'F', ru: 'а', ruShift: 'А',
    }, {
      code: 'KeyG', en: 'g', enShift: 'G', ru: 'п', ruShift: 'П',
    }, {
      code: 'KeyH', en: 'h', enShift: 'H', ru: 'р', ruShift: 'Р',
    }, {
      code: 'KeyJ', en: 'j', enShift: 'J', ru: 'о', ruShift: 'О',
    }, {
      code: 'KeyK', en: 'k', enShift: 'K', ru: 'л', ruShift: 'Л',
    }, {
      code: 'KeyL', en: 'l', enShift: 'L', ru: 'д', ruShift: 'Д',
    }, {
      code: 'Semicolon', en: ';', enShift: ':', ru: 'ж', ruShift: 'Ж',
    }, {
      code: 'Quote', en: '&#39;', enShift: '"', ru: 'э', ruShift: 'Э',
    }, {
      code: 'Backslash', en: '&#92;', enShift: '|', ru: '&#92;', ruShift: '/',
    }, {
      code: 'Enter', isSpecial: true, name: 'enter', classes: 'enter', callback: (value) => `${value}\n`,
    },
  ],

  [ // 4th row
    {
      code: 'ShiftLeft', isSpecial: true, name: 'shift', classes: 'shift shift__left', // TODO: switchShift()
    }, {
      code: 'KeyZ', en: 'z', enShift: 'Z', ru: 'я', ruShift: 'Я',
    }, {
      code: 'KeyX', en: 'x', enShift: 'X', ru: 'ч', ruShift: 'Ч',
    }, {
      code: 'KeyC', en: 'c', enShift: 'C', ru: 'с', ruShift: 'С',
    }, {
      code: 'KeyV', en: 'v', enShift: 'V', ru: 'м', ruShift: 'М',
    }, {
      code: 'KeyB', en: 'b', enShift: 'B', ru: 'и', ruShift: 'И',
    }, {
      code: 'KeyN', en: 'n', enShift: 'N', ru: 'т', ruShift: 'Т',
    }, {
      code: 'KeyM', en: 'm', enShift: 'M', ru: 'ь', ruShift: 'Ь',
    }, {
      code: 'Comma', en: ',', enShift: '<', ru: 'б', ruShift: 'Б',
    }, {
      code: 'Period', en: '.', enShift: '>', ru: 'ю', ruShift: 'Ю',
    }, {
      code: 'Slash', en: '/', enShift: '?', ru: '.', ruShift: ',',
    }, {
      code: 'ArrowUp', en: '&uarr;', enShift: '&uarr;', ru: '&uarr;', ruShift: '&uarr;', classes: 'arrow arrow__up',
    }, {
      code: 'ShiftRight', isSpecial: true, name: 'shift', classes: 'shift shift__right', // TODO: switchShift()
    },
  ],

  [ // 5th row
    {
      code: 'ControlLeft', isSpecial: true, name: 'ctrl', classes: 'ctrl ctrl__left',
    }, {
      code: 'AltLeft', isSpecial: true, name: 'alt', classes: 'alt alt__left',
    }, {
      code: 'MetaLeft', isSpecial: true, name: 'cmd', classes: 'cmd cmd__left', // TODO: обработчик на event.key='Meta'
    }, {
      code: 'Space', isSpecial: true, name: 'space', classes: 'space', callback: (value) => `${value} `,
    }, {
      code: 'MetaRight', isSpecial: true, name: 'cmd', classes: 'cmd cmd__right',
    }, {
      code: 'ArrowLeft', en: '&larr;', enShift: '&larr;', ru: '&larr;', ruShift: '&larr;', classes: 'arrow arrow__left',
    }, {
      code: 'ArrowDown', en: '&darr;', enShift: '&darr;', ru: '&darr;', ruShift: '&darr;', classes: 'arrow arrow__down',
    }, {
      code: 'ArrowRight', en: '&rarr;', enShift: '&rarr;', ru: '&rarr;', ruShift: '&rarr;', classes: 'arrow arrow__right',
    }, {
      code: 'AltRight', isSpecial: true, name: 'alt', classes: 'alt alt__right',
    },
  ],
];
