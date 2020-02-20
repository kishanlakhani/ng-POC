import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  firebaseUrl:string = 'https://poc-bacancy-e0c9d.firebaseio.com';

  constructor(
    private http:HttpClient
  ) { }

  getProductData(){
    return this.http.get(this.firebaseUrl + '/products.json');
  }
}
