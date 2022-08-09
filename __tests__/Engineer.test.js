const Engineer = require('../lib/Engineer');

test('creates a new engineer object, and gets Github', () => {
    const engineer = new Engineer('Carmine');

    expect(engineer.getGithub()).toEqual(expect.stringContaining(engineer.github));
});

test("gets the role of the employee", () => {
    const employee = new Engineer('Carmine');

    expect(employee.getRole()).toBe('Engineer');
});