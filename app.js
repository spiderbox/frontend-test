const button = document.querySelector('button');
const text = document.querySelector('#text');

const handleClick = () => {
  let count = 3;
  let i = setInterval(() => {
    text.innerText = `Redirect after ${--count} ${count > 1 ? 'seconds' : 'second'}`;

    if (count < 0) {
      text.innerText = '';
      clearInterval(i);
    }
  }, 1000);
}

button.addEventListener('click', handleClick);
