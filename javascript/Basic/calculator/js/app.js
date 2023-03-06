let screen = document.getElementById('screen');

function insert(value) {
  screen.value += value;
}

function clearScreen() {
  screen.value = '';
}

function backspace() {
  screen.value = screen.value.slice(0, -1);
}

function calculate() {
  try {
    screen.value = eval(screen.value);
  } catch (err) {
    screen.value = 'Error';
  }
}
