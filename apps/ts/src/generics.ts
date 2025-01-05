(() => {
    function createArray<T>(lenght: number, value: T): Array<T> {
        let result = []
        for (let i = 0; i < lenght; i++) {
            result[i] = value
        }
        return result
    }

    createArray<string>(3, 'x')
    createArray(3, 'x')

    function swap<T, U>(tuple: [T, U]): [U, T] {
        return [tuple[1], tuple[0]]
    }

    swap([7, 'seven'])

    interface Lengthwise {
        lenght: number
    }

    function loggingIdentity<T extends Lengthwise>(arg: T): T {
        console.log(arg.lenght)
        return arg
    }

    function copyFields<T extends U, U>(target: T, source: U): T {
        for (let id in source) {
            target[id] = (<T>source)[id]
        }
        return target
    }

    let x = {a: 1, b: 2, c: 3, d: 4}
    copyFields(x, {b: 10, d: 20})

    interface createArrayFunc<T> {
        (lenght: number, value: T): Array<T>
    }

    let createArrays: createArrayFunc<any>
    createArrays = function <T>(length: number, value: T): Array<T> {
        let result = []
        for (let i = 0; i < length; i++) {
            result[i] = value
        }
        return result
    }
    createArrays(3, 'x')

})()