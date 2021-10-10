// cat, dog, fish - they are pet animals
// rhino, tiger, - they are zoo animals
// bear, fox - they are

var animal = "cat";

switch (animal) {
  case "cat":
  case "dog":
  case "fish":
    console.log("They are pet animals");
    break;

  case "rhino":
  case "tiger":
    console.log("They are zoo animals");
    break;

  case "bear":
  case "fox":
    console.log("They are cold weather animals");
    break;

  default:
    console.log("Select an animal");
}
