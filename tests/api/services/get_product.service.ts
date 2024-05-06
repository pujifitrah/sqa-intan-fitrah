import request from 'supertest';
import { Response } from 'supertest';
import { WebApiEndpoints } from '../../../enums/web_api_endpoint.type.ts';

export class GetProductListService {
  async getProductList(): Promise<Response> {
    const response = await request(WebApiEndpoints.webApi)
      .get('/api/productsList')
      .set('Content-Type', 'application/x-www-form-urlencoded')
      .send();

    return response;
  }
}