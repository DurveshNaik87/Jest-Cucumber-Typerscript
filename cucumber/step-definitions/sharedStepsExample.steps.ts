import { loadFeature, defineFeature } from "jest-cucumber";
import { thisIsASharedStep, anotherSharedStepWithParameter } from "./shared_steps";

const feature = loadFeature("./cucumber/features/sharedStepsExample.feature");

defineFeature(feature, (test) => {

    test("To import a step from another step file", ({ given, when, then }) => {

        thisIsASharedStep(given);

        anotherSharedStepWithParameter(when);

        when(/Additional step/, () => {
            console.log("Executed from SharedStepsExmaple.steps.ts");
        })
    })

})