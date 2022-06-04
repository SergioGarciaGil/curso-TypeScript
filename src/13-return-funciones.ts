(() => {
    const calcTotal = (prices: number[]):string => { 
        let total = 0
        prices.forEach(item => { 
            total += item
        })
        return total.toString()
    }
    const rta = calcTotal([1, 2, 3, 4, 5])
    console.log(rta)
})()