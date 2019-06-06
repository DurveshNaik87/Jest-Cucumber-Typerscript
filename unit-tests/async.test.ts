import request from "request-promise";
import { RequestError } from "request-promise/errors";

describe("Testing Async Code", () => {

    let options = {
        uri: "https://jsonplaceholder.typicode.com/todos",
        method: "GET",
        json: true
    }

    let invalidOptions = {
        uri: "https://jsonplaceholder.typicod.com/todos",
        method: "GET",
        json: true
    }

    let errorMessage = "RequestError: Error: getaddrinfo ENOTFOUND jsonplaceholder.typicod.com jsonplaceholder.typicod.com:443";

    test("async test 1", () => {
        expect.assertions(1);
        return request(options)
            .then((response) => expect(response).not.toBe(undefined));
    })

    test("async test 2", async () => {
        expect.assertions(1);
        let response = await request(options);
        console.log(JSON.stringify(response, null, 4));
        expect(response).not.toBe(undefined);
    })

    test("async test 3", (done) => {
        expect.assertions(1);
        request(options)
            .then(response => {
                expect(response).not.toBe(undefined);
                done();
            })
    })

    //resolves - unwraps the value of a fulfilled promise together with any other matcher. If the promise is rejected, the assertion will fail
    test("async test 4", () => {
        expect.assertions(1);
        return expect(request(options)).resolves.not.toEqual(undefined);
    })

    test("async test 5", () => {
        expect.assertions(1);
        return request(invalidOptions).catch(e => {
            expect(e.toString())
                .toEqual(errorMessage)
        })
    })

    test("async test 6", async () => {
        expect.assertions(1);
        try {
            await request(invalidOptions);
        }
        catch (e) {
            expect(e.toString()).toEqual(errorMessage);
        }
    })

    test("async test 7", async () => {
        expect.assertions(1);
        try {
            await request(options);
        } catch (e) {
            expect(e.toString()).toEqual(errorMessage);
        }
    })

    test("async test 8", () => {
        expect.assertions(1);
        return expect(request(invalidOptions)).rejects.not.toBe(undefined);
    })

    test("async test 9",async ()=>{
        expect.assertions(1);
        await expect(request(invalidOptions)).rejects.not.toBe(undefined);
    })
})