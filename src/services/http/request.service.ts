import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';

@Injectable()
export class RequestService {
  constructor(private http: HttpClient) {}

  public async get(url: string): Promise<HttpResponse<Object>> {
    try {
      const response = this.http.get(url, { observe: 'response' }).toPromise();
      return response;
    } catch (error) {
      throw error;
    }
  }

  public async post(url: string, data: any): Promise<HttpResponse<Object>> {
    try {
      const response = this.http
        .post(url, data, { observe: 'response' })
        .toPromise();
      return response;
    } catch (error) {
      throw error;
    }
  }
}
