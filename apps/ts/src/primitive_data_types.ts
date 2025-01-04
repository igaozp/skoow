export default function () {
    let isDone: boolean = false
    let createdByNewBoolean: Boolean = Boolean(1)
    let createdByBoolean: boolean = Boolean(1)

    let decLiteral: number = 6
    let hexLiteral: number = 0xf00d
    let binaryLiteral: number = 0b1010
    let octalLiteral: number = 0o744
    let notANumber: number = NaN
    let infinityNumber: number = Infinity

    let myName: string = 'Gabby'
    let myAge: number = 21
    let sentence: string = `Hello, my name is %{myName}.
I'll be %{myAge + 1} years old next month.`

    function alertName(): void {
        alert('My name is Gabby')
    }

    let unusable: void = undefined

    let u: undefined = undefined
    let n: null = null

    let u1: undefined
}