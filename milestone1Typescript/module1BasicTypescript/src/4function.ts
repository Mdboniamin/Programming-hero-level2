//function
//arrow function, normal function

function add( num1: number, num2: number ):number {
    return num1 + num2;
}

// add(2, "2"); // 22//will give error

const addArrow = ( num1: number, num2: number ): number => num1 + num2;

// addArrow(2, "2"); // 22//will give error

const poorUser ={
    name: "John",
    age: 30,
    salary: 50000,
    addBalance(value: number): number {
        const totalBalance = this.salary + value;
        return totalBalance;
    }
}
poorUser.addBalance(10000); // 60000
const arr:number[] = [1, 2, 3, 4, 5];
const squreArray = arr.map((num: number): number => num * num); // [1, 4, 9, 16, 25]