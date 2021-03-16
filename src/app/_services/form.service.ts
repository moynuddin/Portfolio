import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class FormService {
  constructor(private http: HttpClient) {}

  postForm(payload: any) {
    const formData = {
      name: payload.name,
      email: payload.email,
      message: payload.message,
    };
    return this.http.post('https://formspree.io/f/xzbknowl', formData);
  }
}
