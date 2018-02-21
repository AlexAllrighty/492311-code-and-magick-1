'use strict';

(function () {
  var dragHandler = window.popUp.querySelector('.upload');

  dragHandler.addEventListener('mousedown', function (evt) {
    evt.preventDefault();
    var startCoords = {
      x: evt.clientX,
      y: evt.clientY
    };

    var dragged = false;

    var onMouseMove = function (moveEvt) {
      moveEvt.preventDefault();


      var shift = {
        x: startCoords.x - moveEvt.clientX,
        y: startCoords.y - moveEvt.clientY
      };

      startCoords = {
        x: moveEvt.clientX,
        y: moveEvt.clientY
      };

      window.popUp.style.top = (window.popUp.offsetTop - shift.y) + 'px';
      window.popUp.style.left = (window.popUp.offsetLeft - shift.x) + 'px';
    };
    var onMouseUp = function (upEvt) {
      dragged = true;
      upEvt.preventDefault();

      if (dragged) {
        var onClickPreventDefault = function (event) {
          event.preventDefault();
          dragHandler.removeEventListener('click', onClickPreventDefault);
        };
        dragHandler.addEventListener('click', onClickPreventDefault);
      }
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseup', onMouseUp);
    };

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
  });


  var artefactsInBag = window.popUp.querySelector('.setup-artifacts');
  var artefactsInShop = window.popUp.querySelector('.setup-artifacts-shop');
  var artefactsCell = artefactsInBag.querySelectorAll('.setup-artifacts-cell');


  var draggedItem = null;

  artefactsInShop.addEventListener('dragstart', function (evt) {
    if (evt.target.tagName.toLowerCase() === 'img') {
      draggedItem = evt.target;
      evt.dataTransfer.setData('text/plain', evt.target.alt);
      for (var i = 0; i < artefactsCell.length; i++) {
        artefactsCell[i].style.outline = '2px dashed red';
      }
    }
  });

  artefactsInShop.addEventListener('dragend', function () {
    for (var i = 0; i < artefactsCell.length; i++) {
      artefactsCell[i].style.outline = '';
    }
  });
  artefactsInBag.addEventListener('dragover', function (evt) {
    evt.preventDefault();
    return false;
  });

  artefactsInBag.addEventListener('drop', function (evt) {
    evt.target.style.backgroundColor = '';
    evt.target.appendChild(draggedItem);
    evt.preventDefault();
    for (var i = 0; i < artefactsCell.length; i++) {
      artefactsCell[i].style.outline = '';
    }
  });

  artefactsInBag.addEventListener('dragend', function (evt) {
    evt.preventDefault();
    for (var i = 0; i < artefactsCell.length; i++) {
      artefactsCell[i].style.outline = '';
    }
  });

  artefactsInBag.addEventListener('dragenter', function (evt) {
    evt.target.style.backgroundColor = 'yellow';
    evt.preventDefault();
  });

  artefactsInBag.addEventListener('dragleave', function (evt) {
    evt.target.style.backgroundColor = '';
    evt.preventDefault();
  });
})();
