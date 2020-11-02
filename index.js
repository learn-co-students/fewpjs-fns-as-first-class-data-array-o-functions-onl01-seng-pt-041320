var routine = [ wakeDog, leashDog, walkToPark, throwFrisbee, walkHome, unleashDog ]

function exerciseDog(dogName, dogBreed){
    var messages = []
    for (let i = 0; i < routine.length; i++) {
        messages.push(routine[i](dogName, dogBreed));
    }
    return messages
}

function wakeDog(name, breed) {
    var msg = (`Wake ${name} the ${breed}`);
    console.log(msg);
    return msg
}

function leashDog(name, breed) {
    var msg = (`Leash ${name} the ${breed}`);
    console.log(msg);
    return msg
}

function walkToPark(name, breed) {
    var msg = (`Walk to the park with ${name} the ${breed}`);
    console.log(msg);
    return msg
}

function throwFrisbee(name, breed) {
    var msg = (`Throw the frisbee for ${name} the ${breed}`);
    console.log(msg);
    return msg
}

function walkHome(name, breed) {
    var msg = (`Walk home with ${name} the ${breed}`);
    console.log(msg);
    return msg
}

function unleashDog(name, breed) {
    var msg = (`Unleash ${name} the ${breed}`);
    console.log(msg);
    return msg
}