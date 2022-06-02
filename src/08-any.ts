(() => {
    let myDynamicVar: any;
    myDynamicVar = 'string';
    myDynamicVar = 123;
    myDynamicVar = true;
    myDynamicVar = undefined;
    myDynamicVar = null;
 
    myDynamicVar = {};
    myDynamicVar = [];
  
    myDynamicVar = 'Hola'
    const rta = (myDynamicVar as string).toLowerCase();
    console.log('rta', rta);


    myDynamicVar = 588889;
    const rta2 = (<number>myDynamicVar).toFixed(2);
    console.log(rta2)
})()