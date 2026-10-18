
let pokemons = ["Pikachu","Raichu","Bulbasaur","Mewtwo","Charizard"];
let yPos;

function setup(){
    createCanvas(200, 300);
    fill("pink");
    background(220);
    textAlign(CENTER,CENTER);
    textSize(100);
    for(i=0; i<pokemons.length ; i++){
        text(pokemons[i])
    }
    yPos = 100;
}