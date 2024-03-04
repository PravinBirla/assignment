export class Error {
    status: number = 0
    statusText: string = ""
    message = ""
    timestamp = new Date()

    constructor(status: number, statusText: string, message: string) {
        this.message = message;
        this.status = status;
        this.statusText = statusText;
    }
}
