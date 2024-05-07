import { SignupLoginPage } from "../pageobjects/signup_login.page.ts";

export class SignupLoginController {
  async signupLoginClick() {
    await SignupLoginPage.signupLoginMenu.isDisplayed();
    await SignupLoginPage.signupLoginMenu.click();
  }

  async setSignupName(name: string) {
    await SignupLoginPage.signupNameTextField.isDisplayed();
    await SignupLoginPage.signupNameTextField.setValue(name);
  }

  async setSignupEmail(signupEmail: string) {
    await SignupLoginPage.signupEmailTextField.isDisplayed();
    await SignupLoginPage.signupEmailTextField.setValue(signupEmail);
  }

  async clickSignup() {
    await SignupLoginPage.signupButton.click();
  }

  async clickLogout() {
    await SignupLoginPage.logoutButton.isDisplayed();
    await SignupLoginPage.logoutButton.click();
  }

  async setLoginEmail(loginEmail: string) {
    await SignupLoginPage.loginEmailTextField.isDisplayed();
    await SignupLoginPage.loginEmailTextField.setValue(loginEmail);
  }

  async setLoginPassword(password: string) {
    await SignupLoginPage.loginPasswordTextField.isDisplayed();
    await SignupLoginPage.loginPasswordTextField.setValue(password);
  }

  async clickLogin() {
    await SignupLoginPage.loginButton.click();
  }

  async errorInvalidCredentialExist() {
    await SignupLoginPage.errorInvalidCredentialText.isDisplayed();
  }

  async logoutExist() {
    await SignupLoginPage.logoutButton.isDisplayed();
  }
}
