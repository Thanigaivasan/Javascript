var AnimalTestUser=function(username){
    var args=[]
    if(arguments.length>1){
        for(i=1;i<arguments.length;i++)
        {
            args.push(arguments[i]);
        }
        return{
            'username':username,
            'otherArgs':args
        };
    }
    else{
        return{
            'username':username
        };
    }
};

// var myAnimal=AnimalTestUser("Lion","Tiger","Sheep");
// console.log(myAnimal);

var AnimalCreator=function(username,species,tagline,noises){
    return{
        'username':username,
        'species':species,
        'tagline':tagline,
        'noises':noises,
        'friends':[]
    };   
}

var sheep = AnimalCreator('Cloud', 'sheep', 'You can count on me!', ['baahhh', 'arrgg', 'chewchewchew']);
console.log(sheep);

var Lion = AnimalCreator('Cloud', 'sheep', 'You can count on me!', ['baahhh', 'arrgg', 'chewchewchew']);
console.log(Lion);

var addFriend=function(animal,frnd){
    animal.friends.push(frnd.species);
}

addFriend(sheep,Lion);
console.log(sheep);

//yet to complete
