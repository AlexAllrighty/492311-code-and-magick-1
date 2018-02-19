'use strict';

(function () {
  window.getRandomValue = function (arr, randomValue) {
    randomValue = arr[Math.floor(Math.random() * arr.length)];
    return randomValue;
  };
})();
