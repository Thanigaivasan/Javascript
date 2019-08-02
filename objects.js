//objects excercise
//Question in bit.ly/js102-exercises

var animal={};
animal.username="Lion";
console.log(animal.username);

animal["tagline"]="I am the King of the Jungle";
console.log(animal["tagline"]);

var noises=[];
animal.noises=noises;
console.log(animal);

var count=0;
for(var key in animal){
    count++;
    if(key === "username")
    {
        console.log("Hi my name is "+animal[key]);
    }
    else if(key === "tagline")
    {
        console.log("I like to say "+animal[key]);
    }
}

