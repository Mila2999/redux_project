class A {
  a;
  constructor(v) {
    this.a = 'family:' + v;
  }
}

class Adapter extends A {
  adaptee;

  constructor(name, familyname) {
    super(familyname);
    this.adaptee = 'name' + name;
  }

  get() {
    return this.adaptee;
  }

  request() {
    const result = this.adaptee.specificRequest().split('').reverse().join('');
    return `Adapter: (TRANSLATED) ${result}`;
  }
}

const x = new Adapter('asda');
const y = new Adapter('andrey');

y.get();
console.log(y.a);
console.log(y.get());
