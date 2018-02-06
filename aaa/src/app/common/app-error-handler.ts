import { ErrorHandler } from "@angular/core";


export class AppErrorHandler extends ErrorHandler {
    handleError(error) {
        alert('An Unexepted error occured. yigal')
        console.log(error);
    }
}
