(() => {
    function reverse(x: number): number

    function reverse(x: string): string

    function reverse(x: number | string): number | string {
        if (typeof x === 'number') {
            return Number(x.toString().split('').reverse().join(''))
        } else {
            return x.split('').reverse().join('')
        }
    }

    interface Alarm {
        price: number

        alert(s: string): string
    }

    interface Alarm {
        weight: number

        alert(s: string, n: number): string
    }
})()