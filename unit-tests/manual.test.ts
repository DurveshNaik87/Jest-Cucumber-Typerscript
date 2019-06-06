import * as db from "../src/db";
import * as customer from "../src/app/customer";

jest.mock("../src/db");
jest.mock("../src/service/customerService");

// customerService.save = jest.fn().mockImplementation(() => {
//     console.log("mocked method 2 in test file...");
// })

describe("to test manual mocks", () => {

    test("test db manual mock", () => {
        console.log(db.connect("yudhaayudi", "asdf1234", "saltapp", "localhost"));
    })

    test("test customer db manual mock", () => {
        let name: string = "yudhaamanyu";
        let age: number = 18;
        let gender: string = "Male";

        let result = customer.createCustomer(name, age, gender);

        expect(result).toEqual(true);
    })

})