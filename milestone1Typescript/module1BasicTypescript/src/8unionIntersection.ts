type UserRole = 'admin' | 'user'

const getDashboard = (role: UserRole) => {
    if (role === 'admin') {
        return "Admin Dashboard"
    }
    else if (role === 'user') {
        return "User Dashboard"
    }
    else {
        return "guest Dashboard"
    }
}
getDashboard('admin') // Admin Dashboard

//intersection type
type Employee = {
    id: number;
    name: string;
    phone: string;
};
type Manager = {
    designation: string;
    teamSize: number;
};
type EmployeeManager = Employee & Manager;

const employeeManager1: EmployeeManager = {
    id: 1,
    name: "John Doe",
    phone: "123-456-7890",
    designation: "Project Manager",
    teamSize: 5
}