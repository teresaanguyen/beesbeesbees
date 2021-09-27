var RetiredForagerBee = function() {
  this.age;
  this.job;
  this.canFly;
  this.color;
  this.treasureChest = [];
};

RetiredForagerBee.prototype = Object.create(ForagerBee.prototype);
RetiredForagerBee.prototype.age = 40;
RetiredForagerBee.prototype.job = 'gamble';
RetiredForagerBee.prototype.canFly = false;
RetiredForagerBee.prototype.color = 'grey';

RetiredForagerBee.prototype.forage = function() {
  return 'I am too old, let me play cards instead';
};

RetiredForagerBee.prototype.gamble = function() {
  this.treasureChest.push('treasure');
};


Object.defineProperty(RetiredForagerBee.prototype, 'constructor', {
  value: RetiredForagerBee,
  enumerable: false,
  writable: true });