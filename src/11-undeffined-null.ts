(() => {
    // let myNumber: number = undefined
    // let myNumber: number = null
    
    let myNull: null = null
    let myUndefined: undefined = undefined

    let myNumber: number | null = null
    myNumber = 12
    let myString: string | undefined = undefined
    myString = 'asd'
 

    function hi(name: string | null) {
        let hello = 'Hola'
        if(name){
            hello += name
        } else {
            hello += 'No Body'
        }
        console.log(hello)
    }
function hiV2(name: string | null) {
        let hello = 'Hola'
        hello += name?.toLowerCase || 'No Body'
        console.log(hello)
    }

    hiV2('Sergio')
    hiV2(null)

})()