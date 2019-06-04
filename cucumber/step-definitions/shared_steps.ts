
//To share the steps among multiple feature files
export const anotherSharedStepWithParameter = (when: (regex: RegExp, params: (p: string) => void) => void) => {
    when(/^Another shared step with parameter '(.*)'$/, (text: string) => {
        console.log(`Shared Step Example : Text - ${text}`);
    })
}
