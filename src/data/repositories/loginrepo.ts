import { LoginResponse } from "../../domain/models/LoginReponse";

export interface LoginRepo {
    login(email: string, password: string): Promise<LoginResponse>
}