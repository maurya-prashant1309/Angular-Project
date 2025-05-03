import { Logger } from "../../src/common/Logger";

export const andVerify = () => ({
    loggerIsCalledWith: (message:string) => expect(Logger.log).toHaveBeenCalledWith(message),
    loggerIsCalledTimes: (number: number) => expect(Logger.log).toHaveBeenCalledTimes(number),
});

export const thenExpect = (actualResponse: any) => ({
    toHaveBeenCalledWith: (expectedInput: any) => expect(actualResponse).toHaveBeenCalledWith(expectedInput)
});