import { LoginRepo } from "../../data/repositories/loginrepo"

export class LoginUseCase {
    private loginRepo: LoginRepo
    constructor(loginRepo: LoginRepo) {
        this.loginRepo = loginRepo
    }

    login() {
        
    }
}