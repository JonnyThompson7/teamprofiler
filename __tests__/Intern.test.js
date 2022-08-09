const Intern = require('../lib/Intern');

test('gets the school of the intern', () => {
    const intern = new Intern('John');

    expect(intern.getSchool()).toEqual(expect.stringContaining(intern.school));
});

test("gets the role of the employee", () => {
    const employee = new Intern('John');

    expect(employee.getRole()).toBe('Intern');
});

