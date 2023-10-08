import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Brand } from 'src/app/data/entities/Brand';

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
}
