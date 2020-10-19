function wakeDog(dogName, dogBreed) {
   let waking = `Wake ${dogName} the ${dogBreed}`;
    console.log(waking);
    return waking; 
}

function leashDog(dogName, dogBreed) {
    let leashing = `Leash ${dogName} the ${dogBreed}`;
    console.log(leashing);
    return leashing;
}

function walkToPark(dogName, dogBreed) {
    let park = `Walk to the park with ${dogName} the ${dogBreed}`
    console.log(park);
    return park;
}

function throwFrisbee(dogName, dogBreed) {
    let frisbee = `Throw the frisbee for ${dogName} the ${dogBreed}`;
    console.log(frisbee);
    return frisbee;
}

function walkHome(dogName, dogBreed) {
    let home = `Walk home with ${dogName} the ${dogBreed}`;
    console.log(home);
    return home;
}

function unleashDog(dogName, dogBreed) {
    let unleash = `Unleash ${dogName} the ${dogBreed}`;
    console.log(unleash);
    return unleash;
}

const routine = [wakeDog, leashDog, walkToPark, throwFrisbee, walkHome, unleashDog]

function exerciseDog(dogName, dogBreed) {
    return routine.map(fn => fn(dogName, dogBreed));
    }
