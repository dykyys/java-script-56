'use strict';
/*
 *Події клавіатури. keypress, keydown, keyup
 */
//https://www.toptal.com/developers/keycode/for/a

const keyBoardPress = (event) => {
  console.log(event.code);
  console.log(event.key);
};

document.addEventListener('keydown', keyBoardPress);
