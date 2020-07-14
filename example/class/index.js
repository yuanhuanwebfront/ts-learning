var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
//  公有修饰符  默认都为共有变量
{
    var Animal = /** @class */ (function () {
        function Animal(theName) {
            this.name = theName;
        }
        Animal.prototype.move = function (distance) {
            console.log('move ' + distance + ' m');
        };
        return Animal;
    }());
    var dog = new Animal('dog');
    dog.move(20);
}
//  私有修饰符 private
{
    var Animal = /** @class */ (function () {
        function Animal(theName) {
            this.name = theName;
        }
        return Animal;
    }());
    var Dog = /** @class */ (function (_super) {
        __extends(Dog, _super);
        function Dog(name) {
            return _super.call(this, name) || this;
        }
        Dog.prototype.say = function () {
            //  console.log(this.name);     在子类中无法直接访问  error
        };
        return Dog;
    }(Animal));
    var dog = new Dog('Hack');
    console.log(dog);
    //  console.log(dog.name);  error   无法访问
    //  dog.name = 'newCat';    error   无法设置
}
//  protected 修饰的属性不可以在类的外部进行访问   但可以在类的内部进行访问
{
    var Person = /** @class */ (function () {
        function Person(newName) {
            this.name = newName;
        }
        return Person;
    }());
    var Employee = /** @class */ (function (_super) {
        __extends(Employee, _super);
        function Employee(name, department) {
            var _this = _super.call(this, name) || this;
            _this.department = department;
            return _this;
        }
        Employee.prototype.getElevatorPitch = function () {
            return "hello my name is {this.name}"; //  可以访问
        };
        return Employee;
    }(Person));
    var howard = new Employee('jack', 'Sales');
    console.log(howard.getElevatorPitch());
    // console.log(howard.name);
}
//  protected   可以修饰构造函数  这个类就无法被实例化  但是可以被子类继承
{
    var Person = /** @class */ (function () {
        function Person(personName) {
            this.name = personName;
        }
        return Person;
    }());
    var Employee = /** @class */ (function (_super) {
        __extends(Employee, _super);
        function Employee(name, department) {
            var _this = _super.call(this, name) || this;
            _this.department = department;
            return _this;
        }
        Employee.prototype.getElevatorPitch = function () {
            return "my name is " + this.name + " and work is " + this.department;
        };
        return Employee;
    }(Person));
    var man = new Employee('jack', 'Sales');
    //  let p = new Person('Tom');  error  不能被实例化
}
//  readonly    只读属性  只能直接声明或者在构造函数中实例化
{
    var Person = /** @class */ (function () {
        function Person(name, age) {
            this.age = 20;
            this.name = name;
            this.age = age;
        }
        return Person;
    }());
    var p = new Person('jack', 20);
    console.log(p.name);
    console.log(p.age);
    //  p.age = 2;  error 不能被修改
}
//  getter/setter  设置数据
{
    var Person = /** @class */ (function () {
        function Person() {
        }
        Object.defineProperty(Person.prototype, "fullName", {
            get: function () {
                return this._fullName;
            },
            set: function (newName) {
                if (newName === '123') {
                    console.error('Error: 不能设置为123');
                }
                else {
                    this._fullName = newName;
                }
            },
            enumerable: false,
            configurable: true
        });
        return Person;
    }());
    var p = new Person();
    p.fullName = 'jack';
    p.fullName = '123';
    console.log(p.fullName);
}
