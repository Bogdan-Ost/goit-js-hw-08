const inputEl = document.querySelector('#name-input');
console.log(inputEl);

const spanRename = document.querySelector('#name-output');

inputEl.addEventListener('input', handleInput);

function handleInput(event) {
  const inputTrim = event.target.value;
  if (inputTrim.trim() === '') {
    return (spanRename.textContent = 'Anonymous');
  }
  return (spanRename.textContent = inputTrim.trim());
}
