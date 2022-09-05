//Створити невелику гру:)
// - Спочатку на екрані користувача відображатиметься
//якась форма (коло, квадрат, прямокутник)
// - При натисканні на неї в рандомному порядку форма повинна
//змінюватися на іншу
// - Форма щоразу повинна з'являтися у різних місцях на сторінці
// - Колір форми в рандомному порядку змінюється,

// const forms = [
//   'width: 100px; height: 100px; border-width: 1px; border-color: #000000',
//   'width: 100px; height: 100px; border-radius: 50%; border-width: 1px; border-color: #000000',
//   'width: 150px; height: 100px; border-width: 1px; border-color: #000000',
//   'width: 200px; height: 100px; border-radius: 100px / 50px;',
//   'width: 150px; height: 100px; transform: skew(20deg);',
// ];

// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
// }

// const randomither = max => {
//   return Math.floor(Math.random() * max);
// };

// const boxRef = document.createElement('div');
// boxRef.style.cssText = forms[1];
// boxRef.style.backgroundColor = getRandomHexColor();
// document.body.append(boxRef);

// boxRef.addEventListener('click', () => {
//   const color = getRandomHexColor();

//   boxRef.textContent = color;

//   const randomIndex = randomither(forms.length);

//   boxRef.style.cssText = forms[randomIndex];
//   boxRef.style.backgroundColor = color;
//   boxRef.style.display = 'flex';
//   boxRef.style.alignItems = 'center';
//   boxRef.style.justifyContent = 'center';
//   boxRef.style.position = 'absolute';

//   const height = 100 - (boxRef.clientHeight * 100) / document.documentElement.clientHeight;
//   const width = 100 - (boxRef.clientWidth * 100) / document.documentElement.clientWidth;

//   boxRef.style.top = `${randomither(height)}%`;
//   boxRef.style.left = `${randomither(width)}%`;
// });
