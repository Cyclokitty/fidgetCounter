const counter = require('./counter');

function rotate() {
  var element = document.getElementById('image');
  if (element.className === 'normal') {
    element.className = 'rotate';
  } else if (element.className === 'rotate') {
    element.className = 'normal';
  }
}

const countEl = document.querySelector('#count');
const countBtn = document.querySelector('#countBtn');

counter.onIncremented(({count}) => {
  countEl.textContent = count;
});

countBtn.addEventListener('click', () => {
  counter.increment();
  rotate();
});
