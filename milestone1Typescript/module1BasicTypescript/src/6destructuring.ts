const user = {
    id: 123,
    name: {
        firstName: "John",
        middleName: "Doe",
        lastName: "Smith"
    },
    gender: "male",
    age: 30,
    favouriteColors: ["red", "blue", "green"],
}
const {favouriteColors} = user;
console.log(favouriteColors); // Output: ["red", "blue", "green"]
const {favouriteColors: colors} = user;
console.log(colors);//do not use type here.  using alias for destructured variable, Output: ["red", "blue", "green"]
const {name:{middleName}} = user;
console.log(middleName); // Output: "Doe"

//array destructuring
const friendss = ["Alice", "Bob", "Charlie"];
const [, , thirdFriend] = friendss;
console.log(thirdFriend); // Output: "Charlie"