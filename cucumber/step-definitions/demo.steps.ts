import { loadFeature, defineFeature } from "jest-cucumber";
import { anotherSharedStepWithParameter } from "./shared_steps";

const feature = loadFeature("./cucumber/features/demo.feature");

let add = (a: number, b: number): number => a + b;

//To share steps within the same feature file
const thisIsASharedStep = (given: (regex: RegExp, params: () => void) => void) => {
    given(/This is a Shared Step/, () => {
        console.log("This is an example of a shared step.....");
    });
}

defineFeature(feature, (test) => {

    test("Demo Scenario", ({ given, when, then }) => {


        given(/^To check if given step is called and print something$/, () => {
            console.log("given step is executed...");
        });

        when(/^To check if When step is called and print something$/, () => {
            console.log("when step is executed...");
        });

        then(/^To check if Then step is called and print something$/, () => {
            console.log("then step is executed...");
        });

        anotherSharedStepWithParameter(when);

    });

    test('To check if steps can be parameterized', ({ given, and, then }) => {

        thisIsASharedStep(given);

        given(/^I add the following two nos (.*) and (.*)$/, (n1, n2) => {
            let result = add(parseInt(n1), parseInt(n1));
            console.log(`Addition of ${n1} and ${n2} : ${result}`);
            expect(typeof result).toEqual('number');
            add = jest.fn(() => 99999999);
            console.log(`Addition of ${n1} and ${n2} : ${add(n1, n1)}`);
        });

        and(/^I multiply the following three nos (\d+), (\d+) and (\d+)$/, (n1, n2, n3) => {
            console.log(`Multiplication of ${n1} and ${n2} : ${n1 * n2}`)
        });

        then(/^I take in the string '(.*)' and print it to the console$/, (text) => {
            console.log(text);
        });

    });

    test('To check if the examples are working', ({ given, when, then }) => {

        let addResult: number;
        let n1: number;
        let n2: number;

        given(/^I take two values (\d+) and (\d+) from examples$/, (a, b) => {
            n1 = parseInt(a);
            n2 = parseInt(b);
        });

        when(/^I add those two nos$/, () => {
            addResult = n1 + n2
        });

        then(/^I should get the result as (.*)$/, (result) => {
            expect(addResult).toEqual(parseInt(result));
            console.log(`The addition of ${n1} and ${n2} : ${addResult}`);
        });

        anotherSharedStepWithParameter(when);
    });

    test('To check if gherkin tables are working', ({ given, when, then }) => {

        given('I accept a few values from the user', (table: any[]) => {
            table.forEach((row: any) => {
                console.log(`Item : ${row.Item} - Category : ${row.Category}`);
            })
        });

        when('I add another set of data', (table: any[]) => {
            table.forEach((row: any) => {
                console.log(`List 1 : ${row.List1}\nList 2 : ${row.List2}\nList 3 : ${row.List3}`);
            });
        });

        thisIsASharedStep(given);

        then('I add data to the gherkin tables from examples', (table: any[]) => {
            table.forEach((row: any) => {
                console.log(`Holiday : ${row.Holiday} - Date : ${row.Date}`);
            });
        });

    });

    test('To check if steps can be shared among other scenarios', ({ given, when, then }) => {

        thisIsASharedStep(given);

        anotherSharedStepWithParameter(when);
    })
});