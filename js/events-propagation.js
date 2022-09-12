'use strict';
/*
 * Поширення подій (занурення, таргетинг, спливання)
 */

// https://developer.mozilla.org/ru/docs/Web/API/EventTarget/addEventListener
// { capture: true, once: true }

// .addEventListener('click', event => {
//   console.group('Listener on p (1 -  сплиття, подія на абзаці)');
//   console.log('target', event.target);
//   console.log('currentTarget', event.currentTarget);
//   console.groupEnd();
// });
