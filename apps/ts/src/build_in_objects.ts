(() => {
    let b: Boolean = Boolean(1)
    let e: Error = new Error('Error occurred')
    let d: Date = new Date()
    let r: RegExp = /[a-z]/

    console.table([b, e, d, r])
})()