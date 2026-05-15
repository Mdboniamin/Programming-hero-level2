const friends = ["Alice", "Bob", "Charlie"];
const newFriends = ["David", "Eve"];
const collegeFriends = ["Frank", "Grace"];
// Using spread operator to combine arrays
const allFriends = [...friends, ...newFriends, ...collegeFriends];
console.log(allFriends); // Output: ["Alice", "Bob", "Charlie", "David", "Eve", "Frank", "Grace"]

const user = { name: "John",
 age: 30,
 city: "New York" };
const otherInfo = { occupation: "Developer", company: "Tech Inc." };
// Using spread operator to combine objects
const completeUserInfo = { ...user, ...otherInfo };
console.log(completeUserInfo); 
// Output: { name: "John", age: 30, city: "New York", occupation: "Developer", company: "Tech Inc." }
//rest operator
const sendInvite = (...friends: string[])=>{
    friends.forEach((friend: string) => {
        console.log(`Inviting ${friend} to the party!`);
    });
}
sendInvite("Alice", "Bob", "Charlie"); // Output: Inviting Alice, Bob, and Charlie to the party!