import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Gato, GatoBreed } from '../interfaces/gatos.interface';

@Injectable({
  providedIn: 'root'
})
export class CatsService {

  private baseUrl: string = 'https://api.thecatapi.com/v1';
  private baseUrlLocal: string = 'http://localhost:3000';
  private apiKey: string = 'live_6QHggxRxUmLebqWSqfSfB30rz5cBsN4LqP9k2vmzxuTUg96LDw3Cr9bQ4mjpJ9m0';

  constructor( private http : HttpClient) { }

  getRandomCat() : Observable<Gato[]> {
    return this.http.get<Gato[]>(`${this.baseUrl}/images/search/?has_breeds=1&limit=1&api_key=${this.apiKey}`)
  }

  getCatList(url: string) : Observable<Gato[]> {
    if(url === '/cats/listado'){
      return this.http.get<Gato[]>(`${this.baseUrl}/images/search/?has_breeds=1&limit=15&api_key=${this.apiKey}`)
    } else {
      return this.http.get<Gato[]>(`${this.baseUrlLocal}/cats`)
    }
  }

  getBreeds() : Observable<GatoBreed[]> {
    return this.http.get<GatoBreed[]>(`${this.baseUrl}/breeds`)
  }

  getCatByBreed( breed: string ) : Observable<Gato[]> {
    return this.http.get<Gato[]>(`${this.baseUrl}/images/search?breed_ids=${breed}&has_breeds=1&api_key=${this.apiKey}`)
  }

  getCatPorID( id: string ) : Observable<Gato> {
    return this.http.get<Gato>(`${this.baseUrlLocal}/cats/${id}`)
  }

  agregarGatito( cat: Gato ) : Observable<Gato> {
    return this.http.post<Gato>(`${this.baseUrlLocal}/cats`, cat);
  }

  actualizarGatito( cat: Gato ) : Observable<Gato> {
    return this.http.put<Gato>(`${this.baseUrlLocal}/cats/${cat.id}`, cat);
  }

  borrarGatito( id: string ) : Observable<any> {
    return this.http.delete<any>(`${this.baseUrlLocal}/cats/${id}`);
  }
}