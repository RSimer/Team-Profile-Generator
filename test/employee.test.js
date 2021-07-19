const Employee = require('../lib/employee');

describe('lib test', () =>{

    it('should create an employee object',()=>{

        const employee = new Employee('Rob S','75','robbiesk5@gmail.com');

        expect(employee.name).toBe('Rob S');
        expect(employee.id).toBe('75');
        expect(employee.email).toBe('robbiesk5@gmail.com');
    });

    it('should set name via constructor arguments', ()=>{
        const name = "Emily";
        const employee = new Employee(name);
        expect(employee.name).toBe(name);
    });
    it('should set id via constructor arguments', ()=>{
        const testId = "97";
        const employee = new Employee('Emily',testId);
        expect(employee.id).toBe(testId);
    });
    it('should set email via constructor arguments', ()=>{
        const testEmail = "robbiesk5@gmail.com";
        const employee = new Employee('Emily',54,testEmail);
        expect(employee.email).toBe(testEmail);
    });
    it('should get the name from getName()', () =>{
        const testing = 'Rob';
        const placeIn = new Employee(testing);
        expect(placeIn.getName().toBe(testing));
    });
    it('should get the id from getId()', () =>{
        const testing = 93;
        const placeIn = new Employee('Zehak',testing);
        expect(placeIn.getId().toBe(testing));
    });
    it('should get the email from getEmail()', () =>{
        const testing = 'robbiesk5@gmail.com';
        const placeIn = new Employee('Zehak',87,testing);
        expect(placeIn.getName().toBe(testing));
    });
});