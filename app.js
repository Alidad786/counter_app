let counterValue = 0;
const counterElement = document.getElementById('counter');

function increment() {
  counterValue++;
  updateCounter();
}

function decrement() {
  counterValue--;
  updateCounter();
}

function reset() {
  counterValue = 0;
  updateCounter();
}

function updateCounter() {
  counterElement.textContent = counterValue;
}
