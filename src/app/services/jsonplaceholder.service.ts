import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class JsonplaceholderService {

  constructor(private http: HttpClient) { }

  /**
   * Fungsi yang digunakan untuk mengambil data dari server
   *
   * @returns {Observable<Object>} tipe data return
   */
  getData() {
    return this.http .get('https://jsonplaceholder.typicode.com/posts');
  }

  /**
   * Fungsi yang digunakan diuntuk save data ke server
   *
   * @param v data yang akan di save
   * @returns {Observable<Object>}
   */
  postData(v) {
    return this.http.post('https://jsonplaceholder.typicode.com/posts', v);
  }




}
