function Address(addressLine1, addressLine2, addressArea, addressPincode, addressCity, addressState){
    this.addressLine1 = addressLine1;
    this.addressLine2 = addressLine2;
    this.addressArea = addressArea;
    this.addressPincode = addressPincode;
    this.addressCity = addressCity;
    this.addressState = addressState;
}

function Employee(firstName, lastName, mobileNumber, email, salary, addressLine1, addressLine2, addressArea, addressPincode, addressCity, addressState){
    this.firstName = firstName;
    this.lastName = lastName;
    this.mobileNumber = mobileNumber;
    this.email = email;
    this.salary = salary;
    this.address = new Address(addressLine1, addressLine2, addressArea, addressPincode, addressCity, addressState);
}

Employee.prototype.getEmployeeDetails = function(){
    console.log("Name: " + this.firstName + ' ' + this.lastName);
    console.log("Mobile Number: " + this.mobileNumber);
    console.log("Email: " + this.email);
    console.log("Salary: " + this.salary);
    console.log("-----Address-----");
    console.log("Address Line 1: " + this.address.addressLine1);
    console.log("Address Line 2: " + this.address.addressLine2);
    console.log("Area: " + this.address.addressCity);
    console.log("Pincode: " + this.address.addressPincode);
    console.log("City: " + this.address.addressCity);
    console.log("State: " + this.address.addressState);
    console.log("----------------------------------------");
}

// Employee 1 
var employee1 = new Employee("Nikunj", "Sonigara", 9823871829, "nikunj@gmail.com", 100200, "111 Main st", '222 Main st', 'Vesu', '395010', 'Surat', 'Gujarat');
employee1.getEmployeeDetails();
// Employee 2
var employee2 = new Employee("John", "Doe", 8892674129, "john@gmail.com", 420200, "333 Main st", '444 Main st', 'Vesu', '395010', 'Surat', 'Gujarat');
employee1.getEmployeeDetails();

employee1.setName = function() {
    this.firstName = "Nik"; // Update firstName of Employee1
    this.address.addressLine1 = "222"; // Update AddressLine1 of Employee1
}
employee1.setName();

// Delete Employee1 firstName
delete employee1.firstName;

// Printing all Details of Employee1
employee1.getEmployeeDetails();