import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiUrlService {

  url: string;

  constructor() {
    this.url = 'http://localhost:3000/server/';
  }
}
