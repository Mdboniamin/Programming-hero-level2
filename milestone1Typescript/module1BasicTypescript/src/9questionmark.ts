//? : ternary operator: decision making operator
//?? : nullish coalescing operator: used to provide a default value when the left-hand side is null or undefined
//?. optional chaining operator: used to access properties or call methods on an object that may be null or undefined without causing an error

const EligibleMarraige = (age: number) => {
    if (age >= 18) {
        return "Eligible for Marraige"
    } else {
        return "Not Eligible for Marraige"
    }
};
EligibleMarraige(25) // Eligible for Marraige
//using ternary operator
const EligibleMarraigeTernary = (age: number) => {
    return age >= 18 ? "Eligible for Marraige" : "Not Eligible for Marraige"
};
const result = EligibleMarraigeTernary(25) // Eligible for Marraige
//nullish coalescing operator
const userTheme = undefined;
const selectedTheme = userTheme ?? "light";
console.log(selectedTheme)
//optional chaining operator

const user: {
    address: {
        city: string;
        town: string;
        postalCode?: number;
    };
} = {
    address: {
        city: "Dhaka",
        town: "Dhanmondi"
    }
};
const postalCode = user?.address?.postalCode;
console.log(postalCode) // Postal code not available