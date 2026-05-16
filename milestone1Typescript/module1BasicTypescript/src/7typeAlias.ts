type User = {
    id: number,
    name:{
        firstName: string,
        lastName: string
    },
    gender: 'male' | 'female',
    contactNo: string,
    address: {
        division: string,
        city: string
    }
}
const user1: User = {
    id: 1,
    name: {
        firstName: "John",
        lastName: "Doe"
    },
    gender: "male",
    contactNo: "123-456-7890",
    address: {
        division: "Dhaka",
        city: "Dhaka"
    }
}   
const user2: User = {
    id: 2,
    name: {
        firstName: "Jane",
        lastName: "Smith"
    },
    gender: "female",
    contactNo: "098-765-4321",
    address: {
        division: "Chittagong",
        city: "Chittagong"
    }
}
type isAdmin = true | false
const isAdmin1: isAdmin = true
const isAdmin2: isAdmin = false
type name = string;
const name1: name = "John Doe"

//function type alias
type add = (a: number, b: number) => number
const addNumbers: add = (a, b) => a + b