// #1 - expect(wakeDog(a,b)).to.equal(`Wake ${a} the ${b}`)

let wakeDog = (dogName, dogBreed) => {
    let xerox = (`Wake ${dogName} the ${dogBreed}`);
    console.log(xerox);
    return xerox;
  };

// #2 - expect(leashDog(a, b)).to.equal(`Leash ${a} the ${b}`)

let leashDog = (dogName, dogBreed) => {
    let boo = (`Leash ${dogName} the ${dogBreed}`);
    console.log(boo);
    return boo;
 };

 // #3 - expect(walkToPark(a, b)).to.equal(`Walk to the park with ${a} the ${b}`)

 let walkToPark = (dogName, dogBreed) => {
    let bunny = (`Walk to the park with ${dogName} the ${dogBreed}`);
    console.log(bunny);
    return bunny;
 };

  // #4 - expect(throwFrisbee(a, b)).to.equal(`Throw the frisbee for ${a} the ${b}`)

    let throwFrisbee = (dogName, dogBreed) => { 
        let mary = (`Throw the frisbee for ${dogName} the ${dogBreed}`);
        console.log(mary);
        return mary;
    };

  // #5 - expect(walkHome(a, b)).to.equal(`Walk home with ${a} the ${b}`)

    let walkHome = (dogName, dogBreed) => {
        let santa = (`Walk home with ${dogName} the ${dogBreed}`);
        console.log(santa);
        return santa;
    };

  // #6 - expect(unleashDog(a, b)).to.equal(`Unleash ${a} the ${b}`)
  let unleashDog = (dogName, dogBreed) => {
        let lauren = (`Unleash ${dogName} the ${dogBreed}`);
        console.log(lauren);
        return lauren;
    };

  // #7 - expect(routine).to.include(wakeDog,leashDog,walkToPark,throwFrisbee,walkHome,unleashDog);

  const routine = [wakeDog,leashDog, walkToPark, throwFrisbee, walkHome, unleashDog]
   
  let exerciseDog = (dogName, dogBreed) => {
    return routine.map(func => func(dogName, dogBreed))
   };
