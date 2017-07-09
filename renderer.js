const { ipcRenderer } = require('electron');
const counter = require('./counter');

function rotate() {
  var element = document.getElementById('image');
  if (element.className === 'normal') {
    element.className = 'rotate';
  } else if (element.className === 'rotate') {
    element.className = 'normal';
  }
}

const winCountEl = document.querySelector('#winCount');

ipcRenderer.on('window-count', (event, props) => {
  winCountEl.textContent = props.winCount;
});

ipcRenderer.send('get-window-count');

document.querySelector('#new-window').addEventListener('click', () => {
  ipcRenderer.send('create-window', {
    x: 0,
    y: 0
  });
});

const countEl = document.querySelector('#count');
const countBtn = document.querySelector('#countBtn');

counter.onIncremented(({count}) => {
  countEl.textContent = count;
});

countBtn.addEventListener('click', () => {
  counter.increment();
  rotate();
});
