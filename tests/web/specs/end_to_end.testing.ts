import { faker } from "@faker-js/faker";
import { LoginSignupUsecase } from "../usecases/login_signup.usecase.ts";
import { SignupLoginController } from "../controllers/signup_login.controller.ts";

const loginSignupUsecase = new LoginSignupUsecase();
const loginSignupController = new SignupLoginController();
const randomName = faker.person.fullName();
const randomEmail = faker.internet.email();
const password = faker.internet.password();

describe("My End to end Application", () => {
  it("should signup with valid credentials", async () => {
    await loginSignupUsecase.signup({ name: randomName, email: randomEmail });
    await browser.pause(3000);
    await loginSignupUsecase.createAccount({ password: password });
  });

  it("should log in with invalid credentials", async () => {
    await loginSignupController.clickLogout();
    await browser.pause(3000);
    await loginSignupController.setLoginEmail("lalala@y.com");
    await loginSignupController.setLoginPassword(
      faker.internet.password({ length: 3 })
    );
    await loginSignupController.clickLogin();
    await browser.pause(3000);
    await loginSignupController.errorInvalidCredentialExist();
  });

  it("should log in with valid credentials", async () => {
    await loginSignupController.setLoginEmail(randomEmail);
    await loginSignupController.setLoginPassword(password);
    await loginSignupController.clickLogin();
    await browser.pause(3000);
    await loginSignupController.logoutExist();
  });
});
