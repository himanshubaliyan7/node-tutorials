import generateName from "sillyName";
import { randomSuperhero } from "superHeroes";

const heroName = randomSuperhero();

console.log(`My Name is ${generateName()}`);
console.log(`I am ${heroName}`);