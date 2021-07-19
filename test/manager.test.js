const Employee = require("../lib/employee");
const Manager = require("../lib/manager");


describe('does the manager function actually work God I am so tired',() =>{

    it('should get the office number from a constructor argument if I do this right',() =>{

        const officeNumber = 78;
        const testManager = new Manager('Rob',9,'someone@gmail.com',officeNumber);
        expect(testManager.officeNumber).toBe(officeNumber);

    });
    it('should get manager throug getRole()', () =>{

        const role = "manager";
        const testManager = new Manager('Rob',9,'someone@gmail.com',278);
        expect(testManager.getRole()).toBe(role);
    });
    it('should get the office number from a getOfficeNumber if I do this right',() =>{

        const officeNumber = 78;
        const testManager = new Manager('Rob',9,'someone@gmail.com',officeNumber);
        expect(testManager.GetofficeNumber()).toBe(officeNumber);

    });

})