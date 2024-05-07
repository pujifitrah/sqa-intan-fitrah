import { $ } from "@wdio/globals";

export class SignupLoginPage {
  static get signupLoginMenu() {
    return $("//*[(text() = ' Signup / Login' or . = ' Signup / Login')]");
  }

  static get loginEmailTextField() {
    return $("//*[@data-qa = 'login-email']");
  }

  static get loginPasswordTextField() {
    return $("//*[@data-qa='login-password']");
  }

  static get loginButton() {
    return $("//*[@data-qa='login-button']");
  }

  static get signupNameTextField() {
    return $("//*[@data-qa='signup-name']");
  }

  static get signupEmailTextField() {
    return $("//*[@data-qa='signup-email']");
  }

  static get signupButton() {
    return $("//*[@data-qa='signup-button']");
  }

  static get logoutButton() {
    return $("//*[(text() = ' Logout' or . = ' Logout')]");
  }

  static get errorInvalidCredentialText() {
    return $(
      "//*[(text() = 'Your email or password is incorrect!' or . = 'Your email or password is incorrect!')]"
    );
  }
}
