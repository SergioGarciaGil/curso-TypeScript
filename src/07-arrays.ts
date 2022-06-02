(() => {

    let prices = [1, 2, 2, 1, 1, 212, 'hola', true];
    prices.push(121212)

    let product = ['hola1', true]
    product.push(false)
    console.log(product)

    let mixed: (number | string | boolean | object)[] = [1, 'hola', true];
    mixed.push(12);
    mixed.push('hello');
    mixed.push(true);
    mixed.push({});
    mixed.push([])
console.log(mixed)

    let number = [1, 2, 3, 4, 5]
    number.map(item => item * 2)
    console.log(number)
})()