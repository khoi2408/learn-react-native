import { LoginResponse } from "../domain/models/LoginReponse";
import { LoginUseCase } from "../domain/usecases/loginusecase";

class MockLoginRepo {
    async login(email: string, password: string): Promise<LoginResponse> {
        return {
            username: 'admin',
            token: 'duam432osd2Mk101n'
        }
    }
}
test('testlogin', () => {
    let loginUsecase = new LoginUseCase(new MockLoginRepo());
})