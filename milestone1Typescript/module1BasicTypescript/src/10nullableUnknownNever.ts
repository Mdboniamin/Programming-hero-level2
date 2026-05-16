//nullable types

const getUser = (input: string | null) => {
    if (input) {
        console.log(`From DB: ${input}`);
    } else {
        console.log('From DB: All users');
    }
};

getUser("John Doe") // From DB: John Doe
getUser(null) // From DB: All users

//unknown type
const discountcalculator = (input: unknown) => {
    if (typeof input === "number") {
        console.log(`${input}% discount`);
    } else if (typeof input === "string") {
        const [discount] = input.split(" ");
        console.log(`${discount}% discount`);
    } else {
        console.log("Invalid input");
    }
};

discountcalculator(10) // 10% discount
discountcalculator("10 TK") // 10% discount
discountcalculator(null) // Invalid input

//void

const throwError = (msg: string): never => {
    throw new Error(msg);
}

throwError("This is an error message"); // This will throw an error with the message "This is an error message"