import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Brand } from 'src/app/data/entities/Brand';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class BrandService {
  private baseApiUrl = environment.baseApiUrl;
  private url = `${this.baseApiUrl}/brands`;

  constructor(private http: HttpClient) {}

  findAll(): Observable<Brand[]> {
    return this.http.get<Brand[]>(this.url);
  }

  create(data: Brand): Observable<Brand> {
    return this.http.post<Brand>(this.url, data);
  }
}
