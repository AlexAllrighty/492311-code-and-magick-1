'use strict'
var CLOUD_WIDTH = 400;
var CLOUD_HEIGHT = 250;
var CLOUD_X = 100;
var CLOUD_Y = 50;
var TEXT_WIDTH = 20;
var COLUMN_WIDTH = 20;
var COLUMN_HEIGHT = 180;
var GAP = 20;
var FONT_GAP = 10;
var maxTime;
var timesOrder;

var drawRect = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
}

window.renderStatistics = function (ctx, names, times) {
  var timesOrder = times;
  var getMaxTime = function () {
    for (var i = 1, swap;  i < timesOrder.length; i++) {
      if (timesOrder[i] > timesOrder[i - 1]) {//если первый меньше нулевого
        swap = timesOrder[i];// запиши значение первого в свап
        timesOrder[i] = timesOrder[i - 1];  //запиши в значение первого значение нулевого (изначанльный первый спрятан в свап)
        timesOrder[i - 1] = swap;  //в значение нулевого запиши значение свап, в котором записано изначальное значение первого
        i -= i === 1 ? 1 : 2; //вычитание из индекса (итерации) 1. Если индекс итерации равен 1, то оставляй один, если нет - меняй на 2.
      }
    }
    maxTime = timesOrder[0];
    return maxTime;
  }

  var drawColumns = function () {
    for(var j = 0; j < names.length; j++) {
      ctx.fillStyle = 'black';
      ctx.fillText(names[j], CLOUD_X * j + CLOUD_X + 2 * GAP, CLOUD_Y + GAP + COLUMN_HEIGHT + 2 * FONT_GAP);
      ctx.fillText(Math.floor(times[j]) / 1000  + ' сек', CLOUD_X * j + CLOUD_X + 2 * GAP, CLOUD_Y + GAP - FONT_GAP);
      ctx.fillStyle = (names[j] === 'Вы') ? 'rgba(255, 0, 0, 1)' : 'rgba(0, 0, 255,' + Math.random().toFixed(1) + ')';
      ctx.fillRect(CLOUD_X * j + CLOUD_X +  2 * GAP, CLOUD_Y + GAP + COLUMN_HEIGHT, COLUMN_WIDTH, -(COLUMN_HEIGHT * times[j]/ maxTime));
    }
  }

  drawRect(ctx, CLOUD_X + 10, CLOUD_Y + 10, '#bfbfbf');
  drawRect(ctx, CLOUD_X, CLOUD_Y, '#fff');
  ctx.fillStyle = "black";
  getMaxTime();
  drawColumns();







  }



