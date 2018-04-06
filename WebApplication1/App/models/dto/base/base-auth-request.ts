export class BaseAuthRequest {
    token: string;

    constructor(token: string) {
        this.token = token;
    }
}