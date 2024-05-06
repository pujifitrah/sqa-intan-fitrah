import { GetProductListService } from "../services/get_product.service.ts";
import { LoginService } from "../services/login.service.ts";
import { SignupService } from "../services/signup.service.ts";

const signupService = new SignupService()
const loginService = new LoginService()
const getProductListService = new GetProductListService()

export class LoginSignupApiUsecase {
    async signup(param: {email: string, password: string}) {
        const response = await signupService.signup(param.email, param.password)
        expect(response.statusCode)
        expect(response.text)
        console.log(response.text)
    }

    async login(param: {email: string, password: string}) {
        const response = await loginService.login(param.email, param.password)
        expect(response.statusCode)
        expect(response.text)
        console.log(response.text)
    }

    async getProductList() {
        const response = await getProductListService.getProductList() 
        expect(response.statusCode)
        expect(response.text)
        console.log(response.text)
    }
}