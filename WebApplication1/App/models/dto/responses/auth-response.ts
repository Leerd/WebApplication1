import { BaseResponse } from '../base/base-response';

export class AuthResponse extends BaseResponse {
    isSucces: boolean;
    token: string;
}