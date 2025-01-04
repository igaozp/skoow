export default function () {
    let gabby: [string, number] = ['Gabby Kao', 21]

    let kao: [string, number] = ['', 0]
    kao[0] = 'Gabby Kao'
    kao[1] = 21

    kao[0].slice(1)
    kao[1].toFixed(2)

    let person: [string, number, string]
    person = ['Trump', 66, 'Make America great again.']
    console.log(person)
}