//prototype을 이용한 문제 ,챗지피티 문제


function Car (make,model) {
    this.make = make;
    this.model = model;
};
Car.prototype.describe = function() {    //매개변수 다시 작성 안해도됨!
return `This is a ${this.make} ${this.model}`} 
 // 문장 전체에 감싸는 이유는 문자열 내에 변수를 포함할 수 있도록 하기 위해서 !!

const car1 = new Car("Toyota", "Corolla");
const car2 = new Car("Honda", "Civic");
console.log(car1.describe()); // "This car is a Toyota Corolla."
console.log(car2.describe()); // "This car is a Honda Civic."