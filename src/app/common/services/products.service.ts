import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  selectedProduct = new BehaviorSubject<any>(null);
  preselect = new Subject<any>();
  constructor(private http: HttpClient) { }

  public getProducts(): Observable<any> {
    return this.http.get('./assets/products.json');
  }



}
