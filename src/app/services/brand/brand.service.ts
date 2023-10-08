import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BrandService {
  private baseApiUrl = environment.baseApiUrl;
  private url = `${this.baseApiUrl}/brands`;

  constructor(private http: HttpClient) {}

  findAll(): Observable<any> {
    return this.http.get(this.url);
  }
}
