(() => {

    let userId: string | number;
    userId = 'hell';
    userId = 123;

    function greeting(myText: string | number){
     if(typeof myText === 'string'){
         console.log(`string ${myText}`);
     } else {
         console.log(`number ${myText.toFixed(1)}`);
     }
     }
    

    greeting('hello');
    greeting(123);

})()