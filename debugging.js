const array = [
    { name: "N. Armstrong", profession: "spacecowboy", age: 89 },
    { name: "H. de Haan", profession: "kippen hypnotiseur", age: 59 },
    { name: "A. Curry", profession: "kikvorsman", age: 32 },
    { name: "F. Vonk", profession: "slangenmelker", age: 36 },
    { name: "B. Bunny", profession: "konijnen uitlaatservice", age: 27 },
    { name: "Dr.Evil", profession: "digital overlord", age: 56 }
  ];
  
  for (let person of array) {
    //1. hoe ziet elk object er uit?
    console.log("Dit is de gehele persoon:", person);

    //2. log enkele namen
    console.log("Dit is naam:", person.name);

    //3. Log het geboortejaar (dus niet de leeftijd) voor ieder persoon
    console.log("De geboortejaar is", (2021 - person.age));

    //4. Log alle namen + beroep
    console.log( person.name, "is", person.profession);

    //5. Plaats een if statement in de loop die checkt of een persoon ouder is dan 50 jaar
    if (person.age > 50){
        console.log(person.name, person.age)
    }
}