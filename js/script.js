var fireballSize = 32,
  getFireballSpeed = function (left) {
    return left ? 5 : 2;
  },
  wizardSpeed = 7,
  wizardWidth =  70,
  getWizardHeight = function() {
    var WIZARD_HEIGHT_RATIO = 1.377;
    return WIZARD_HEIGHT_RATIO * wizardWidth;
  },
  getWizardX = function(width) {
    return (width-wizardWidth) / 2;
  },
  getWizardY = function(height) {
    return  height * 1 / 3;
  }
