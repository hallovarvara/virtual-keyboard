import KEYS from './keys.js';
import Keyboard from './modules/Keyboard.js';

window.onload = () => {
  // Add comment, how to use app and how it was made
  const hint = document.createElement('p');
  hint.innerHTML = '<strong>Сменить раскладку: left Ctrl + left Shift</strong>. Сделано на&nbsp;Mac&nbsp;OS, расположение кнопок может отличаться от&nbsp;компьютера с&nbsp;Windows (например, Cmd заменяет Win, нет клавиши Del). Если на&nbsp;Windows что-то не&nbsp;работает, пожалуйста, напишите мне в&nbsp;телеграм <strong>hallovarvara</strong> или дискорд <strong>Varya Dev. (@hallovarvara)</strong>';
  document.body.append(hint);

  // Add textarea for to output symbols
  const textarea = document.createElement('textarea');
  textarea.classList.add('text');
  document.body.append(textarea);

  // Add keyboard container
  const keyboardView = document.createElement('div');
  keyboardView.classList.add('keyboard');
  document.body.append(keyboardView);

  // Create keyboard
  const keyboard = new Keyboard(KEYS, keyboardView);

  // Catch if mouse button's pressed
  keyboardView.addEventListener('mousedown', (event) => {
    if (event.target.tagName === 'BUTTON') {
      keyboard.changeState(event.target.id, event.type);
      textarea.value = keyboard.type(event.target, textarea.value);
    }
  });

  // Catch if mouse button's released
  document.addEventListener('click', (event) => keyboard.changeState(event.target.id, event.type));

  // What's happening if computer buttons're pressed or released
  const pressComputerKey = (event) => {
    event.preventDefault();
    const virtualKey = keyboard.view.querySelector(`#${event.code}`);

    if (virtualKey) {
      keyboard.changeState(event.code, event.type);
      if (event.type === 'keydown') textarea.value = keyboard.type(virtualKey, textarea.value);
    }
  };

  // Catch if computer buttons're pressed or released
  document.addEventListener('keydown', pressComputerKey);
  document.addEventListener('keyup', pressComputerKey);

  // Focus on textarea
  textarea.focus();
  textarea.addEventListener('blur', () => textarea.focus());

  // Inactivate all buttons (except CapsLock), when focus got out of page and returned back
  window.addEventListener('blur', () => {
    if (keyboard.pressed.includes('CapsLock')) keyboard.pressed = ['CapsLock'];
    else keyboard.pressed = [];
    keyboard.activateKeys();
  });
};
