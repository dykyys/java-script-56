import { refs } from './refs';
import { Spinner } from 'spin.js';
const opts = {
  lines: 20, // The number of lines to draw
  length: 53, // The length of each line
  width: 17, // The line thickness
  radius: 45, // The radius of the inner circle
  scale: 1.35, // Scales overall size of the spinner
  corners: 1, // Corner roundness (0..1)
  speed: 1, // Rounds per second
  rotate: 10, // The rotation offset
  animation: 'spinner-line-fade-more', // The CSS animation name for the lines
  direction: 1, // 1: clockwise, -1: counterclockwise
  color: '#49d0a3', // CSS color or array of colors
  fadeColor: 'transparent', // CSS color or array of colors
  top: '48%', // Top position relative to parent
  left: '50%', // Left position relative to parent
  shadow: '0 0 1px transparent', // Box-shadow for the lines
  zIndex: 2000000000, // The z-index (defaults to 2e9)
  className: 'spinner', // The CSS class to assign to the spinner
  position: 'absolute', // Element positioning
};
const spinner = new Spinner(opts);

export function spinerPlay() {
  spinner.spin(refs.spiner);
  refs.load.classList.remove('is-hidden');
}
export function spinerStop() {
  refs.load.classList.add('is-hidden');
  spinner.stop();
}
