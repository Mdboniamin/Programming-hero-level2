type User = {
    name: string;
    age: number;
};

type Role = {
    role: "admin" | "user";
};
type UserRole = User & Role;

//interface: object, array, function
interface IUser {
    name: string;
    age: number;
}
interface IUserRole extends IUser {
    roles: 'admin' | 'user';
};
const InUser: IUser = {
    name: 'boni',
    age: 56,
};

const user1: User = {
    name: "Mr X",
    age: 100,
};

const user2: User = {
    name: "mr y",
    age: 200,
};

const usermain: UserRole = {
    name: 'boni',
    age: 202,
    role: 'admin',
};

type IsAdmin = boolean;

const isAdmin: IsAdmin = false;
//array interface
interface IFriends {
    [index: number]: string;
}
const friends: IFriends = ['a', 'b', 'c'];
//function alias
type Add = (num1: number, num2: number) => number;
const add: Add = (num1, num2) => num1 + num2;
//function interface
interface IAdd {
    (num1: number, num2: number): number;
};
const addI: IAdd = (num1, num2) => num1 + num2;
