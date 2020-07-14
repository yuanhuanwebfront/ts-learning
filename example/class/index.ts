//  公有修饰符  默认都为共有变量
{
    class Animal {
        public name:string;
        public constructor(theName:string) {
            this.name = theName
        }
        public move(distance:number){
            console.log('move ' + distance + ' m');
        }
    }

    let dog = new Animal('dog');
    dog.move(20);
}

//  私有修饰符 private
{
    class Animal{
        private name:string;
        constructor(theName:string) {
            this.name = theName;
        }
    }

    class Dog extends Animal{
        constructor(name) {
            super(name);
        }
        say(){
            //  console.log(this.name);     在子类中无法直接访问  error
        }
    }
    let dog = new Dog('Hack');
    console.log(dog);
    //  console.log(dog.name);  error   无法访问
    //  dog.name = 'newCat';    error   无法设置
}

//  protected 修饰的属性不可以在类的外部进行访问   但可以在类的内部进行访问
{
    class Person {
        protected name:string;
        constructor(newName:string) {
            this.name = newName;
        }
    }

    class Employee extends Person{
        private department:string;

        constructor(name:string, department:string) {
            super(name);
            this.department = department;
        }

        public getElevatorPitch():string{
            return `hello my name is {this.name}`;      //  可以访问
        }
    }

    let howard = new Employee('jack', 'Sales');

    console.log(howard.getElevatorPitch());
    // console.log(howard.name);

}

//  protected   可以修饰构造函数  这个类就无法被实例化  但是可以被子类继承
{

    class Person{
        protected name:string;
        protected constructor(personName:string) {
            this.name = personName;
        }
    }

    class Employee extends Person {
        private department:string;
        constructor(name:string, department:string) {
            super(name);
            this.department = department;
        }
        public getElevatorPitch(){
            return `my name is ${this.name} and work is ${this.department}`;
        }
    }

    let man = new Employee('jack', 'Sales');

    //  let p = new Person('Tom');  error  不能被实例化

}

//  readonly    只读属性  只能直接声明或者在构造函数中实例化
{
    class Person {
        readonly name:string;
        readonly age:number = 20;

        constructor(name:string, age:number) {
            this.name = name;
            this.age = age;
        }
    }

    let p = new Person('jack', 20);
    console.log(p.name);
    console.log(p.age);

    //  p.age = 2;  error 不能被修改

}

//  getter/setter  设置数据
{
    class Person {
        private _fullName:string;
        get fullName():string {
            return this._fullName;
        }
        set fullName(newName:string){
            if(newName === '123'){
                console.error('Error: 不能设置为123')
            }else{
                this._fullName = newName;
            }
        }
    }

    let p = new Person();

    p.fullName = 'jack';
    p.fullName = '123';
    console.log(p.fullName);

}