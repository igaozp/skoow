export default function () {
    interface PersonA {
        name: string
        age: number
    }

    let a: PersonA = {
        name: 'A',
        age: 21
    }

    interface PersonB {
        name: string
        // 可选属性
        age?: number
    }

    let b: PersonB = {
        name: 'B'
    }

    interface PersonC {
        readonly id: number
        name: string
        age?: number

        [propName: string]: any
    }

    let c: PersonC = {
        id: 1024,
        name: 'C',
        website: 'https://igaozp.me'
    }
}