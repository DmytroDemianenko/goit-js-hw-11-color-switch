const colors = [
    '#FFFFFF',
    '#2196F3',
    '#4CAF50',
    '#FF9800',
    '#009688',
    '#795548',
  ];
const min = 0;
const max = colors.length - 1;
const randomIntegerFromInterval = (min, max) => {
return Math.floor(Math.random() * (max - min + 1) + min);
  };

const refs = {
    startBth: document.querySelector('[data-action="start"]'),
    stopBth: document.querySelector('[data-action="stop"]'),
    body: document.body,
};

refs.startBth.addEventListener('click', onStart);
refs.stopBth.addEventListener('click', stop);

function onStart(){
  refs.startBth.disabled = true;
  changeColor = setInterval((setBodyBgColor), 1000);
};

function stop (){
refs.startBth.disabled = false;
clearInterval(changeColor);
}

function setBodyBgColor() {
  refs.body.style.backgroundColor = colors[randomIntegerFromInterval(min, max)];
}