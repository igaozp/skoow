export default function () {
    function sum(x: number, y: number): number {
        return x + y
    }

    let mySum: (x: number, y: number) => number = function (x: number, y: number) {
        return x + y
    }

    interface SearchFunc {
        (source: string, subString: string): boolean
    }

    let mySearch: SearchFunc
    mySearch = function (source: string, subString: string) {
        return source.search(subString) !== -1
    }

    function buildName(firstName: string, lastName?: string) {
        if (lastName) {
            return firstName + ' ' + lastName
        } else {
            return firstName
        }
    }

    let gabbyKao = buildName('Gabby', 'Kao')
    let gabby = buildName('Gabby')

    function push(array: any[], ...items: number[]) {
        items.forEach(function (item) {
            array.push(item)
        })
    }

    let a: never[] = []
    push(a, 1, 2, 3)

    function reverse(x: number): number

    function reverse(x: string): string

    function reverse(x: number | string): number | string {
        if (typeof x === 'number') {
            return Number(x.toString().split('').reverse().join(''))
        } else {
            return x.split('').reverse().join('')
        }
    }
}