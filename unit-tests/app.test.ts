import { app, math } from "../src";

describe("demo typescript & jest suite", () => {

    test("to check if addition works", () => {
        const result = app.doAdd(3, 4);
        expect(result).toEqual(7);
    })

    test("to check if subtraction works", () => {
        const result = app.doSubtract(4, 4);
        expect(result).toEqual(0);
    })

    test("to check if multiply works", () => {
        const result = app.doMultiply(3, 3);
        expect(result).toEqual(9);
    })

    test("to check divide works", () => {
        const result = app.doDivide(5, 10);
        expect(result).toEqual(2);

    })

    test("to check if addition works - mocking example", () => {
        let originalAdd = math.add;
        math.add = jest.fn().mockImplementationOnce(() => 5);
        const result = app.doAdd(1, 2);

        expect.assertions(5);

        expect(result).toEqual(5);
        expect(math.add).toHaveBeenCalledWith(1, 2);
        expect(math.add).toHaveBeenCalledTimes(1);
        expect(math.add).toHaveReturnedWith(5);

        console.log(`result : ${result}`);

        math.add = originalAdd;
        const result1 = app.doAdd(1, 2);
        expect(result1).toEqual(3);

        console.log(`result 1 : ${result1}`);
    })
})