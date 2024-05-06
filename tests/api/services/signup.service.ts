import request from 'supertest';
import { Response } from 'supertest';
import { WebApiEndpoints } from '../../../enums/web_api_endpoint.type.ts';
import { faker } from '@faker-js/faker';

export class SignupService {
  async signup(email: string, password: string): Promise<Response> {
    const response = await request(WebApiEndpoints.webApi)
      .post('/api/createAccount')
      .set('Content-Type', 'application/x-www-form-urlencoded')
      .send(`name=${faker.person.fullName()}&email=${email}&password=${password}&days=1&months=10&years=1990&firstname=${faker.person.firstName()}&lastname=${faker.person.lastName()}&company=${faker.company.name()}&address1=${faker.location.streetAddress()}&address2=${faker.location.secondaryAddress()}&country=Singapore&state=${faker.location.state()}&city=${faker.location.city()}&zipcode=${faker.location.zipCode()}&mobile_number=${faker.phone.number()}&form_type=create_account`);

    return response;
  }
}