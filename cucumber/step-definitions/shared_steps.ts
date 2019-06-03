export const thisIsASharedStep = (given: (regex: RegExp, params: () => void) => void) => {
    given(/This is a Shared Step/, () => {
        console.log("This is an example of a shared step.....");
    });
}

export const anotherSharedStepWithParameter = (when: (regex: RegExp, params: (p: string) => void) => void) => {
    when(/^Another shared step with parameter '(.*)'$/, (text: string) => {
        console.log(`Shared Step Example : Text - ${text}`);
    })
}
