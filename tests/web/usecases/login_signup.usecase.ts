import { faker } from "@faker-js/faker";
import { WebUrl } from "../../../enums/web_url.type.ts";
import { SignupController } from "../controllers/signup.controller.ts";
import { SignupLoginController } from "../controllers/signup_login.controller.ts";

const signupLoginController = new SignupLoginController()
const signupController = new SignupController()

export class LoginSignupUsecase {
    async signup(param: {name: string, email: string}) {
        await browser.url(WebUrl.url)
        await browser.maximizeWindow()
        await browser.pause(2000)
        await signupLoginController.signupLoginClick()
        await signupLoginController.setSignupName(param.name)
        await signupLoginController.setSignupEmail(param.email)
        await signupLoginController.clickSignup()
    }

    async chooseDays(param: {days: string}) {
        await signupController.clickDays()
        await signupController.selectDays(param.days)
    }

    async chooseMonth(param: {month: string}) {
        await signupController.clickMonth()
        await signupController.selectMonth(param.month)
    }

    async chooseYear(param: {year: string}) {
        await signupController.clickYear()
        await signupController.selectYear(param.year)
    }

    async chooseCountry(param: {country: string}) {
        await signupController.clickCountry()
        await signupController.selectCountry(param.country)
    }

    async createAccount(param: {password: string}) {
        await signupController.selectMrs()
        await signupController.setPassword(param.password)
        await this.chooseDays({days: "1"})
        await this.chooseMonth({month: "10"})
        await this.chooseYear({year: "1990"})
        await signupController.selectNewsLetter()
        await signupController.scrollElementToAddress()
        await signupController.selectOptin()
        await signupController.setFirstName(faker.person.firstName())
        await signupController.setLastName(faker.person.lastName())
        await signupController.setAddressOne(faker.location.streetAddress())
        await signupController.setAddressTwo(faker.location.secondaryAddress())
        await signupController.setCompany(faker.company.name())
        await signupController.scrollElementToCreateAccount()
        await this.chooseCountry({country: "Singapore"})
        await signupController.setState(faker.location.state())
        await signupController.setCity(faker.location.city())
        await signupController.setZipcode(faker.location.zipCode())
        await signupController.setMobileNumber(faker.phone.number())
        await signupController.clickCreateAccount()
        await signupController.clikContinue()
    }

}