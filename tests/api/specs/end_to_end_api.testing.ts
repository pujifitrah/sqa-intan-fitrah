import { faker } from "@faker-js/faker";
import { LoginSignupApiUsecase } from "../use_cases/login_signup.usecase.ts";

const loginSignupApiUsecase = new LoginSignupApiUsecase();
const randomEmail = faker.internet.email();
const password = faker.internet.password();

describe("My End to End API", () => {
  it("should signup with valid credentials", async () => {
    await loginSignupApiUsecase.signup({
      email: randomEmail,
      password: password,
    });
  });

  it("should login with valid credentials", async () => {
    await loginSignupApiUsecase.login({
      email: randomEmail,
      password: password,
    });
  });

  it("should get product list", async () => {
    await loginSignupApiUsecase.getProductList();
  });
});
