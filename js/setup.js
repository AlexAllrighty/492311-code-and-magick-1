'use strict'

var popUp = document.querySelector('.setup');
popUp.classList.remove('hidden');

var wizardName = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var wizardSurname = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var coatColor = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var eyeColor = ['black', 'red', 'blue', 'yellow', 'green'];

var getRandomWizard = function () {
  var randomWizard = {
    var randomWizardName = wizardName[Math.random() * wizardName.length]
  }
  return randomWizard;
}

console.log(randomWizard)




