import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BaseService {
  baseApiUrl:string = "https://localhost:7218/"
  constructor() { }
}
