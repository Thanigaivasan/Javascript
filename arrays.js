// continuation of object exercise

var animal={};
animal.username="Lion";
//console.log(animal.username);

animal["tagline"]="I am the King of the Jungle";
//console.log(animal["tagline"]);

var noises=[];
animal.noises=noises;
//console.log(animal);

var count=0;
for(var key in animal){
    count++;
    if(key === "username")
    {
        //console.log("Hi my name is "+animal[key]);
    }
    else if(key === "tagline")
    {
        //console.log("I like to say "+animal[key]);
    }
}

var noiseArray=["Growl"];

noiseArray.unshift("Grunts");  //to add at the beginning
noiseArray.push("Roar");    //to add the end
noiseArray[noiseArray.length]="Purr";

console.log(noiseArray.length);
console.log(noiseArray[noiseArray.length-1]);

animal.noises=noiseArray;
console.log(animal);

var animals=[];
animals.push(animal);

var quackers={username: 'DaffyDuck', tagline: "Yippeee", noises:['quack','honk','sneeze','growl']};
animals.push(quackers);

var Roadrunner={username: 'Roadrunner', tagline: "Beep, Beep!", noises:['growl','whine','coo','clack']};
animals.push(Roadrunner);

var pingu={username: 'Pingu', tagline: "noot noot", noises:['nuh nuh','muuh','noot noot']};
animals.push(pingu);

console.log(animals.length);
console.log(animals);