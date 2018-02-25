'use strict';

(function () {
  var WIZARD_QUANTITY = 4;
  var similarWizard = document.querySelector('.setup-similar');
  similarWizard.classList.remove('hidden');
  var randomWizardList = [];
  var setupSimilarList = document.querySelector('.setup-similar-list');
  var similarWizardTemplate = document.querySelector('#similar-wizard-template').content;
  var fragment = document.createDocumentFragment();
  var getRandomWizard = function () {
    var wizardName = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
    var wizardSurname = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
    var wizardCoatColor = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
    var wizardEyesColor = ['black', 'red', 'blue', 'yellow', 'green'];
    var randomName;
    var randomSurname;
    var randomCoatColor;
    var randomEyeColor;
    for (var i = 0; i < 4; i++) {
      var randomWizard = {
        name: window.getRandomValue(wizardName, randomName) + ' ' + window.getRandomValue(wizardSurname, randomSurname),
        coatColor: window.getRandomValue(wizardCoatColor, randomCoatColor),
        eyeColor: window.getRandomValue(wizardEyesColor, randomEyeColor)
      };
      randomWizardList.push(randomWizard);
    }
    return randomWizardList;
  };
  getRandomWizard();

  var renderWizard = function (wizard) {
    var wizardElement = similarWizardTemplate.cloneNode(true);
    wizardElement.querySelector('.wizard-coat').style.fill = wizard.colorCoat;
    wizardElement.querySelector('.wizard-eyes').style.fill = wizard.colorEyes;
    wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
    return wizardElement;
  };


  var successHandler = function (wizards) {
    for (var i = 0; i < WIZARD_QUANTITY; i++) {
      fragment.appendChild(renderWizard(wizards[i]));
    }
    setupSimilarList.appendChild(fragment);
  };

  var errorHandler = function (errorMessage) {
    var node = document.createElement('div');
    node.style = 'z-index: 100; margin: 0 auto; text-align: center; background-color: red;';
    node.style.position = 'absolute';
    node.style.left = 0;
    node.style.right = 0;
    node.style.fontSize = '30px';
    node.textContent = errorMessage;
    document.body.insertAdjacentElement('afterbegin', node);
  };

  window.load(successHandler, errorHandler);
})();
