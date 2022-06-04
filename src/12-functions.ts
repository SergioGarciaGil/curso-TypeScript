(() => {
    type Sizes = 'S' | 'M' | 'L' | 'XL';
    function createProductToJson(
        title: string,
        createdAt: Date,
        stock: number,
        size: Sizes //optional por si no se pasa el tamaño del producto no se pasa error
    ) {
        return {
            title,
            createdAt,
            stock,
            size
         }
    }
    const producto1 = createProductToJson('Camiseta1', new Date(), 9, 'XL');
    console.log(producto1)
    // console.log(producto1.title)
    // console.log(producto1.stock)
    // console.log(producto1.size)


    type Sizes1 = 'S' | 'M' | 'L' | 'XL';
    function createProductToJsonV2(
        title: string,
        createdAt: Date,
        stock: number,
        size: Sizes1
    ) {
        return {
            title,
            createdAt,
            stock,
            size
         }
    }
    const producto2 = createProductToJsonV2('Pantalon', new Date(), 12, 'M');
    console.log(producto2)
    // console.log(producto2.title)
    // console.log(producto2.stock)
    // console.log(producto2.size)
})()