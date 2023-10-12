import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Model } from 'src/app/data/entities/Model';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class ModelService {
  private baseApiUrl = environment.baseApiUrl;
  private url = `${this.baseApiUrl}/models`;

  constructor(private http: HttpClient) {}

  findAll(): Observable<Model[]> {
    return this.http.get<Model[]>(this.url);
  }
}
