export default function () {
    interface Alarm {
        alert(): any
    }

    interface Light {
        lightOn(): any

        lightOff(): any
    }

    class Door {

    }

    class SecurityDoor extends Door implements Alarm {
        alert() {
            console.log('SecurityDoor alert')
        }
    }

    class Car implements Alarm, Light {
        alert() {
            console.log('Car alert')
        }

        lightOn() {
            console.log('Car light on')
        }

        lightOff() {
            console.log('Car light off')
        }
    }

    interface LightableAlarm extends Alarm {
        lightOn(): any

        lightOff(): any
    }

    class Point {
        x: number | undefined
        y: number | undefined
    }

    interface Point3d extends Point {
        z: number
    }

    let point3d: Point3d = {x: 1, y: 2, z: 3}

    interface SearchFunc {
        (source: string, subString: string): boolean
    }

    let mySearch: SearchFunc
    mySearch = function (source: string, subString: string) {
        return source.search(subString) !== -1
    }

    interface Counter {
        (start: number): string

        interval: number

        reset(): void
    }

    function getCounter(): Counter {
        let counter = <Counter>function (start: number) {
        }
        counter.interval = 123
        counter.reset = function () {
        }
        return counter
    }

    let c = getCounter()
    c(10)
    c.reset()
    c.interval = 5.0
}
