//A
/* const car = {
  brand: "Nissan",
  getBrand: function(){
    console.log(this.brand);
  }
};
 
const getCarBrand = car.getBrand;
 
getCarBrand();*/   // output undefined

//B
/*
const car = {
  brand: "Nissan",
  getBrand: function(){
    console.log(this.brand);
  }
};
const getCarBrand = car.getBrand.bind(car);
getCarBrand();*/   // output: Nissan

//C
/*
  <button id="btn" type="button">Get the car's brand</button>
 
  const car = {
    brand: "Nissan",
    getBrand: function(){
      console.log(this.brand);
    }
  };
  
  const el = document.getElementById("btn");
  el.addEventListener("click", car.getBrand);

  Ten eerste krijg je zo alleen de functie GetBrand(). Deze zut aan de knop vast. This is dus 'el'. 
 */

 //D
 /*
  const car = {
    brand: "Nissan",
    getBrand: function(){
      const printBrandName = function(){
        console.log(this.brand);
      };
      return printBrandName();
    }
  };
  
  car.getBrand();

  printBrandName zal undefined zijn omdat de scope van printBrandName geen toegang heeft tot de this van de bovenliggende functie. this is hier het window object.
  */

  //D.2
  /*
    const car = {
    brand: "Nissan",
    getBrand: function(){
      const printBrandName = function(){
        console.log(this.brand);
      }.bind(this);
      return printBrandName();
    }
  };
 
  car.getBrand();   // output: Nissan

  Het keyword this refereert nu aan het car object. Door this te binden aan het car object heb je nu toegang tot de brand property
   */

   //E
   /*
    var car = {
    brand: "Nissan",
    getBrand: function(){
      // the arrow function keeps the scope of "this" accessible.
      const printBrandName = () => {   
      // const self = this; deze regel heb je niet meer nodig. 
        console.log(this.brand);
      };
      return printBrandName();
    }
  };
  
  car.getBrand();   // output: Nissan

  Arrow functies behouden de scope van de parent elementen en hebben geen eigen this.
    */
