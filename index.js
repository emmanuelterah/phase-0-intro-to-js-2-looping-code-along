// Code your solutions in this file

    /*
    beforeEach( () => {
      spy = sinon.spy( console, 'log' );
    } );
  
    afterEach( () => {
      spy.restore();
    } );
    */


    for (let age = 30; age < 40; age++) {
      console.log(`I'm ${age} years old. Happy birthday to me!`);
      debugger;
    }

    const gifts = ["teddy bear", "drone", "doll"];

    function wrapGifts(gifts) {
      for (let i = 0; i < gifts.length; i++) {
        console.log(`Wrapped ${gifts[i]} and added a bow!`);
        debugger;
      }

      return gifts;
    }

    wrapGifts(gifts);


///////////////////////////////////////////////////////////////////////


    const name = ["Guadalupe","Ollie","Aki"];

      function writeCards(names) {
        const messages = [];
        for (const name of names) {
          messages.push(`Thank you, ${name}, for the wonderful surprise gift!`);
        }
        return messages;
      }

      console.log(writeCards(names));

//////////////////////////////////////////////////

    function countDown(num) {
      console.log(`${num}`);
      for (let i = 10 - 1; i >= 0; i--) {
        console.log(i);
      }
    }
    
    countDown(10); 
    countDown(3); 
    
    
    

    
