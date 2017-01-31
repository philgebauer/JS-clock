var app = angular.module('myApp', []);
console.log(angular.element(document).find('.second-hand'));


app.controller('clocksController', function($scope, $document) {
 console.log('clocks controller running!');

const secondHand = angular.element(document).find('second-hand');
console.log(angular.element(document).find('second-hand'));
const minsHand = angular.element(document).find('min-hand');
const hourHand = angular.element(document).find('hour-hand');

function setDate() {
  const now = new Date();

  const seconds = now.getSeconds();
  const secondsDegrees = ((seconds / 60) * 360) + 90;
  secondHand.style.transform = `rotate(${secondsDegrees}deg)`;


  const mins = now.getMinutes();
  const minsDegrees = ((mins / 60) * 360) + ((seconds / 60) * 6) + 90;
  minsHand.style.transform = `rotate(${minsDegrees}deg)`;

  const hour = now.getHours();
  const hourDegrees = ((hour / 12) * 360) + ((mins / 60) * 30) + 90;
  hourHand.style.transform = `rotate(${hourDegrees}deg)`;
    }


setInterval(setDate, 1000);

setDate();


});
