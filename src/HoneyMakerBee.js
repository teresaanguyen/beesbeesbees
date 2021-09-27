var HoneyMakerBee = function() {
  this.age;
  this.job;
  this.honeyPot;
};

HoneyMakerBee.prototype = Object.create(Bee.prototype);
HoneyMakerBee.prototype.age = 10;
HoneyMakerBee.prototype.job = 'make honey';
HoneyMakerBee.prototype.honeyPot = 0;

HoneyMakerBee.prototype.makeHoney = function() {
  this.honeyPot++;
};

HoneyMakerBee.prototype.giveHoney = function() {
  this.honeyPot--;
};

Object.defineProperty(HoneyMakerBee.prototype, 'constructor', {
  value: HoneyMakerBee,
  enumerable: false,
  writable: true });