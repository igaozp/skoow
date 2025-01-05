(() => {
    class Animal {
        public name
        private age

        public constructor(name: string, age?: number) {
            this.name = name
            this.age = age
        }
    }

    let dog = new Animal('Dog')
    console.log(dog.name)
    dog.name = 'Cat'
    console.log(dog.name)

    class Cat extends Animal {
        constructor(name: string) {
            super(name)
            console.log(this.name)
        }
    }

    abstract class Share {
        public name: string

        public constructor(name: string) {
            this.name = name
        }

        public abstract sayHi: () => any;
    }

    class Circle extends Share {
        public sayHi = () => {
            console.log('My name is ${this.name}')
        };
    }

    let circle: Share = new Circle('circle')
    console.log(circle.sayHi())

})()