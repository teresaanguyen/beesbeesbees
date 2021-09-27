var ForagerBee = function() {
  this.age;
  this.job;
  this.canFly;
  this.treasureChest;
};

ForagerBee.prototype = Object.create(Bee.prototype);
ForagerBee.prototype.age = 10;
ForagerBee.prototype.job = 'find pollen';
ForagerBee.prototype.canFly = true;
ForagerBee.prototype.treasureChest = [];

ForagerBee.prototype.forage = function() {
  this.treasureChest.push('treasure');
};

Object.defineProperty(ForagerBee.prototype, 'constructor', {
  value: ForagerBee,
  enumerable: false,
  writable: true });