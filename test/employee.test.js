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
        const testValue = "robbiesk5@gmail.com";
        const employee = new Employee('Emily',54,testValue);
        expect(employee.email).toBe(testValue);
    });
});