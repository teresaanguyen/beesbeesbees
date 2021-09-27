var Bee = function() {

  this.age;
  this.color;

};

Bee.prototype = Object.create(Grub.prototype);
Bee.prototype.age = 5;
Bee.prototype.color = 'yellow';
Bee.prototype.job = 'keep on growing';

Object.defineProperty(Bee.prototype, 'constructor', {
  value: Bee,
  enumerable: false,
  writable: true });