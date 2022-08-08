const Employee = require('../lib/Employee');

test('creates an employee object', () => {
    const employee = new Employee('John', 'johndoe@asdf.com', '0');

    expect(employee.name).toBe('John');
    expect(employee.email).toBe('johndoe@asdf.com');
    expect(employee.id).toBe('0'); 
});

test('asks for employees name', () => {
    const employee = new Employee('John');

    expect(employee.getName()).toEqual(expect.stringContaining(employee.name));
});