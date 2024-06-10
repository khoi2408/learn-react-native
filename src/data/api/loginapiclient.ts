import { LoginResponse } from "../../domain/models/LoginReponse";

export class LoginApiClient {
    async login(): Promise<LoginResponse> {
        return {
            username: 'admin',
            token: 'duam432osd2Mk101n'
        }
    }
}