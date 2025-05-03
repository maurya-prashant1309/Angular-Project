import { Logger } from "../../src/common/Logger";
import { thenExpect } from "../test-utility/ExecutionStepVerifyer";

describe("Logger utility", () => {
    console.log = jest.fn();

    afterEach(() => {
        jest.clearAllMocks();
    });

    test("Should log info with message", () => {
        const message = "Simple log message";
        Logger.log(message);
        thenExpect(console.log).toHaveBeenCalledWith("Simple log message");
    });

    test("should log error message without stacktrace", () => {
        const errorMessage = "Something went wrong";
        Logger.logError(errorMessage);
        thenExpect(console.log).toHaveBeenCalledWith("Error occured with message Something went wrong");
    });

    test("logError() should log error message with stacktrace", () => {
        const errorMessage = "Failed processing";
        const stackTrace = "ReferenceError: foo is not defined";

        Logger.logError(errorMessage, stackTrace);
        thenExpect(console.log).toHaveBeenCalledWith("Error occured with message Failed processing and stacktrace: ReferenceError: foo is not defined")
    });
});