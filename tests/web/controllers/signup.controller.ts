import { GestureDirection } from "../../../enums/gesture_direction.type.ts";
import { GestureHelper } from "../../../utilities/gesture.helper.ts";
import { SignupPage } from "../pageobjects/signup.page.ts";

const gestureHelper = new GestureHelper()

export class SignupController {
    async selectMrs() {
        await SignupPage.mrsRadio.click()
    }

    async setPassword(password: string) {
        await SignupPage.passwordTextField.isDisplayed()
        await SignupPage.passwordTextField.setValue(password)
    }

    async clickDays() {
        await SignupPage.daysButton.isDisplayed()
        await SignupPage.daysButton.click()
    }

    async selectDays(days: string) {
        await SignupPage.daysOption(days).click()
    }

    async clickMonth() {
        await SignupPage.monthButton.isDisplayed()
        await SignupPage.monthButton.click()
    }

    async selectMonth(month: string) {
        await SignupPage.monthOption(month).click()
    }

    async clickYear() {
        await SignupPage.yearsButton.isDisplayed()
        await SignupPage.yearsButton.click()
    }

    async selectYear(year: string) {
        await SignupPage.yearsOption(year).click()
    }

    async selectNewsLetter() {
        await SignupPage.newsLetterCheckbox.click()
    }

    async selectOptin() {
        await SignupPage.optinCheckbox.click()
    }

    async scrollElementToAddress() {
        await gestureHelper.scrollAndFindElement(SignupPage.addressOneTextFiled, GestureDirection.down)
    }

    async setFirstName(firstName : string) {
        await SignupPage.firstNameTextFiled.isDisplayed()
        await SignupPage.firstNameTextFiled.setValue(firstName)
    }

    async setLastName(lastName : string) {
        await SignupPage.lastNameTextFiled.isDisplayed()
        await SignupPage.lastNameTextFiled.setValue(lastName)
    }

    async setCompany(company : string) {
        await SignupPage.companyTextFiled.isDisplayed()
        await SignupPage.companyTextFiled.setValue(company)
    }

    async setAddressOne(addressOne : string) {
        await SignupPage.addressOneTextFiled.isDisplayed()
        await SignupPage.addressOneTextFiled.setValue(addressOne)
    }

    async setAddressTwo(addressTwo : string) {
        await SignupPage.addressTwoTextFiled.isDisplayed()
        await SignupPage.addressTwoTextFiled.setValue(addressTwo)
    }

    async scrollElementToCreateAccount() {
        await gestureHelper.scrollAndFindElement(SignupPage.createAccountButton, GestureDirection.down)
    }

    async clickCountry() {
        await SignupPage.countryButton.click()
    }

    async selectCountry(country: string) {
        await SignupPage.countryOption(country).click()
    }

    async setState(state : string) {
        await SignupPage.stateTextField.isDisplayed()
        await SignupPage.stateTextField.setValue(state)
    }

    async setCity(city : string) {
        await SignupPage.cityTextField.isDisplayed()
        await SignupPage.cityTextField.setValue(city)
    }

    async setZipcode(zipcode : string) {
        await SignupPage.zipcodeTextField.isDisplayed()
        await SignupPage.zipcodeTextField.setValue(zipcode)
    }

    async setMobileNumber(mobileNumber : string) {
        await SignupPage.mobileNumberTextField.isDisplayed()
        await SignupPage.mobileNumberTextField.setValue(mobileNumber)
    }

    async clickCreateAccount() {
        await SignupPage.createAccountButton.click()
    }

    async clikContinue() {
        await SignupPage.accountCreatedText.isDisplayed()
        await SignupPage.continueButton.click()
    }
}