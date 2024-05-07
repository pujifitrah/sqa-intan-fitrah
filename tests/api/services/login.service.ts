import request from "supertest";
import { Response } from "supertest";
import { WebApiEndpoints } from "../../../enums/web_api_endpoint.type.ts";

export class LoginService {
  async login(email: string, password: string): Promise<Response> {
    const response = await request(WebApiEndpoints.webApi)
      .post("/api/verifyLogin")
      .set("Content-Type", "application/x-www-form-urlencoded")
      .send({
        email: email,
        password: password,
      });

    return response;
  }
}
