(() => {
    let isEnable = true;
    // isEnable = undefined;
    isEnable = false
 
    let isNew: boolean = false;
    console.log('isEnable', isNew);
    isNew = true
        console.log('isEnable', isNew);
    const random = Math.random();
    console.log('random', random);

    isNew = random > 0.5 ? true : false;
    console.log('isNew', isNew);
})()