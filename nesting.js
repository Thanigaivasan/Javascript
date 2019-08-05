var animal={};
animal.username="Lion";

animal["tagline"]="I am the King of the Jungle";

var noises=[];
animal.noises=noises;

var noiseArray=["Growl"];

noiseArray.unshift("Grunts");  
noiseArray.push("Roar");    
noiseArray[noiseArray.length]="Purr";

animal.noises=noiseArray;

var animals=[];
animals.push(animal);

var quackers={username: 'DaffyDuck', tagline: "Yippeee", noises:['quack','honk','sneeze','growl']};
animals.push(quackers);

var Roadrunner={username: 'Roadrunner', tagline: "Beep, Beep!", noises:['growl','whine','coo','clack']};
animals.push(Roadrunner);

var pingu={username: 'Pingu', tagline: "noot noot", noises:['nuh nuh','muuh','noot noot']};
animals.push(pingu);

// Beginning of nesting exercise

var friends=[];

friends.push(animals[0].username);
friends.push(animals[1].username);

//console.log(friends);

var relationships={};
relationships.friends=friends;
//console.log(relationships);

var matches=[];
relationships.matches=matches;
// console.log(relationships);

relationships.matches[0]="Simba";
console.log(relationships);

for(i=0;i<animals.length;i++){
    animals[i]['relationships']=relationships;
}

//console.log(animals);