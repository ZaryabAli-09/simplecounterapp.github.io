'use strict';
let count = 0;
document.querySelector('.add-count').addEventListener('click', function () {
  count = count + 1;
  document.querySelector('.counter').textContent = count;
});
document.querySelector('.lower-count').addEventListener('click', function () {
  count = count - 1;
  document.querySelector('.counter').textContent = count;
});
document.querySelector('.reset').addEventListener('click', function () {
  location.reload();
});
