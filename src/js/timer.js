import { Notify } from 'notiflix/build/notiflix-notify-aio';
const TIMER_DEADLINE = new Date(2022, 8, 26, 21, 35);

const timerRef = document.querySelector('.timer__items');

const timer = {
  intervalId: null,
  refs: {},
  notifyOptions: {
    position: 'center-center',
    backOverlay: true,
    clickToClose: true,
    closeButton: true,
  },
  start(rootSelector, deadline) {
    const delta = deadline.getTime() - Date.now();
    if (delta <= 0) {
      Notify.failure(
        'Вибраний час в минулому, виберіть дату в майбутньому!',
        this.notifyOptions
      );
      return;
    }
    Notify.success('Відлік почався', this.notifyOptions);
    this.getRefs(rootSelector);
    this.intervalId = setInterval(() => {
      const diff = deadline.getTime() - Date.now();

      if (diff <= 1000) {
        clearInterval(this.intervalId);
        Notify.success('Дедлайн настав!', this.notifyOptions);
      }

      const data = this.convertMs(diff);
      //   Object.entries(data).forEach(([name, value]) => {
      //     this.refs[name].textContent = this.addLeadinZero(value);
      //   });
      this.refs.days.textContent = this.addLeadinZero(data.days);
      this.refs.hours.textContent = this.addLeadinZero(data.hours);
      this.refs.minutes.textContent = this.addLeadinZero(data.minutes);
      this.refs.seconds.textContent = this.addLeadinZero(data.seconds);
    }, 1000);
  },

  getRefs(rootSelector) {
    // [...rootSelector.children].forEach(item => {
    //   const { title } = item.dataset;
    //   this.refs[title] = item;
    // });
    this.refs.days = rootSelector.querySelector('.js-timer__days');
    this.refs.hours = rootSelector.querySelector('.js-timer__hours');
    this.refs.minutes = rootSelector.querySelector('.js-timer__minutes');
    this.refs.seconds = rootSelector.querySelector('.js-timer__seconds');
  },
  convertMs(diff) {
    const days = Math.floor(diff / 1000 / 60 / 60 / 24);
    const hours = Math.floor(diff / 1000 / 60 / 60) % 24;
    const minutes = Math.floor(diff / 1000 / 60) % 60;
    const seconds = Math.floor(diff / 1000) % 60;
    return { days, hours, minutes, seconds };
  },
  addLeadinZero(value) {
    return String(value).padStart(2, '0');
  },
};

// timer.start(timerRef, TIMER_DEADLINE);
console.log(new Date('2030-03-16'));
console.log(new Date('2030-03'));
console.log(new Date('2018'));

const interval1 = setInterval(function () {
  // body
}, 1000);

const interval2 = setInterval(function () {
  // body
}, 1000);

const interval3 = setInterval(function () {
  // body
}, 1000);

console.log(interval1);
console.log(interval3);
console.log(interval2);
