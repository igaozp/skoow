(() => {
    type Name = string
    type NameResolver = () => string
    type NameOrResolver = Name | NameResolver

    function getName(n: NameOrResolver): Name {
        if (typeof n === 'string') {
            return n
        } else {
            return n()
        }
    }

    console.log(getName('John Doe'))
})()