import Todos from "../src/Todos";
jest.mock("request-promise");
import request from "request-promise";

function forEach(items: number[], callback: (x: number) => number) {
    for (let i = 0; i < items.length; i++) {
        callback(items[i]);
    }
}


const mockCallback = jest.fn((x) => x + 5);

test("mock function examples", () => {
    forEach([2, 5], mockCallback);

    expect(mockCallback.mock.calls.length).toBe(2);
    expect(mockCallback.mock.calls[0][0]).toBe(2);
    expect(mockCallback.mock.calls[1][0]).toBe(5);
    expect(mockCallback.mock.results[0].value).toBe(7);

    console.log(`Mock instances : ${mockCallback.mock.instances.length}`);
    console.log(`Mock Calls : ${mockCallback.mock.calls.length}`);
    console.log(`Mock 1st argument : ${mockCallback.mock.calls[0][0]}`);
    console.log(`Mock 2nd argument : ${mockCallback.mock.calls[1][0]}`);
    console.log(`Mock Result : ${mockCallback.mock.results[0].value}`);

})

test("mock return values", () => {
    const myMock = jest.fn();
    console.log(`myMock : ${myMock}`);

    myMock
        .mockReturnValueOnce(10)
        .mockReturnValueOnce("x")
        .mockReturnValueOnce(true);

    console.log(myMock(), myMock(), myMock(), myMock());
})

test("mock return values - example", () => {
    const filterTestFn = jest.fn();

    filterTestFn
        .mockReturnValueOnce(false)
        .mockReturnValueOnce(true);

    let result = [23, 33].filter(filterTestFn);

    console.log(`Result : ${result}`);
    console.log(`Mock Calls : ${filterTestFn.mock.calls}`);
})

test("call todos api - with mocking", async () => {
    expect.assertions(1);
    const result = {
        "userId": 55,
        "id": 299,
        "title": "milton",
        "completed": true
    };

    //request.mockResolvedValue(result);

    //return Todos.all().then(data => expect(data).toEqual(result));

})

test("call todos api - without mocking", async () => {
    let data = await Todos.all();
    console.log(JSON.stringify(data, null, 4));
})