'use strict';

var popUp = document.querySelector('.setup');
var similarWizard = document.querySelector('.setup-similar');
similarWizard.classList.remove('hidden');
var fragment = document.createDocumentFragment();
var setupSimilarList = document.querySelector('.setup-similar-list')
var similarWizardTemplate = document.querySelector('#similar-wizard-template').content;
var wizardName = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var wizardSurname = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var wizardCoatColor = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var wizardEyesColor = ['black', 'red', 'blue', 'yellow', 'green'];
var randomName;
var randomSurname;
var randomCoatColor;
var randomEyeColor;
var randomWizardList = [];


var getRandomValue = function (arr, randomValue) {
  randomValue = arr[Math.floor(Math.random() * arr.length)]
  return randomValue;
};

var getRandomWizard = function () {
  for (var i = 0; i < 4; i++) {
    var randomWizard = {
      name: getRandomValue(wizardName, randomName) + ' ' + getRandomValue(wizardSurname, randomSurname),
      coatColor: getRandomValue(wizardCoatColor, randomCoatColor),
      eyeColor: getRandomValue(wizardEyesColor, randomEyeColor)
    };
    randomWizardList.push(randomWizard);
  }
  return randomWizardList;
};
getRandomWizard();

var renderWizard = function () {
  for (var i = 0; i < randomWizardList.length; i++) {
    var wizardElement = similarWizardTemplate.cloneNode(true);
    wizardElement.querySelector('.wizard-coat').style.fill = randomWizardList[i].coatColor;
    wizardElement.querySelector('.wizard-eyes').style.fill = randomWizardList[i].eyeColor;
    wizardElement.querySelector('.setup-similar-label').textContent = randomWizardList[i].name;
    fragment.appendChild(wizardElement);
  }
  return fragment;
};

renderWizard();
setupSimilarList.appendChild(fragment);


// Урок2
var showPopupButton = document.querySelector('.setup-open');
var hidePopupButton = popUp.querySelector('.setup-close');
var KEYCODE_ESC = 27;
var KEYCODE_ENTER = 13;
var bigWizardEyes = document.querySelector('.setup-wizard').querySelector('.wizard-eyes');
var bigWizardCoat = document.querySelector('.setup-wizard').querySelector('.wizard-coat');
var bigWizardFireball = document.querySelector('.setup-fireball-wrap');
var bigWizardFireballColor = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];

var onPopupEscPress = function (evt) {
  if (evt.keyCode === KEYCODE_ESC) {
    closePopup();
  }
};

var openPopup = function () {
  popUp.classList.remove('hidden');
  document.addEventListener('keydown', onPopupEscPress);
};


var closePopup = function () {
  popUp.classList.add('hidden');
  document.removeEventListener('keydown', onPopupEscPress);
};

showPopupButton.addEventListener('click', function () {
  openPopup();
});

showPopupButton.addEventListener('keydown', function (evt) {
  if (evt.keyCode === KEYCODE_ENTER) {
    openPopup();
  }
});
hidePopupButton.addEventListener('click', function () {
  closePopup();
});
hidePopupButton.addEventListener('keydown', function () {
  closePopup();
});

var onclickChangeColor = function (object, property) {
  object.addEventListener('click', function () {
    object.style.fill = getRandomValue(property);
  });
};
onclickChangeColor(bigWizardEyes, wizardEyesColor);
onclickChangeColor(bigWizardCoat, wizardCoatColor);


bigWizardFireball.addEventListener('click', function () {
  bigWizardFireball.style.backgroundColor = getRandomValue(bigWizardFireballColor);
});
