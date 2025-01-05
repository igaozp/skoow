(() => {
    let myFavouriteNumber: string | number
    myFavouriteNumber = 'three'
    console.log(myFavouriteNumber.length)
    myFavouriteNumber = 3
    console.log(myFavouriteNumber.toString())

    function getString(something: string | number): string {
        return something.toString()
    }

    console.log(getString('Hello World'))
})()