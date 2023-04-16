import * as animals from "./animals.json";

// 1. How many animals have hair?

const animalsWithHairCount = animals.filter((a: Animal) => a.hair !== 0).length;

console.log("1. How many animals have hair?", animalsWithHairCount);

// 2. List the names of the aquatic animals

const aquaticAnimalNames = animals.filter((a: Animal) => a.aquatic === 1).map((a: Animal) => a.animal_name);

console.log("2. List the names of the aquatic animals", aquaticAnimalNames);

// 3. What is the average number of times the letter "a" appears in the names of aquatic animals?

const aquaticAnimalLetterCounts = animals.filter((a: Animal) => a.aquatic === 1).map((a: Animal) => a.animal_name.match(/a/gi)?.length ?? 0);

let aquaticAnimalLetterAverage = 0;

if (aquaticAnimalLetterCounts.length !== 0)
  aquaticAnimalLetterAverage = aquaticAnimalLetterCounts.reduce((total: number, value: number) => total + value, 0) / aquaticAnimalLetterCounts.length;

console.log('3. What is the average number of times the letter "a" appears in the names of aquatic animals?', aquaticAnimalLetterAverage);

// 4. What is the type of the data in animals.json?

interface Animal {
  animal_name: string;
  hair: number;
  feathers: number;
  eggs: number;
  milk: number;
  airborne: number;
  aquatic: number;
  predator: number;
  toothed: number;
  backbone: number;
  breathes: number;
  venomous: number;
  fins: number;
  legs: number;
  domestic: number;
  catsize: number;
  class_type: number;
}

console.log("4. What is the type of the data in animals.json?", "View in code");

// 5. Which of the answers below is not correct and why is it not correct?

console.log("5. Which of the answers below is not correct and why is it not correct?");
console.log("Answer 1 equals 1 so that is correct and Answer 3 equals 0.9 so that is correct so that means Answer 2 must be incorrect");

const wrongAquaticAnimalNames = [
  "alligator",
  "anchovy",
  "barracuda",
  "crocodile",
  "dart frog",
  "firebelly",
  "flounder",
  "gharial",
  "halibut",
  "jellyfish",
  "mackerel",
  "marlin",
  "salamander",
  "scallop",
  "siren",
  "squid",
  "tree frog",
  "trout",
  "wart toad",
];

const addedNames = aquaticAnimalNames.filter((a: string) => wrongAquaticAnimalNames.indexOf(a) === -1);

if (addedNames.length !== 0) console.log("The following names have been incorrectly included in the list:", addedNames);

const missingNames = wrongAquaticAnimalNames.filter((a: string) => aquaticAnimalNames.indexOf(a) === -1);

if (missingNames.length !== 0) console.log("The following names are missing from the list:", missingNames);
