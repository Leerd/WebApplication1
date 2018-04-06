export class BaseAuthResponse {
    private _isSuccessVerify: boolean;

    get isSuccessVerify(): boolean {
        return this._isSuccessVerify;
    }

    set isSuccessVerify(isSuccess: boolean) {
        debugger;
        this._isSuccessVerify = isSuccess;
    }
}