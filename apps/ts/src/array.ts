export default function () {
    let fibonacci: number[] = [1, 1, 2, 3, 5]
    fibonacci.push(8)

    let array: Array<number> = [1, 1, 2, 3, 5]

    interface NumberArray {
        [index: number]: number
    }

    let num: NumberArray = [1, 1, 2, 3, 5]

    let list: any[] = ['Gabby', 21, {website: 'https://igaozp.me'}]

    function sum() {
        let args: IArguments = arguments
    }
}