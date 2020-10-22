function wakeDog(name, breed){
    return `Wake ${name} the ${breed}`;
}

function leashDog(name, breed){
    return `Leash ${name} the ${breed}`;
}

function walkToPark(name, breed){
    return `Walk to the park with ${name} the ${breed}`;
}

function throwFrisbee(name, breed){
    return  `Throw the frisbee for ${name} the ${breed}`;
}

function walkHome(name, breed){
    return `Walk home with ${name} the ${breed}`;
}

function unleashDog(name, breed){
    return `Unleash ${name} the ${breed}`;
}

const routine = [wakeDog, leashDog, walkToPark, throwFrisbee, walkHome, unleashDog];

function exerciseDog(dogName, dogBreed){
    let messages = [];

    let x = routine[0](dogName, dogBreed);
    let x1 = routine[1](dogName, dogBreed);
    let x2 = routine[2](dogName, dogBreed);
    let x3 = routine[3](dogName, dogBreed);
    let x4 = routine[4](dogName, dogBreed);
    let x5 = routine[5](dogName, dogBreed);

    messages.push(x);
    messages.push(x1);
    messages.push(x2);
    messages.push(x3);
    messages.push(x4);
    messages.push(x5);

    return messages;
}