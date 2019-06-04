import { loadFeature, defineFeature } from "jest-cucumber";
import { anotherSharedStepWithParameter } from "./shared_steps";

const feature = loadFeature("./cucumber/features/sharedStepsExample.feature");

defineFeature(feature, (test) => {

    test("To import a step from another step file", ({ given, when, then }) => {

        anotherSharedStepWithParameter(when);

        when(/Additional step/, () => {
            console.log("Executed from SharedStepsExmaple.steps.ts");
        })
    })

})