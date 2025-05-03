const log = (message: string) => {
    console.log(message);
}

const logError = (message: string, stackTrace?: any) => {
    const errorMessage = getErrorMessage(stackTrace, message);
    console.log(errorMessage);
}

const getErrorMessage = (stackTrace: any, message: string) => {
    return stackTrace 
        ? `Error occured with message ${message} and stacktrace: ${stackTrace}` 
        : `Error occured with message ${message}`;
}

export const Logger = {log, logError};