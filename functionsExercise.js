function fozzieBear(a) {
    console.log("Wocka Wocka!");
}

function beaker(speak) {
    console.log(`${speak}`);
    console.log(`${speak}`);
    console.log(`${speak}`);
    console.log(`${speak}`);
}

beaker("Meep");

function muppetShow(a,b){
    if (a == "Muppet" && b == "Show"){
        console.log("It's time to play the music. It's time to light the lights.");
    }
}


function kermit() {
   return  "Kermit The Frog"
}

function muppetShowSeasons (seasons) {
    if(seasons == 5){
        return true;
    }else{
        return false;
    };
}

const manOrMuppet = function(){
    return "Am I a man or am I a Muppet?";
};

const rainbowConnection = () => "Someday we'll find it. The Rainbow Connection. The lovers, the dreamers and me";

// 8. no
// 9. yes

const newMuppetMovies = [
    "The Muppets",
    "Muppets Most Wanted"
]

const upperMovies = newMuppetMovies.map(function(movie){
    return movie.toUpperCase
    ();
})

const oldMuppetMovies = [
    "The Muppet Movie",
    "The Muppets Take Manhattan", 
    "The Great Muppet Caper", 
    "The Muppet Christmas Carol", 
    "Muppet Treasure Island", 
    "Muppets From Space"
]

const twoMovies = oldMuppetMovies.filter(movie =>{
    return movie === "The Great Muppet Caper" || movie === "Muppet Treasure Island";
});

const charactersOne = [
    "Statler",
    "Waldorf"
]

const charactersTwo = [
    "The Swedish Chef",
    "Animal",
    "Rowlf"
]

const randomMuppet = (characters) => {
    const randNum = Math.floor(Math.random() * characters.length); 
    console.log(characters[randNum]);
}

randomMuppet(charactersOne)
randomMuppet(charactersTwo)

const caps = string => {
    let newString = "";
    for(i=0; i<string.length; i++){
        if(i%2 == 0){
            newString += string[i].toUpperCase();
        }else if (string[i] === " ") {
            newString += " ";
        } else{
            newString += string[i].toLowerCase();
        }
    }
    console.log(newString);
}

caps("hello")