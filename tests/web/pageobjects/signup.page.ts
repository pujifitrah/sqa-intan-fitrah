import { $ } from "@wdio/globals";

export class SignupPage {
  static get mrsRadio() {
    return $("//*[@id = 'id_gender2']");
  }

  static get passwordTextField() {
    return $("//*[@id = 'password']");
  }

  static get daysButton() {
    return $("//*[@id = 'days']");
  }

  static daysOption(days: string) {
    return $(`//*[@value = '${days}']`);
  }

  static get monthButton() {
    return $("//*[@id = 'months']");
  }

  static monthOption(month: string) {
    return $(`//*[@value = '${month}']`);
  }

  static get yearsButton() {
    return $("//*[@id = 'years']");
  }

  static yearsOption(years: string) {
    return $(`//*[@value = '${years}']`);
  }

  static get newsLetterCheckbox() {
    return $("//*[@id = 'newsletter']");
  }

  static get optinCheckbox() {
    return $("//*[@id = 'optin']");
  }

  static get firstNameTextFiled() {
    return $("//*[@id = 'first_name']");
  }

  static get lastNameTextFiled() {
    return $("//*[@id = 'last_name']");
  }

  static get companyTextFiled() {
    return $("//*[@id = 'company']");
  }

  static get addressOneTextFiled() {
    return $("//*[@id = 'address1']");
  }

  static get addressTwoTextFiled() {
    return $("//*[@id = 'address2']");
  }

  static get countryButton() {
    return $("//*[@id = 'country']");
  }

  static countryOption(country: string) {
    return $(`//*[@value = '${country}']`);
  }

  static get stateTextField() {
    return $("//*[@id = 'state']");
  }

  static get cityTextField() {
    return $("//*[@id = 'city']");
  }

  static get zipcodeTextField() {
    return $("//*[@id = 'zipcode']");
  }

  static get mobileNumberTextField() {
    return $("//*[@id = 'mobile_number']");
  }

  static get createAccountButton() {
    return $("//*[@data-qa = 'create-account']");
  }

  static get accountCreatedText() {
    return $("//*[@data-qa = 'account-created']");
  }

  static get continueButton() {
    return $("//*[@data-qa = 'continue-button']");
  }
}
