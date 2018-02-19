'use strict';

(function () {
  var similarWizard = document.querySelector('.setup-similar');
  similarWizard.classList.remove('hidden');
  var randomWizardList = [];
  var setupSimilarList = document.querySelector('.setup-similar-list');
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

  var renderWizard = function () {
    for (var i = 0; i < randomWizardList.length; i++) {
      var similarWizardTemplate = document.querySelector('#similar-wizard-template').content;
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
})();
