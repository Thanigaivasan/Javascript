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

var sheep = AnimalCreator('Cloud', 'Sheep', 'You can count on me!', ['baahhh', 'arrgg', 'chewchewchew']);

var lion = AnimalCreator('Simba', 'Lion', 'King of the jungle', ['roar', 'growl', 'pur']);

var duck = AnimalCreator('Daffy', 'Duck', 'Yippeee', ['squeaks', 'cock-a-doodle-do', 'quack']);

var addFriend=function(animal,frnd){
    animal.friends.push(frnd.username);
}

addFriend(sheep,lion);
addFriend(sheep,duck);
addFriend(duck,lion);
addFriend(lion,sheep);
addFriend(lion,duck);
addFriend(duck,sheep);


var myfarm=[];
myfarm.push(sheep);
myfarm.push(lion);
myfarm.push(duck);

var addMatchesArray = function(myfarm){
    for(i=0;i<myfarm.length;i++)
    {
       myfarm[i].matches=[];
    } 
}

addMatchesArray(myfarm);

var giveMatches=function(myfarm){
    for(i=0;i<myfarm.length;i++)
    {
        myfarm[i].matches[0]=myfarm[i].friends[0];
    }
}

giveMatches(myfarm);
console.log(myfarm[1]);


