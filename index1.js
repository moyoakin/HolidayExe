function iceCream(flav,spri){
    let flavour = flav;
    let sprinkle = spri;
    let sweetness = {
    Plain:  0 ,    
    Vanilla:    5,
    ChocolateChip:  5,
    Strawberry: 10,
    Chocolate:  10
    }
    
    return function (){
        return  sprinkle + sweetness[flavour]
    }
}

ice1 = iceCream("Chocolate", 13);
ice2 = iceCream("Vanilla", 13);
ice3 = iceCream("Plain", 3);
ice4 = iceCream("ChocolateChip", 13);
ice5 = iceCream("Strawberry", 0);
ice6 = iceCream("Vanilla", 20);
ice7 = iceCream("Vanilla", 5);


function sweetessIceCream(params){
  console.log(Math.max(...params));
}

sweetessIceCream([ice1(), ice2(), ice3(), ice4(), ice5(), ice6(), ice7()]);
